const tools = [
  {name:'社會行動', game:'玩家為目的採取的行動', text:'企業希望實踐社會責任並建立形象；學生希望取得資金、導師與實踐夢想的機會。雙方都帶著目的採取行動。'},
  {name:'社會結構', game:'角色、位置與資源配置', text:'企業提供資源並制定評選標準；學生提出申請、接受評選，也彼此競爭。雙方一開始就擁有不同的資源與決定權。'},
  {name:'文化', game:'明文規則之外的共同默契', text:'什麼樣的表達會被認為「有夢想、有潛力、值得投資」？公開規則之外，也可能存在一套沒有說明的夢想想像。'},
  {name:'權力', game:'誰能制定規則與分配資源', text:'掌握經費、評選標準與選擇權的一方，也能決定哪些夢想得到實踐、公開展示與社會認可的機會。'},
  {name:'社會體系', game:'角色、資源與行動如何連動', text:'把鏡頭再拉遠，就能觀察企業資金與品牌、大學教育、學生履歷和社會認可如何彼此影響。'}
];

const thinkers = [
  {id:'marx', name:'馬克思', latin:'KARL MARX · 1818–1883', side:'right', color:'#d98b74', image:'assets/marx.webp', alt:'馬克思站在十九世紀工廠入口，身後是勞工與機器', action:'他要求打開分工表、群組紀錄與簡報版本紀錄。', question:'誰在勞動、誰能決定、誰取得成果？', text:'他把報告視為一項共同生產：四位組員的勞動創造內容，第五人沒有相應付出，卻因共同評分取得相同成果；掌握簡報母檔的人，也可能因此擁有最後決定權。', points:['勞動價值：商品價值來自勞工的勞動。','制度批判：《資本論》揭露掌握生產工具者如何占有勞動成果。','實踐：公開工作紀錄、共同制定規則，並爭取加入同儕互評。'], note:'分組報告不是資本主義工廠，擺爛者也不能直接等同資本家；這裡借用的是馬克思檢查勞動、控制權與成果分配的提問方式。', key:'不只理解不平等；馬克思更期待被壓迫者組織起來，以實踐甚至革命改變制度。', tags:['勞動','生產工具','控制權','成果分配','實踐']},
  {id:'durkheim', name:'涂爾幹', latin:'ÉMILE DURKHEIM · 1858–1917', side:'left', color:'#8fb3c8', image:'assets/durkheim.webp', alt:'涂爾幹在書房研究統計紀錄，窗外可見教堂與人群', action:'他向老師索取其他小組、不同課程與學期的資料。', question:'這是不是反覆出現的群體模式？', text:'他會比較共同或個別評分、有無同儕互評、分工是否清楚，以及組員彼此熟不熟。若失聯與搭便車在某些條件下穩定重複，就不能只歸因於個人懶惰。', points:['社會事實：評分、期限與團體默契存在於個人之外，也會形成約束。','《自殺論》：比較不同宗教群體的自殺率，從凝聚力尋找社會原因。','實證方法：把印象轉成可觀察、比較與檢驗的問題。'], note:'其他組員共同責備搭便車者，也反映團體對「負責任」的集體意識；表達不滿，是團體維護規範的一種方式。', key:'研究評分制度、團體規範、凝聚力與制裁機制，而不是把問題全留給個人。', tags:['社會事實','集體意識','群體規律','統計比較','實證方法']},
  {id:'weber', name:'韋伯', latin:'MAX WEBER · 1864–1920', side:'right', color:'#d4b37a', image:'assets/weber.webp', alt:'韋伯在書房與城市教堂背景前思考行動意義', action:'他搬一張椅子坐到組員旁邊，先詢問當事人。', question:'你為什麼認為不交工作也是一個選擇？', text:'同樣是不回訊息，有人計算其他人一定會做完，有人覺得自己沒有參與空間，也有人能力不足或遇到生活壓力卻不敢說明。外在行為相同，主觀意義可能完全不同。', points:['理解法 Verstehen：先進入行動者的處境，理解行動對他的意義。','因果解釋：再分析這個意義如何引導行動並造成後續結果。','《新教倫理與資本主義精神》：宗教行動累積後，也可能形成理性的工作倫理。'], note:'理解不等於原諒。即使他只是想用最低成本拿到相同分數，這仍是需要解釋的社會行動：他預期共同評分會保護自己，也預期其他人會收拾。', key:'先理解人賦予行動的意義，再解釋這些行動產生的社會結果。', tags:['Verstehen','主觀意義','社會行動','宗教倫理','因果解釋']}
];

const pollExplanations = {
  marx:'你先注意到分工、決定權與成果分配，這條提問路線最接近馬克思。',
  durkheim:'你先注意到規範、共同目標與反覆出現的模式，這條提問路線最接近涂爾幹。',
  weber:'你先暫停貼標籤，想理解當事人的處境與行動意義，這條提問路線最接近韋伯。'
};

const fields = [
  {name:'人口學', icon:'⌁', text:'研究人口數量、組成、遷移、生育與死亡如何改變社會。'},
  {name:'教育', icon:'▤', text:'分組報告如何被課程與評分制度塑造？教育又如何分配機會？'},
  {name:'家庭與婚姻', icon:'⌂', text:'家庭如何影響個人，也如何受到經濟、性別與制度變化影響？'},
  {name:'法律', icon:'⚖', text:'法律如何維持秩序、界定正義，也反映不同群體的權力關係？'},
  {name:'醫療', icon:'✚', text:'醫療如何回應身體與社會需求？誰能取得照顧與資源？'},
  {name:'性別', icon:'⚥', text:'性別規範如何被學習、維持，也如何造成不平等與改變？'},
  {name:'傳播與媒體', icon:'◉', text:'媒體如何影響意識、標籤與公共討論，也讓某些聲音更容易被看見？'},
  {name:'心理健康', icon:'◇', text:'心理困擾如何同時連結個人經驗、團體關係與社會結構？'}
];

const scales = [
  {tag:'微視社會學', title:'進入一次小組會議', text:'誰先說話、誰保持沉默、誰打斷別人？組員如何協商分工，「擺爛」這個標籤又怎麼形成？微視研究靠近互動、關係、溝通與小團體決策。', focus:['短時間','小空間','人際互動','標籤形成'], color:'#d98b74'},
  {tag:'巨視社會學', title:'拉遠到整套大學制度', text:'為什麼大學普遍使用分組報告？共同評分產生什麼結果？打工、家庭與經濟條件如何影響投入時間？巨視研究社會結構、制度、階級與長期變遷。', focus:['長時間','大空間','教育制度','社會結構'], color:'#8fb3c8'}
];

function enableTabKeys(container, callback) {
  container.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const buttons = [...container.querySelectorAll('button')];
    const current = buttons.indexOf(document.activeElement);
    if (current < 0) return;
    event.preventDefault();
    const next = event.key === 'ArrowRight' ? (current + 1) % buttons.length : (current - 1 + buttons.length) % buttons.length;
    buttons[next].focus();
    buttons[next].click();
  });
}

const toolButtons = document.querySelector('.tool-buttons');
const toolDetail = document.querySelector('#toolDetail');
function showTool(index) {
  [...toolButtons.children].forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active);
    button.tabIndex = active ? 0 : -1;
  });
  const tool = tools[index];
  toolDetail.innerHTML = `<div class="num">0${index + 1}</div><h3>${tool.name}</h3><div class="game">如果社會是一場多人遊戲：${tool.game}</div><p>${tool.text}</p>`;
}
tools.forEach((tool, index) => {
  const button = document.createElement('button');
  button.className = 'tool-btn';
  button.role = 'tab';
  button.textContent = tool.name;
  button.addEventListener('click', () => showTool(index));
  toolButtons.appendChild(button);
});
enableTabKeys(toolButtons, showTool);
showTool(0);

document.querySelectorAll('.poll-option').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.poll-option').forEach(option => option.classList.toggle('active', option === button));
    const lens = button.dataset.lens;
    const thinker = thinkers.find(item => item.id === lens);
    const result = document.querySelector('#pollResult');
    result.style.setProperty('--poll-color', thinker.color);
    result.innerHTML = `<b>${thinker.name}會繼續追問</b><span>${pollExplanations[lens]}</span>`;
  });
});

const thinkerTabs = document.querySelector('#thinkerTabs');
const thinkerPanel = document.querySelector('#thinkerPanel');
function showThinker(index) {
  const thinker = thinkers[index];
  [...thinkerTabs.children].forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.setAttribute('aria-selected', active);
    button.tabIndex = active ? 0 : -1;
  });
  thinkerPanel.classList.toggle('side-right', thinker.side === 'right');
  thinkerPanel.style.setProperty('--thinker-color', thinker.color);
  thinkerPanel.innerHTML = `<img src="${thinker.image}" alt="${thinker.alt}" loading="lazy"><div class="panel-shade"></div><div class="thinker-copy"><div class="latin">${thinker.latin}</div><h3>${thinker.name}</h3><div class="case-action">${thinker.action}</div><div class="question">${thinker.question}</div><p>${thinker.text}</p><ol class="thinker-points">${thinker.points.map(point => `<li>${point}</li>`).join('')}</ol><p class="thinker-note">${thinker.note}</p><strong class="thinker-key">${thinker.key}</strong><div class="tags">${thinker.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div>`;
}
thinkers.forEach((thinker, index) => {
  const button = document.createElement('button');
  button.className = 'tab';
  button.role = 'tab';
  button.textContent = `${index + 1}. ${thinker.name}`;
  button.addEventListener('click', () => showThinker(index));
  thinkerTabs.appendChild(button);
});
enableTabKeys(thinkerTabs, showThinker);
showThinker(0);

const fieldMap = document.querySelector('#fieldMap');
const fieldFocus = document.querySelector('#fieldFocus');
function showField(index) {
  [...fieldMap.children].forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  const field = fields[index];
  fieldFocus.innerHTML = `<span>${field.icon}</span><div><b>${field.name}社會學</b><p>${field.text}</p></div>`;
}
fields.forEach((field, index) => {
  const button = document.createElement('button');
  button.className = 'field-button';
  button.innerHTML = `<span aria-hidden="true">${field.icon}</span><b>${field.name}</b>`;
  button.addEventListener('click', () => showField(index));
  fieldMap.appendChild(button);
});
showField(1);

const cameraView = document.querySelector('#cameraView');
const scaleRange = document.querySelector('#scaleRange');
const macroLayer = document.querySelector('#macroLayer');
function showScale(value) {
  const ratio = Math.max(0, Math.min(100, value)) / 100;
  const index = ratio < .5 ? 0 : 1;
  const scale = scales[index];
  cameraView.style.setProperty('--scale-color', scale.color);
  macroLayer.style.opacity = ratio;
  scaleRange.setAttribute('aria-valuetext', scale.tag);
  cameraView.innerHTML = `<span class="scale-badge">${scale.tag}</span><h3>${scale.title}</h3><p>${scale.text}</p><div class="focus-list">${scale.focus.map(item => `<span>${item}</span>`).join('')}</div>`;
}
scaleRange.addEventListener('input', event => showScale(Number(event.target.value)));
showScale(0);

const zoomBtn = document.querySelector('#zoomBtn');
const zoomStage = document.querySelector('#zoomStage');
zoomBtn.addEventListener('click', () => {
  const open = zoomStage.classList.toggle('open');
  zoomBtn.setAttribute('aria-expanded', open);
  zoomBtn.textContent = open ? '收回個人視角' : '把視角拉遠';
});

const sections = [...document.querySelectorAll('main section')];
const dots = document.querySelector('.side-dots');
const progress = document.querySelector('#progress');
const sectionCount = document.querySelector('#sectionCount');
sections.forEach((section, index) => {
  const link = document.createElement('a');
  link.href = `#${section.id}`;
  link.setAttribute('aria-label', `${index + 1}. ${section.dataset.title}`);
  dots.appendChild(link);
});
function updateNav() {
  const marker = scrollY + innerHeight * .42;
  let index = 0;
  sections.forEach((section, sectionIndex) => { if (section.offsetTop <= marker) index = sectionIndex; });
  [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
  sectionCount.textContent = `${String(index + 1).padStart(2, '0')} / ${String(sections.length).padStart(2, '0')}`;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max ? scrollY / max * 100 : 0}%`;
}
addEventListener('scroll', updateNav, {passive:true});
addEventListener('resize', updateNav);
updateNav();

addEventListener('keydown', event => {
  if (['INPUT', 'BUTTON'].includes(document.activeElement.tagName)) return;
  const current = [...dots.children].findIndex(dot => dot.classList.contains('active'));
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    event.preventDefault();
    sections[Math.min(current + 1, sections.length - 1)].scrollIntoView();
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    sections[Math.max(current - 1, 0)].scrollIntoView();
  }
});

thinkers.forEach(thinker => { const image = new Image(); image.src = thinker.image; });
