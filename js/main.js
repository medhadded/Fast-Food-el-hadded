/* ============================================================
   Fast Food El Hadded - main.js
   Données du menu (FR/AR) + bascule de langue + interactions
   ============================================================ */

const DATA = {
  plats: [
    {
      fr: "Omelette", ar: "أملات", price: "2200",
      descFr: "Omelette moelleuse aux œufs frais, servie avec salade, tomates et frites croustillantes.",
      descAr: "أومليت طري بالبيض الطازج، يقدّم مع السلطة والطماطم والبطاطس المقرمشة."
    },
    {
      fr: "Omelette Fromage", ar: "أملات فرماج", price: "2700",
      descFr: "Omelette aux œufs frais et fromage fondu, garnie de salade et frites.",
      descAr: "أومليت بالبيض الطازج والجبن الذائب، مع السلطة والبطاطس."
    },
    {
      fr: "Thon", ar: "تن", price: "3500",
      descFr: "Thon savoureux accompagné de crudités fraîches et d'une sauce maison.",
      descAr: "تون لذيذ مع الخضر الطازجة والصلصة المنزلية."
    },
    {
      fr: "Thon Fromage", ar: "تن فرماج", price: "4000",
      descFr: "Thon et fromage fondu, garni de crudités et de sauce maison.",
      descAr: "تون وجبن ذائب مع الخضر والصلصة المنزلية."
    },
    {
      fr: "Salami", ar: "صلامي", price: "3000",
      descFr: "Salami savoureux, salade, tomates et frites maison.",
      descAr: "سلامي لذيذ مع السلطة والطماطم والبطاطس."
    },
    {
      fr: "Salami Fromage", ar: "صلامي فرماج", price: "3500",
      descFr: "Salami et fromage fondu, crudités et frites croustillantes.",
      descAr: "سلامي وجبن ذائب مع الخضر والبطاطس المقرمشة."
    },
    {
      fr: "Jambon", ar: "جمبون", price: "3500",
      descFr: "Jambon tendre, salade, tomates fraîches et frites.",
      descAr: "جمبون طري مع السلطة والطماطم الطازجة والبطاطس."
    },
    {
      fr: "Spécial El Hadded", ar: "إسبيسيال EL HADDED", price: "8500",
      badge: { fr: "Signature", ar: "طبق الشيف" },
      descFr: "Notre sandwich signature : viande, fromage, salami, jambon et œuf pour les grandes faims.",
      descAr: "ساندويتش البيت المميّز: لحم، جبن، سلامي، جمبون وبيض لأكبر الشهية."
    },
    {
      fr: "Jambon Fromage", ar: "جمبون فرماج", price: "4000",
      descFr: "Jambon et fromage fondu, garni de crudités et sauce maison.",
      descAr: "جمبون وجبن ذائب مع الخضر والصلصة المنزلية."
    },
    {
      fr: "Kouika", ar: "كويكة", price: "3500",
      descFr: "Kouika savoureuse, salade, tomates et frites maison.",
      descAr: "كويكة لذيذة مع السلطة والطماطم والبطاطس."
    },
    {
      fr: "Kouika Fromage", ar: "كويكة فرماج", price: "4000",
      descFr: "Kouika et fromage fondu, crudités et frites croustillantes.",
      descAr: "كويكة وجبن ذائب مع الخضر والبطاطس المقرمشة."
    },
    {
      fr: "Viande", ar: "لحمة", price: "4000",
      descFr: "Viande grillée savoureuse, salade, tomates et frites.",
      descAr: "لحم مشوي لذيذ مع السلطة والطماطم والبطاطس."
    },
    {
      fr: "Viande Fromage", ar: "لحمة فرماج", price: "4500",
      descFr: "Viande grillée et fromage fondu, crudités et frites.",
      descAr: "لحم مشوي وجبن ذائب مع الخضر والبطاطس."
    },
    {
      fr: "Escalope Fromage", ar: "سكالوب فرماج", price: "6000",
      descFr: "Escalope panée croustillante et fromage fondu, salade et frites.",
      descAr: "إسكالوب مقرمش وجبن ذائب مع السلطة والبطاطس."
    },
    {
      fr: "Foie Fromage", ar: "كبدة فرماج", price: "6000",
      descFr: "Foie tendre et fromage fondu, garni de crudités et frites.",
      descAr: "كبدة طرية وجبن ذائب مع الخضر والبطاطس."
    },
    {
      fr: "Offre Wahchi", ar: "Ofrre wahchii", price: "10000",
      badge: { fr: "Offre", ar: "عرض" },
      descFr: "L'offre XXL : une généreuse portion pour les plus grandes faims.",
      descAr: "عرض وحشي: حصة كبيرة جدًا لأكبر الشهية."
    }
  ],

  boissons: [
    {
      fr: "Boissons gazeuses", ar: "مشروبات غازية", price: "2000",
      imgs: [
        { src: "assets/apla.png", fr: "Apla", ar: "أبلا" },
        { src: "assets/boga.png", fr: "Boga", ar: "بوڨا" }
      ]
    },
    {
      fr: "Eau grande", ar: "ماء كبير", price: "1000",
      imgs: [
        { src: "assets/delice.png", fr: "Délice", ar: "دليس" },
        { src: "assets/sabrine.png", fr: "Sabrine", ar: "صابرين" }
      ]
    },
    {
      fr: "Eau petite", ar: "ماء صغير", price: "800",
      imgs: [
        { src: "assets/cristaline.png", fr: "Cristaline", ar: "كريستالين" },
        { src: "assets/marwa.png", fr: "Marwa", ar: "مروى" }
      ]
    }
  ],

  supplements: [
    { fr: "Omelette", ar: "أملات", price: "500" },
    { fr: "Fromage", ar: "فرماج", price: "500" },
    { fr: "Salami", ar: "صلامي", price: "1000" },
    { fr: "Kouika", ar: "كويكة", price: "1000" },
    { fr: "Jambon", ar: "جمبون", price: "1000" },
    { fr: "Pain Mlawi", ar: "بات ملاوي", price: "700" },
    { fr: "Mozzarella", ar: "فرماج موتزاريلا", price: "1000" },
    { fr: "Mozzarella 100%", ar: "فرماج موتزاريلا 100%", price: "3000" },
    { fr: "Thon", ar: "تن", price: "1500" },
    { fr: "Viande", ar: "لحمة", price: "1500" },
    { fr: "Escalope", ar: "سكالوب", price: "3000" },
    { fr: "Foie", ar: "كبدة", price: "3000" }
  ],

  galerie: [
    { img: "assets/chapati.jpg", fr: "Chapati", ar: "شباتي" },
    { img: "assets/mlawi.jpg", fr: "Mlawi", ar: "ملوي" }
  ]
};

let LANG = "fr";

const $ = (sel) => document.querySelector(sel);

function txt(obj, lang) {
  return lang === "ar" ? obj.ar : obj.fr;
}

/* ---------- Rendu du menu ---------- */
function renderMenu() {
  const grid = $("#menuGrid");
  grid.innerHTML = "";
  DATA.plats.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card reveal";

    const top = document.createElement("div");
    top.className = "card__top";
    const name = document.createElement("span");
    name.className = "card__name";
    name.textContent = txt(p, LANG);
    const price = document.createElement("span");
    price.className = "card__price";
    price.textContent = p.price;
    top.append(name, price);

    card.append(top);

    if (p.badge) {
      const badge = document.createElement("span");
      badge.className = "card__badge";
      badge.textContent = txt(p.badge, LANG);
      card.append(badge);
    }

    const desc = document.createElement("p");
    desc.className = "card__desc";
    desc.textContent = LANG === "ar" ? p.descAr : p.descFr;
    card.append(desc);

    grid.append(card);
  });
}

function renderBoissons() {
  const list = $("#drinksList");
  list.innerHTML = "";
  DATA.boissons.forEach((b) => {
    const card = document.createElement("article");
    card.className = "drink-card reveal";

    const imgs = document.createElement("div");
    imgs.className = "drink-card__imgs";
    b.imgs.forEach((img) => {
      const fig = document.createElement("figure");
      fig.className = "drink-card__fig";
      const el = document.createElement("img");
      el.src = img.src;
      el.alt = img.fr;
      el.loading = "lazy";
      const cap = document.createElement("figcaption");
      cap.textContent = txt(img, LANG);
      fig.append(el, cap);
      imgs.append(fig);
    });

    const foot = document.createElement("div");
    foot.className = "drink-card__foot";
    const name = document.createElement("span");
    name.className = "drink-card__name";
    name.textContent = txt(b, LANG);
    const dots = document.createElement("span");
    dots.className = "drink-card__dots";
    const price = document.createElement("span");
    price.className = "drink-card__price";
    price.textContent = b.price;
    foot.append(name, dots, price);

    card.append(imgs, foot);
    list.append(card);
  });
}

function renderSupplements() {
  const grid = $("#extraGrid");
  grid.innerHTML = "";
  DATA.supplements.forEach((s) => {
    const card = document.createElement("div");
    card.className = "sup-card reveal";
    card.innerHTML = `<span class="sup-card__name"></span><span class="sup-card__price"></span>`;
    card.querySelector(".sup-card__name").textContent = txt(s, LANG);
    card.querySelector(".sup-card__price").textContent = s.price;
    grid.append(card);
  });
}

function renderGalerie() {
  const gal = $("#gallery");
  gal.innerHTML = "";
  DATA.galerie.forEach((g) => {
    const item = document.createElement("div");
    item.className = "gallery__item reveal";
    const img = document.createElement("img");
    img.src = g.img;
    img.alt = txt(g, LANG);
    const cap = document.createElement("span");
    cap.className = "gallery__cap";
    cap.textContent = txt(g, LANG);
    item.append(img, cap);
    item.addEventListener("click", () => openLightbox(g.img, txt(g, LANG)));
    gal.append(item);
  });
}

/* ---------- Bascule de langue ---------- */
function applyLang(lang) {
  LANG = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-fr]").forEach((el) => {
    el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.fr;
  });

  document.querySelectorAll("#langToggle .lang-toggle__opt").forEach((o) => {
    o.classList.toggle("is-active", o.dataset.lang === lang);
  });

  renderMenu();
  renderBoissons();
  renderSupplements();
  renderGalerie();
  observeReveal();
}

/* ---------- Lightbox ---------- */
const lightbox = () => $("#lightbox");

function openLightbox(src, alt) {
  const lb = lightbox();
  const img = $("#lightboxImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = lightbox();
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ---------- Animations d'apparition ---------- */
let observer;
function observeReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ---------- Initialisation ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Header au scroll
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Menu mobile
  const burger = $("#burger");
  const nav = $("#nav");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  // Bascule de langue
  $("#langToggle").addEventListener("click", () => applyLang(LANG === "fr" ? "ar" : "fr"));

  // Lightbox
  $("#lightboxClose").addEventListener("click", closeLightbox);
  lightbox().addEventListener("click", (e) => {
    if (e.target === lightbox()) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  applyLang("fr");
});
