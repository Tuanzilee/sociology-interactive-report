const tools = [
  {name:'社會行動', game:'玩家為目的採取的行動', text:'企業希望實踐社會責任並建立形象；學生希望取得資金、導師與實踐夢想的機會。雙方都帶著目的採取行動。'},
  {name:'社會結構', game:'角色、位置與資源配置', text:'企業提供資源並制定評選標準；學生提出申請、接受評選，也彼此競爭。雙方一開始就擁有不同的資源與決定權。'},
  {name:'文化', game:'明文規則之外的共同默契', text:'什麼樣的表達會被認為「有夢想、有潛力、值得投資」？公開規則之外，也可能存在一套沒有說明的夢想想像。'},
  {name:'權力', game:'誰能制定規則與分配資源', text:'掌握經費、評選標準與選擇權的一方，也能決定哪些夢想得到實踐、公開展示與社會認可的機會。'},
  {name:'社會體系', game:'角色、資源與行動如何連動', text:'企業提供資金、導師與品牌聲望；學生投入時間、產出成果；企業展示社會責任；大眾又把「入選」視為背書，逐漸形成循環。'}
];

const thinkers = [
  {id:'marx', name:'馬克思', latin:'KARL MARX · 1818–1883', side:'right', color:'#d98b74', image:'assets/marx.webp', alt:'馬克思站在十九世紀工廠入口，身後是勞工與機器', action:'他先把工作分配表拿過來。', question:'工作是誰分配的？誰掌握決定權？最後的成果又算在誰身上？', text:'他把個人衝突放回生產關係，觀察誰擁有資源、誰提供勞動，以及成果如何分配。在工廠裡，勞工生產商品，擁有工廠、設備與資金的人卻掌握生產成果。', key:'最先尋找：權力、利益與衝突', tags:['生產關係','勞動','階級','權力','改變制度']},
  {id:'durkheim', name:'涂爾幹', latin:'ÉMILE DURKHEIM · 1858–1917', side:'left', color:'#8fb3c8', image:'assets/durkheim.webp', alt:'涂爾幹在書房研究統計紀錄，窗外可見教堂與人群', action:'他說：「只看這一組還不夠。」', question:'如果只是個人問題，為什麼同樣的情況會在某些團體反覆出現？', text:'他收集更多小組資料，尋找規則不清、成員不熟、缺乏固定討論時間等共同條件。《自殺論》同樣從群體統計發現穩定差異，將極私人的行為放回社會原因。', key:'最先尋找：社會規律與社會整合', tags:['社會事實','規範','統計','群體連結','制度力量']},
  {id:'weber', name:'韋伯', latin:'MAX WEBER · 1864–1920', side:'right', color:'#d4b37a', image:'assets/weber.webp', alt:'韋伯在書房與城市教堂背景前思考行動意義', action:'他把被稱為「擺爛」的組員找來。', question:'你覺得自己正在做什麼？這個選擇對你有什麼意義？', text:'他可能以為主要內容已經完成，也可能白天要工作，或曾經多次提出意見卻都被否決。韋伯先理解行動者如何解釋情境，再追問相似信念與行動如何累積成更大的制度結果。', key:'最先尋找：主觀意義與社會結果', tags:['Verstehen','主觀意義','動機','宗教倫理','因果解釋']}
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
  {tag:'連接微視與巨視', title:'沉默不是飄在空中', text:'一位學生在會議中沉默，可能連著過去的教育經驗、經濟壓力、團體權力與評分制度；制度也必須透過一次次課堂與互動，才會實際影響人。', focus:['個人經驗','團體關係','制度條件'], color:'#f0d796'},
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
  thinkerPanel.innerHTML = `<img src="${thinker.image}" alt="${thinker.alt}" loading="lazy"><div class="panel-shade"></div><div class="thinker-copy"><div class="latin">${thinker.latin}</div><h3>${thinker.name}</h3><div class="case-action">${thinker.action}</div><div class="question">${thinker.question}</div><p>${thinker.text}</p><strong class="thinker-key">${thinker.key}</strong><div class="tags">${thinker.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div>`;
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
function showScale(index) {
  const scale = scales[index];
  cameraView.style.setProperty('--scale-color', scale.color);
  macroLayer.style.opacity = index / 2;
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
