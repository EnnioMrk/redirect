import { serve } from "bun";

const REDIRECT_URL = process.env.REDIRECT_URL || "https://example.com";
const WEBSITE_NAME = process.env.WEBSITE_NAME || "Die Website";

const css = await Bun.file(import.meta.dirname + "/styles.css").text();

const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Umleitung</title>
  <style>${css}</style>
</head>
<body>
  <div class="grid-overlay"></div>
  <div class="modal-container">
    <div class="modal">
      <div class="modal-content">
        <h1>${WEBSITE_NAME} hat einen neuen Standort</h1>
        <p>Bitte besuchen Sie uns unter unserer neuen Adresse.</p>
        <a href="${REDIRECT_URL}" class="btn">Neue Website besuchen</a>
      </div>
    </div>
  </div>
</body>
</html>`;

serve({
  port: 3000,
  fetch() {
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log("Server running on http://localhost:3000");