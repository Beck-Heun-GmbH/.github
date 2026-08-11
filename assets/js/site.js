/* Beck+Heun – kleine Ergänzungen zur Bedienung.
   Die Seite funktioniert vollständig ohne JavaScript: die Navigation ist
   CSS-only, alle Inhalte stehen im HTML. Dieses Skript verbessert nur. */
(function () {
  "use strict";

  /* Jahr im Copyright aktuell halten */
  var jahr = document.getElementById("jahr");
  if (jahr) {
    jahr.textContent = String(new Date().getFullYear());
  }

  /* Mobile Navigation nach der Auswahl schließen */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.checked = false;
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        toggle.checked = false;
      }
    });
  }

  /* Aktiven Navigationspunkt markieren */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav a[href^="#"]')
  );
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        links.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          if (active) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
