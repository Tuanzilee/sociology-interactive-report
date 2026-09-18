const tools=[
  {name:'社會行動',game:'玩家採取的操作',text:'企業希望實踐社會責任、建立品牌形象；學生希望取得資金、導師與實踐機會。每一方都帶著目的採取行動。'},
  {name:'社會結構',game:'角色、位置與資源配置',text:'企業站在提供資源、制定評選標準的位置；學生站在申請與競爭資源的位置。位置不同，可使用的資源也不同。'},
  {name:'文化',game:'玩家共同接受的玩法',text:'什麼樣的表達會被認為「有夢想、有潛力、值得投資」？明文規則之外，還有一套沒有寫下來的默契。'},
  {name:'權力',game:'誰能制定規則與分配獎勵',text:'掌握經費與選擇權的一方，也能決定哪些夢想得到實踐與公開展示的機會。多贏，不代表每一方擁有同等決定權。'},
  {name:'社會體系',game:'玩家、規則與資源如何連動',text:'企業提供資金、導師與聲望；學生投入時間、產出成果；大眾再把「入選」當成可靠背書，形成資源、行動與認可的循環。'}
];

const thinkers=[
  {id:'marx',name:'馬克思',latin:'KARL MARX · 1818–1883',side:'right',color:'#d98b74',image:'assets/marx.webp',alt:'馬克思站在十九世紀工廠入口，身後是勞工與機器',question:'誰在勞動？誰在決定？誰取得成果？',text:'商品價值來自勞動，但擁有生產工具的人掌握成果分配。馬克思不只想描述資本主義的矛盾；他要讓無產階級理解共同處境，形成集體力量，改變生產關係。',tags:['階級','勞動價值','權力','衝突','革命實踐']},
  {id:'durkheim',name:'涂爾幹',latin:'ÉMILE DURKHEIM · 1858–1917',side:'left',color:'#8fb3c8',image:'assets/durkheim.webp',alt:'涂爾幹在書房研究統計紀錄，窗外可見教堂與人群',question:'這真的是個人問題，還是反覆出現的社會模式？',text:'看似最私人的行為，也可能呈現穩定的群體差異。規範、制度與集體意識形成後，會像存在於個人之外的力量，反過來約束個人。',tags:['社會事實','規範','統計','秩序','群體連結']},
  {id:'weber',name:'韋伯',latin:'MAX WEBER · 1864–1920',side:'right',color:'#d4b37a',image:'assets/weber.webp',alt:'韋伯在書房與城市教堂背景前思考行動意義',question:'你為什麼這樣做？這件事對你代表什麼？',text:'人會賦予行動意義。研究者要先進入行動者的角度，理解他的主觀意義，再解釋許多有意義的行動，如何累積成更大的社會結果。',tags:['Verstehen','主觀意義','動機','宗教倫理','社會結果']}
];

const lenses={
  marx:{label:'勞動 × 權力 × 成果',title:'先看分配',question:'勞動、決定權與成果，有沒有落在同一群人手上？',points:['誰實際做了最多工作？','誰掌握題目、內容與上台發言？','為什麼沒有貢獻的人仍取得相同分數？'],move:'不只要求「下次更負責」，而是改變分工、決策、貢獻透明度與評分規則。',color:'#d98b74',spot:'30%'},
  durkheim:{label:'模式 × 規範 × 制度',title:'先問每組都這樣嗎？',question:'什麼樣的團體與制度，比較容易反覆產生擺爛？',points:['共同評分還是個別評分？','有沒有同儕互評與清楚分工？','違反責任規範時，是否需要承擔後果？'],move:'蒐集不同小組的資料，確認這是個別狀況，還是評分制度與凝聚力共同形成的模式。',color:'#8fb3c8',spot:'54%'},
  weber:{label:'動機 × 意義 × 處境',title:'先暫停使用「擺爛」',question:'當事人如何理解自己的責任與貢獻？',points:['他知道別人會收尾，所以選擇不投入？','他認為已完成原先約定的工作？','工作、照顧或健康問題讓他無法配合？','他的想法總被否定，最後退出討論？'],move:'理解不等於原諒；它讓我們更準確辨認動機，以及動機如何和制度條件結合。',color:'#d4b37a',spot:'76%'}
};

const scales=[
  {tag:'微視社會學',title:'一場小組會議',text:'鏡頭貼近現場：誰先說話、誰保持沉默、誰打斷別人？組員如何協商分工，「擺爛」這個標籤又怎麼形成？',focus:['互動','溝通','標籤','小團體決策'],color:'#d98b74'},
  {tag:'連接微觀與巨觀',title:'沉默不是飄在空中',text:'一位學生在會議中沉默，可能連著過去的教育經驗、經濟壓力、團體權力與評分制度。制度也必須透過一次次互動，才會真正影響人。',focus:['個人經驗','團體關係','制度條件'],color:'#f0d796'},
  {tag:'巨視社會學',title:'整套大學教育制度',text:'鏡頭拉遠：為什麼大學普遍使用分組報告？共同評分產生什麼結果？學生的家庭與經濟條件，如何影響他能投入的時間？',focus:['教育制度','階級','社會結構','長期變遷'],color:'#8fb3c8'}
];

const toolButtons=document.querySelector('.tool-buttons');
const toolDetail=document.querySelector('#toolDetail');
function showTool(i){
  [...toolButtons.children].forEach((b,n)=>{b.classList.toggle('active',n===i);b.setAttribute('aria-selected',n===i)});
  const t=tools[i];
  toolDetail.innerHTML=`<div class="num">0${i+1}</div><h3>${t.name}</h3><div class="game">如果社會是一場多人遊戲：${t.game}</div><p>${t.text}</p>`;
}
tools.forEach((t,i)=>{const b=document.createElement('button');b.className='tool-btn';b.role='tab';b.textContent=t.name;b.onclick=()=>showTool(i);toolButtons.appendChild(b)});showTool(0);

const thinkerTabs=document.querySelector('#thinkerTabs');
const thinkerPanel=document.querySelector('#thinkerPanel');
function showThinker(i){
  const t=thinkers[i];
  [...thinkerTabs.children].forEach((b,n)=>b.setAttribute('aria-selected',n===i));
  thinkerPanel.classList.toggle('side-right',t.side==='right');
  thinkerPanel.style.setProperty('--thinker-color',t.color);
  thinkerPanel.innerHTML=`<img src="${t.image}" alt="${t.alt}" loading="lazy"><div class="panel-shade"></div><div class="thinker-copy"><div class="latin">${t.latin}</div><h3>${t.name}</h3><div class="question">${t.question}</div><p>${t.text}</p><div class="tags">${t.tags.map(x=>`<span>${x}</span>`).join('')}</div></div>`;
}
thinkers.forEach((t,i)=>{const b=document.createElement('button');b.className='tab';b.role='tab';b.textContent=`${i+1}. ${t.name}`;b.onclick=()=>showThinker(i);thinkerTabs.appendChild(b)});showThinker(0);

const lensTabs=document.querySelector('#lensTabs');
const lensResult=document.querySelector('#lensResult');
const caseScene=document.querySelector('#caseScene');
const caseCaption=document.querySelector('#caseCaption');
function showLens(key){
  const l=lenses[key];
  [...lensTabs.children].forEach(b=>b.setAttribute('aria-selected',b.dataset.key===key));
  lensResult.style.setProperty('--lens-color',l.color);caseScene.style.setProperty('--spot-x',l.spot);caseScene.style.setProperty('--lens-color',l.color);caseCaption.style.setProperty('--lens-color',l.color);
  lensResult.innerHTML=`<div class="lens-label">${l.label}</div><h3>${l.title}</h3><p class="main-q">${l.question}</p><ul>${l.points.map(x=>`<li>${x}</li>`).join('')}</ul><div class="move">下一步：${l.move}</div>`;
}
thinkers.forEach(t=>{const b=document.createElement('button');b.className='tab';b.role='tab';b.dataset.key=t.id;b.textContent=t.name;b.onclick=()=>showLens(t.id);lensTabs.appendChild(b)});showLens('marx');

const cameraView=document.querySelector('#cameraView');
const scaleRange=document.querySelector('#scaleRange');
const macroLayer=document.querySelector('#macroLayer');
function showScale(i){const s=scales[i];cameraView.style.setProperty('--scale-color',s.color);macroLayer.style.opacity=i/2;cameraView.innerHTML=`<span class="scale-badge">${s.tag}</span><h3>${s.title}</h3><p>${s.text}</p><div class="focus-list">${s.focus.map(x=>`<span>${x}</span>`).join('')}</div>`}
scaleRange.oninput=e=>showScale(+e.target.value);showScale(0);

const zoomBtn=document.querySelector('#zoomBtn');
const zoomStage=document.querySelector('#zoomStage');
zoomBtn.onclick=()=>{const open=zoomStage.classList.toggle('open');zoomBtn.setAttribute('aria-expanded',open);zoomBtn.textContent=open?'收回個人視角':'把視角拉遠'};

const sections=[...document.querySelectorAll('main section')];
const dots=document.querySelector('.side-dots');
const progress=document.querySelector('#progress');
const sectionCount=document.querySelector('#sectionCount');
sections.forEach((s,i)=>{const a=document.createElement('a');a.href='#'+s.id;a.setAttribute('aria-label',`${i+1}. ${s.dataset.title}`);dots.appendChild(a)});
function updateNav(){const y=scrollY+innerHeight*.42;let idx=0;sections.forEach((s,i)=>{if(s.offsetTop<=y)idx=i});[...dots.children].forEach((d,i)=>d.classList.toggle('active',i===idx));sectionCount.textContent=`${String(idx+1).padStart(2,'0')} / ${String(sections.length).padStart(2,'0')}`;const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+'%'}
addEventListener('scroll',updateNav,{passive:true});addEventListener('resize',updateNav);updateNav();
addEventListener('keydown',e=>{if(['INPUT','BUTTON'].includes(document.activeElement.tagName))return;const current=[...dots.children].findIndex(d=>d.classList.contains('active'));if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();sections[Math.min(current+1,sections.length-1)].scrollIntoView()}if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();sections[Math.max(current-1,0)].scrollIntoView()}});
thinkers.forEach(t=>{const img=new Image();img.src=t.image});
