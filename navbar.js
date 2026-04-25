(function () {
  const mount = document.getElementById("site-navbar");
  if (!mount) {
    return;
  }

  if (!document.getElementById("site-navbar-style")) {
    const style = document.createElement("style");
    style.id = "site-navbar-style";
    style.textContent = `
      .site-nav-shell {
        width: min(1100px, 92vw);
        margin: 0 auto;
      }

      .site-navbar {
        position: sticky;
        top: 0;
        z-index: 20;
        backdrop-filter: blur(8px);
        background: rgba(9, 21, 37, 0.88);
        border-bottom: 1px solid rgba(46, 78, 116, 0.7);
      }

      .site-nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 0;
      }

      .site-nav-brand {
        font-weight: 900;
        letter-spacing: 1px;
        font-size: 1.05rem;
        white-space: nowrap;
        color: #f3f9ff;
        text-decoration: none;
      }

      .site-nav-brand span {
        color: #ffcc4d;
        font-style: italic;
        margin-right: 4px;
      }

      .site-nav-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: flex-end;
      }

      .site-nav-links a {
        font-size: 0.95rem;
        font-weight: 700;
        color: #cce2f8;
        border: 1px solid transparent;
        border-radius: 999px;
        padding: 8px 12px;
        transition: all 0.2s ease;
        text-decoration: none;
      }

      .site-nav-links a:hover {
        border-color: #3f6ea0;
        background: rgba(24, 58, 92, 0.75);
        color: #ffffff;
      }

      .site-nav-links a.active {
        border-color: #8ef0ff;
        background: rgba(15, 210, 255, 0.14);
        color: #e8fbff;
      }

      @media (max-width: 640px) {
        .site-nav-inner {
          flex-direction: column;
          align-items: flex-start;
        }

        .site-nav-links {
          width: 100%;
          justify-content: flex-start;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const path = window.location.pathname;
  const inSubfolder = path.toLowerCase().includes("/grid/") || path.toLowerCase().includes("/top10/") || path.toLowerCase().includes("/lineup/");
  
  const homeUrl = inSubfolder ? "../index.html" : "index.html";
  const gridUrl = inSubfolder ? (path.includes("/grid/") ? "grid.html" : "../grid/grid.html") : "grid/grid.html";
  const top10Url = inSubfolder ? (path.includes("/top10/") ? "index.html" : "../top10/index.html") : "top10/index.html";
  const lineupUrl = inSubfolder ? (path.includes("/lineup/") ? "lineup.html" : "../lineup/lineup.html") : "lineup/lineup.html";

  const fileName = (path.split("/").pop() || "index.html").toLowerCase();
  const isHome = (fileName === "index.html" || fileName === "") && !inSubfolder;
  const isGrid = fileName === "grid.html" && path.includes("/grid/");
  const isTop10 = (fileName === "index.html" || fileName === "") && path.includes("/top10/");
  const isLineup = (fileName === "lineup.html" || fileName === "") && path.includes("/lineup/");

  mount.innerHTML = `
    <header class="site-navbar">
      <div class="site-nav-shell site-nav-inner">
        <a class="site-nav-brand" href="${homeUrl}"><span>FUTBOL</span>GRID</a>
        <nav class="site-nav-links" aria-label="Navegacion principal">
          <a class="${isHome ? "active" : ""}" href="${homeUrl}">Inicio</a>
          <a class="${isGrid ? "active" : ""}" href="${gridUrl}">Jugar Grid</a>
          <a class="${isTop10 ? "active" : ""}" href="${top10Url}">Top 10</a>
          <a class="${isLineup ? "active" : ""}" href="${lineupUrl}">Missing XI</a>
        </nav>
      </div>
    </header>
  `;
})();
