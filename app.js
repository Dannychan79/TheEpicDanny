function siteSearchUrl(site, title) {
  if (site === "crazygames") {
    return `https://www.crazygames.com/search?q=${encodeURIComponent(title)}`;
  }
  if (site === "coolmath") {
    return `https://www.coolmathgames.com/search-results?title=${encodeURIComponent(title)}`;
  }
  return `https://itch.io/search?q=${encodeURIComponent(title)}&classification=game&platform=web`;
}

const coreGames = [
  { title: "Cookie Clicker", category: "Idle", tags: ["classic", "clicker", "embed"], description: "Official incremental classic that often embeds cleanly.", url: "https://orteil.dashnet.org/cookieclicker/", embed: true, featured: true },
  { title: "2048", category: "Puzzle", tags: ["numbers", "classic", "embed"], description: "A reliable browser puzzle staple.", url: "https://play2048.co/", embed: true, featured: true },
  { title: "Hextris", category: "Puzzle", tags: ["arcade", "reflex", "embed"], description: "Fast rotating puzzle play with strong browser compatibility.", url: "https://hextris.io/", embed: true, featured: true },
  { title: "A Dark Room", category: "Story", tags: ["text", "idle", "embed"], description: "Minimalist browser storytelling with a tiny footprint.", url: "https://adarkroom.doublespeakgames.com/", embed: true },
  { title: "HexGL", category: "Racing", tags: ["webgl", "embed", "sci-fi"], description: "A sharp WebGL racing showcase for full browsers.", url: "https://hexgl.bkcore.com/play/", embed: true, featured: true },
  { title: "The Wiki Game", category: "Trivia", tags: ["knowledge", "embed"], description: "Click-race your way through linked pages.", url: "https://www.thewikigame.com/group", embed: true },
  { title: "Wordle", category: "Puzzle", tags: ["words", "daily", "embed"], description: "Quick word-game lane for slower sessions.", url: "https://wordly.org/", embed: true },
  { title: "Friday Night Funkin'", category: "Rhythm", tags: ["music", "external"], description: "Official page. Usually best launched in its own tab.", url: "https://ninja-muffin24.itch.io/funkin", embed: false, featured: true },
  { title: "1v1.LOL", category: "Action", tags: ["shooter", "pvp", "external"], description: "Fast build-and-fight arena play.", url: "https://1v1.lol/", embed: false, featured: true },
  { title: "Krunker", category: "Action", tags: ["fps", "multiplayer", "external"], description: "Competitive browser FPS that is usually happiest in a full tab.", url: "https://krunker.io/", embed: false },
  { title: "Shell Shockers", category: "Action", tags: ["fps", "external"], description: "Egg-based arena chaos with a polished browser shooter feel.", url: "https://shellshock.io/", embed: false },
  { title: "Agar.io", category: "Arcade", tags: ["multiplayer", "external"], description: "The browser cell-eating original.", url: "https://agar.io/", embed: false },
  { title: "Slither.io", category: "Arcade", tags: ["multiplayer", "external"], description: "Snake survival that still feels good in the browser.", url: "https://slither.io/", embed: false },
  { title: "Tetr.io", category: "Puzzle", tags: ["competitive", "stacking", "external"], description: "Modern browser block stacking with a serious competitive layer.", url: "https://tetr.io/", embed: false },
  { title: "Little Alchemy 2", category: "Puzzle", tags: ["crafting", "casual", "external"], description: "One of the easiest browser games to recommend to basically anyone.", url: "https://littlealchemy2.com/", embed: false },
  { title: "QWOP", category: "Comedy", tags: ["physics", "classic", "external"], description: "Still one of the funniest sports disasters on the internet.", url: "https://www.foddy.net/Athletics.html", embed: false },
  { title: "Fallen London", category: "Story", tags: ["narrative", "rpg", "external"], description: "A browser story game with deep text-driven choices.", url: "https://www.fallenlondon.com/", embed: false },
  { title: "Townscaper", category: "Creative", tags: ["builder", "calm", "external"], description: "A relaxed toy-box builder experience on the web.", url: "https://oskarstalberg.com/Townscaper/", embed: false },
  { title: "Bloxd.io", category: "Action", tags: ["sandbox", "external"], description: "A browser sandbox that fits the same lane as many laptop picks.", url: "https://bloxd.io/", embed: false },
  { title: "Ev.io", category: "Action", tags: ["fps", "external"], description: "A slick browser FPS with a more futuristic look.", url: "https://ev.io/", embed: false },
  { title: "Brotato", category: "Requested", tags: ["survival", "requested", "desktop"], description: "Included because you asked for it, but there is no dependable legal browser build to ship here.", url: "https://store.steampowered.com/app/1942280/Brotato/", embed: false, limited: true, featured: true },
  { title: "Five Nights at Freddy's", category: "Requested", tags: ["horror", "requested", "desktop"], description: "Listed in the catalog, but the main series is not a dependable legal browser embed.", url: "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/", embed: false, limited: true, featured: true },
  { title: "FNaF 2", category: "Requested", tags: ["horror", "requested", "desktop"], description: "Catalog entry with a clean store link rather than a fake browser copy.", url: "https://store.steampowered.com/app/332800/Five_Nights_at_Freddys_2/", embed: false, limited: true },
  { title: "FNaF 3", category: "Requested", tags: ["horror", "requested", "desktop"], description: "Third entry, listed honestly as external only.", url: "https://store.steampowered.com/app/354140/Five_Nights_at_Freddys_3/", embed: false, limited: true }
];

const searchGames = [
  ["Arcade", "Run 3", "coolmath"],
  ["Puzzle", "Fireboy and Watergirl", "coolmath"],
  ["Racing", "Moto X3M", "coolmath"],
  ["Sports", "Retro Bowl", "crazygames"],
  ["Sports", "Basketball Stars", "crazygames"],
  ["Racing", "Drift Hunters", "crazygames"],
  ["Action", "Smash Karts", "crazygames"],
  ["Idle", "Tiny Fishing", "crazygames"],
  ["Arcade", "Duck Life", "crazygames"],
  ["Arcade", "Papa's Pizzeria", "crazygames"],
  ["Arcade", "Papa's Freezeria", "crazygames"],
  ["Arcade", "Papa's Burgeria", "crazygames"],
  ["Arcade", "Papa's Taco Mia", "crazygames"],
  ["Arcade", "Papa's Donuteria", "crazygames"],
  ["Arcade", "Papa's Scooperia", "crazygames"],
  ["Puzzle", "Bloxorz", "coolmath"],
  ["Puzzle", "World's Hardest Game", "coolmath"],
  ["Puzzle", "Cut the Rope", "crazygames"],
  ["Puzzle", "Block Blast", "crazygames"],
  ["Puzzle", "Mahjong", "crazygames"],
  ["Puzzle", "Chess", "crazygames"],
  ["Puzzle", "Checkers", "crazygames"],
  ["Arcade", "Subway Surfers", "crazygames"],
  ["Arcade", "Temple Run 2", "crazygames"],
  ["Arcade", "Helix Jump", "crazygames"],
  ["Arcade", "Stack", "crazygames"],
  ["Arcade", "Crossy Road", "crazygames"],
  ["Platformer", "Vex 3", "crazygames"],
  ["Platformer", "Vex 4", "crazygames"],
  ["Platformer", "Vex 5", "crazygames"],
  ["Platformer", "Vex 6", "crazygames"],
  ["Platformer", "Vex 7", "crazygames"],
  ["Platformer", "OvO", "coolmath"],
  ["Platformer", "Stickman Hook", "crazygames"],
  ["Platformer", "Geometry Dash", "crazygames"],
  ["Platformer", "House of Hazards", "crazygames"],
  ["Action", "Stickman Climb", "crazygames"],
  ["Action", "Getaway Shootout", "crazygames"],
  ["Action", "Rooftop Snipers", "crazygames"],
  ["Action", "Gun Mayhem", "crazygames"],
  ["Action", "Bullet Force", "crazygames"],
  ["Action", "Deadshot.io", "crazygames"],
  ["Action", "Time Shooter 2", "crazygames"],
  ["Action", "Time Shooter 3", "crazygames"],
  ["Action", "Pixel Gun Survival", "crazygames"],
  ["Action", "BuildNow GG", "crazygames"],
  ["Action", "Combat Online", "crazygames"],
  ["Action", "Mini Royale Nations", "crazygames"],
  ["Action", "Zombs Royale", "itch"],
  ["Action", "Surviv.io", "itch"],
  ["Racing", "Madalin Stunt Cars 2", "crazygames"],
  ["Racing", "Madalin Stunt Cars 3", "crazygames"],
  ["Racing", "Drift Boss", "crazygames"],
  ["Racing", "Drive Mad", "crazygames"],
  ["Racing", "EvoWorld.io", "crazygames"],
  ["Racing", "Snow Rider 3D", "crazygames"],
  ["Sports", "Basket Random", "crazygames"],
  ["Sports", "Soccer Random", "crazygames"],
  ["Sports", "Football Legends", "crazygames"],
  ["Sports", "Penalty Shooters 2", "crazygames"],
  ["Sports", "8 Ball Pool", "crazygames"],
  ["Sports", "Volley Random", "crazygames"],
  ["Idle", "Idle Breakout", "crazygames"],
  ["Idle", "Capybara Clicker", "crazygames"],
  ["Idle", "Planet Clicker", "crazygames"],
  ["Idle", "Candy Clicker", "crazygames"],
  ["Creative", "Sandbox City", "crazygames"],
  ["Creative", "Minecraft Classic", "crazygames"],
  ["Creative", "Paper Minecraft", "crazygames"],
  ["Creative", "Build and Crush", "crazygames"],
  ["Story", "Monster Tracks", "crazygames"],
  ["Story", "BitLife", "crazygames"],
  ["Story", "A Small World Cup", "crazygames"],
  ["Story", "Sort the Court", "itch"],
  ["Story", "There Is No Game", "itch"],
  ["Comedy", "Elastic Man", "crazygames"],
  ["Comedy", "Happy Wheels", "crazygames"],
  ["Comedy", "Bad Ice Cream", "crazygames"],
  ["Comedy", "Whack Your Boss", "itch"],
  ["Trivia", "Google Feud", "crazygames"],
  ["Trivia", "The Impossible Quiz", "crazygames"],
  ["Trivia", "Skribbl.io", "crazygames"],
  ["Trivia", "GeoGuessr Clone", "itch"],
  ["Rhythm", "Piano Tiles", "crazygames"],
  ["Rhythm", "FNF vs Whitty", "itch"],
  ["Rhythm", "FNF mods", "itch"],
  ["Arcade", "Yohoho.io", "crazygames"],
  ["Arcade", "Paper.io 2", "crazygames"],
  ["Arcade", "Hole.io", "crazygames"],
  ["Arcade", "Aquapark.io", "crazygames"],
  ["Arcade", "Cubes 2048.io", "crazygames"],
  ["Arcade", "Ragdoll Archers", "crazygames"],
  ["Arcade", "Tag 2", "crazygames"],
  ["Arcade", "Raft Wars", "crazygames"],
  ["Arcade", "Bad Time Simulator", "itch"],
  ["Puzzle", "2048 Cupcakes", "crazygames"],
  ["Puzzle", "2048 Tetris", "crazygames"],
  ["Puzzle", "Merge Round Racers", "crazygames"],
  ["Puzzle", "Parking Fury", "crazygames"],
  ["Puzzle", "Doors Online", "crazygames"]
].map(([category, title, site]) => ({
  title,
  category,
  tags: ["external", "catalog", site],
  description: `Search-launch entry for ${title}. This opens a browser game source page rather than pretending every title has a guaranteed embeddable build.`,
  url: siteSearchUrl(site, title),
  embed: false
}));

const games = [...coreGames, ...searchGames];

const artworkMap = {
  "Cookie Clicker": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1454400/header.jpg",
  "Brotato": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1942280/header.jpg",
  "Five Nights at Freddy's": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg",
  "FNaF 2": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/332800/header.jpg",
  "FNaF 3": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/354140/header.jpg",
  "2048": "https://play2048.co/meta/apple-touch-icon.png",
  "Hextris": "https://hextris.io/images/hextris-logo-with-title.png",
  "1v1.LOL": "https://1v1.lol/assets/img/logo.png",
  "Shell Shockers": "https://shellshock.io/img/egg.png",
  "Agar.io": "https://agar.io/favicon-32x32.png",
  "Slither.io": "https://slither.io/s/favicon.png",
  "Tetr.io": "https://tetr.io/res/icon.svg",
  "Little Alchemy 2": "https://littlealchemy2.com/img/game-logo.png",
  "Townscaper": "https://oskarstalberg.com/Townscaper/thumb.jpg"
};

const shortcuts = [
  { title: "Itch.io Browser Games", description: "Large index of web-native indie games with genuinely playable browser titles.", url: "https://itch.io/games/platform-web" },
  { title: "CrazyGames", description: "Huge HTML5 catalog for browsing more games.", url: "https://www.crazygames.com/" },
  { title: "Coolmath Games", description: "Long-running puzzle and arcade collection that works well on regular Chromebooks when not blocked.", url: "https://www.coolmathgames.com/" },
  { title: "EmulatorJS Docs", description: "Official docs for the in-browser emulator setup used on this site.", url: "https://emulatorjs.org/docs/getting-started/" }
];

const media = [
  { title: "Plex Free Movies", description: "Legal free streaming catalog in the browser.", url: "https://watch.plex.tv/" },
  { title: "Tubi", description: "Ad-supported streaming with a large rotating library.", url: "https://tubitv.com/" },
  { title: "Pluto TV", description: "Live channels plus on-demand catalog.", url: "https://pluto.tv/" },
  { title: "Internet Archive Video", description: "Public-domain and archival video collection.", url: "https://archive.org/details/movies" },
  { title: "YouTube Movies & TV", description: "Official YouTube destination for movies, trailers, and purchasable titles.", url: "https://www.youtube.com/feed/storefront" }
];

const state = {
  view: "home",
  query: "",
  category: "All",
  embedOnly: false
};

const emulatorState = {
  romUrl: null,
  biosUrl: null
};

const navLinks = [...document.querySelectorAll(".nav-link")];
const views = {
  home: document.querySelector("#home-view"),
  games: document.querySelector("#games-view"),
  emulator: document.querySelector("#emulator-view"),
  web: document.querySelector("#web-view"),
  media: document.querySelector("#media-view")
};

const viewTitle = document.querySelector("#view-title");
const globalSearch = document.querySelector("#global-search");
const gamesGrid = document.querySelector("#games-grid");
const featuredStrip = document.querySelector("#featured-strip");
const categoryFilters = document.querySelector("#category-filters");
const webGrid = document.querySelector("#web-grid");
const mediaGrid = document.querySelector("#media-grid");
const gameCount = document.querySelector("#game-count");
const embedOnlyToggle = document.querySelector("#embed-only");
const playerModal = document.querySelector("#player-modal");
const playerTitle = document.querySelector("#player-title");
const playerFrame = document.querySelector("#player-frame");
const playerExternal = document.querySelector("#player-external");
const playerClose = document.querySelector("#player-close");
const playerFullscreen = document.querySelector("#player-fullscreen");
const playerPlaceholder = document.querySelector("#player-placeholder");
const playerMessage = document.querySelector("#player-message");
const playerShell = document.querySelector(".player-shell");
const launchEmulatorButton = document.querySelector("#launch-emulator");
const fullscreenEmulatorButton = document.querySelector("#fullscreen-emulator");
const emulatorCore = document.querySelector("#emulator-core");
const emulatorRom = document.querySelector("#emulator-rom");
const emulatorBios = document.querySelector("#emulator-bios");
const emulatorStatus = document.querySelector("#emulator-status");
const emulatorPlayer = document.querySelector("#emulator-player");
const emulatorStage = document.querySelector("#emulator-stage");

function uniqueCategories() {
  return ["All", ...new Set(games.map((game) => game.category))];
}

function normalize(value) {
  return value.toLowerCase();
}

function filteredGames() {
  return games.filter((game) => {
    const matchesCategory = state.category === "All" || game.category === state.category;
    const matchesEmbed = !state.embedOnly || game.embed;
    const haystack = [game.title, game.category, game.description, ...game.tags].join(" ");
    const matchesQuery = !state.query || normalize(haystack).includes(normalize(state.query));
    return matchesCategory && matchesEmbed && matchesQuery;
  });
}

function setPlayerOpen(open) {
  playerModal.classList.toggle("hidden", !open);
  playerModal.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
  if (!open) {
    playerFrame.src = "about:blank";
  }
}

function switchView(view) {
  state.view = view;
  navLinks.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  Object.entries(views).forEach(([name, section]) => {
    section.classList.toggle("active", name === view);
  });
  viewTitle.textContent = view.charAt(0).toUpperCase() + view.slice(1);
}

function createChip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function categoryAccent(category) {
  const palette = {
    Action: ["#345167", "#15222d"],
    Arcade: ["#4c6a83", "#182734"],
    Puzzle: ["#617f99", "#203345"],
    Racing: ["#4d7692", "#172735"],
    Sports: ["#58748a", "#17242f"],
    Story: ["#6b7d92", "#263340"],
    Rhythm: ["#6d89a4", "#1f3142"],
    Idle: ["#547691", "#1d2f3f"],
    Creative: ["#6b90aa", "#203444"],
    Trivia: ["#607b93", "#203140"],
    Requested: ["#3d5366", "#151d24"],
    Comedy: ["#5f7b94", "#223444"],
    Platformer: ["#597691", "#1d2d3c"]
  };
  return palette[category] || ["#547691", "#182734"];
}

function buildFallbackCover(game) {
  const [start, end] = categoryAccent(game.category);
  const initials = game.title
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase();
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${start}" />
        <stop offset="100%" stop-color="${end}" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#g)" />
    <circle cx="680" cy="90" r="120" fill="rgba(255,255,255,0.06)" />
    <circle cx="120" cy="360" r="180" fill="rgba(255,255,255,0.05)" />
    <text x="48" y="84" fill="rgba(255,255,255,0.82)" font-size="24" font-family="Arial, sans-serif">${game.category}</text>
    <text x="48" y="326" fill="rgba(255,255,255,0.14)" font-size="132" font-weight="700" font-family="Arial, sans-serif">${initials}</text>
    <text x="48" y="388" fill="white" font-size="42" font-weight="700" font-family="Arial, sans-serif">${game.title.replace(/&/g, "&amp;")}</text>
  </svg>`;
  return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}")`;
}

function coverStyle(game) {
  const fallback = buildFallbackCover(game);
  if (artworkMap[game.title]) {
    return `linear-gradient(180deg, rgba(4,8,12,0.08), rgba(4,8,12,0.08)), url("${artworkMap[game.title]}"), ${fallback}`;
  }
  return fallback;
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = "";
  uniqueCategories().forEach((category) => {
    const button = document.createElement("button");
    button.className = "tag-button";
    button.textContent = category;
    if (state.category === category) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      state.category = category;
      renderCategoryFilters();
      renderGames();
    });
    categoryFilters.appendChild(button);
  });
}

function openPlayer(item) {
  playerTitle.textContent = item.title;
  playerExternal.href = item.url;

  if (item.embed) {
    playerFrame.src = item.url;
    playerFrame.classList.remove("hidden");
    playerPlaceholder.classList.add("hidden");
  } else {
    playerFrame.src = "about:blank";
    playerFrame.classList.add("hidden");
    playerPlaceholder.classList.remove("hidden");
    playerMessage.textContent = item.limited
      ? "This requested title is listed honestly as an external-only entry because there is not a dependable legal browser version to ship inside the site."
      : "This entry opens the source page in a new tab. Many web game hosts block iframe play, especially on locked-down devices.";
  }

  setPlayerOpen(true);
}

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";

  const cover = document.createElement("div");
  cover.className = "card-cover";
  cover.style.backgroundImage = coverStyle(game);

  const coverInner = document.createElement("div");
  coverInner.className = "card-cover-inner";

  const title = document.createElement("h4");
  title.textContent = game.title;

  const meta = document.createElement("div");
  meta.className = "meta-row";
  meta.appendChild(createChip(game.category));
  meta.appendChild(createChip(game.embed ? "Play in site" : "Open externally"));
  if (game.limited) {
    meta.appendChild(createChip("Requested title"));
  }

  coverInner.append(title, meta);
  cover.appendChild(coverInner);

  const body = document.createElement("p");
  body.textContent = game.description;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const playButton = document.createElement("button");
  playButton.className = "primary-button";
  playButton.textContent = game.embed ? "Play" : "Launch";
  playButton.addEventListener("click", () => openPlayer(game));

  const openSite = document.createElement("a");
  openSite.className = "secondary-button link-button";
  openSite.href = game.url;
  openSite.target = "_blank";
  openSite.rel = "noreferrer";
  openSite.textContent = "Open site";

  const copy = document.createElement("div");
  copy.className = "card-copy";

  actions.append(playButton, openSite);
  copy.append(body, actions);
  card.append(cover, copy);
  return card;
}

function renderGames() {
  const list = filteredGames();
  gamesGrid.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("article");
    empty.className = "game-card";
    empty.innerHTML = "<h4>No matches</h4><p>Try a different search or disable the embeddable filter.</p>";
    gamesGrid.appendChild(empty);
    return;
  }

  list.forEach((game) => gamesGrid.appendChild(createGameCard(game)));
}

function renderFeatured() {
  featuredStrip.innerHTML = "";
  games.filter((game) => game.featured).slice(0, 6).forEach((game) => {
    featuredStrip.appendChild(createGameCard(game));
  });
}

function renderShortcuts() {
  webGrid.innerHTML = "";
  shortcuts.forEach((item) => {
    const card = document.createElement("article");
    card.className = "shortcut-card";
    card.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <div class="card-actions">
        <a class="primary-button link-button" href="${item.url}" target="_blank" rel="noreferrer">Open</a>
      </div>
    `;
    webGrid.appendChild(card);
  });
}

function renderMedia() {
  mediaGrid.innerHTML = "";
  media.forEach((item) => {
    const card = document.createElement("article");
    card.className = "media-card";
    card.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <div class="card-actions">
        <a class="primary-button link-button" href="${item.url}" target="_blank" rel="noreferrer">Watch</a>
      </div>
    `;
    mediaGrid.appendChild(card);
  });
}

function cleanupEmulatorUrls() {
  if (emulatorState.romUrl) {
    URL.revokeObjectURL(emulatorState.romUrl);
    emulatorState.romUrl = null;
  }
  if (emulatorState.biosUrl) {
    URL.revokeObjectURL(emulatorState.biosUrl);
    emulatorState.biosUrl = null;
  }
}

function buildEmulatorDocument(core, romUrl, biosUrl, gameName) {
  const biosLine = biosUrl ? `window.EJS_biosUrl = ${JSON.stringify(biosUrl)};` : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${gameName}</title>
  <style>
    html, body { margin: 0; width: 100%; height: 100%; background: #04080c; overflow: hidden; }
    body { display: grid; place-items: center; }
    #game { width: 100%; height: 100%; }
    #game, #game * { box-sizing: border-box; }
    canvas { max-width: 100% !important; max-height: 100% !important; image-rendering: pixelated; }
  </style>
</head>
<body>
  <div id="game"></div>
  <script>
    window.EJS_player = "#game";
    window.EJS_core = ${JSON.stringify(core)};
    window.EJS_gameUrl = ${JSON.stringify(romUrl)};
    window.EJS_gameName = ${JSON.stringify(gameName)};
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_startOnLoaded = true;
    window.EJS_fullscreenOnLoaded = false;
    window.EJS_color = "#7da5c5";
    ${biosLine}
  </script>
  <script src="https://cdn.emulatorjs.org/stable/data/loader.js"></script>
</body>
</html>`;
}

function launchEmulator() {
  const romFile = emulatorRom.files[0];
  if (!romFile) {
    emulatorStatus.textContent = "Pick a ROM file before launching the emulator.";
    return;
  }

  cleanupEmulatorUrls();
  emulatorState.romUrl = URL.createObjectURL(romFile);
  emulatorState.biosUrl = emulatorBios.files[0] ? URL.createObjectURL(emulatorBios.files[0]) : null;

  const frame = document.createElement("iframe");
  frame.title = "EmulatorJS Player";
  frame.allow = "fullscreen";
  frame.setAttribute("allowfullscreen", "true");
  frame.srcdoc = buildEmulatorDocument(
    emulatorCore.value,
    emulatorState.romUrl,
    emulatorState.biosUrl,
    romFile.name.replace(/\.[^.]+$/, "")
  );

  emulatorPlayer.innerHTML = "";
  emulatorPlayer.appendChild(frame);
  emulatorStatus.textContent = `Loaded ${romFile.name} for ${emulatorCore.options[emulatorCore.selectedIndex].text}.`;
}

async function requestElementFullscreen(element) {
  if (!element || !element.requestFullscreen) {
    return;
  }
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }
  await element.requestFullscreen();
}

function bindEvents() {
  navLinks.forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.jump));
  });

  globalSearch.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderGames();
  });

  embedOnlyToggle.addEventListener("change", (event) => {
    state.embedOnly = event.target.checked;
    renderGames();
  });

  document.querySelector("#open-featured").addEventListener("click", () => {
    const featured = games.find((game) => game.title === "Cookie Clicker") || games[0];
    switchView("games");
    openPlayer(featured);
  });

  document.querySelector("#random-game").addEventListener("click", () => {
    const pool = filteredGames();
    const pick = pool[Math.floor(Math.random() * pool.length)] || games[0];
    switchView("games");
    openPlayer(pick);
  });

  document.querySelector("#toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("alt-theme");
  });

  playerClose.addEventListener("click", () => setPlayerOpen(false));

  playerModal.addEventListener("click", (event) => {
    if (event.target === playerModal) {
      setPlayerOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !playerModal.classList.contains("hidden")) {
      setPlayerOpen(false);
    }
  });

  playerFullscreen.addEventListener("click", async () => {
    await requestElementFullscreen(playerShell);
  });

  launchEmulatorButton.addEventListener("click", launchEmulator);
  fullscreenEmulatorButton.addEventListener("click", async () => {
    await requestElementFullscreen(emulatorStage);
  });
}

function init() {
  gameCount.textContent = String(games.length);
  renderCategoryFilters();
  renderGames();
  renderFeatured();
  renderShortcuts();
  renderMedia();
  bindEvents();
}

init();
