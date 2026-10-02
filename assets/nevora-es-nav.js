(function () {
  var map = {
    home: "Inicio",
    catalog: "Catálogo",
    catalogue: "Catálogo",
    contact: "Contacto",
    "contact us": "Contacto",
    shop: "Tienda",
    collection: "Colección",
    collections: "Colecciones",
    search: "Buscar",
    account: "Cuenta"
  };
  function translate(el) {
    if (!el) return;
    var raw = (el.textContent || "").replace(/\s+/g, " ").trim();
    var key = raw.toLowerCase();
    if (map[key]) el.textContent = map[key];
  }
  function run() {
    document.querySelectorAll(
      ".header-menu a, .menu-list__item, .menu-list__link-title, .menu-drawer__menu-item-text, .header__drawer a"
    ).forEach(translate);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  document.addEventListener("shopify:section:load", run);
})();
