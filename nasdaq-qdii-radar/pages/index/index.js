const MOCK_FUNDS = [
  {
    id: '1',
    abbr: '招',
    logoBg: '#ef4444',
    name: '招商纳斯达克100ETF发起式QDII(C类)',
    code: '019548',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '2',
    abbr: '汇',
    logoBg: '#2563eb',
    name: '汇添富纳斯达克生物科技ETF发起式联接A',
    code: '017894',
    limitText: '5000元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '3',
    abbr: '汇',
    logoBg: '#2563eb',
    name: '汇添富纳斯达克生物科技ETF发起式联接C',
    code: '017895',
    limitText: '5000元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '4',
    abbr: '华',
    logoBg: '#8b5cf6',
    name: '华宝纳斯达克精选股票发起式(QDII)A',
    code: '017436',
    limitText: '1000元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '5',
    abbr: '华',
    logoBg: '#8b5cf6',
    name: '华宝纳斯达克精选股票发起式(QDII)C',
    code: '017437',
    limitText: '1000元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '6',
    abbr: '大',
    logoBg: '#06b6d4',
    name: '大成纳斯达克100ETF联接(QDII)A',
    code: '000834',
    limitText: '500元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '7',
    abbr: '大',
    logoBg: '#06b6d4',
    name: '大成纳斯达克100ETF联接(QDII)C',
    code: '008971',
    limitText: '500元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '8',
    abbr: '南',
    logoBg: '#10b981',
    name: '南方纳斯达克100指数发起(QDII)A',
    code: '016452',
    limitText: '200元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '9',
    abbr: '南',
    logoBg: '#10b981',
    name: '南方纳斯达克100指数发起(QDII)C',
    code: '016453',
    limitText: '200元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '10',
    abbr: '天',
    logoBg: '#0ea5e9',
    name: '天弘纳斯达克100指数发起(QDII)A',
    code: '018043',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '11',
    abbr: '天',
    logoBg: '#0ea5e9',
    name: '天弘纳斯达克100指数发起(QDII)C',
    code: '018044',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '12',
    abbr: '摩',
    logoBg: '#64748b',
    name: '摩根纳斯达克100指数(QDII)人民币A',
    code: '019172',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '13',
    abbr: '摩',
    logoBg: '#64748b',
    name: '摩根纳斯达克100指数(QDII)人民币C',
    code: '019173',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '14',
    abbr: '建',
    logoBg: '#3b82f6',
    name: '建信纳斯达克100指数QDIIA',
    code: '539001',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '15',
    abbr: '建',
    logoBg: '#3b82f6',
    name: '建信纳斯达克100指数(QDII)C',
    code: '012752',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '16',
    abbr: '宝',
    logoBg: '#f59e0b',
    name: '宝盈纳斯达克100指数发起(QDII)A',
    code: '019736',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '17',
    abbr: '宝',
    logoBg: '#f59e0b',
    name: '宝盈纳斯达克100指数发起(QDII)C',
    code: '019737',
    limitText: '100元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '18',
    abbr: '万',
    logoBg: '#f97316',
    name: '万家纳斯达克100指数发起式(QDII)A',
    code: '019441',
    limitText: '50元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '19',
    abbr: '万',
    logoBg: '#f97316',
    name: '万家纳斯达克100指数发起式(QDII)C',
    code: '019442',
    limitText: '50元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '20',
    abbr: '广',
    logoBg: '#22c55e',
    name: '广发纳斯达克生物科技(QDII)A',
    code: '001092',
    limitText: '10元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '21',
    abbr: '广',
    logoBg: '#22c55e',
    name: '广发纳斯达克100ETF联接(QDII)C',
    code: '006479',
    limitText: '10元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '22',
    abbr: '华',
    logoBg: '#ec4899',
    name: '华泰柏瑞纳斯达克100ETF联接基金QDII A',
    code: '019524',
    limitText: '10元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '23',
    abbr: '华',
    logoBg: '#ec4899',
    name: '华泰柏瑞纳斯达克100ETF联接基金QDII C',
    code: '019525',
    limitText: '10元',
    status: 'limited',
    updatedAt: '08:30 05-17',
  },
  {
    id: '24',
    abbr: '景',
    logoBg: '#facc15',
    name: '景顺长城纳斯达克科技ETF联接A',
    code: '017091',
    limitText: '暂停申购',
    status: 'unavailable',
    updatedAt: '08:30 05-17',
  },
  {
    id: '25',
    abbr: '景',
    logoBg: '#facc15',
    name: '景顺长城纳斯达克科技ETF联接E',
    code: '019118',
    limitText: '暂停申购',
    status: 'unavailable',
    updatedAt: '08:30 05-17',
  },
  {
    id: '26',
    abbr: '景',
    logoBg: '#facc15',
    name: '景顺长城纳斯达克科技ETF联接C',
    code: '017093',
    limitText: '暂停申购',
    status: 'unavailable',
    updatedAt: '08:30 05-17',
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
  if (sortKey === 'limitDesc') {
    next.sort((a, b) => {
      const na = parseLimitNum(a.limitText);
      const nb = parseLimitNum(b.limitText);
      return nb - na;
    });
  }
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
    updateDateLabel: '2025-05-15 10:30',
    summary: {
      buyable: { value: 3, deltaText: '+1', trend: 'up' },
      totalLimit: {
        value: '21,100',
        unit: '元',
        deltaText: '-300',
        trend: 'down',
      },
    },
    glanceTitle: '今日速览',
    glance: '整体额度略有放松，3只基金可大额申购',
    fundScopeOptions: ['状态', '仅可买', '仅限购'],
    fundScopeIndex: 0,
    sortOptions: ['限额', '从低到高'],
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
    this.setData({ statusBarHeight });
    this.applyListFilters();

    const winH = sys.windowHeight || sys.screenHeight || 603;
    this.setData({
      scrollHeight: Math.max(winH - 148, 340),
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
      .exec((res) => {
        const hero = res[0];
        if (!hero || !windowH) return;
        const h = windowH - hero.height + 52;
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
    const sortMap = ['limitDesc', 'limitAsc'];
    let list = filterFunds(fundSourceList, scopeMap[fundScopeIndex] || 'all');
    list = sortFunds(list, sortMap[sortIndex] || 'default');
    this.setData({ funds: list });
    this.syncCumulativePurchasableSummary();
  },

  /** 第三张卡片：累计可购额度 = 当日全量基金限额数值之和（不含暂停申购） */
  syncCumulativePurchasableSummary() {
    const buyableCount = fundSourceList.filter((f) => f.status !== 'unavailable').length;
    const total = sumPurchasableYuanAllFunds(fundSourceList);
  
    this.setData({
      'summary.buyable.value': buyableCount,
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

  onGlanceTap() {
    wx.showToast({ title: '速览详情待接入', icon: 'none' });
  },
});
