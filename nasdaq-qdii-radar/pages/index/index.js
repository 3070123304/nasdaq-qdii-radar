const MOCK_FUNDS = [
  {
    id: '1',
    abbr: '大',
    logoBg: '#2563eb',
    name: '大成纳斯达克100ETF联接(QDII)A',
    code: '000834',
    limitText: '10,000元',
    status: 'available',
    updatedAt: '10:30 05-15',
  },
  {
    id: '2',
    abbr: '广',
    logoBg: '#10b981',
    name: '广发纳斯达克100ETF联接(QDII)A',
    code: '270042',
    limitText: '5,000元',
    status: 'limited',
    updatedAt: '10:28 05-15',
  },
  {
    id: '3',
    abbr: '景',
    logoBg: '#f59e0b',
    name: '景顺纳斯达克科技市值加权ETF联接(QDII)A',
    code: '017093',
    limitText: '1,000元',
    status: 'limited',
    updatedAt: '10:25 05-15',
  },
  {
    id: '4',
    abbr: '华',
    logoBg: '#8b5cf6',
    name: '华夏纳斯达克100ETF联接(QDII)A',
    code: '015299',
    limitText: '100元',
    status: 'limited',
    updatedAt: '10:20 05-15',
  },
  {
    id: '5',
    abbr: '国',
    logoBg: '#64748b',
    name: '国泰纳斯达克100指数(QDII)',
    code: '513100',
    limitText: '暂停申购',
    status: 'unavailable',
    updatedAt: '09:55 05-15',
  },
  {
    id: '6',
    abbr: '嘉',
    logoBg: '#ec4899',
    name: '嘉实纳斯达克100ETF联接(QDII)A',
    code: '018044',
    limitText: '5,000元',
    status: 'available',
    updatedAt: '10:30 05-15',
  },
];

/** 全量基金数据（列表筛选基于此；累计可购额度始终对「当日全量」加总） */
let fundSourceList = MOCK_FUNDS;

function filterFunds(list, scope) {
  if (scope === 'available') {
    return list.filter((f) => f.status === 'available');
  }
  if (scope === 'limited') {
    return list.filter((f) => f.status === 'limited');
  }
  return list.slice();
}

function sortFunds(list, sortKey) {
  const next = list.slice();
  if (sortKey === 'limitAsc') {
    next.sort((a, b) => {
      const na = parseLimitNum(a.limitText);
      const nb = parseLimitNum(b.limitText);
      return na - nb;
    });
  }
  return next;
}

function parseLimitNum(text) {
  if (!text || String(text).includes('暂停')) return -1;
  const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

/** 限额文案 → 可购入额度（元），暂停申购等记 0 */
function yuanFromLimitText(text) {
  if (!text || String(text).includes('暂停')) return 0;
  const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

/** 当日所有基金「当前限额」数值加总（元） */
function sumPurchasableYuanAllFunds(funds) {
  return funds.reduce((sum, f) => sum + yuanFromLimitText(f.limitText), 0);
}

function formatThousands(num) {
  const n = Math.round(Number(num)) || 0;
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** 接口「较昨日增减」数值 → 卡片用的 deltaText + trend（红涨绿跌） */
function trendFromDelta(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return { deltaText: '—', trend: 'up' };
  if (num > 0) return { deltaText: `+${num}`, trend: 'up' };
  if (num < 0) return { deltaText: `${num}`, trend: 'down' };
  return { deltaText: '0', trend: 'up' };
}

Page({
  data: {
    statusBarHeight: 20,
    safeBottom: 0,
    activeTab: 'home',
    updateDateLabel: '2025-05-15 10:30',
    summary: {
      buyable: { value: 3, deltaText: '+1', trend: 'up' },
      resumed: { value: 1, deltaText: '+1', trend: 'up' },
      totalLimit: {
        value: '21,100',
        unit: '元',
        deltaText: '-300',
        trend: 'down',
      },
    },
    glance: '纳指QDII整体额度略有放松，3只基金可大额申购',
    fundScopeOptions: ['全部基金', '仅可买', '仅限购'],
    fundScopeIndex: 0,
    sortOptions: ['默认排序', '限额从低到高'],
    sortIndex: 0,
    funds: [],
    scrollHeight: 400,
  },

  onLoad() {
    const sys =
      typeof wx.getWindowInfo === 'function'
        ? wx.getWindowInfo()
        : wx.getSystemInfoSync();
    const statusBarHeight = sys.statusBarHeight || 20;
    const safeBottom = sys.safeArea
      ? Math.max(0, sys.screenHeight - sys.safeArea.bottom)
      : 0;
    this.setData({ statusBarHeight, safeBottom });
    this.applyListFilters();

    const winH = sys.windowHeight || sys.screenHeight || 603;
    this.setData({
      scrollHeight: Math.max(winH - 260, 280),
    });
  },

  onReady() {
    this.updateScrollAreaHeight();
  },

  updateScrollAreaHeight() {
    const sys =
      typeof wx.getWindowInfo === 'function'
        ? wx.getWindowInfo()
        : wx.getSystemInfoSync();
    const windowH = sys.windowHeight || sys.screenHeight;
    wx.createSelectorQuery()
      .in(this)
      .select('.hero')
      .boundingClientRect()
      .select('.tabbar')
      .boundingClientRect()
      .exec((res) => {
        const hero = res[0];
        const tab = res[1];
        if (!hero || !tab || !windowH) return;
        const h = windowH - hero.height - tab.height;
        if (h > 100) {
          this.setData({ scrollHeight: Math.round(h) });
        }
      });
  },

  onScopeChange(e) {
    const idx = Number(e.detail.value);
    this.setData({ fundScopeIndex: idx }, () => this.applyListFilters());
  },

  onSortChange(e) {
    const idx = Number(e.detail.value);
    this.setData({ sortIndex: idx }, () => this.applyListFilters());
  },

  applyListFilters() {
    const { fundScopeIndex, sortIndex } = this.data;
    const scopeMap = ['all', 'available', 'limited'];
    const sortMap = ['default', 'limitAsc'];
    let list = filterFunds(fundSourceList, scopeMap[fundScopeIndex] || 'all');
    list = sortFunds(list, sortMap[sortIndex] || 'default');
    this.setData({ funds: list });
    this.syncCumulativePurchasableSummary();
  },

  /** 第三张卡片：累计可购额度 = 当日全量基金限额数值之和（不含暂停申购） */
  syncCumulativePurchasableSummary() {
    const total = sumPurchasableYuanAllFunds(fundSourceList);
    this.setData({
      'summary.totalLimit.value': formatThousands(total),
    });
  },

  /** 接入接口后替换全量列表并刷新筛选 / 累计 */
  replaceFundsSource(list) {
    if (!Array.isArray(list)) return;
    fundSourceList = list;
    this.applyListFilters();
  },

  onFundTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.showToast({ title: `基金详情 ${id}`, icon: 'none' });
  },

  onFeatureTap(e) {
    const { key } = e.currentTarget.dataset;
    const map = {
      fav: '我的收藏',
      remind: '额度提醒',
      changes: '今日变化',
    };
    wx.showToast({ title: `${map[key] || ''} 待接入`, icon: 'none' });
  },

  onGlanceTap() {
    wx.showToast({ title: '速览详情待接入', icon: 'none' });
  },

  onTabTap(e) {
    const { tab } = e.currentTarget.dataset;
    this.setData({ activeTab: tab });
    if (tab === 'home') return;
    wx.showToast({ title: '页面建设中', icon: 'none' });
  },
});
