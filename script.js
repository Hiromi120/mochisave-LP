(() => {
  "use strict";

  const content = window.LP_CONTENT || (typeof LP_CONTENT !== "undefined" ? LP_CONTENT : null);
  const app = document.getElementById("app");
  const pageTitle = document.getElementById("pageTitle");
  const pageDescription = document.getElementById("pageDescription");
  const seo = (content && content.seo) || {};

  if (!content || !app) return;

  if (pageTitle && seo.title) pageTitle.textContent = seo.title;
  if (pageDescription && seo.description) pageDescription.setAttribute("content", seo.description);

  const telHref = `tel:${content.contact.phoneNumber.replace(/[^0-9+]/g, "")}`;


  const DESIGN_PRESETS = {
    premium: {
      main: "#032B6C",
      sub: "#2FA9F5",
      accent: "#FFD95A",
      background: "#F7FBFF"
    },
    clean: {
      main: "#064B8B",
      sub: "#2FA9F5",
      accent: "#EAF7FF",
      background: "#F7FBFF"
    },
    friendly: {
      main: "#2B5E8C",
      sub: "#35B9F4",
      accent: "#FFD95A",
      background: "#FFFDF5"
    }
  };

  const applyDesignSettings = () => {
    const design = content.design || {};
    const preset = DESIGN_PRESETS[design.designType] || DESIGN_PRESETS.premium;
    const colors = { ...preset, ...(design.colors || {}) };
    const fonts = design.fonts || {};
    const root = document.documentElement;

    const setVar = (name, value) => {
      if (value !== undefined && value !== null && String(value).trim() !== "") {
        root.style.setProperty(name, String(value));
      }
    };

    setVar("--navy", colors.main);
    setVar("--blue", colors.sub);
    setVar("--yellow", colors.accent);
    setVar("--line", colors.line);
    setVar("--text", colors.text);
    setVar("--muted", colors.muted);
    setVar("--white", colors.white);
    setVar("--site-bg", colors.background);
    setVar("--highlight-bg", colors.highlightBg || colors.accent);
    setVar("--highlight-text", colors.highlightText || colors.main);

    setVar("--font-base", fonts.base);
    setVar("--hero-lead-size", fonts.heroLead);
    setVar("--hero-title-size", fonts.heroTitle);
    setVar("--section-title-size", fonts.sectionTitle);
    setVar("--body-size", fonts.body);
    setVar("--card-title-size", fonts.cardTitle);
    setVar("--button-size", fonts.button);

    document.body.classList.add(`lp-design-${design.designType || "premium"}`);
  };

  applyDesignSettings();

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const formatText = (value) => {
    const emphasis = (content.design && content.design.emphasis) || {};
    const markerClass = escapeHtml(emphasis.markerClass || "text-marker");
    const accentClass = escapeHtml(emphasis.accentClass || "text-accent");
    const strongClass = escapeHtml(emphasis.strongClass || "text-strong");
    const kentenClass = escapeHtml(emphasis.kentenClass || "text-kenten");

    return escapeHtml(value)
      .replace(/\[\[(.*?)\]\]/g, `<span class="${markerClass}">$1</span>`)
      .replace(/\{\{(.*?)\}\}/g, `<span class="${accentClass}">$1</span>`)
      .replace(/《(.*?)》/g, `<span class="${kentenClass}">$1</span>`)
      .replace(/\*\*(.*?)\*\*/g, `<strong class="${strongClass}">$1</strong>`)
      .replaceAll("\n", "<br>");
  };

  const renderIcon = (iconName, fallbackName = "check") => {
    const icons = content.icons || {};
    const icon = icons[iconName] || icons[fallbackName] || null;

    if (!icon) return "";

    if (typeof icon === "string") {
      return icon;
    }

    if (icon.type === "image") {
      return `<img class="icon-image" src="${escapeHtml(icon.src || "")}" alt="${escapeHtml(icon.alt || "")}" />`;
    }

    if (icon.type === "emoji") {
      return `<span class="emoji-icon" aria-hidden="true">${escapeHtml(icon.value || "")}</span>`;
    }

    if (icon.type === "label") {
      return `<span class="label-icon">${escapeHtml(icon.value || "")}</span>`;
    }

    return icon.svg || "";
  };

  const sectionTitle = (title, sub = "") => `
    <div class="section-heading">
      <span class="heading-line"></span>
      <h2>${formatText(title)}</h2>
      <span class="heading-line"></span>
      ${sub ? `<p>${formatText(sub)}</p>` : ""}
    </div>
  `;

  const buttonMarkup = ({ href, className, iconName, label, subText }) => `
    <a class="cta-button ${className}" href="${escapeHtml(href)}">
      <span class="cta-icon">${renderIcon(iconName)}</span>
      <span class="cta-texts">
        <strong>${formatText(label)}</strong>
        ${subText ? `<small>${formatText(subText)}</small>` : ""}
      </span>
      <span class="cta-arrow">›</span>
    </a>
  `;

  const telButton = (className = "is-tel") =>
    buttonMarkup({
      href: telHref,
      className,
      iconName: content.contact.phoneIcon,
      label: content.contact.phoneLabel,
      subText: content.contact.phoneSubText
    });

  const lineButton = (className = "is-line") =>
    buttonMarkup({
      href: content.contact.lineUrl,
      className,
      iconName: content.contact.lineIcon,
      label: content.contact.lineLabel,
      subText: content.contact.lineSubText
    });

  const quoteButton = (className = "is-quote") =>
    buttonMarkup({
      href: content.contact.quoteUrl,
      className,
      iconName: content.contact.quoteIcon,
      label: content.contact.quoteLabel,
      subText: content.contact.quoteSubText
    });

  const renderHero = () => `
    <section id="top" class="hero section-animate">
      <div class="hero-top-row">
        <img class="hero-logo" src="assets/images/LPLOGO.png" alt="ロゴ" />
        <span class="hero-top-text">${formatText(content.hero.topMessage)}</span>
      </div>
      <div class="hero-bg-dot dot-1"></div>
      <div class="hero-bg-dot dot-2"></div>

      <div class="hero-title-wrap">
        <p class="hero-lead">${formatText(content.hero.lead)}</p>
        <h1>${formatText(content.hero.mainCopy)}</h1>
      </div>

      <div class="hero-detail-layout">
        <div class="hero-copy">
          <p class="hero-sub">${formatText(content.hero.subCopy)}</p>
          <ul class="hero-checks">
            ${content.hero.checks
              .map(
                (item) => `
                  <li>
                    <span>${renderIcon(content.hero.checkIcon)}</span>
                    <strong>${formatText(item)}</strong>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>

        <div class="hero-visual">
          <div class="sparkle sparkle-1"></div>
          <div class="sparkle sparkle-2"></div>
          <img src="${escapeHtml(content.images.mascot)}" alt="${escapeHtml(content.hero.mascotAlt)}" />
        </div>
      </div>
    </section>
  `;

  const renderProblems = () => `
    <section class="section problem-section section-animate">
      ${sectionTitle(content.problems.title)}
      <div class="problem-grid">
        ${content.problems.items
          .map(
            (item) => `
              <article class="problem-card">
                <span class="card-icon">${renderIcon(item.icon)}</span>
                <p>${formatText(item.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  const renderSolution = () => `
    <section class="solution-band section-animate">
      <h2>${formatText(content.solution.title)}</h2>
      <p>${formatText(content.solution.text)}</p>
    </section>
  `;

  const renderReasons = () => `
    <section class="section reasons-section section-animate">
      ${sectionTitle(content.reasons.title)}
      <div class="reason-grid">
        ${content.reasons.items
          .map(
            (item) => `
              <article class="reason-card">
                <div class="reason-top">
                  <span class="reason-number">${formatText(item.number)}</span>
                  <span class="reason-icon">${renderIcon(item.icon)}</span>
                </div>
                <h3>${formatText(item.title)}</h3>
                <p>${formatText(item.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  const renderServices = () => `
    <section class="section service-section section-animate">
      ${sectionTitle(content.services.title)}
      <div class="service-grid">
        ${content.services.items
          .map(
            (item) => `
              <article class="service-card">
                <span class="service-label">${formatText(item.title)}</span>
                <div class="service-icon">${renderIcon(item.icon, "acInstall")}</div>
                <p>${formatText(item.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  const renderPrices = () => `
    <section id="price" class="section price-section section-animate">
      ${sectionTitle(content.prices.title)}
      <div class="price-table">
        ${content.prices.items
          .map(
            (item) => `
              <article class="price-row">
                <div>
                  <h3>${formatText(item.name)}</h3>
                  <p>${formatText(item.detail)}</p>
                </div>
                <strong>${formatText(item.price)}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <p class="price-note">${formatText(content.prices.note)}</p>
    </section>
  `;

  const renderArea = () => `
    <section class="section area-section section-animate">
      ${sectionTitle(content.area.title, content.area.lead)}
      <div class="area-map-card">
        <div class="area-icon">${renderIcon(content.area.icon || "map")}</div>
        <ul class="area-list">
          ${content.area.cities.map((city) => `<li>${formatText(city)}</li>`).join("")}
        </ul>
      </div>
      <p class="area-note">${formatText(content.area.note)}</p>
    </section>
  `;

  const renderFinalCta = () => `
    <section class="final-cta section-animate">
      <h2>${formatText(content.finalCta.title)}</h2>
      <p>${formatText(content.finalCta.text)}</p>
      <div class="cta-stack">
        ${telButton("is-tel")}
        ${lineButton("is-line")}
        ${content.contact.quoteLabel ? quoteButton("is-quote") : ""}
      </div>
    </section>
  `;

  const renderFooter = () => `
    <footer class="lp-footer">
      <strong>${formatText(content.footer.shopName)}</strong>
      <p>${formatText(content.footer.smallText)}</p>
  `;

  const renderBottomCta = () => `
    <nav class="bottom-fixed-cta" aria-label="${escapeHtml(content.contact.bottomNavLabel)}">
      <a href="${escapeHtml(telHref)}" class="bottom-btn bottom-tel">
        <span class="bottom-icon">${renderIcon(content.contact.bottomPhoneIcon)}</span>
        <strong>${formatText(content.contact.bottomPhoneLabel)}</strong>
      </a>
      <a href="${escapeHtml(content.contact.lineUrl)}" class="bottom-btn bottom-line">
        <span class="bottom-icon">${renderIcon(content.contact.bottomLineIcon)}</span>
        <strong>${formatText(content.contact.bottomLineLabel)}</strong>
      </a>
    </nav>
  `;

  app.innerHTML = `
    ${renderHero()}
    ${renderProblems()}
    ${renderSolution()}
    ${renderReasons()}
    ${renderServices()}
    ${renderPrices()}
    ${renderArea()}
    ${renderFinalCta()}
    ${renderFooter()}
    ${renderBottomCta()}
  `;

  const animatedSections = document.querySelectorAll(".section-animate");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
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

    animatedSections.forEach((section) => observer.observe(section));
  } else {
    animatedSections.forEach((section) => section.classList.add("is-visible"));
  }
})();
