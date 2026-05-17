const appState = {
  funds: window.MOCK_APP_DATA.funds.slice(),
  scope: 'all',
  sort: 'limitDesc',
};

const statusMap = {
  available: { text: '可买', className: 'status-ok' },
  limited: { text: '限购', className: 'status-warn' },
  unavailable: { text: '不可买', className: 'status-off' },
};

function $(selector) {
  return document.querySelector(selector);
}

function parseLimitNum(text) {
  if (!text || String(text).includes('暂停')) return -1;
  const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function yuanFromLimitText(text) {
  if (!text || String(text).includes('暂停')) return 0;
  const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function formatThousands(num) {
  const n = Math.round(Number(num)) || 0;
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function filterFunds(list, scope) {
  if (scope === 'all') return list.slice();
  return list.filter((item) => item.status === scope);
}

function sortFunds(list, sortKey) {
  const next = list.slice();
  next.sort((a, b) => {
    const na = parseLimitNum(a.limitText);
    const nb = parseLimitNum(b.limitText);
    return sortKey === 'limitAsc' ? na - nb : nb - na;
  });
  return next;
}

function getVisibleFunds() {
  return sortFunds(filterFunds(appState.funds, appState.scope), appState.sort);
}

function calculateSummary(funds) {
  const buyableCount = funds.filter((item) => item.status !== 'unavailable').length;
  const resumedCount = window.MOCK_APP_DATA.summaryDelta.resumed.value;
  const purchasableFunds = funds.filter((item) => yuanFromLimitText(item.limitText) > 0);
  const totalLimit = purchasableFunds.reduce((sum, item) => sum + yuanFromLimitText(item.limitText), 0);
  const avgLimit = purchasableFunds.length ? totalLimit / purchasableFunds.length : 0;

  return { buyableCount, resumedCount, avgLimit };
}

function renderSummary() {
  const summary = calculateSummary(appState.funds);
  const delta = window.MOCK_APP_DATA.summaryDelta;

  $('#updateDateLabel').textContent = window.MOCK_APP_DATA.updateDateLabel;
  $('#buyableCount').textContent = summary.buyableCount;
  $('#resumedCount').textContent = summary.resumedCount;
  $('#avgLimit').textContent = formatThousands(summary.avgLimit);
  $('#buyableDelta').textContent = delta.buyable.deltaText;
  $('#resumedDelta').textContent = delta.resumed.deltaText;
  $('#avgDelta').textContent = delta.avgLimit.deltaText;
  $('#glanceTitle').textContent = window.MOCK_APP_DATA.glanceTitle;
  $('#glanceText').textContent = window.MOCK_APP_DATA.glance;
}

function renderFunds() {
  const fundList = $('#fundList');
  const funds = getVisibleFunds();

  fundList.innerHTML = funds.map((item) => {
    const status = statusMap[item.status] || statusMap.unavailable;
    const mutedClass = item.status === 'unavailable' ? ' td-limit--muted' : '';
    return `
      <article class="fund-row" data-id="${item.id}">
        <div class="td td-name">
          <span class="logo" style="background:${item.logoBg}">${item.abbr}</span>
          <span class="name-wrap">
            <span class="fund-name">${item.name}</span>
            <span class="fund-code">${item.code}</span>
          </span>
        </div>
        <span class="td td-limit${mutedClass}">${item.limitText}</span>
        <span class="td td-status"><span class="status-tag ${status.className}">${status.text}</span></span>
      </article>`;
  }).join('');
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('toast--show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('toast--show'), 1600);
}

function bindEvents() {
  $('#scopeSelect').addEventListener('change', (event) => {
    appState.scope = event.target.value;
    renderFunds();
  });

  $('#sortSelect').addEventListener('change', (event) => {
    appState.sort = event.target.value;
    renderFunds();
  });

  $('#fundList').addEventListener('click', (event) => {
    const row = event.target.closest('.fund-row');
    if (!row) return;
    showToast(`基金详情 ${row.dataset.id}`);
  });

  document.querySelectorAll('.quick-card').forEach((card) => {
    card.addEventListener('click', () => showToast(`${card.dataset.feature} 待接入`));
  });

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((item) => item.classList.remove('tab--on'));
      tab.classList.add('tab--on');
      if (tab.dataset.tab !== 'home') showToast('页面建设中');
    });
  });

  $('#glanceCard').addEventListener('click', () => showToast('速览详情待接入'));
}

function initApp() {
  renderSummary();
  renderFunds();
  bindEvents();
}

initApp();
