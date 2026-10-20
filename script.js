/* =====================================================================
   KS SHAFIN PORTFOLIO — script.js
   Everything you will want to edit lives in the CONFIG & DATA block.
   ===================================================================== */

/* ---------- 1. CONFIG & DATA (edit me) ---------- */

// 👉 CONTACT & SOCIAL LINKS — leave "" to show a "not added yet" placeholder.
const CONTACT = {
  email: "Ksshafin.education@gmail.com",      // e.g. "you@example.com"
  github: "https://github.com/KsShafin18",     // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/ks-shafin-921153212",   // e.g. "https://www.linkedin.com/in/your-profile"
  facebook: "https://www.facebook.com/Ks.Shafin.OG",   // e.g. "https://www.facebook.com/your-profile"
  instagram: "https://www.instagram.com/the_ks_shafin/",  // e.g. "https://www.instagram.com/your-handle"
  snapchat: "snapchat.com/ksshafin2021"    // e.g. "https://www.snapchat.com/add/your-handle"
};

// 👉 GITHUB CERTIFICATE REPOSITORY (public repos only, no token needed)
const CONFIG = {
  GITHUB_OWNER: "KsShafin18",   // 👈 replace
  GITHUB_REPO: "YOUR_CERTIFICATE_REPO",   // 👈 replace
  CERTIFICATE_FOLDER: "certificates",     // 👈 folder inside the repo ("" = repo root)
  GITHUB_BRANCH: ""                       // optional, "" = default branch
};

// 👉 Custom titles for certificates. Key = exact file name in the repo/local list.
const CERT_META = {
  // "python-course.png": { title: "Python Course", org: "Issuer name", date: "2025", url: "https://credential-link", repo: "https://github.com/..." }
};

// 👉 Local fallback certificates (used if GitHub is not configured / fails).
// Put images in assets/certificates/ and list them here.
const LOCAL_CERTS = [
  // { file: "assets/certificates/example.png", title: "Certificate title", org: "Issuer", date: "2025" }
];

// 👉 PROJECTS — add real projects here. `sample:true` marks placeholder cards; delete them.
// Set `image` to a path like "assets/projects/app.png" (optional).
const PROJECTS = [
  { sample: true, name: "Sample Project One", desc: "Placeholder card. Replace with a real project description.", tags: ["Python", "Django"], image: "", github: "", demo: "" },
  { sample: true, name: "Sample Project Two", desc: "Placeholder card. Replace with a real project description.", tags: ["React", "Node.js"], image: "", github: "", demo: "" }
];

// 👉 ACHIEVEMENTS — empty on purpose. Example entry:
// { title: "Title", desc: "What happened", year: "2025", org: "Organisation", link: "", icon: "fa-trophy" }
const ACHIEVEMENTS = [];

// 👉 SKILLS — "Name|icon". icon = "dev:name[:variant]" (Devicon logo) or a Font Awesome class.
const SKILLS = [
  { cat: "Programming Languages", icon: "fa-code", items: ["Python|dev:python", "JavaScript|dev:javascript", "HTML5|dev:html5", "CSS3|dev:css3", "SQL|fa-solid fa-database"] },
  { cat: "Backend Development", icon: "fa-server", items: ["Django|dev:django:plain", "Django REST Framework|fa-solid fa-plug", "Node.js|dev:nodejs", "Express.js|dev:express", "REST APIs|fa-solid fa-network-wired", "Authentication & Authorization|fa-solid fa-lock", "API Integration|fa-solid fa-link"] },
  { cat: "Frontend Development", icon: "fa-laptop-code", items: ["React|dev:react", "React Hooks|fa-solid fa-anchor", "Responsive Web Design|fa-solid fa-mobile-screen", "DOM Manipulation|fa-solid fa-sitemap", "Modern JavaScript|dev:javascript", "Component-Based UI Development|fa-solid fa-puzzle-piece", "Tailwind CSS|dev:tailwindcss", "Bootstrap|dev:bootstrap"] },
  { cat: "Databases", icon: "fa-database", items: ["MySQL|dev:mysql", "SQLite|dev:sqlite", "Database Design|fa-solid fa-database", "SQL Queries|fa-solid fa-magnifying-glass", "Data Modeling|fa-solid fa-diagram-project"] },
  { cat: "Package Managers & Development Tools", icon: "fa-screwdriver-wrench", items: ["npm|dev:npm:original-wordmark", "pnpm|dev:pnpm", "Git|dev:git", "GitHub|dev:github", "VS Code|dev:vscode", "Command Line|fa-solid fa-terminal", "Virtual Environments|fa-solid fa-layer-group", "pip|dev:python"] },
  { cat: "Office & Productivity", icon: "fa-briefcase", items: ["Microsoft Word|fa-solid fa-file-word", "Microsoft Excel|fa-solid fa-file-excel", "Microsoft PowerPoint|fa-solid fa-file-powerpoint", "Microsoft Office|fa-brands fa-microsoft", "Document Formatting|fa-solid fa-file-lines", "Spreadsheet Management|fa-solid fa-table"] },
  { cat: "Creative Media", icon: "fa-clapperboard", items: ["CapCut|fa-solid fa-scissors", "Video Editing|fa-solid fa-film", "Short-Form Video Editing|fa-solid fa-video", "Social Media Ad Editing|fa-solid fa-bullhorn", "Video Transitions|fa-solid fa-wand-magic-sparkles", "Basic Motion Graphics|fa-solid fa-shapes", "Content Presentation|fa-solid fa-display"] }
];

// 👉 SOCIAL CARDS: [CONTACT key, Font Awesome icon, label, accent colour]
const SOCIALS = [
  ["facebook", "fa-brands fa-facebook-f", "Facebook", "#1877F2"],
  ["instagram", "fa-brands fa-instagram", "Instagram", "#E1306C"],
  ["github", "fa-brands fa-github", "GitHub", "#EAF0F6"],
  ["linkedin", "fa-brands fa-linkedin-in", "LinkedIn", "#2D8CEB"],
  ["snapchat", "fa-brands fa-snapchat", "Snapchat", "#FFFC00"]
];
const ABOUT_CARDS = [
  ["fa-code", "Development", "Python, Django, Node.js and React for web apps and APIs."],
  ["fa-microchip", "Technology", "Curious about modern web tools, databases and clean architecture."],
  ["fa-film", "Creative Media", "Video editing and presentation skills that add polish."]
];
const SERVICES = [
  ["fa-globe", "Website Development", "Fast, responsive websites built from scratch."],
  ["fa-server", "Backend Development", "Server-side logic with Python/Django or Node.js."],
  ["fa-plug", "REST API Development", "Clean, documented APIs for web and mobile apps."],
  ["fa-database", "Database Integration", "Schema design and queries in MySQL or SQLite."],
  ["fa-mobile-screen", "Responsive UI Development", "Interfaces that work on every screen size."],
  ["fa-film", "Video Ad Editing", "Short-form edits and social media ads."]
];
const WORKFLOW = [["Plan", "Define goals and scope"], ["Design", "Sketch layout and flow"], ["Develop", "Build features step by step"], ["Test", "Find and fix issues"], ["Deploy", "Launch and maintain"]];
const TYPED_WORDS = ["Full-Stack Developer", "Python & Django Developer", "JavaScript Developer", "Creative Video Editor"];

/* ---------- 2. HELPERS ---------- */
const $ = (s, r = document) => r.querySelector(s);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const MONO = ["django", "express", "github"]; // dark logos shown in white
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const FROM = ["up", "left", "right", "down", "zoom"];

function icon(spec) {
  if (spec.startsWith("dev:")) {
    const [, n, v = "original"] = spec.split(":");
    return `<img class="${MONO.includes(n) ? "mono" : ""}" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-${v}.svg" alt="" loading="lazy">`;
  }
  return `<i class="${spec.startsWith("fa-solid") || spec.startsWith("fa-brands") ? spec : "fa-solid " + spec}" aria-hidden="true"></i>`;
}
const stateBox = (el, ic, msg) => { el.innerHTML = msg ? `<i class="fa-solid ${ic}" aria-hidden="true"></i>${msg}` : ""; };
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("on"), 2000); }

/* ---------- 3. RENDER DATA-DRIVEN SECTIONS ---------- */
function render() {
  $("#aboutCards").innerHTML = ABOUT_CARDS.map(([i, t, d]) => `<article class="glass card reveal"><i class="fa-solid ${i} ic"></i><h3>${t}</h3><p>${d}</p></article>`).join("");
  $("#serviceGrid").innerHTML = SERVICES.map(([i, t, d]) => `<article class="glass card reveal"><i class="fa-solid ${i} ic"></i><h3>${t}</h3><p>${d}</p></article>`).join("");
  $("#flow").innerHTML = WORKFLOW.map(([t, d], i) => `<li class="step reveal"><b>${i + 1}</b><div><h3>${t}</h3><span>${d}</span></div></li>`).join("");

  let n = 0; // skill cards fly in from rotating directions
  $("#skillGroups").innerHTML = SKILLS.map(g => `
    <div class="sgroup"><h3 class="reveal" data-from="down"><i class="fa-solid ${g.icon}"></i>${g.cat}</h3>
    <div class="skills">${g.items.map(s => { const [name, ic] = s.split("|"); const d = (n % 6) * 0.07; return `<div class="glass skill reveal" data-from="${FROM[n++ % 5]}" style="--d:${d}s"><div class="logo">${icon(ic)}</div>${esc(name)}</div>`; }).join("")}</div></div>`).join("");

  const ph = `<div class="thumb"><i class="fa-solid fa-image"></i></div>`;
  $("#projectGrid").innerHTML = PROJECTS.length ? PROJECTS.map(p => `
    <article class="glass proj reveal" data-from="up">
      <div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)} thumbnail" loading="lazy">` : `<i class="fa-solid fa-laptop-code"></i>`}${p.sample ? `<span class="badge">Sample placeholder</span>` : ""}</div>
      <div class="pbody"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
      <div class="tags">${(p.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="links">${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub<i class="fa-solid fa-arrow-right"></i></a>` : ""}${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo<i class="fa-solid fa-arrow-right"></i></a>` : ""}</div></div>
    </article>`).join("") : `<div class="state glass"><i class="fa-solid fa-folder-open"></i>No projects yet. Add one to the PROJECTS array in script.js.</div>`;

  $("#achGrid").innerHTML = ACHIEVEMENTS.length ? ACHIEVEMENTS.map(a => `
    <article class="glass card reveal" data-from="zoom"><i class="fa-solid ${esc(a.icon || "fa-trophy")} ic"></i>
      <h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p>
      <p><small>${[a.org, a.year].filter(Boolean).map(esc).join(" · ")}</small></p>
      ${a.link ? `<div class="links"><a href="${esc(a.link)}" target="_blank" rel="noopener">View proof<i class="fa-solid fa-arrow-right"></i></a></div>` : ""}</article>`).join("")
    : `<div class="state glass reveal" data-from="zoom"><i class="fa-solid fa-flag-checkered"></i>Every milestone starts with a goal. My achievements will be showcased here as I continue to grow.</div>`;

  // "Let's Connect" social cards (no URL => clearly marked placeholder, never an invented account)
  $("#socialGrid").innerHTML = SOCIALS.map(([k, ic, name, c], i) => {
    const v = CONTACT[k], tag = v ? "a" : "div";
    const at = v ? `href="${esc(v)}" target="_blank" rel="noopener" aria-label="${name} profile"` : `aria-disabled="true" aria-label="${name} link not added yet"`;
    return `<${tag} class="glass sc reveal${v ? "" : " empty"}" data-from="${FROM[i % 5]}" style="--c:${c};--d:${i * .08}s" ${at} data-tip="${v ? "Connect on " + name : "Add your " + name + " link in script.js"}"><i class="${ic}" aria-hidden="true"></i><span>${name}</span>${v ? "" : "<em>Add link</em>"}</${tag}>`;
  }).join("");
  const em = CONTACT.email;
  $("#contactList").innerHTML = `<div class="crow"><i class="fa-solid fa-envelope" aria-hidden="true"></i><span class="v">${em ? `<a href="mailto:${esc(em)}">${esc(em)}</a>` : "Email not added yet"}</span><button class="copy" data-copy="${esc(em)}" ${em ? "" : "disabled"}>Copy</button></div>`;
  const btn = $("#contactBtn");
  if (em) btn.href = `mailto:${em}`; else btn.setAttribute("aria-disabled", "true");
  $("#footSocial").innerHTML = SOCIALS.filter(r => CONTACT[r[0]]).map(([k, i, l]) => `<a href="${esc(CONTACT[k])}" aria-label="${l}" target="_blank" rel="noopener"><i class="${i}"></i></a>`).join("") + (em ? `<a href="mailto:${esc(em)}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>` : "");
}

/* ---------- 4. CERTIFICATES (GitHub Contents API) ---------- */
let certs = [], lbIndex = 0, lbOpener = null;
const prettify = f => f.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/\b\w/g, c => c.toUpperCase());

function normalise(list) {
  return list.map(c => { const m = CERT_META[c.name] || {}; return { src: c.src, title: m.title || c.title || prettify(c.name), org: m.org || c.org || "", date: m.date || c.date || "", url: m.url || "", repo: m.repo || "" }; });
}

async function fetchGitHub() {
  const { GITHUB_OWNER: o, GITHUB_REPO: r, CERTIFICATE_FOLDER: f, GITHUB_BRANCH: b } = CONFIG;
  const url = `https://api.github.com/repos/${o}/${r}/contents/${f}${b ? `?ref=${encodeURIComponent(b)}` : ""}`;
  const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
  if (res.status === 403 || res.status === 429) throw new Error("rate");
  if (res.status === 404) throw new Error("notfound"); // missing OR private repo
  if (!res.ok) throw new Error("http");
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("notfound");
  return data.filter(x => x.type === "file" && /\.(png|jpe?g|webp)$/i.test(x.name)).map(x => ({ name: x.name, src: x.download_url }));
}

async function loadCerts() {
  const st = $("#certState"), note = $("#certNote");
  const local = normalise(LOCAL_CERTS.map(c => ({ name: c.file.split("/").pop(), src: c.file, title: c.title, org: c.org, date: c.date })));
  const configured = !/^YOUR_/.test(CONFIG.GITHUB_OWNER) && !/^YOUR_/.test(CONFIG.GITHUB_REPO);
  let msg = "";
  stateBox(st, "fa-spinner fa-spin", "Loading certificates…");
  if (configured) {
    try {
      certs = normalise(await fetchGitHub());
      note.textContent = `Loaded from github.com/${CONFIG.GITHUB_OWNER}/${CONFIG.GITHUB_REPO}`;
    } catch (e) {
      msg = { rate: "GitHub's request limit was reached. Please try again in a little while.", notfound: "Could not find that folder. Check the owner, repository and folder name. Private repositories cannot be read from the browser.", http: "GitHub could not be reached right now." }[e.message] || "GitHub could not be reached. Check your connection.";
    }
  } else note.textContent = "Add your GitHub details in CONFIG (script.js) to load certificates automatically.";
  if (!certs.length) certs = local;
  if (msg && certs.length) msg += " Showing local certificates instead.";
  if (certs.length) stateBox(st, "fa-triangle-exclamation", msg);
  else stateBox(st, msg ? "fa-triangle-exclamation" : "fa-certificate", msg || "No certificates yet. Add images to your GitHub folder or the LOCAL_CERTS list.");
  $("#certGrid").innerHTML = certs.map((c, i) => `
    <button class="glass cert reveal" data-from="up" data-i="${i}" style="--d:${(i % 6) * .07}s" aria-label="Open ${esc(c.title)}">
      <div class="thumb"><img src="${esc(c.src)}" alt="Certificate: ${esc(c.title)}" loading="lazy"></div>
      <div class="pbody"><h3>${esc(c.title)}</h3><small>${[c.org, c.date].filter(Boolean).map(esc).join(" · ")}</small></div></button>`).join("");
  observe();
}

/* Lightbox */
const lb = $("#lb");
function showCert(i) {
  lbIndex = (i + certs.length) % certs.length; const c = certs[lbIndex];
  $("#lbImg").src = c.src; $("#lbImg").alt = `Certificate: ${c.title}`;
  $("#lbCap").innerHTML = [esc(c.title), esc(c.org), esc(c.date)].filter(Boolean).join(" · ") + (c.url ? ` · <a href="${esc(c.url)}" target="_blank" rel="noopener" style="color:var(--y)">Verify</a>` : "") + (c.repo ? ` · <a href="${esc(c.repo)}" target="_blank" rel="noopener" style="color:var(--y)">Repo</a>` : "");
}
function openLb(i, opener) { lbOpener = opener; showCert(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
function closeLb() { // animated exit, then hide
  if (lb.classList.contains("out")) return;
  lb.classList.add("out"); document.body.style.overflow = ""; lbOpener && lbOpener.focus();
  setTimeout(() => { lb.hidden = true; lb.classList.remove("out"); }, reduced ? 0 : 220);
}
$("#certGrid").addEventListener("click", e => { const b = e.target.closest(".cert"); if (b) openLb(+b.dataset.i, b); });
$("#lbClose").onclick = closeLb; $("#lbPrev").onclick = () => showCert(lbIndex - 1); $("#lbNext").onclick = () => showCert(lbIndex + 1);
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  else if (e.key === "ArrowLeft") showCert(lbIndex - 1);
  else if (e.key === "ArrowRight") showCert(lbIndex + 1);
  else if (e.key === "Tab") { // keep focus inside the dialog
    const f = [...lb.querySelectorAll("button:not([disabled]),a[href]")].filter(x => x.offsetParent); const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- 5. SCROLL ANIMATIONS ---------- */
let io;
function observe() {
  io = io || new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target; el.classList.add("in"); io.unobserve(el);
    setTimeout(() => el.classList.add("done"), 1400); // free up transform for hover effects
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal:not(.in):not([data-o])").forEach(el => { el.dataset.o = 1; reduced ? el.classList.add("in", "done") : io.observe(el); });
}

/* ---------- 6. NAV, TYPING, PARTICLES, MISC ---------- */
function initNav() {
  const nav = $("#nav"), links = [...nav.querySelectorAll("ul a")], burger = $("#burger"), ul = $("#links");
  const onScroll = () => nav.classList.toggle("show", scrollY > innerHeight * .6);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const setMenu = o => { // animated open/close; outside click + Escape close it
    if (!o && ul.classList.contains("open")) { ul.classList.add("closing"); setTimeout(() => ul.classList.remove("open", "closing"), reduced ? 0 : 200); }
    else if (o) ul.classList.add("open");
    burger.setAttribute("aria-expanded", o);
  };
  burger.onclick = () => setMenu(!ul.classList.contains("open"));
  links.forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", e => { if (!nav.contains(e.target)) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
  const secs = links.map(a => $(a.getAttribute("href")));
  const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(s => s && so.observe(s));
}

function initTyped() {
  const el = $("#typed"); let w = 0, c = 0, del = false;
  if (reduced) { el.textContent = TYPED_WORDS[0]; return; }
  (function tick() {
    const word = TYPED_WORDS[w]; c += del ? -1 : 1; el.textContent = word.slice(0, c);
    let wait = del ? 35 : 75;
    if (!del && c === word.length) { del = true; wait = 1600; } else if (del && c === 0) { del = false; w = (w + 1) % TYPED_WORDS.length; wait = 350; }
    setTimeout(tick, wait);
  })();
}

function initParticles() {
  if (reduced) return; const box = $("#particles"), n = innerWidth < 700 ? 10 : 22;
  for (let i = 0; i < n; i++) { const s = document.createElement("span"), z = 1 + Math.random() * 2.5; s.style.cssText = `left:${Math.random() * 100}%;width:${z}px;height:${z}px;animation-duration:${14 + Math.random() * 18}s;animation-delay:${-Math.random() * 25}s`; box.appendChild(s); }
}

document.addEventListener("click", e => {
  const b = e.target.closest(".copy"); if (!b || b.disabled) return;
  navigator.clipboard.writeText(b.dataset.copy).then(() => toast("Copied to clipboard"), () => toast("Copy failed — select the text manually"));
});
$("#toTop").onclick = () => scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
$("#profile").addEventListener("error", () => $("#frame").classList.add("missing")); // shows "KS" until assets/profile.png exists
if ($("#profile").complete && !$("#profile").naturalWidth) $("#frame").classList.add("missing");

/* ---------- 6b. POINTER EFFECTS (mouse-capable devices only) ---------- */
function initPointer() {
  if (reduced || !matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  // Magnetic pull: element leans toward the cursor (uses the CSS `translate` property, so it never clashes with other transforms)
  document.querySelectorAll(".btn,.sc,.socials a,.top").forEach(el => {
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect(); el.style.translate = `${(e.clientX - r.left - r.width / 2) * .18}px ${(e.clientY - r.top - r.height / 2) * .18}px`; }, { passive: true });
    el.addEventListener("pointerleave", () => { el.style.translate = ""; });
  });
  // Gentle tilt on project cards (only after their entrance animation has finished)
  document.querySelectorAll(".proj").forEach(el => {
    el.addEventListener("pointermove", e => { if (!el.classList.contains("done")) return; const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(800px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-5px)`; }, { passive: true });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
  // Hero mouse-follow: one rAF loop that eases toward the pointer and stops itself when settled
  const orbit = $(".orbit"), hero = $("#home"); let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, vis = true;
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; }).observe(hero);
  const loop = () => { cx += (tx - cx) * .08; cy += (ty - cy) * .08; orbit.style.setProperty("--mx", cx.toFixed(3)); orbit.style.setProperty("--my", cy.toFixed(3)); raf = Math.abs(tx - cx) + Math.abs(ty - cy) > .002 ? requestAnimationFrame(loop) : 0; };
  const kick = () => { raf || (raf = requestAnimationFrame(loop)); };
  hero.addEventListener("pointermove", e => { if (!vis) return; tx = e.clientX / innerWidth * 2 - 1; ty = e.clientY / innerHeight * 2 - 1; kick(); }, { passive: true });
  hero.addEventListener("pointerleave", () => { tx = ty = 0; kick(); });
}

/* ---------- 7. INIT ---------- */
$("#year").textContent = new Date().getFullYear();
render(); observe(); initNav(); initPointer(); initTyped(); initParticles(); loadCerts();
