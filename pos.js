/* ══════════════════════════════════════
   DATA — EMPLOYEES (mỗi người có PIN riêng)
══════════════════════════════════════ */
const EMPLOYEES = [
  {
    name: "Việt Hoàng",
    role: "Quản lý ca",
    pin: "0509",
    ava: "images/viet-hoang.jpg",
  },
  { name: "Vi Nam", role: "Thu ngân", pin: "2607", ava: "images/vi-nam.jpg" },
  {
    name: "Sơn Tùng",
    role: "Thu ngân",
    pin: "1205",
    ava: "images/son-tung.jpg",
  },
  {
    name: "Duy Long",
    role: "Barista",
    pin: "1912",
    ava: "images/duy-long.jpg",
  },
];

/* CRM — Danh sách thành viên */
const MEMBERS = [
  {
    id: "MB001",
    name: "Nguyễn Hà Linh",
    level: "Gold",
    stars: 320,
    ava: "👩‍💼",
    lastItem: "Caramel Macchiato Grande",
  },
  {
    id: "MB002",
    name: "Trần Minh Đức",
    level: "Green",
    stars: 85,
    ava: "👨‍💻",
    lastItem: "Caffè Latte Tall",
  },
  {
    id: "MB003",
    name: "Lê Thị Mai",
    level: "Platinum",
    stars: 780,
    ava: "👩",
    lastItem: "Pure Matcha Latte Grande",
  },
  {
    id: "MB004",
    name: "Phạm Quốc Bảo",
    level: "Green",
    stars: 42,
    ava: "🧑‍🎓",
    lastItem: "Americano Tall",
  },
  {
    id: "MB005",
    name: "Võ Thị Hương",
    level: "Gold",
    stars: 215,
    ava: "👩‍🍳",
    lastItem: "Strawberry Açaí Refresher",
  },
  {
    id: "MB006",
    name: "Đinh Văn Nam",
    level: "Welcome",
    stars: 12,
    ava: "👦",
    lastItem: "Croissant Bơ",
  },
];

/* INVENTORY — Nguyên liệu tồn kho */
const INVENTORY = [
  {
    id: "cof",
    name: "Cà phê Espresso",
    ico: "☕",
    unit: "kg",
    qty: 8.5,
    max: 15,
    min: 3,
    cost_per: 250000,
  },
  {
    id: "mlk",
    name: "Sữa tươi (Whole)",
    ico: "🥛",
    unit: "L",
    qty: 18,
    max: 40,
    min: 8,
    cost_per: 22000,
  },
  {
    id: "matcha",
    name: "Matcha bột",
    ico: "🍵",
    unit: "kg",
    qty: 1.2,
    max: 5,
    min: 1,
    cost_per: 350000,
  },
  {
    id: "ice",
    name: "Đá viên",
    ico: "🧊",
    unit: "kg",
    qty: 25,
    max: 50,
    min: 10,
    cost_per: 3000,
  },
  {
    id: "cara",
    name: "Syrup Caramel",
    ico: "🍮",
    unit: "chai",
    qty: 4,
    max: 8,
    min: 2,
    cost_per: 95000,
  },
  {
    id: "van",
    name: "Syrup Vanilla",
    ico: "🍦",
    unit: "chai",
    qty: 3,
    max: 8,
    min: 2,
    cost_per: 95000,
  },
  {
    id: "hazl",
    name: "Syrup Hazelnut",
    ico: "🌰",
    unit: "chai",
    qty: 1,
    max: 8,
    min: 2,
    cost_per: 95000,
  },
  {
    id: "soy",
    name: "Sữa đậu nành",
    ico: "🌱",
    unit: "L",
    qty: 5,
    max: 12,
    min: 3,
    cost_per: 18000,
  },
  {
    id: "oat",
    name: "Oat milk",
    ico: "🌾",
    unit: "L",
    qty: 2.5,
    max: 10,
    min: 2,
    cost_per: 42000,
  },
  {
    id: "alm",
    name: "Almond milk",
    ico: "🌰",
    unit: "L",
    qty: 3,
    max: 10,
    min: 2,
    cost_per: 55000,
  },
  {
    id: "cup",
    name: "Ly giấy Tall",
    ico: "🥤",
    unit: "cái",
    qty: 120,
    max: 200,
    min: 40,
    cost_per: 2500,
  },
  {
    id: "cup2",
    name: "Ly giấy Grande",
    ico: "🥤",
    unit: "cái",
    qty: 95,
    max: 200,
    min: 40,
    cost_per: 3000,
  },
  {
    id: "wip",
    name: "Whipped Cream",
    ico: "🍦",
    unit: "chai",
    qty: 2,
    max: 6,
    min: 1,
    cost_per: 65000,
  },
  {
    id: "choco",
    name: "Sô-cô-la bột",
    ico: "🍫",
    unit: "kg",
    qty: 2.8,
    max: 6,
    min: 1,
    cost_per: 180000,
  },
  {
    id: "cook",
    name: "Croissant/Bánh",
    ico: "🥐",
    unit: "cái",
    qty: 18,
    max: 50,
    min: 5,
    cost_per: 20000,
  },
];

/* Product images */
const IMGS = {
  1: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&q=80",
  2: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&q=80",
  3: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=300&q=80",
  4: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&q=80",
  5: "https://images.unsplash.com/photo-1542778151982-f4e550cf2e3e?w=300&q=80",
  6: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=300&q=80",
  7: "https://images.unsplash.com/photo-1620360289431-bf0f7e9aac6e?w=300&q=80",
  8: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&q=80",
  9: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80",
  10: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80",
  11: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&q=80",
  12: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
  13: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=80",
  14: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&q=80",
  20: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&q=80",
  21: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=300&q=80",
  22: "https://images.unsplash.com/photo-1619740455993-9d622aad7e4c?w=300&q=80",
  23: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=300&q=80",
  24: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=300&q=80",
  25: "https://images.unsplash.com/photo-1572490122747-3e9523c145b4?w=300&q=80",
  26: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=300&q=80",
  27: "https://images.unsplash.com/photo-1579888944880-d98341245702?w=300&q=80",
  28: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80",
  29: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&q=80",
  30: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=300&q=80",
  40: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  41: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&q=80",
  42: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&q=80",
  43: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&q=80",
  44: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&q=80",
  45: "https://images.unsplash.com/photo-1546173159-315724a31696?w=300&q=80",
  46: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80",
  50: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=300&q=80",
  51: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&q=80",
  55: "https://images.unsplash.com/photo-1546173159-315724a31696?w=300&q=80",
  56: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&q=80",
  60: "https://images.unsplash.com/photo-1542778151982-f4e550cf2e3e?w=300&q=80",
  61: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80",
  62: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=300&q=80",
  70: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80",
  71: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&q=80",
  72: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=300&q=80",
  73: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
};

const MENU = [
  {
    id: 1,
    name: "Caffè Latte",
    ico: "🥛",
    cat: "Espresso & Coffee",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 2,
    name: "Cappuccino",
    ico: "🫧",
    cat: "Espresso & Coffee",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 3,
    name: "Flat White",
    ico: "🍶",
    cat: "Espresso & Coffee",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 4,
    name: "Almondmilk Hazelnut Latte",
    ico: "🌰",
    cat: "Espresso & Coffee",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 5,
    name: "Caffè Mocha",
    ico: "🍫",
    cat: "Espresso & Coffee",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 6,
    name: "Caramel Macchiato",
    ico: "☕",
    cat: "Espresso & Coffee",
    tall: 85000,
    grande: 95000,
  },
  {
    id: 7,
    name: "Brown Sugar Oatmilk Iced Shaken Espresso",
    ico: "🟤",
    cat: "Espresso & Coffee",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 8,
    name: "Cold Foam Iced Espresso",
    ico: "🧊",
    cat: "Espresso & Coffee",
    tall: 65000,
    grande: 75000,
  },
  {
    id: 9,
    name: "Caffè Americano",
    ico: "⚫",
    cat: "Espresso & Coffee",
    tall: 60000,
    grande: 70000,
  },
  {
    id: 10,
    name: "Asian Dolce Latte",
    ico: "✨",
    cat: "Espresso & Coffee",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 11,
    name: "Espresso",
    ico: "🔥",
    cat: "Espresso & Coffee",
    s1: 40000,
    s2: 55000,
    lbl: ["Solo", "Doppio"],
  },
  {
    id: 12,
    name: "Cold Brew",
    ico: "🧊",
    cat: "Espresso & Coffee",
    s1: 65000,
    s2: 75000,
    lbl: ["Regular", "Large"],
  },
  {
    id: 13,
    name: "Honey Ruby Grapefruit Cold Brew",
    ico: "🍊",
    cat: "Espresso & Coffee",
    s1: 80000,
    s2: 90000,
    lbl: ["Regular", "Large"],
  },
  {
    id: 14,
    name: "Iced Dolce Misto",
    ico: "🌙",
    cat: "Espresso & Coffee",
    s1: 60000,
    s2: 70000,
    lbl: ["Regular", "Large"],
  },
  {
    id: 20,
    name: "Coffee Frappuccino",
    ico: "🧋",
    cat: "Frappuccino",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 21,
    name: "Caramel Frappuccino",
    ico: "🍮",
    cat: "Frappuccino",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 22,
    name: "Mocha Frappuccino",
    ico: "🍫",
    cat: "Frappuccino",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 23,
    name: "Espresso Frappuccino",
    ico: "⚡",
    cat: "Frappuccino",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 24,
    name: "Java Chip Frappuccino",
    ico: "🪨",
    cat: "Frappuccino",
    tall: 100000,
    grande: 110000,
  },
  {
    id: 25,
    name: "Brown Sugar Cocoa Oatmilk Frappuccino",
    ico: "🟤",
    cat: "Frappuccino",
    tall: 100000,
    grande: 110000,
  },
  {
    id: 26,
    name: "Vanilla Cream Frappuccino",
    ico: "🍦",
    cat: "Frappuccino",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 27,
    name: "Caramel Cream Frappuccino",
    ico: "🍯",
    cat: "Frappuccino",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 28,
    name: "Strawberries Cream Frappuccino",
    ico: "🍓",
    cat: "Frappuccino",
    tall: 90000,
    grande: 100000,
  },
  {
    id: 29,
    name: "Green Tea Cream Frappuccino",
    ico: "💚",
    cat: "Frappuccino",
    tall: 100000,
    grande: 110000,
  },
  {
    id: 30,
    name: "Chocolate Chip Cream Frappuccino",
    ico: "🍪",
    cat: "Frappuccino",
    tall: 100000,
    grande: 110000,
  },
  {
    id: 40,
    name: "Pure Matcha Latte",
    ico: "🍵",
    cat: "Tea & Refreshment",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 41,
    name: "Pure Matcha & Espresso Fusion",
    ico: "🍵",
    cat: "Tea & Refreshment",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 42,
    name: "Ruby Grapefruit & Honey Black Tea",
    ico: "🍊",
    cat: "Tea & Refreshment",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 43,
    name: "Iced Pomegranate Pearls Hibiscus",
    ico: "🫐",
    cat: "Tea & Refreshment",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 44,
    name: "Iced Strawberry Green Tea Lemonade",
    ico: "🍓",
    cat: "Tea & Refreshment",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 45,
    name: "Iced Tea Lemonade (Black/Green/Hibiscus)",
    ico: "🍋",
    cat: "Tea & Refreshment",
    tall: 65000,
    grande: 75000,
  },
  {
    id: 46,
    name: "English Breakfast / Mint Citrus Tea",
    ico: "🫖",
    cat: "Tea & Refreshment",
    tall: 55000,
    grande: 65000,
  },
  {
    id: 50,
    name: "Strawberry Açaí Lemonade Refresher",
    ico: "🍓",
    cat: "Refreshers",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 51,
    name: "Pink Drink with Strawberry Açaí",
    ico: "🩷",
    cat: "Refreshers",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 55,
    name: "Mango Passion Fruit",
    ico: "🥭",
    cat: "Blended Juice",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 56,
    name: "Raspberry Black Currant",
    ico: "🫐",
    cat: "Blended Juice",
    tall: 80000,
    grande: 90000,
  },
  {
    id: 60,
    name: "Signature Hot Chocolate",
    ico: "🍫",
    cat: "Chocolate & Classics",
    tall: 75000,
    grande: 85000,
  },
  {
    id: 61,
    name: "Steamed Milk",
    ico: "🥛",
    cat: "Chocolate & Classics",
    tall: 40000,
    grande: 50000,
  },
  {
    id: 62,
    name: "Soy Milk",
    ico: "🌱",
    cat: "Chocolate & Classics",
    tall: 40000,
    grande: 50000,
  },
  { id: 70, name: "Croissant Bơ", ico: "🥐", cat: "Đồ ăn", fix: 45000 },
  {
    id: 71,
    name: "Muffin Chocolate",
    ico: "🧁",
    cat: "Đồ ăn",
    fix: 42000,
  },
  {
    id: 72,
    name: "Sandwich Gà Nướng",
    ico: "🥪",
    cat: "Đồ ăn",
    fix: 65000,
  },
  { id: 73, name: "Bánh Scone", ico: "🍞", cat: "Đồ ăn", fix: 38000 },
];

const MILKS = [
  "Whole",
  "Low Fat",
  "Skim",
  "Soy (+5k)",
  "Almondmilk (+5k)",
  "Oatmilk (+5k)",
];
const SWEETS = ["Not Sweet", "Less Sweet", "Regular", "Extra Sweet"];
const EXTRAS = [
  "Espresso Shot +15k",
  "Decaf Shot +15k",
  "Caramel Syrup +10k",
  "Hazelnut Syrup +10k",
  "Vanilla Syrup +10k",
  "Brown Sugar Syrup +10k",
  "Caramel Drizzle +10k",
  "Whipped Cream +10k",
  "Matcha Powder +10k",
];

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let cart = [],
  payMethod = "Tiền mặt",
  pendingItem = null;
let selSzIdx = 0,
  selMilk = "Whole",
  selSweet = "Regular",
  selExtras = [];
let ordCount = 1,
  selEmpIdx = 0,
  selShiftName = "Sáng";
let pinVal = "";
let currentMember = null,
  promoActive = false;
let kdsOrders = []; // KDS queue
let selectedMemberTemp = null;

// Session stats (per login)
let sessionRevenue = 0,
  sessionOrders = 0,
  sessionCashRevenue = 0;
let sessionOrderLog = []; // [{hour, items, total, emp, method}]
let empOrderCount = {}; // {empName: count}

// Inventory copy (mutable)
let invState = INVENTORY.map((i) => ({ ...i }));

const fmt = (n) => n.toLocaleString("vi-VN") + "đ";
const mkEl = (tag, cls) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
};

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function showToast(msg, type = "", dur = 3000) {
  const w = document.getElementById("toastWrap");
  const t = document.createElement("div");
  t.className = "toast" + (type ? " " + type : "");
  t.textContent = msg;
  w.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateY(8px)";
    t.style.transition = ".3s";
    setTimeout(() => t.remove(), 320);
  }, dur);
}

/* ══════════════════════════════════════
   LOGIN
══════════════════════════════════════ */
function selEmpFn(el, idx) {
  selEmpIdx = idx;
  document
    .querySelectorAll(".emp-card")
    .forEach((c) => c.classList.remove("sel"));
  el.classList.add("sel");
  document.getElementById("empGreet").textContent = EMPLOYEES[idx].name;
  pinVal = "";
  updatePinDots();
  updateLoginBtn();
  document.getElementById("loginErr").textContent = "";
}
function selShiftFn(el, name) {
  selShiftName = name;
  document
    .querySelectorAll(".shift-btn")
    .forEach((b) => b.classList.remove("sel"));
  el.classList.add("sel");
}
function pinKey(k) {
  if (pinVal.length >= 4) return;
  pinVal += k;
  updatePinDots();
  updateLoginBtn();
}
function pinDel() {
  pinVal = pinVal.slice(0, -1);
  updatePinDots();
  updateLoginBtn();
}
function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const d = document.getElementById("pd" + i);
    d.classList.toggle("filled", i < pinVal.length);
    d.classList.remove("shake");
  }
}
function updateLoginBtn() {
  document.getElementById("btnLogin").disabled = pinVal.length < 4;
}
function doLogin() {
  const emp = EMPLOYEES[selEmpIdx];
  if (pinVal !== emp.pin) {
    document.getElementById("loginErr").textContent =
      "❌ Sai mã PIN. Vui lòng thử lại.";
    pinVal = "";
    updatePinDots();
    updateLoginBtn();
    for (let i = 0; i < 4; i++)
      setTimeout(
        () => document.getElementById("pd" + i).classList.add("shake"),
        i * 40,
      );
    return;
  }
  document.getElementById("navEmp").textContent = emp.role + ": " + emp.name;
  document.getElementById("navShift").textContent =
    "Ca " + selShiftName.toLowerCase() + " · Học viện Ngân hàng";
  document.getElementById("rCashier").textContent = emp.name;
  document.getElementById("repShiftLabel").textContent =
    "Ca " + selShiftName + " · Học viện Ngân hàng · " + emp.name;
  // Reset session stats
  sessionRevenue = 0;
  sessionOrders = 0;
  sessionCashRevenue = 0;
  sessionOrderLog = [];
  empOrderCount = {};
  EMPLOYEES.forEach((e) => (empOrderCount[e.name] = 0));
  const ls = document.getElementById("loginScreen");
  ls.classList.add("hide");
  setTimeout(() => (ls.style.display = "none"), 450);
  renderInventory();
  renderReports();
}
function doLogout() {
  if (cart.length && !confirm("Còn đơn hàng chưa hoàn thành. Xác nhận kết ca?"))
    return;
  cart = [];
  renderOrder();
  pinVal = "";
  updatePinDots();
  updateLoginBtn();
  document.getElementById("loginErr").textContent = "";
  document.getElementById("empGreet").textContent = EMPLOYEES[selEmpIdx].name;
  const ls = document.getElementById("loginScreen");
  ls.style.display = "flex";
  ls.classList.remove("hide");
}

/* ══════════════════════════════════════
   VIEW SWITCHING
══════════════════════════════════════ */
function switchView(v) {
  document
    .querySelectorAll(".view")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".btn-nav")
    .forEach((b) => b.classList.remove("active"));
  const map = {
    pos: "posView",
    kds: "kdsView",
    inv: "inventoryView",
    rep: "reportsView",
  };
  const nmap = {
    pos: "navPOS",
    kds: "navKDS",
    inv: "navInv",
    rep: "navRep",
  };
  document.getElementById(map[v]).classList.add("active");
  document.getElementById(nmap[v]).classList.add("active");
  if (v === "kds") renderKDS();
  if (v === "inv") renderInventory();
  if (v === "rep") renderReports();
}

/* ══════════════════════════════════════
   CLOCK
══════════════════════════════════════ */
setInterval(() => {
  const n = new Date();
  document.getElementById("clock").textContent =
    n.toLocaleDateString("vi-VN") +
    " · " +
    n.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  // Auto-refresh KDS timer colors
  if (document.getElementById("kdsView").classList.contains("active"))
    renderKDSTimers();
}, 1000);

/* ══════════════════════════════════════
   CATEGORY & MENU RENDER
══════════════════════════════════════ */
const allCats = ["Tất cả", ...new Set(MENU.map((m) => m.cat))];
const catRow = document.getElementById("catRow");
let activeCat = "Tất cả";
allCats.forEach((c) => {
  const b = mkEl("button", "cat-tab" + (c === "Tất cả" ? " on" : ""));
  b.textContent = c;
  b.onclick = () => {
    activeCat = c;
    document
      .querySelectorAll(".cat-tab")
      .forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    renderMenu();
  };
  catRow.appendChild(b);
});

function basePrice(m) {
  return m.fix || m.s1 || m.tall;
}
function imgEl(id, ico, wrapCls, imgCls, fbCls) {
  const url = IMGS[id];
  const wrap = mkEl("div", wrapCls);
  if (url) {
    const img = mkEl("img", imgCls);
    img.src = url;
    img.alt = "";
    img.loading = "lazy";
    const fb = mkEl("div", fbCls);
    fb.textContent = ico;
    fb.style.display = "none";
    img.onerror = () => {
      img.style.display = "none";
      fb.style.display = "flex";
    };
    wrap.append(img, fb);
  } else {
    const fb = mkEl("div", fbCls);
    fb.textContent = ico;
    wrap.appendChild(fb);
  }
  return wrap;
}

function getStockStatus(item) {
  // Basic stock mapping
  const foodIds = [70, 71, 72, 73];
  if (foodIds.includes(item.id)) {
    const inv = invState.find((i) => i.id === "cook");
    if (inv && inv.qty <= 0) return "out";
    if (inv && inv.qty <= inv.min) return "low";
  }
  return "ok";
}

function renderMenu() {
  const q = document.getElementById("srch").value.toLowerCase();
  const g = document.getElementById("prodGrid");
  g.innerHTML = "";
  MENU.filter(
    (m) =>
      (activeCat === "Tất cả" || m.cat === activeCat) &&
      (!q || m.name.toLowerCase().includes(q)),
  ).forEach((m) => {
    const st = getStockStatus(m);
    const card = mkEl(
      "div",
      "prod-card" + (st === "out" ? " out-of-stock" : ""),
    );
    const plus = mkEl("div", "prod-add");
    plus.textContent = "+";
    if (st === "low") {
      const badge = mkEl("div", "stock-badge");
      badge.textContent = "Sắp hết";
      card.appendChild(badge);
    }
    const iWrap = imgEl(
      m.id,
      m.ico,
      "prod-img-wrap",
      "prod-img",
      "prod-img-fb",
    );
    const body = mkEl("div", "prod-body");
    body.innerHTML = `<div class="prod-name">${m.name}</div><div class="prod-price">${fmt(basePrice(m))}</div><div class="prod-cat">${m.cat}</div>`;
    card.append(plus, iWrap, body);
    if (st !== "out") card.onclick = () => openModal(m);
    g.appendChild(card);
  });
}
renderMenu();

/* ══════════════════════════════════════
   CUSTOMIZE MODAL
══════════════════════════════════════ */
function openModal(item) {
  if (item.fix) {
    addCart(item, null, item.fix, {});
    return;
  }
  pendingItem = item;
  selSzIdx = 0;
  selMilk = "Whole";
  selSweet = "Regular";
  selExtras = [];
  document.getElementById("mhName").textContent = item.name;
  document.getElementById("mhCat").textContent = item.cat;
  const iw = document.getElementById("mhImgWrap");
  iw.innerHTML = "";
  const url = IMGS[item.id];
  if (url)
    iw.innerHTML = `<img class="mhd-img" src="${url}" alt="${item.name}" onerror="this.style.display='none';this.nextSibling.style.display='flex'"><div class="mhd-img-fb" style="display:none">${item.ico}</div>`;
  else iw.innerHTML = `<div class="mhd-img-fb">${item.ico}</div>`;
  const body = document.getElementById("modalBody");
  body.innerHTML = "";
  addSec(body, "Kích thước");
  const szg = mkEl("div", "sz-grid");
  const sizes = item.s1
    ? [
        { label: (item.lbl || ["S1", "S2"])[0], vol: "", price: item.s1 },
        { label: (item.lbl || ["S1", "S2"])[1], vol: "", price: item.s2 },
      ]
    : [
        { label: "Tall", vol: "12 oz", price: item.tall },
        { label: "Grande", vol: "16 oz", price: item.grande },
      ];
  sizes.forEach((s, i) => {
    const d = mkEl("div", "sz-opt" + (i === 0 ? " on" : ""));
    d.innerHTML = `<b>${s.label}</b><small>${s.vol}</small><s>${fmt(s.price)}</s>`;
    d.onclick = () => {
      selSzIdx = i;
      szg.querySelectorAll(".sz-opt").forEach((x) => x.classList.remove("on"));
      d.classList.add("on");
    };
    szg.appendChild(d);
  });
  body.appendChild(szg);
  const noMilk = ["Refreshers", "Blended Juice", "Đồ ăn"];
  if (!noMilk.includes(item.cat)) {
    addSec(body, "Loại sữa");
    const mc = mkEl("div", "chips-row");
    MILKS.forEach((mk) => {
      const c = mkEl("div", "chip-btn" + (mk === "Whole" ? " on" : ""));
      c.textContent = mk;
      c.onclick = () => {
        selMilk = mk;
        mc.querySelectorAll(".chip-btn").forEach((x) =>
          x.classList.remove("on"),
        );
        c.classList.add("on");
      };
      mc.appendChild(c);
    });
    body.appendChild(mc);
    addSec(body, "Độ ngọt");
    const sc = mkEl("div", "chips-row");
    SWEETS.forEach((sw) => {
      const c = mkEl("div", "chip-btn" + (sw === "Regular" ? " on" : ""));
      c.textContent = sw;
      c.onclick = () => {
        selSweet = sw;
        sc.querySelectorAll(".chip-btn").forEach((x) =>
          x.classList.remove("on"),
        );
        c.classList.add("on");
      };
      sc.appendChild(c);
    });
    body.appendChild(sc);
  }
  addSec(body, "Thêm (tuỳ chọn)");
  const ec = mkEl("div", "chips-row");
  ec.style.flexWrap = "wrap";
  EXTRAS.forEach((ex) => {
    const c = mkEl("div", "extra-btn");
    c.textContent = ex;
    c.onclick = () => {
      if (selExtras.includes(ex)) {
        selExtras = selExtras.filter((x) => x !== ex);
        c.classList.remove("on");
      } else {
        selExtras.push(ex);
        c.classList.add("on");
      }
    };
    ec.appendChild(c);
  });
  body.appendChild(ec);
  document.getElementById("szOverlay").classList.add("open");
}
function addSec(parent, txt) {
  const s = mkEl("div", "opt-sec");
  s.textContent = txt;
  parent.appendChild(s);
}
function closeModal() {
  document.getElementById("szOverlay").classList.remove("open");
}
function confirmModal() {
  if (!pendingItem) return;
  const item = pendingItem;
  const sizes = item.s1
    ? [
        { label: (item.lbl || ["S1", "S2"])[0], price: item.s1 },
        { label: (item.lbl || ["S1", "S2"])[1], price: item.s2 },
      ]
    : [
        { label: "Tall", price: item.tall },
        { label: "Grande", price: item.grande },
      ];
  const sz = sizes[selSzIdx];
  let extra = 0;
  selExtras.forEach((e) => {
    if (e.includes("+15k")) extra += 15000;
    else if (e.includes("+10k")) extra += 10000;
  });
  if (selMilk && selMilk.includes("+5k")) extra += 5000;
  addCart(item, sz.label, sz.price + extra, {
    milk: selMilk,
    sweet: selSweet,
    extras: [...selExtras],
  });
  closeModal();
}

/* ══════════════════════════════════════
   CART
══════════════════════════════════════ */
function addCart(item, size, price, opts) {
  const key =
    item.id +
    (size || "") +
    (opts.milk || "") +
    (opts.sweet || "") +
    (opts.extras || []).join("");
  const ex = cart.find((x) => x.key === key);
  if (ex) ex.qty++;
  else
    cart.push({
      key,
      id: item.id,
      name: item.name,
      ico: item.ico,
      size,
      price,
      qty: 1,
      opts,
      cat: item.cat,
    });
  renderOrder();
  // CRM personal suggestion
  if (
    currentMember &&
    currentMember.lastItem &&
    item.name.includes(currentMember.lastItem.split(" ")[0])
  ) {
    showToast(
      "⭐ " + currentMember.name + " thường gọi " + currentMember.lastItem,
      "gold",
      2500,
    );
  }
}
function delCart(key) {
  cart = cart.filter((x) => x.key !== key);
  renderOrder();
}
function chgQty(key, d) {
  const it = cart.find((x) => x.key === key);
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) cart = cart.filter((x) => x.key !== key);
  renderOrder();
}

function calcDiscount(sub) {
  if (!promoActive) return 0;
  // "Mua 1 tặng 1" — giảm item rẻ nhất
  if (cart.length < 1) return 0;
  const prices = cart.map((i) => i.price);
  return Math.min(...prices);
}

function renderOrder() {
  const el = document.getElementById("ordList");
  const se = document.getElementById("ordSum");
  if (!cart.length) {
    el.innerHTML =
      '<div class="empty-state"><span class="ei">☕</span><p>Chọn sản phẩm từ menu bên trái</p></div>';
    se.style.display = "none";
    document.getElementById("chargeBtn").disabled = true;
    document.getElementById("chargeBtn").textContent = "Thanh toán";
    document.getElementById("voidBtn").disabled = true;
    return;
  }
  el.innerHTML = "";
  cart.forEach((it) => {
    const tags = [];
    if (it.opts?.milk && it.opts.milk !== "Whole")
      tags.push(it.opts.milk.replace(" (+5k)", ""));
    if (it.opts?.sweet && it.opts.sweet !== "Regular") tags.push(it.opts.sweet);
    if (it.opts?.extras)
      it.opts.extras.forEach((e) => tags.push(e.split(" ")[0]));
    const tagHtml = tags.length
      ? `<div class="oi-tags">${tags.map((t) => `<span class="oi-tag">${t}</span>`).join("")}</div>`
      : "";
    const url = IMGS[it.id];
    const thumbHtml = url
      ? `<img class="oi-thumb" src="${url}" alt="" onerror="this.style.display='none';this.nextSibling.style.display='flex'"><div class="oi-thumb-fb" style="display:none">${it.ico}</div>`
      : `<div class="oi-thumb-fb">${it.ico}</div>`;
    const row = mkEl("div", "ord-item");
    row.innerHTML = `${thumbHtml}<div class="oi-body"><div class="oi-name">${it.name}</div><div class="oi-sz">${it.size || "Đồ ăn"}</div>${tagHtml}<div class="oi-ctrl"><button class="qbtn" onclick="chgQty('${it.key}',-1)">−</button><span class="qnum">${it.qty}</span><button class="qbtn" onclick="chgQty('${it.key}',1)">+</button></div></div><span class="oi-price">${fmt(it.price * it.qty)}</span><button class="oi-del" onclick="delCart('${it.key}')">✕</button>`;
    el.appendChild(row);
  });
  const sub = cart.reduce((a, x) => a + x.price * x.qty, 0);
  const disc = calcDiscount(sub);
  const subAfter = sub - disc;
  const vat = Math.round(subAfter * 0.1);
  const grand = subAfter + vat;
  document.getElementById("subT").textContent = fmt(sub);
  document.getElementById("discountRow").style.display =
    disc > 0 ? "flex" : "none";
  document.getElementById("discountAmt").textContent = "-" + fmt(disc);
  document.getElementById("discountLabel").textContent = promoActive
    ? "🎉 Khuyến mãi"
    : "Giảm giá";
  document.getElementById("vatT").textContent = fmt(vat);
  document.getElementById("grandT").textContent = fmt(grand);
  se.style.display = "block";
  document.getElementById("chargeBtn").disabled = false;
  document.getElementById("chargeBtn").textContent =
    "Thanh toán  " + fmt(grand);
  document.getElementById("voidBtn").disabled = false;
}

/* ══════════════════════════════════════
   CRM — MEMBER
══════════════════════════════════════ */
function openMemberModal() {
  selectedMemberTemp = null;
  document.getElementById("memberSearch").value = "";
  renderMemberList(MEMBERS);
  document.getElementById("memberOverlay").classList.add("open");
}
function closeMemberModal() {
  document.getElementById("memberOverlay").classList.remove("open");
}
function filterMembers() {
  const q = document.getElementById("memberSearch").value.toLowerCase();
  renderMemberList(
    MEMBERS.filter(
      (m) => m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q),
    ),
  );
}
function renderMemberList(list) {
  const el = document.getElementById("memberList");
  el.innerHTML = "";
  if (!list.length) {
    el.innerHTML = '<div class="member-nosel">Không tìm thấy thành viên</div>';
    return;
  }
  list.forEach((m) => {
    const row = mkEl(
      "div",
      "member-row" + (selectedMemberTemp?.id === m.id ? " " : ""),
    );
    row.style.background =
      selectedMemberTemp?.id === m.id ? "var(--sb-gold-l)" : "";
    const levelColor =
      m.level === "Platinum"
        ? "#7B61FF"
        : m.level === "Gold"
          ? "var(--sb-gold)"
          : "var(--sb-green)";
    row.innerHTML = `<div class="member-ava">${m.ava}</div><div class="member-info"><div class="member-name">${m.name} <span style="font-size:10px;color:${levelColor};background:rgba(0,0,0,.05);padding:1px 6px;border-radius:4px">${m.level}</span></div><div class="member-stars">★ ${m.stars} Stars</div><div class="member-hist">Lần trước: ${m.lastItem}</div></div><div style="font-size:10.5px;color:var(--tx-hint)">${m.id}</div>`;
    row.onclick = () => {
      selectedMemberTemp = m;
      renderMemberList(list);
    };
    el.appendChild(row);
  });
}
function confirmMember() {
  if (!selectedMemberTemp) {
    showToast("Vui lòng chọn thành viên", "err");
    return;
  }
  currentMember = selectedMemberTemp;
  document.getElementById("custName").value = currentMember.name;
  document.getElementById("memberTagName").textContent = currentMember.name;
  document.getElementById("memberTagLevel").textContent = currentMember.level;
  document.getElementById("memberTagStars").textContent = currentMember.stars;
  document.getElementById("memberTag").style.display = "flex";
  // Check promo for Gold/Platinum
  if (currentMember.level === "Gold" || currentMember.level === "Platinum") {
    if (Math.random() > 0.5) {
      // Simulate promo check from HQ
      promoActive = true;
      document.getElementById("promoBanner").classList.add("show");
      document.getElementById("promoText").textContent =
        '🎉 Khuyến mãi "Mua 1 tặng 1" đang áp dụng!';
    }
  }
  closeMemberModal();
  renderOrder();
  showToast(
    "✅ Đã nhận diện: " + currentMember.name + " (" + currentMember.level + ")",
    "gold",
    3000,
  );
}
function clearMember() {
  currentMember = null;
  clearPromo();
  document.getElementById("memberTag").style.display = "none";
  document.getElementById("custName").value = "";
  renderOrder();
}
function clearPromo() {
  promoActive = false;
  document.getElementById("promoBanner").classList.remove("show");
  renderOrder();
}

/* ══════════════════════════════════════
   PAYMENT
══════════════════════════════════════ */
function selPay(el, m) {
  document
    .querySelectorAll(".pay-btn")
    .forEach((b) => b.classList.remove("on"));
  el.classList.add("on");
  payMethod = m;
}
/* ══════════════════════════════════════
   BANK LINK STATE & FUNCTIONS
══════════════════════════════════════ */
// bankLinked: per-employee linked status & info
const bankLinkedData = {}; // { empName: { bank, acc, name } }
let _pendingPayAfterLink = false;
let _payModalStep = 1;
let _payModalMethod = "cash"; // "cash" or "qr"
let _payGrand = 0;

function isBankLinked() {
  const emp = EMPLOYEES[selEmpIdx];
  return !!bankLinkedData[emp.name];
}

function openBankLink() {
  document.getElementById("bankSelect").value = "";
  document.getElementById("bankAccNum").value = "";
  document.getElementById("bankAccName").value = "";
  document.getElementById("bankLinkOverlay").classList.add("open");
}
function closeBankLink() {
  document.getElementById("bankLinkOverlay").classList.remove("open");
  _pendingPayAfterLink = false;
}
function confirmBankLink() {
  const bank = document.getElementById("bankSelect").value;
  const acc = document.getElementById("bankAccNum").value.trim();
  const name = document.getElementById("bankAccName").value.trim();
  if (!bank) {
    showToast("Vui lòng chọn ngân hàng", "err", 2500);
    return;
  }
  if (!acc) {
    showToast("Vui lòng nhập số tài khoản", "err", 2500);
    return;
  }
  if (!name) {
    showToast("Vui lòng nhập tên chủ tài khoản", "err", 2500);
    return;
  }
  const emp = EMPLOYEES[selEmpIdx];
  bankLinkedData[emp.name] = { bank, acc, name };
  document.getElementById("bankLinkOverlay").classList.remove("open");
  showToast("✅ Đã liên kết " + bank + " thành công!", "gold", 3000);
  if (_pendingPayAfterLink) {
    _pendingPayAfterLink = false;
    setTimeout(openPayStepModal, 300);
  }
}

/* ══════════════════════════════════════
   STEP-BY-STEP PAYMENT MODAL
══════════════════════════════════════ */
function doCharge() {
  if (!cart.length) return;
  const sub = cart.reduce((a, x) => a + x.price * x.qty, 0);
  const disc = calcDiscount(sub);
  const subAfter = sub - disc;
  const vat = Math.round(subAfter * 0.1);
  _payGrand = subAfter + vat;

  // Check bank link
  if (!isBankLinked()) {
    _pendingPayAfterLink = true;
    openBankLink();
    return;
  }
  openPayStepModal();
}

function openPayStepModal() {
  _payModalStep = 1;
  _payModalMethod = "cash";
  document.getElementById("payTotalDisplay").textContent = fmt(_payGrand);
  document.getElementById("payTotalCash").textContent = fmt(_payGrand);
  document.getElementById("payTotalQR").textContent = fmt(_payGrand);
  // Reset method selection
  document.getElementById("pmCash").classList.add("sel");
  document.getElementById("pmQR").classList.remove("sel");
  document.getElementById("cashGiven").value = "";
  document.getElementById("changeAmt").textContent = "—";
  document.getElementById("changeBox").classList.remove("negative");
  // Show/hide panels for cash
  document.getElementById("cashPanel").style.display = "block";
  document.getElementById("qrPanel").style.display = "none";
  updatePayStepUI();
  document.getElementById("payStepOverlay").classList.add("open");
}

function closePayModal() {
  document.getElementById("payStepOverlay").classList.remove("open");
}

function selectPayModalMethod(m) {
  _payModalMethod = m;
  document.getElementById("pmCash").classList.toggle("sel", m === "cash");
  document.getElementById("pmQR").classList.toggle("sel", m === "qr");
}

function updatePayStepUI() {
  const tabs = [
    document.getElementById("payTab1"),
    document.getElementById("payTab2"),
    document.getElementById("payTab3"),
  ];
  const panels = [
    document.getElementById("payPanel1"),
    document.getElementById("payPanel2"),
    document.getElementById("payPanel3"),
  ];
  tabs.forEach((t, i) => {
    t.classList.toggle("active", i + 1 === _payModalStep);
    t.classList.toggle("done", i + 1 < _payModalStep);
  });
  panels.forEach((p, i) =>
    p.classList.toggle("active", i + 1 === _payModalStep),
  );
  const backBtn = document.getElementById("payBtnBack");
  const nextBtn = document.getElementById("payBtnNext");
  backBtn.textContent = _payModalStep === 1 ? "✕ Đóng" : "← Quay lại";
  if (_payModalStep < 3) {
    nextBtn.textContent = "Tiếp tục →";
    nextBtn.disabled = false;
  } else {
    nextBtn.textContent = "✅ Xác nhận dòng tiền";
    nextBtn.disabled = false;
  }
  document.getElementById("payModalSubtitle").textContent =
    _payModalStep === 1
      ? "Bước 1: Chọn phương thức thanh toán"
      : _payModalStep === 2
        ? _payModalMethod === "cash"
          ? "Bước 2: Nhập số tiền khách đưa"
          : "Bước 2: Hiển thị mã QR"
        : "Bước 3: Xác nhận hoàn tất giao dịch";
}

function calcChange() {
  const given = parseInt(document.getElementById("cashGiven").value) || 0;
  const change = given - _payGrand;
  const box = document.getElementById("changeBox");
  if (given <= 0) {
    document.getElementById("changeAmt").textContent = "—";
    box.classList.remove("negative");
    return;
  }
  if (change < 0) {
    document.getElementById("changeAmt").textContent =
      "Thiếu " + fmt(Math.abs(change));
    box.classList.add("negative");
  } else {
    document.getElementById("changeAmt").textContent = fmt(change);
    box.classList.remove("negative");
  }
}

function payGoBack() {
  if (_payModalStep === 1) {
    closePayModal();
    return;
  }
  _payModalStep--;
  updatePayStepUI();
}

function payGoNext() {
  if (_payModalStep === 1) {
    // Move to step 2, setup cash or QR
    _payModalStep = 2;
    if (_payModalMethod === "cash") {
      document.getElementById("cashPanel").style.display = "block";
      document.getElementById("qrPanel").style.display = "none";
    } else {
      document.getElementById("cashPanel").style.display = "none";
      document.getElementById("qrPanel").style.display = "block";
      // Fill QR bank info
      const emp = EMPLOYEES[selEmpIdx];
      const bd = bankLinkedData[emp.name] || {};
      document.getElementById("qrBankName").textContent = bd.bank || "—";
      document.getElementById("qrAccNum").textContent = bd.acc || "—";
      document.getElementById("qrAccOwner").textContent = bd.name || "—";
    }
    updatePayStepUI();
  } else if (_payModalStep === 2) {
    // Validate cash if cash method
    if (_payModalMethod === "cash") {
      const given = parseInt(document.getElementById("cashGiven").value) || 0;
      if (given <= 0) {
        showToast("Vui lòng nhập số tiền khách đưa", "err", 2500);
        return;
      }
      if (given < _payGrand) {
        showToast("Số tiền khách đưa chưa đủ!", "err", 2500);
        return;
      }
    }
    // Move to step 3 - fill confirm panel
    _payModalStep = 3;
    const methodLabel =
      _payModalMethod === "cash" ? "💵 Tiền mặt" : "📱 Chuyển khoản QR";
    document.getElementById("confirmMethod").textContent = methodLabel;
    document.getElementById("confirmTotal").textContent = fmt(_payGrand);
    const confirmChangeRow = document.getElementById("confirmChangeRow");
    if (_payModalMethod === "cash") {
      const given = parseInt(document.getElementById("cashGiven").value) || 0;
      const change = given - _payGrand;
      document.getElementById("confirmChange").textContent = fmt(change);
      confirmChangeRow.style.display = "flex";
    } else {
      confirmChangeRow.style.display = "none";
    }
    updatePayStepUI();
  } else if (_payModalStep === 3) {
    // Final confirmation — complete payment
    closePayModal();
    finalizePayment();
  }
}

function finalizePayment() {
  const cust = document.getElementById("custName").value || "Khách vãng lai";
  const sub = cart.reduce((a, x) => a + x.price * x.qty, 0);
  const disc = calcDiscount(sub);
  const subAfter = sub - disc;
  const vat = Math.round(subAfter * 0.1);
  const grand = subAfter + vat;
  const now = new Date();
  const ordNum = "#SB-" + String(ordCount).padStart(4, "0");
  const finalMethod =
    _payModalMethod === "cash" ? "Tiền mặt" : "Chuyển khoản QR";
  payMethod = finalMethod;

  // Populate receipt
  document.getElementById("rNum").textContent = ordNum;
  document.getElementById("rTime").textContent = now.toLocaleString("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
  });
  document.getElementById("rCust").textContent = cust;
  document.getElementById("rPay").textContent = finalMethod;
  document.getElementById("rSub").textContent = fmt(sub);
  document.getElementById("rVat").textContent = fmt(vat);
  document.getElementById("rTotal").textContent = fmt(grand);
  if (disc > 0) {
    document.getElementById("rDiscRow").style.display = "flex";
    document.getElementById("rDiscLabel").textContent = "🎉 Khuyến mãi";
    document.getElementById("rDisc").textContent = "-" + fmt(disc);
  } else {
    document.getElementById("rDiscRow").style.display = "none";
  }

  const ri = document.getElementById("rItems");
  ri.innerHTML = "";
  cart.forEach((it) => {
    const d = mkEl("div", "rec-line");
    d.innerHTML =
      '<span class="rn">' +
      it.ico +
      " " +
      it.name +
      (it.size ? " (" + it.size + ")" : "") +
      " x" +
      it.qty +
      '</span><span class="rp">' +
      fmt(it.price * it.qty) +
      "</span>";
    ri.appendChild(d);
  });

  // CRM Stars
  if (currentMember) {
    const starsEarned = Math.floor(grand / 1000);
    currentMember.stars += starsEarned;
    document.getElementById("recStars").style.display = "block";
    document.getElementById("recStarsAmt").textContent = starsEarned;
    document.getElementById("recStarsMember").textContent = currentMember.name;
    document.getElementById("recStarsTotal").textContent = currentMember.stars;
    document.getElementById("memberTagStars").textContent = currentMember.stars;
    const mi = MEMBERS.find((m) => m.id === currentMember.id);
    if (mi) mi.stars = currentMember.stars;
  } else {
    document.getElementById("recStars").style.display = "none";
  }

  // Send to KDS
  kdsOrders.unshift({
    id: ordNum,
    cust,
    time: Date.now(),
    status: "pending",
    items: cart.map((i) => ({ ...i })),
  });

  // Update inventory
  deductInventory(cart);

  // Session stats
  sessionRevenue += grand;
  sessionOrders++;
  if (finalMethod === "Tiền mặt") sessionCashRevenue += grand;
  const emp = EMPLOYEES[selEmpIdx];
  empOrderCount[emp.name] = (empOrderCount[emp.name] || 0) + 1;
  sessionOrderLog.push({
    hour: now.getHours(),
    items: [...cart],
    total: grand,
    emp: emp.name,
    method: finalMethod,
  });

  showToast("🎉 Thanh toán thành công! Đơn " + ordNum, "gold", 3000);
  document.getElementById("recOverlay").classList.add("open");
}
function doVoid() {
  if (!cart.length) return;
  if (confirm("Xác nhận hủy toàn bộ đơn hàng này?")) {
    cart = [];
    clearMember();
    clearPromo();
    renderOrder();
  }
}
function newOrder() {
  document.getElementById("recOverlay").classList.remove("open");
  cart = [];
  ordCount++;
  document.getElementById("ordNum").textContent =
    "#SB-" + String(ordCount).padStart(4, "0");
  clearMember();
  clearPromo();
  renderOrder();
  if (document.getElementById("kdsView").classList.contains("active"))
    renderKDS();
  renderMenu(); // Refresh stock badges
}

/* ══════════════════════════════════════
   INVENTORY
══════════════════════════════════════ */
function deductInventory(items) {
  items.forEach((it) => {
    const cats = [
      "Espresso & Coffee",
      "Frappuccino",
      "Tea & Refreshment",
      "Chocolate & Classics",
    ];
    if (cats.includes(it.cat)) {
      // Deduct coffee
      if (["Espresso & Coffee", "Frappuccino"].includes(it.cat)) {
        const c = invState.find((i) => i.id === "cof");
        if (c) c.qty = Math.max(0, +(c.qty - 0.02 * it.qty).toFixed(2));
        const cu = invState.find((i) => i.id === "cup");
        if (cu) cu.qty = Math.max(0, cu.qty - it.qty);
      }
      // Deduct milk
      if (it.opts?.milk !== "None") {
        const mlkId = it.opts?.milk?.includes("Soy")
          ? "soy"
          : it.opts?.milk?.includes("Almond")
            ? "alm"
            : it.opts?.milk?.includes("Oat")
              ? "oat"
              : "mlk";
        const m = invState.find((i) => i.id === mlkId);
        if (m) m.qty = Math.max(0, +(m.qty - 0.15 * it.qty).toFixed(2));
      }
      // Matcha
      if (it.name.toLowerCase().includes("matcha")) {
        const mc = invState.find((i) => i.id === "matcha");
        if (mc) mc.qty = Math.max(0, +(mc.qty - 0.01 * it.qty).toFixed(2));
      }
    }
    if (it.cat === "Đồ ăn") {
      const bk = invState.find((i) => i.id === "cook");
      if (bk) bk.qty = Math.max(0, bk.qty - it.qty);
    }
    // Extras
    if (it.opts?.extras) {
      it.opts.extras.forEach((ex) => {
        if (ex.includes("Caramel")) {
          const i = invState.find((x) => x.id === "cara");
          if (i) i.qty = Math.max(0, +(i.qty - 0.02).toFixed(2));
        }
        if (ex.includes("Hazelnut")) {
          const i = invState.find((x) => x.id === "hazl");
          if (i) i.qty = Math.max(0, +(i.qty - 0.02).toFixed(2));
        }
        if (ex.includes("Vanilla")) {
          const i = invState.find((x) => x.id === "van");
          if (i) i.qty = Math.max(0, +(i.qty - 0.02).toFixed(2));
        }
        if (ex.includes("Whipped")) {
          const i = invState.find((x) => x.id === "wip");
          if (i) i.qty = Math.max(0, +(i.qty - 0.05).toFixed(2));
        }
      });
    }
  });
  // Check low stock alerts
  invState.forEach((i) => {
    if (i.qty <= i.min && i.qty > 0)
      showToast(
        "⚠️ Sắp hết: " + i.name + " còn " + i.qty + i.unit,
        "warn",
        4000,
      );
    if (i.qty === 0)
      showToast("🚨 ĐÃ HẾT: " + i.name + " — Báo barista ngay!", "err", 5000);
  });
}

function renderInventory() {
  const g = document.getElementById("invGrid");
  g.innerHTML = "";
  invState.forEach((item) => {
    const pct = Math.min(100, Math.round((item.qty / item.max) * 100));
    const status =
      item.qty <= 0 ? "critical" : item.qty <= item.min ? "warn" : "ok";
    const label =
      item.qty <= 0
        ? "Hết hàng!"
        : item.qty <= item.min
          ? "Sắp hết"
          : "Còn hàng";
    const card = mkEl("div", "inv-card " + status);
    card.innerHTML = `
      <div class="inv-icon">${item.ico}</div>
      <div class="inv-name">${item.name}</div>
      <div class="inv-bar-wrap"><div class="inv-bar ${status}" style="width:${pct}%"></div></div>
      <div class="inv-stats">
        <span class="inv-qty" style="color:${status === "ok" ? "var(--sb-green)" : status === "warn" ? "var(--warn)" : "var(--err)"}">${item.qty} ${item.unit}</span>
        <span class="inv-status ${status}">${label}</span>
      </div>
      <div class="inv-adjust">
        <button class="inv-adj-btn" onclick="adjustInv('${item.id}',-1)">−1 ${item.unit}</button>
        <button class="inv-adj-btn" onclick="adjustInv('${item.id}',5)">+5 ${item.unit}</button>
        <button class="inv-adj-btn" onclick="adjustInv('${item.id}',20)">+20 ${item.unit}</button>
      </div>`;
    g.appendChild(card);
  });
}
function adjustInv(id, delta) {
  const item = invState.find((i) => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, +(item.qty + delta).toFixed(2));
  renderInventory();
  renderMenu();
  showToast(
    "✅ Cập nhật tồn kho: " + item.name + " → " + item.qty + " " + item.unit,
  );
}

/* ══════════════════════════════════════
   KDS
══════════════════════════════════════ */
function renderKDS() {
  const board = document.getElementById("kdsBoard");
  if (!kdsOrders.length) {
    board.innerHTML =
      '<div class="kds-empty">☕ Chưa có đơn nào — Đang chờ…</div>';
    document.getElementById("kdsPending").textContent = "0";
    document.getElementById("kdsMaking").textContent = "0";
    document.getElementById("kdsDone").textContent = "0";
    return;
  }
  const pending = kdsOrders.filter((o) => o.status === "pending");
  const making = kdsOrders.filter((o) => o.status === "making");
  const done = kdsOrders.filter((o) => o.status === "done").slice(0, 5);
  document.getElementById("kdsPending").textContent = pending.length;
  document.getElementById("kdsMaking").textContent = making.length;
  document.getElementById("kdsDone").textContent = done.length;
  board.innerHTML = "";
  const sections = [
    { label: "🔴 Đang chờ pha chế", orders: pending },
    { label: "🟢 Đang làm", orders: making },
    { label: "✅ Hoàn thành", orders: done },
  ];
  sections.forEach((sec) => {
    if (!sec.orders.length) return;
    const lbl = mkEl("div", "kds-section-label");
    lbl.textContent = sec.label;
    board.appendChild(lbl);
    sec.orders.forEach((o) => board.appendChild(buildKDSCard(o)));
  });
}
function buildKDSCard(o) {
  const elapsed = Math.floor((Date.now() - o.time) / 1000);
  const mins = Math.floor(elapsed / 60),
    secs = elapsed % 60;
  const timeStr = mins > 0 ? mins + "m " + secs + "s" : secs + "s";
  const timeCls = elapsed > 300 ? "urgent" : elapsed > 180 ? "ok" : "fresh";
  const card = mkEl("div", "kds-card " + o.status);
  const drinks = o.items.filter((i) => i.cat !== "Đồ ăn");
  const food = o.items.filter((i) => i.cat === "Đồ ăn");
  let itemsHtml = "";
  [...drinks, ...food].forEach((it) => {
    const opts = [];
    if (it.opts?.milk && it.opts.milk !== "Whole")
      opts.push(it.opts.milk.replace(" (+5k)", ""));
    if (it.opts?.sweet && it.opts.sweet !== "Regular") opts.push(it.opts.sweet);
    if (it.opts?.extras)
      it.opts.extras.forEach((e) => opts.push(e.split(" ")[0]));
    itemsHtml += `<div class="kds-item"><div class="kds-item-ico">${it.ico}</div><div class="kds-item-info"><div class="kds-item-name">${it.name} ${it.size ? "(" + it.size + ")" : ""}</div>${opts.length ? `<div class="kds-item-opts">${opts.join(" · ")}</div>` : ""}</div><div class="kds-qty">×${it.qty}</div></div>`;
  });
  let actionHtml = "";
  if (o.status === "pending")
    actionHtml = `<button class="kds-btn start" onclick="kdsUpdate('${o.id}','making')">▶ Bắt đầu pha</button>`;
  else if (o.status === "making")
    actionHtml = `<button class="kds-btn complete" onclick="kdsUpdate('${o.id}','done')">✓ Hoàn thành</button><button class="kds-btn undo" onclick="kdsUpdate('${o.id}','pending')">↩ Trả lại</button>`;
  else
    actionHtml = `<button class="kds-btn undo" onclick="kdsUpdate('${o.id}','making')">↩ Sửa</button>`;
  card.innerHTML = `
    <div class="kds-card-hd ${o.status}">
      <div><div class="kds-order-num">${o.id}</div><div class="kds-cust">☕ ${o.cust}</div></div>
      <div class="kds-time ${timeCls}" id="kds-timer-${o.id.replace("#", "")}">${timeStr}</div>
    </div>
    <div class="kds-items">${itemsHtml}</div>
    <div class="kds-actions">${actionHtml}</div>`;
  return card;
}
function kdsUpdate(id, newStatus) {
  const o = kdsOrders.find((x) => x.id === id);
  if (o) {
    o.status = newStatus;
    renderKDS();
  }
  if (newStatus === "done")
    showToast("✅ Đơn " + id + " hoàn thành!", "", "2000");
}
function renderKDSTimers() {
  kdsOrders.forEach((o) => {
    const el = document.getElementById("kds-timer-" + o.id.replace("#", ""));
    if (!el) return;
    const elapsed = Math.floor((Date.now() - o.time) / 1000);
    const mins = Math.floor(elapsed / 60),
      secs = elapsed % 60;
    el.textContent = mins > 0 ? mins + "m " + secs + "s" : secs + "s";
    el.className =
      "kds-time " + (elapsed > 300 ? "urgent" : elapsed > 180 ? "ok" : "fresh");
  });
}

/* ══════════════════════════════════════
   REPORTS
══════════════════════════════════════ */
function renderReports() {
  const body = document.getElementById("repBody");
  body.innerHTML = "";
  const emp = EMPLOYEES[selEmpIdx];

  // KPI row
  const cashPercent =
    sessionRevenue > 0
      ? Math.round((sessionCashRevenue / sessionRevenue) * 100)
      : 0;
  const avgOrder =
    sessionOrders > 0 ? Math.round(sessionRevenue / sessionOrders) : 0;
  const kpiRow = mkEl("div", "rep-kpi-row");
  kpiRow.innerHTML = `
    <div class="rep-kpi"><div class="rep-kpi-value">${fmt(sessionRevenue)}</div><div class="rep-kpi-label">DOANH THU CA</div><div class="rep-kpi-sub">↑ Cập nhật theo thời gian thực</div></div>
    <div class="rep-kpi" style="border-left-color:var(--sb-gold)"><div class="rep-kpi-value">${sessionOrders}</div><div class="rep-kpi-label">SỐ ĐƠN HÀNG</div><div class="rep-kpi-sub">avg ${fmt(avgOrder)}/đơn</div></div>
    <div class="rep-kpi" style="border-left-color:var(--warn)"><div class="rep-kpi-value">${fmt(sessionCashRevenue)}</div><div class="rep-kpi-label">TIỀN MẶT</div><div class="rep-kpi-sub">${cashPercent}% tổng doanh thu</div></div>
    <div class="rep-kpi" style="border-left-color:#9b59b6"><div class="rep-kpi-value">${kdsOrders.filter((o) => o.status === "done").length}</div><div class="rep-kpi-label">ĐỒ UỐNG HOÀN THÀNH</div><div class="rep-kpi-sub">KDS theo dõi thực tế</div></div>`;
  body.appendChild(kpiRow);

  // Hourly + Top products row
  const row1 = mkEl("div", "rep-row");

  // Hourly chart
  const hourlyCard = mkEl("div", "rep-card");
  const hourData = {};
  for (let h = 6; h <= 22; h++) hourData[h] = 0;
  sessionOrderLog.forEach((o) => {
    if (hourData[o.hour] !== undefined) hourData[o.hour] += o.total;
  });
  const maxRev = Math.max(...Object.values(hourData), 1);
  let barsHtml = '<div class="rep-hourly">';
  for (let h = 6; h <= 22; h += 2) {
    const rev = hourData[h] || 0;
    const pct = Math.round((rev / maxRev) * 100);
    const isPeak = rev === maxRev && rev > 0;
    barsHtml += `<div class="rep-bar-wrap"><div class="rep-bar-h ${isPeak ? "peak" : ""}" style="height:${Math.max(pct, 2)}%" data-tip="${h}h: ${fmt(rev)}"></div><div class="rep-bar-label">${h}h</div></div>`;
  }
  barsHtml += "</div>";
  hourlyCard.innerHTML = `<div class="rep-card-title">📈 Doanh thu theo giờ</div>${barsHtml}${maxRev > 1 ? "" : "<div style='font-size:12px;color:var(--tx-hint);text-align:center;margin-top:8px'>Chưa có giao dịch trong ca này</div>"}`;
  row1.appendChild(hourlyCard);

  // Top products
  const prodCount = {};
  sessionOrderLog.forEach((o) =>
    o.items.forEach((it) => {
      prodCount[it.name] = (prodCount[it.name] || 0) + it.qty;
    }),
  );
  const topProds = Object.entries(prodCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const maxCnt = topProds[0]?.[1] || 1;
  const topCard = mkEl("div", "rep-card");
  let prodHtml = '<div class="rep-prod-list">';
  if (!topProds.length)
    prodHtml +=
      '<div style="font-size:12px;color:var(--tx-hint);text-align:center;padding:12px">Chưa có dữ liệu</div>';
  else
    topProds.forEach(([name, cnt]) => {
      const item = MENU.find((m) => m.name === name);
      prodHtml += `<div class="rep-prod-row"><div class="rep-prod-ico">${item?.ico || "☕"}</div><div style="flex:1"><div class="rep-prod-name">${name}</div><div class="rep-prod-bar"><div class="rep-prod-fill" style="width:${Math.round((cnt / maxCnt) * 100)}%"></div></div></div><div class="rep-prod-cnt">${cnt}</div></div>`;
    });
  prodHtml += "</div>";
  topCard.innerHTML = `<div class="rep-card-title">🏆 Top sản phẩm bán chạy</div>${prodHtml}`;
  row1.appendChild(topCard);
  body.appendChild(row1);

  // Staff performance + Shift close
  const row2 = mkEl("div", "rep-row");
  const staffCard = mkEl("div", "rep-card");
  let staffHtml = "";
  EMPLOYEES.forEach((e) => {
    const cnt = empOrderCount[e.name] || 0;
    staffHtml += `<div class="rep-staff-row"><div class="rep-staff-ava">${e.ava}</div><div class="rep-staff-info"><div class="rep-staff-name">${e.name}</div><div class="rep-staff-role">${e.role}</div></div><div class="rep-staff-orders">${cnt} đơn</div></div>`;
  });
  staffCard.innerHTML = `<div class="rep-card-title">👥 Hiệu suất nhân viên ca này</div>${staffHtml}`;
  row2.appendChild(staffCard);

  // Shift close (tính ca)
  const closeCard = mkEl("div", "shift-close-box");
  const shiftCashId = "shiftCashInput";
  closeCard.innerHTML = `
    <div class="shift-close-title">🏦 Tính ca — Đối chiếu tiền mặt</div>
    <div class="shift-cash-row"><label>Doanh thu tiền mặt (POS):</label><span style="font-weight:700;color:var(--sb-green)">${fmt(sessionCashRevenue)}</span></div>
    <div class="shift-cash-row"><label>Thực tế đếm được:</label><input class="shift-cash-inp" id="${shiftCashId}" type="number" placeholder="Nhập số tiền thực tế…" oninput="calcShiftDiff()" /></div>
    <div id="shiftDiffResult"></div>
    <button class="btn-close-shift" onclick="closeShift()">📋 Xuất báo cáo & kết ca</button>`;
  row2.appendChild(closeCard);
  body.appendChild(row2);
}

function calcShiftDiff() {
  const inp = document.getElementById("shiftCashInput");
  const res = document.getElementById("shiftDiffResult");
  if (!inp || !inp.value) {
    res.innerHTML = "";
    return;
  }
  const actual = parseInt(inp.value) || 0;
  const diff = actual - sessionCashRevenue;
  const cls = diff === 0 ? "ok" : Math.abs(diff) < 50000 ? "warn" : "err";
  const msg =
    diff === 0
      ? "✅ Khớp đúng!"
      : diff > 0
        ? "⚠️ Thừa " + fmt(diff) + " so với POS"
        : "⚠️ Thiếu " + fmt(Math.abs(diff)) + " so với POS";
  res.innerHTML = `<div class="shift-diff ${cls}">${msg}</div>`;
}

function closeShift() {
  showToast("📋 Báo cáo ca đã gửi lên hệ thống HQ!", "gold", 3500);
  renderReports();
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
// Initialize empOrderCount
EMPLOYEES.forEach((e) => (empOrderCount[e.name] = 0));
// Simulate some demo KDS orders (optional — comment out if not needed)
// kdsOrders=[...];
