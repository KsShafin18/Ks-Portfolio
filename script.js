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

// Local fallback certificates shown only if the folder is empty or unavailable.
const LOCAL_CERTS = [
  { file: "assets/certificates/NSDA WADP Level 4.jpg", title: "NSDA WADP Level 4", org: "", date: "" }
];

// Project cards for the portfolio. Each item includes a short intro, details, and external links.
const PROJECTS = [
  {
    name: "DTI Lost and Found",
    short: "A campus-focused lost and found website that helps students report and recover misplaced belongings quickly.",
    details: "DTI Lost and Found is a simple website developed specifically for the Daffodil Technical Institute campus to help students report and find lost or misplaced belongings. The project was created to make the lost-and-found process easier and more convenient for the campus community. This project secured 1st Prize at the Computer Science Project Showcase during the Daffodil Technical Institute Innovation & Exhibition.",
    tags: ["Django", "Campus App", "Problem Solving"],
    image: "assets/projects/1.jpg",
    github: "https://github.com/KsShafin18/DTI-Lost-and-Found-Website_2.0-Django-",
    demo: "",
    award: "1st Prize"
  },
  {
    name: "Dynamic Lab Report Generator",
    short: "A student-friendly tool that simplifies lab report cover generation and saves time on repetitive formatting.",
    details: "Creating lab report covers at Daffodil Technical Institute can be a repetitive and time-consuming task for students, especially for newcomers who may find the formatting process confusing. The Dynamic Lab Report Generator was developed to make this process simpler, faster, and more convenient by helping students generate lab report covers with less effort. The goal of this project is to improve the student experience by making lab report cover creation easier and more accessible.",
    tags: ["Web App", "Automation", "Student Tools"],
    image: "assets/projects/2.jpg",
    github: "",
    demo: "https://dynamic-lab-report-generator-for-dt.vercel.app/",
    award: "Most Popular"
  }
];

const ACHIEVEMENTS = [
  { branch: "technical", category: "National Skill Development Authority", title: "Competent in Web Application Development with Python & Django", description: "Achieved the Competent level in Web Application Development with Python and Django through training at Esikhon Institute under the NSDA-related competency framework.", icon: "fa-code" },
  { branch: "technical", category: "Ostad - Learn Skills", title: "MERN Stack Development", description: "Currently pursuing MERN Stack Development through the Ostad online platform, with more than half of the course completed.", icon: "fa-laptop-code", status: "Ongoing" },
  { branch: "awards", category: "Daffodil Technical Institute", title: "1st Place — Project Innovation & Exhibition-2026", description: "Secured 1st place in the Computer Science Project Showcase at the Daffodil Technical Institute Innovation & Exhibition for developing a practical, student-focused project.", icon: "fa-trophy", highlight: true },
  { branch: "institutional", category: "Media & Institutional Contribution", title: "Promotional Media Contributor — Daffodil Technical Institute", description: "Contributed to promotional media activities for Daffodil Technical Institute, supporting the institute's promotional content and communication initiatives.", icon: "fa-video" },
  { branch: "institutional", category: "Promotional Media Team", title: "Founder & Leader — DELTA-X Media Team, Daffodil Technical Institute Cultural Group", description: "Founder and leader of the DELTA-X Media Team within the Daffodil Technical Institute Cultural Group.", icon: "fa-video" },
  { branch: "communication", category: "Outreach & Communication", title: "Campaign Promotion & Audience Engagement", description: "Participated in several promotional campaigns organized by Daffodil Technical Institute, engaging directly with people, inviting potential participants, encouraging audience participation, and helping increase awareness and engagement with campaign activities. This experience strengthened interpersonal communication, public engagement, persuasion, and teamwork skills.", icon: "fa-bullhorn" },
  { branch: "awards", category: "PKSF Quiz Competition 2026", title: "Ranked 8th Among 100+ Competitors", description: "Achieved 8th place among more than 100 competitors at a PKSF quiz competition event, demonstrating analytical thinking, knowledge, and a competitive mindset.", icon: "fa-brain" },
  { branch: "communication", category: "Leadership & Communication", title: "Event Host & Presenter", description: "Hosted several events, gaining practical experience in public speaking, audience engagement, event coordination, and professional communication.", icon: "fa-microphone" },
  { branch: "teamwork", category: "American International University-Bangladesh", title: "Presentation Team Member at AIUB", description: "Collaborated as a team member in a presentation at American International University-Bangladesh (AIUB), contributing to teamwork, idea sharing, and effective presentation delivery.", icon: "fa-people-group" },
  { branch: "teamwork", category: "eSikhon IT Institute — March 2026", title: "Host — Django Quiz Competition", description: "Served as host for a Django Quiz Competition at eSikhon Institute in March 2026, facilitating the event and engaging participants.", icon: "fa-microphone" }
];
const ACHIEVEMENT_BRANCHES = [
  { id: "technical", title: "Technical Skills", icon: "fa-laptop-code" },
  { id: "awards", title: "Awards & Competition", icon: "fa-award" },
  { id: "institutional", title: "Institutional Contribution", icon: "fa-building" },
  { id: "communication", title: "Communication & Outreach", icon: "fa-comments" },
  { id: "teamwork", title: "Teamwork & Presentation", icon: "fa-people-group" }
];

// 👉 SKILLS — "Name|icon". icon = "dev:name[:variant]" (Devicon logo) or a Font Awesome class.
const SKILLS = [
  { cat: "Programming Languages", icon: "fa-code", items: ["Python|dev:python", "JavaScript|dev:javascript", "HTML5|dev:html5", "CSS3|dev:css3", "SQL|fa-solid fa-database"] },
  { cat: "Backend Development", icon: "fa-server", items: ["Django|dev:django:plain", "Django REST Framework|fa-solid fa-plug", "Node.js|dev:nodejs", "Express.js|dev:express", "REST APIs|fa-solid fa-network-wired"] },
  { cat: "Frontend Development", icon: "fa-laptop-code", items: ["React|dev:react", "Responsive Web Design|fa-solid fa-mobile-screen", "Modern JavaScript|dev:javascript", "Tailwind CSS|dev:tailwindcss", "Bootstrap|dev:bootstrap"] },
  { cat: "Databases", icon: "fa-database", items: ["MySQL|dev:mysql", "SQLite|dev:sqlite"] },
  { cat: "Package Managers & Development Tools", icon: "fa-screwdriver-wrench", items: ["npm|dev:npm:original-wordmark", "pnpm|dev:pnpm", "Git|dev:git", "GitHub|dev:github", "VS Code|dev:vscode", "pip|dev:python"] },
  { cat: "Office & Productivity", icon: "fa-briefcase", items: ["Microsoft Word|fa-solid fa-file-word", "Microsoft Excel|fa-solid fa-file-excel", "Microsoft PowerPoint|fa-solid fa-file-powerpoint", "Microsoft Office|fa-brands fa-microsoft", "Document Formatting|fa-solid fa-file-lines", "Spreadsheet Management|fa-solid fa-table"] },
  { cat: "Creative Media", icon: "fa-clapperboard", items: ["CapCut|fa-solid fa-scissors", "Video Editing|fa-solid fa-film", "Short-Form Video Editing|fa-solid fa-video", "Social Media Ad Editing|fa-solid fa-bullhorn", "Content Presentation|fa-solid fa-display"] }
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
const EDUCATION = [
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "Daffodil Technical Institute",
    status: "Currently Studying",
    date: "Present",
    description: "Currently pursuing studies in Computer Science and Technology, focusing on developing technical knowledge, programming skills, and a strong foundation in information technology.",
    current: true
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Civil Aviation School and College",
    status: "Completed",
    date: "2023",
    description: "Completed the Higher Secondary Certificate with a strong foundation in academic studies.",
    current: false
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Monipur High School and College, Branch - 03",
    status: "Completed",
    date: "2021",
    description: "Completed the Secondary School Certificate and built the foundation for further academic growth.",
    current: false
  }
];
const SERVICES = [
  ["fa-globe", "Website Development", "Fast, responsive websites built from scratch."],
  ["fa-server", "Backend Development", "Server-side logic with Python/Django or Node.js."],
  ["fa-plug", "REST API Development", "Clean, documented APIs for web and mobile apps."],
  ["fa-database", "Database Integration", "Schema design and queries in MySQL or SQLite."],
  ["fa-mobile-screen", "Responsive UI Development", "Interfaces that work on every screen size."],
  ["fa-film", "Video Ad Editing", "Short-form edits and social media ads."]
];
const TYPED_WORDS = ["Full-Stack Developer", "Python & Django Developer", "JavaScript Developer", "Creative Video Editor"];

/* ---------- 2. HELPERS ---------- */
const $ = (s, r = document) => r.querySelector(s);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const MONO = ["django", "express", "github"]; // dark logos shown in white
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const FROM = ["up", "left", "right", "down", "zoom"];
let PROJECT_IMAGE_MAP = {};

function getProjectImagePath(index) {
  if (PROJECTS[index] && PROJECTS[index].image) return PROJECTS[index].image;
  return PROJECT_IMAGE_MAP[index] || "";
}

async function loadProjectImages() {
  try {
    const res = await fetch("/api/projects");
    if (!res.ok) return;
    const files = await res.json();
    const map = {};

    files.forEach((file) => {
      const match = file.name.match(/^(\d+)/i);
      if (!match) return;
      const idx = Number(match[1]) - 1;
      if (Number.isInteger(idx) && idx >= 0 && idx < PROJECTS.length) {
        map[idx] = file.src;
      }
    });

    PROJECT_IMAGE_MAP = map;
    render();
    observe();
  } catch (error) {
    PROJECT_IMAGE_MAP = {};
  }
}

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
  $("#educationTimeline").innerHTML = EDUCATION.map((item, index) => `
    <article class="edu-item glass ${item.current ? "current" : ""} reveal" data-from="up" style="--d:${index * 0.08}s">
      <div class="edu-marker"><span></span></div>
      <div class="edu-content">
        <div class="edu-head">
          <span class="edu-badge ${item.current ? "current" : ""}">${item.current ? "Current" : item.date}</span>
          <span class="edu-status">${esc(item.status)}</span>
        </div>
        <h3>${esc(item.degree)}</h3>
        <p class="edu-institution"><i class="fa-solid fa-school"></i>${esc(item.institution)}</p>
        <p class="edu-desc">${esc(item.description)}</p>
      </div>
    </article>
  `).join("");
  $("#serviceGrid").innerHTML = SERVICES.map(([i, t, d]) => `<article class="glass card reveal"><i class="fa-solid ${i} ic"></i><h3>${t}</h3><p>${d}</p></article>`).join("");

  let n = 0; // skill cards fly in from rotating directions
  $("#skillGroups").innerHTML = SKILLS.map(g => `
    <div class="sgroup"><h3 class="reveal" data-from="down"><i class="fa-solid ${g.icon}"></i>${g.cat}</h3>
    <div class="skills">${g.items.map(s => { const [name, ic] = s.split("|"); const d = (n % 6) * 0.07; return `<div class="glass skill reveal" data-from="${FROM[n++ % 5]}" style="--d:${d}s"><div class="logo">${icon(ic)}</div>${esc(name)}</div>`; }).join("")}</div></div>`).join("");

  const ph = `<div class="thumb"><i class="fa-solid fa-image"></i></div>`;
  $("#projectGrid").innerHTML = PROJECTS.length ? PROJECTS.map((p, index) => {
    const imagePath = getProjectImagePath(index);
    return `
      <article class="glass proj reveal" data-from="up">
        <div class="thumb">
          ${imagePath ? `<img class="proj-thumb-image" src="${esc(imagePath)}" alt="${esc(p.name)} thumbnail" loading="lazy">` : `<div class="project-fallback"><i class="fa-solid fa-laptop-code"></i></div>`}
          ${p.award ? `<span class="badge">${esc(p.award)}</span>` : ""}
        </div>
        <div class="pbody">
          <div class="proj-header">
            <h3>${esc(p.name)}</h3>
            ${p.demo ? `<a class="proj-live-link" href="${esc(p.demo)}" target="_blank" rel="noopener">Click to View</a>` : ""}
          </div>
          <p class="proj-short">${esc(p.short)}</p>
          <div class="tags">${(p.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
          <div class="proj-actions">
            <button class="proj-toggle" type="button" data-project-index="${index}">More Info</button>
            ${p.github ? `<a class="proj-link" href="${esc(p.github)}" target="_blank" rel="noopener">View on GitHub <i class="fa-solid fa-arrow-right"></i></a>` : ""}
            ${p.demo && !p.github ? `<a class="proj-link emphasize" href="${esc(p.demo)}" target="_blank" rel="noopener">View Site <i class="fa-solid fa-arrow-right"></i></a>` : ""}
          </div>
          <div class="proj-extra" hidden>
            <p>${esc(p.details)}</p>
            ${p.demo ? `<a class="proj-link emphasize" href="${esc(p.demo)}" target="_blank" rel="noopener">Click Here to Visit <i class="fa-solid fa-arrow-right"></i></a>` : ""}
          </div>
        </div>
      </article>`;
  }).join("") : `<div class="state glass"><i class="fa-solid fa-folder-open"></i>No projects to display.</div>`;

  document.querySelectorAll(".proj-thumb-image").forEach((img) => {
    img.addEventListener("error", () => {
      const thumb = img.closest(".thumb");
      if (!thumb) return;
      const fallback = document.createElement("div");
      fallback.className = "project-fallback";
      fallback.innerHTML = '<i class="fa-solid fa-laptop-code"></i>';
      img.replaceWith(fallback);
    });
  });

  $("#achGrid").innerHTML = `
    <div class="achievement-root glass reveal" data-from="down">
      <i class="fa-solid fa-sitemap" aria-hidden="true"></i>
      <div><span>THE JOURNEY SO FAR</span><h3>My Achievements &amp; Experiences</h3></div>
    </div>
    <div class="achievement-branches">
      ${ACHIEVEMENT_BRANCHES.map(branch => `
        <section class="achievement-branch reveal" data-from="up">
          <h3><i class="fa-solid ${branch.icon}" aria-hidden="true"></i>${esc(branch.title)}</h3>
          <div class="achievement-nodes">
            ${ACHIEVEMENTS.map((achievement, index) => ({ achievement, index }))
              .filter(({ achievement }) => achievement.branch === branch.id)
              .map(({ achievement, index }) => `
                <button class="achievement-node${achievement.highlight ? " is-highlight" : ""}${achievement.status ? " has-status" : ""}" type="button"
                  data-achievement-index="${index}" aria-expanded="false" aria-controls="achievementDetail"
                  aria-label="${esc(achievement.title)}. ${esc(achievement.category)}${achievement.status ? `. ${esc(achievement.status)}` : ""}. Show details">
                  ${achievement.status ? `<span class="achievement-status">${esc(achievement.status)}</span>` : ""}
                  <span class="achievement-node-icon"><i class="fa-solid ${achievement.icon}" aria-hidden="true"></i></span>
                  <span class="achievement-node-copy"><strong>${esc(achievement.title)}</strong><small>${esc(achievement.category)}</small></span>
                </button>`).join("")}
          </div>
        </section>`).join("")}
    </div>`;

  // "Let's Connect" social cards (no URL => clearly marked placeholder, never an invented account)
  $("#socialGrid").innerHTML = SOCIALS.filter(([key]) => CONTACT[key]).map(([key, ic, name, color], index) => {
    return `<a class="glass sc reveal" data-from="${FROM[index % 5]}" style="--c:${color};--d:${index * .08}s" href="${esc(CONTACT[key])}" target="_blank" rel="noopener" aria-label="${name} profile" data-tip="Connect on ${name}"><i class="${ic}" aria-hidden="true"></i><span>${name}</span></a>`;
  }).join("");
  const em = CONTACT.email;
  $("#contactList").innerHTML = em ? `<div class="crow"><i class="fa-solid fa-envelope" aria-hidden="true"></i><span class="v"><a href="mailto:${esc(em)}">${esc(em)}</a></span><button class="copy" data-copy="${esc(em)}">Copy</button></div>` : "";
  const btn = $("#contactBtn");
  if (em) btn.href = `mailto:${em}`; else btn.hidden = true;
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

async function fetchDirectoryCertificates() {
  const res = await fetch("/api/certificates", { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error("catalog");
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("catalog");
  return data;
}

async function loadCerts() {
  const st = $("#certState");
  const local = normalise(LOCAL_CERTS.map(c => ({ name: c.file.split("/").pop(), src: c.file, title: c.title, org: c.org, date: c.date })));

  try {
    const folderCerts = await fetchDirectoryCertificates();
    if (!folderCerts.length) {
      throw new Error("empty");
    }

    certs = normalise(folderCerts.map(c => ({
      name: c.name || c.title || c.src.split("/").pop(),
      src: c.src,
      title: c.title || c.name || prettify(c.src.split("/").pop()),
      org: c.org || "",
      date: c.date || ""
    })));

  } catch (e) {
    certs = local;
    if (!local.length) {
      stateBox(st, "fa-certificate", "Certificate gallery is currently unavailable.");
    }
  }

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
  const achievementButton = e.target.closest(".achievement-node");
  if (achievementButton) {
    const detail = $("#achievementDetail");
    const isOpen = achievementButton.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".achievement-node").forEach(node => node.setAttribute("aria-expanded", "false"));
    if (isOpen) {
      detail.hidden = true;
      detail.classList.remove("is-open");
      return;
    }
    const achievement = ACHIEVEMENTS[Number(achievementButton.dataset.achievementIndex)];
    if (!achievement) return;
    $("#achievementDetailCategory").textContent = achievement.category;
    $("#achievementDetailTitle").textContent = achievement.title;
    $("#achievementDetailDescription").textContent = achievement.description;
    achievementButton.setAttribute("aria-expanded", "true");
    detail.hidden = false;
    detail.classList.add("is-open");
    detail.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    return;
  }

  const achievementClose = e.target.closest("#achievementDetailClose");
  if (achievementClose) {
    const selectedNode = $(".achievement-node[aria-expanded='true']");
    $("#achievementDetail").hidden = true;
    $("#achievementDetail").classList.remove("is-open");
    selectedNode?.setAttribute("aria-expanded", "false");
    selectedNode?.focus();
    return;
  }

  const copyBtn = e.target.closest(".copy"); if (copyBtn && !copyBtn.disabled) {
    navigator.clipboard.writeText(copyBtn.dataset.copy).then(() => toast("Copied to clipboard"), () => toast("Copy failed — select the text manually"));
  }

  const toggleBtn = e.target.closest(".proj-toggle");
  if (toggleBtn) {
    const card = toggleBtn.closest(".proj");
    const extra = card.querySelector(".proj-extra");
    const isHidden = extra.hidden;
    extra.hidden = !isHidden;
    toggleBtn.textContent = isHidden ? "Less Info" : "More Info";
    toggleBtn.classList.toggle("open", isHidden);
  }
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
render(); observe(); initNav(); initPointer(); initTyped(); initParticles(); loadProjectImages(); loadCerts();
