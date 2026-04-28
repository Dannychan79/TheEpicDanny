const games = [
  { title: "Cookie Clicker", category: "Idle", tags: ["classic", "clicker", "embed"], description: "Official incremental classic that usually works well inside the built-in player.", url: "https://orteil.dashnet.org/cookieclicker/", embed: true, featured: true },
  { title: "2048", category: "Puzzle", tags: ["numbers", "classic", "embed"], description: "The original merge puzzler and a reliable browser staple.", url: "https://play2048.co/", embed: true, featured: true },
  { title: "Hextris", category: "Puzzle", tags: ["arcade", "reflex", "embed"], description: "Fast rotating puzzle action with strong browser compatibility.", url: "https://hextris.io/", embed: true, featured: true },
  { title: "A Dark Room", category: "Story", tags: ["text", "idle", "embed"], description: "Minimalist browser storytelling with a tiny footprint.", url: "https://adarkroom.doublespeakgames.com/", embed: true },
  { title: "HexGL", category: "Racing", tags: ["webgl", "embed", "sci-fi"], description: "A sharp WebGL racing showcase for laptops and Chromebooks.", url: "https://hexgl.bkcore.com/play/", embed: true, featured: true },
  { title: "Wordle", category: "Puzzle", tags: ["words", "daily", "embed"], description: "Quick word-game lane for slower sessions.", url: "https://wordly.org/", embed: true },
  { title: "Friday Night Funkin'", category: "Rhythm", tags: ["music", "external", "featured"], description: "Official itch.io page. Usually best launched in its own tab.", url: "https://ninja-muffin24.itch.io/funkin", embed: false, featured: true },
  { title: "1v1.LOL", category: "Action", tags: ["shooter", "pvp", "external"], description: "Fast build-and-fight arena play through the main site.", url: "https://1v1.lol/", embed: false, featured: true },
  { title: "Krunker", category: "Action", tags: ["fps", "multiplayer", "external"], description: "Competitive browser FPS that is usually happiest in a full tab.", url: "https://krunker.io/", embed: false },
  { title: "Shell Shockers", category: "Action", tags: ["fps", "external"], description: "Egg-based arena chaos with a polished browser shooter feel.", url: "https://shellshock.io/", embed: false },
  { title: "Agar.io", category: "Arcade", tags: ["multiplayer", "external"], description: "The browser cell-eating original.", url: "https://agar.io/", embed: false },
  { title: "Slither.io", category: "Arcade", tags: ["multiplayer", "external"], description: "Snake survival that still feels good in the browser.", url: "https://slither.io/", embed: false },
  { title: "Tetr.io", category: "Puzzle", tags: ["competitive", "stacking", "external"], description: "Modern browser block stacking with a serious competitive layer.", url: "https://tetr.io/", embed: false },
  { title: "Little Alchemy 2", category: "Puzzle", tags: ["crafting", "casual", "external"], description: "One of the easiest browser games to recommend to basically anyone.", url: "https://littlealchemy2.com/", embed: false },
  { title: "QWOP", category: "Comedy", tags: ["physics", "classic", "external"], description: "Still one of the funniest sports disasters on the internet.", url: "https://www.foddy.net/Athletics.html", embed: false },
  { title: "Fallen London", category: "Story", tags: ["narrative", "rpg", "external"], description: "A browser story game with deep text-driven choices.", url: "https://www.fallenlondon.com/", embed: false },
  { title: "Townscaper", category: "Creative", tags: ["builder", "calm", "external"], description: "A relaxed toy-box builder experience on the web.", url: "https://oskarstalberg.com/Townscaper/", embed: false },
  { title: "The Wiki Game", category: "Trivia", tags: ["knowledge", "embed"], description: "Click-race your way through linked pages.", url: "https://www.thewikigame.com/group", embed: true },
  { title: "Vex 8", category: "Platformer", tags: ["precision", "external"], description: "Obstacle-course platforming with quick restart energy.", url: "https://www.crazygames.com/game/vex-8", embed: false },
  { title: "Run 3", category: "Platformer", tags: ["runner", "external"], description: "Tunnel running and gravity switching through a browser classic.", url: "https://www.coolmathgames.com/0-run-3", embed: false },
  { title: "Fireboy and Watergirl", category: "Puzzle", tags: ["coop", "external"], description: "One of the most common co-op puzzle picks on school laptops.", url: "https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple", embed: false },
  { title: "Moto X3M", category: "Racing", tags: ["bike", "external"], description: "Quick stunts, fast respawns, strong arcade energy.", url: "https://www.coolmathgames.com/0-moto-x3m", embed: false },
  { title: "Retro Bowl", category: "Sports", tags: ["football", "external"], description: "A modern browser sports obsession with clean controls.", url: "https://www.crazygames.com/game/retro-bowl", embed: false },
  { title: "Basketball Stars", category: "Sports", tags: ["basketball", "external"], description: "Fast one-on-one sports play for short sessions.", url: "https://www.crazygames.com/game/basketball-stars-2019", embed: false },
  { title: "Drift Hunters", category: "Racing", tags: ["cars", "external"], description: "A mainstay browser drifting game with lots of tuning.", url: "https://www.crazygames.com/game/drift-hunters", embed: false },
  { title: "Smash Karts", category: "Action", tags: ["cars", "battle", "external"], description: "Arcade kart combat and short rounds.", url: "https://www.crazygames.com/game/smash-karts", embed: false },
  { title: "Tiny Fishing", category: "Idle", tags: ["casual", "external"], description: "Simple loop, easy controls, very laptop-friendly.", url: "https://www.crazygames.com/game/tiny-fishing", embed: false },
  { title: "Duck Life", category: "Arcade", tags: ["training", "external"], description: "A comfort-food browser series that still holds up.", url: "https://www.crazygames.com/game/duck-life", embed: false },
  { title: "Papa's Pizzeria", category: "Arcade", tags: ["cooking", "external"], description: "Requested favorite. Launches externally because hosting varies.", url: "https://www.crazygames.com/game/papas-pizzeria", embed: false, featured: true },
  { title: "Papa's Freezeria", category: "Arcade", tags: ["cooking", "external"], description: "Another Papa's favorite with the same quick-loop feel.", url: "https://www.crazygames.com/game/papas-freezeria", embed: false },
  { title: "Papa's Burgeria", category: "Arcade", tags: ["cooking", "external"], description: "Stack burgers, move fast, survive the rush.", url: "https://www.crazygames.com/game/papas-burgeria", embed: false },
  { title: "Bloxd.io", category: "Action", tags: ["sandbox", "external"], description: "A browser sandbox that fits the same lane as many popular school-laptop picks.", url: "https://bloxd.io/", embed: false },
  { title: "Ev.io", category: "Action", tags: ["fps", "external"], description: "A slick browser FPS with a more futuristic look.", url: "https://ev.io/", embed: false },
  { title: "Surviv.io Clone Route", category: "Action", tags: ["battle royale", "external"], description: "A placeholder lane for the top-down survival genre without pretending one exact clone is official.", url: "https://itch.io/games/tag-battle-royale/tag-web", embed: false },
  { title: "Brotato", category: "Requested", tags: ["survival", "requested", "desktop"], description: "Included because you asked for it, but there is no dependable legal browser build to ship here.", url: "https://store.steampowered.com/app/1942280/Brotato/", embed: false, limited: true, featured: true },
  { title: "Five Nights at Freddy's", category: "Requested", tags: ["horror", "requested", "desktop"], description: "Listed in the catalog, but the main series is not a dependable legal browser embed.", url: "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/", embed: false, limited: true, featured: true },
  { title: "FNaF 2", category: "Requested", tags: ["horror", "requested", "desktop"], description: "Catalog entry with a clean store link rather than a fake browser copy.", url: "https://store.steampowered.com/app/332800/Five_Nights_at_Freddys_2/", embed: false, limited: true },
  { title: "FNaF 3", category: "Requested", tags: ["horror", "requested", "desktop"], description: "Third entry, listed honestly as external only.", url: "https://store.steampowered.com/app/354140/Five_Nights_at_Freddys_3/", embed: false, limited: true }
];

const shortcuts = [
  { title: "Itch.io Browser Games", description: "Large index of web-native indie games with a lot of genuinely playable browser titles.", url: "https://itch.io/games/platform-web" },
  { title: "CrazyGames", description: "Huge HTML5 catalog for adding more browser titles.", url: "https://www.crazygames.com/" },
  { title: "Coolmath Games", description: "Long-running puzzle and arcade collection that works well on Chromebooks.", url: "https://www.coolmathgames.com/" },
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
  scriptLoaded: false,
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
      : "This game is best launched in its own tab because many hosts block iframe play or perform better outside an embedded player.";
  }

  setPlayerOpen(true);
}

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";

  const title = document.createElement("h4");
  title.textContent = game.title;

  const meta = document.createElement("div");
  meta.className = "meta-row";
  meta.appendChild(createChip(game.category));
  meta.appendChild(createChip(game.embed ? "Play in site" : "Open externally"));
  if (game.limited) {
    meta.appendChild(createChip("Requested title"));
  }

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

  actions.append(playButton, openSite);
  card.append(title, meta, body, actions);
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

function loadEmulatorScript() {
  if (emulatorState.scriptLoaded) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector("#emulatorjs-loader");
    if (existing) {
      existing.addEventListener("load", () => {
        emulatorState.scriptLoaded = true;
        resolve();
      }, { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "emulatorjs-loader";
    script.src = "https://cdn.emulatorjs.org/loader.js";
    script.onload = () => {
      emulatorState.scriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error("Could not load EmulatorJS."));
    document.body.appendChild(script);
  });
}

async function launchEmulator() {
  const romFile = emulatorRom.files[0];
  if (!romFile) {
    emulatorStatus.textContent = "Pick a ROM file before launching the emulator.";
    return;
  }

  cleanupEmulatorUrls();
  emulatorState.romUrl = URL.createObjectURL(romFile);
  emulatorState.biosUrl = emulatorBios.files[0] ? URL.createObjectURL(emulatorBios.files[0]) : null;

  emulatorPlayer.innerHTML = "<div id='game'></div>";
  emulatorStatus.textContent = "Loading EmulatorJS...";

  window.EJS_player = "#game";
  window.EJS_core = emulatorCore.value;
  window.EJS_gameUrl = emulatorState.romUrl;
  window.EJS_gameName = romFile.name.replace(/\.[^.]+$/, "");
  window.EJS_pathtodata = "https://cdn.emulatorjs.org/data/";
  window.EJS_color = "#7da5c5";
  window.EJS_startOnLoaded = true;
  window.EJS_fullscreenOnLoaded = false;
  window.EJS_volume = 0.6;
  window.EJS_biosUrl = emulatorState.biosUrl || "";

  try {
    emulatorState.scriptLoaded = false;
    const oldScript = document.querySelector("#emulatorjs-loader");
    if (oldScript) {
      oldScript.remove();
    }
    await loadEmulatorScript();
    emulatorStatus.textContent = `Loaded ${romFile.name} for ${emulatorCore.options[emulatorCore.selectedIndex].text}.`;
  } catch (error) {
    emulatorStatus.textContent = "EmulatorJS could not load. Check your connection and try again.";
  }
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
