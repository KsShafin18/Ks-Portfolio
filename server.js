const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const port = Number(process.env.PORT) || 3000;
const certDir = path.join(rootDir, "assets", "certificates");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function titleFromFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function listCertificates() {
  if (!fs.existsSync(certDir)) return [];

  return fs
    .readdirSync(certDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(jpe?g|png|webp)$/i.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => ({
      name: entry.name,
      title: titleFromFilename(entry.name),
      src: `/assets/certificates/${encodeURIComponent(entry.name)}`
    }));
}

function safeFilePath(requestPath) {
  const normalized = requestPath === "/" ? "/index.html" : requestPath;
  const target = path.resolve(rootDir, `.${normalized}`);
  const rootPath = path.resolve(rootDir);

  if (!target.startsWith(rootPath)) {
    return null;
  }

  return target;
}

function sendFile(res, filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const mimeType = mimeTypes[extension] || "application/octet-stream";

  fs.readFile(filePath, (error, buffer) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeType,
      "Cache-Control": "no-cache"
    });
    res.end(buffer);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const pathname = decodeURIComponent(url.pathname);

  if (pathname === "/api/certificates") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    });
    res.end(JSON.stringify(listCertificates()));
    return;
  }

  const filePath = safeFilePath(pathname);

  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    const indexFile = path.join(filePath, "index.html");
    if (fs.existsSync(indexFile)) {
      sendFile(res, indexFile);
      return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Directory not found");
    return;
  }

  sendFile(res, filePath);
});

server.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
  console.log(`Certificates directory: ${certDir}`);
});
