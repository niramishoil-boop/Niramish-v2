/* ═══════════════════════════════════════════
   NIRAMISH v2 — SHARED APP LOGIC
═══════════════════════════════════════════ */
if('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }
window.scrollTo(0,0);

const WA_NUMBER = '918376091208';

/* ─── PRODUCT DATA (shared across products.html / product.html / index.html) ─── */
const PRODUCTS = [
  {
    id:'mustard-oil', name:'Kachi Ghani Mustard Oil', hindi:'सरसों का शुद्ध तेल',
    category:'bottles', catLabel:'Bottles', badge:'Bestseller',
    sizes:[
      {key:'1l', label:'1 Litre', price:210},
      {key:'2l', label:'2 Litre', price:400},
      {key:'5l', label:'5 Litre', price:1000},
      {key:'10l', label:'10 Litre', price:2000}
    ],
    desc:'Cold-pressed from handpicked black mustard seeds, retaining every drop of bold aroma and natural nutrients. No heat, no hexane — just pure golden goodness.',
    features:['Rich Aroma','High Smoke Point','Omega-3 Rich','No Additives'],
    images:['img/mustard1.jpg','img/mustard3.jpg']
  },
  {
    id:'haldi', name:'Pure Haldi', hindi:'शुद्ध हल्दी पाउडर',
    category:'jars', catLabel:'Jars', badge:'100% Curcumin',
    sizes:[{key:'200g', label:'200 g', price:199}],
    desc:'Sun-dried turmeric roots, carefully selected and stone-ground to preserve natural golden colour, pungent aroma, and 2.5–5% curcumin content.',
    features:['Anti-inflammatory','2.5–5% Curcumin','No Preservatives','No Added Colour'],
    images:['img/haldi1.jpg','img/haldi2.jpg']
  },
  {
    id:'groundnut-oil', name:'Groundnut Oil', hindi:'मूंगफली का तेल',
    category:'bottles', catLabel:'Bottles', badge:'Cold Pressed',
    sizes:[{key:'500ml', label:'500 ml', price:349}],
    desc:'Pressed slowly from premium Gujarat groundnuts — light, nutty, and rich in Vitamin E. Perfect for everyday frying, sautéing, and Indian cooking.',
    features:['Vitamin E Rich','Heart Friendly','Light Flavour','Wood Pressed'],
    images:['img/groundnut.jpg']
  },
  {
    id:'moringa', name:'Moringa Powder', hindi:'मोरिंगा पाउडर',
    category:'pouches', catLabel:'Pouches', badge:'Superfood',
    sizes:[{key:'100g', label:'100 g', price:249}],
    desc:'Pure Moringa Oleifera leaf powder, carefully dried and milled. Packed with antioxidants, iron, and vitamins. Add to smoothies, dals, or warm water daily.',
    features:['Immunity Booster','Nutrient Dense','Natural Detox','Plant Based'],
    images:['img/moringa.jpg']
  }
];

function getProduct(id){ return PRODUCTS.find(p=>p.id===id); }

/* ─── MOBILE MENU ─── */
function initMobileMenu(){
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  const closeBtn = document.getElementById('menuCloseBtn');
  if(!btn || !menu) return;
  const open = ()=>{ menu.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow='hidden'; };
  const close = ()=>{ menu.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow=''; };
  btn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  overlay && overlay.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click', close));
}

/* ─── TOAST ─── */
function showToast(msg){
  let toast = document.getElementById('toast');
  if(!toast){
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>toast.classList.remove('show'), 2600);
}

/* ─── WHATSAPP ENQUIRY HELPERS ─── */
function waEnquiryLink(productName, size){
  const lines = [
    `Hi Niramish! I'd like to enquire about:`,
    `*${productName}*${size ? ' — ' + size : ''}`,
    ``,
    `Please share more details.`
  ];
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function openWaEnquiry(productName, size){
  window.open(waEnquiryLink(productName, size), '_blank');
}

/* ─── ACTIVE NAV HIGHLIGHT ─── */
function markActiveNav(pageId){
  document.querySelectorAll('[data-nav]').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav === pageId);
  });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);
