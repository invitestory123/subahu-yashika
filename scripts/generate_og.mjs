import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function toBase64(relPath, mime) {
  const full = path.join(rootDir, relPath);
  const data = fs.readFileSync(full).toString("base64");
  return `data:${mime};base64,${data}`;
}

const palaceB64 = toBase64("src/assets/hero-palace.jpg", "image/jpeg");
const bougB64 = toBase64("src/assets/bougainvillea.png", "image/png");
const flourishB64 = toBase64("src/assets/gold-flourish.png", "image/png");

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Noto+Serif+Devanagari:wght@600;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #fdf8ef;
      font-family: 'Cormorant Garamond', Georgia, serif;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Background Palace Plate */
    .bg-palace {
      position: absolute;
      inset: 0;
      background-image: url('${palaceB64}');
      background-size: cover;
      background-position: center bottom;
      opacity: 0.16;
    }

    /* Silk & Ivory Tint Overlay */
    .overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255, 253, 248, 0.88) 0%, rgba(253, 246, 234, 0.96) 100%);
    }

    /* Outer Luxury Frame */
    .card {
      position: relative;
      width: 1150px;
      height: 586px;
      border-radius: 28px;
      border: 2px solid rgba(200, 160, 85, 0.9);
      background: rgba(255, 254, 250, 0.88);
      box-shadow: 0 12px 48px rgba(160, 120, 60, 0.12), inset 0 0 55px rgba(230, 205, 145, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 24px 34px 20px;
      z-index: 2;
    }

    /* Inner Fine Gold Inset Border */
    .card-inset {
      position: absolute;
      inset: 9px;
      border-radius: 20px;
      border: 1px solid rgba(198, 155, 75, 0.45);
      pointer-events: none;
    }

    /* Corner Florals */
    .corner-boug-tl {
      position: absolute;
      top: -22px;
      left: -22px;
      width: 260px;
      opacity: 0.92;
      pointer-events: none;
    }

    .corner-boug-tr {
      position: absolute;
      top: -22px;
      right: -22px;
      width: 260px;
      transform: scaleX(-1);
      opacity: 0.92;
      pointer-events: none;
    }

    /* Top: Invocations */
    .invocations {
      display: flex;
      gap: 32px;
      align-items: center;
      justify-content: center;
      font-family: 'Noto Serif Devanagari', 'Nirmala UI', serif;
      font-size: 18.5px;
      font-weight: 700;
      color: #9e6d24;
      letter-spacing: 0.04em;
    }

    .inv-badge {
      background: rgba(246, 235, 212, 0.75);
      border: 1px solid rgba(212, 175, 95, 0.55);
      padding: 3.5px 22px;
      border-radius: 999px;
      box-shadow: 0 2px 6px rgba(180, 140, 60, 0.08);
    }

    /* Blessings */
    .blessings {
      text-align: center;
      margin-top: 2px;
    }

    .blessings-title {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.34em;
      color: #8c6832;
      font-weight: 600;
    }

    .blessings-names {
      font-family: 'Marcellus', serif;
      font-size: 15px;
      color: #3b2229;
      letter-spacing: 0.03em;
      margin-top: 2px;
      line-height: 1.3;
    }

    /* Couple Section */
    .couple-section {
      text-align: center;
      margin-top: 2px;
    }

    .lead-in {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.36em;
      color: #a87932;
      font-weight: 600;
    }

    .couple-title {
      font-family: 'Marcellus', serif;
      font-size: 64px;
      line-height: 1.05;
      color: #4a1625;
      letter-spacing: 0.03em;
      text-shadow: 0 2px 16px rgba(212, 175, 95, 0.35);
      margin-top: 2px;
    }

    .couple-amp {
      font-family: 'Great Vibes', cursive;
      font-size: 52px;
      color: #b5832a;
      margin: 0 16px;
      font-weight: 400;
    }

    .parentage {
      font-size: 16px;
      font-weight: 600;
      color: #7a3c48;
      letter-spacing: 0.03em;
      margin-top: 3px;
    }

    /* Wedding Centerpiece Plate */
    .wedding-plate {
      width: 100%;
      max-width: 820px;
      background: linear-gradient(180deg, rgba(255, 253, 248, 0.95) 0%, rgba(253, 246, 235, 0.95) 100%);
      border: 1.8px solid rgba(212, 175, 95, 0.65);
      border-radius: 20px;
      padding: 14px 28px;
      box-shadow: 0 6px 20px rgba(160, 120, 60, 0.1), inset 0 0 20px rgba(240, 220, 170, 0.25);
      text-align: center;
      position: relative;
      margin-top: 4px;
    }

    .wedding-eyebrow {
      display: inline-block;
      font-family: 'Marcellus', serif;
      font-size: 14px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #8c2438;
      font-weight: 700;
      padding: 3px 20px;
      border-radius: 999px;
      background: rgba(246, 230, 205, 0.65);
      border: 1px solid rgba(212, 175, 95, 0.5);
    }

    .wedding-date-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
    }

    .wedding-date {
      font-family: 'Marcellus', serif;
      font-size: 22px;
      color: #3b111d;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    .wedding-divider {
      color: #b5832a;
      font-size: 18px;
    }

    .wedding-time {
      font-size: 19px;
      font-weight: 700;
      color: #9e6d24;
      letter-spacing: 0.02em;
    }

    .wedding-venue {
      font-size: 17px;
      font-weight: 600;
      color: #4a362e;
      margin-top: 6px;
      letter-spacing: 0.02em;
    }

    /* Bottom: Regards & #SYforever */
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 960px;
      border-top: 1.5px solid rgba(212, 175, 95, 0.55);
      padding-top: 8px;
      margin-top: 4px;
    }

    .hashtag {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 0.24em;
      color: #8c2438;
      text-transform: uppercase;
    }

    .regards {
      font-style: italic;
      font-size: 16px;
      color: #3b2b24;
      letter-spacing: 0.04em;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="bg-palace"></div>
  <div class="overlay"></div>

  <div class="card">
    <div class="card-inset"></div>
    <img src="${bougB64}" class="corner-boug-tl" alt="">
    <img src="${bougB64}" class="corner-boug-tr" alt="">

    <!-- Sacred Invocations -->
    <div class="invocations">
      <span class="inv-badge">॥ श्री महावीराय नमः ॥</span>
      <span class="inv-badge">॥ जय श्री बाबा गज्जा जी ॥</span>
    </div>

    <!-- Heavenly Blessings of Elders -->
    <div class="blessings">
      <div class="blessings-title">With Heavenly Blessings of</div>
      <div class="blessings-names">
        Late Smt. Mahimawanti Jain &amp; Late Sh. Dev Raj Jain &nbsp;·&nbsp; Smt. Usha Jain &amp; Sh. Surinder Kumar Jain
      </div>
    </div>

    <!-- Couple Section -->
    <div class="couple-section">
      <div class="lead-in">Together With Their Families Cordially Invite You</div>
      <div class="couple-title">
        Subahu<span class="couple-amp">&amp;</span>Yashika
      </div>
      <div class="parentage">
        S/o Mrs. Mukta &amp; Mr. Atul Jain &nbsp;·&nbsp; D/o Mrs. Rashmi &amp; Mr. Nilesh Jain (Samana)
      </div>
    </div>

    <!-- Wedding Celebration Spotlight Plate -->
    <div class="wedding-plate">
      <div class="wedding-eyebrow">Auspicious Wedding Ceremony</div>
      <div class="wedding-date-row">
        <span class="wedding-date">Saturday, 21 November 2026</span>
        <span class="wedding-divider">✦</span>
        <span class="wedding-time">8:00 PM onwards</span>
      </div>
      <div class="wedding-venue">
        Arabia Hall, The Elysium Grand
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="hashtag">#SYforever</div>
      <div class="regards">With Love &amp; Regards: Jain Family</div>
    </div>
  </div>
</body>
</html>`;

const cardHtmlPath = path.join(rootDir, "scripts", "og-card.html");
fs.writeFileSync(cardHtmlPath, htmlContent, "utf-8");
console.log("[generate_og] Updated scripts/og-card.html");

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempPng = path.join(rootDir, "scripts", "temp-og.png");
const outputPng = path.join(rootDir, "public", "og-image.png");
const outputPngSubahu = path.join(rootDir, "public", "og-image-subahu-yashika.png");
const outputWebp = path.join(rootDir, "public", "og-image.webp");
const outputWebpSubahu = path.join(rootDir, "public", "og-image-subahu-yashika.webp");

const cmd = `"${edgePath}" --headless=new --disable-gpu --screenshot="${tempPng}" --window-size=1200,630 "file://${cardHtmlPath.replace(/\\/g, "/")}"`;
console.log("[generate_og] Capturing screenshot via Edge headless...");
execSync(cmd, { stdio: "inherit" });

// Run Python PIL for maximum lossless compression: compress_level=9, optimize=True, and lossless WebP method=6
const pyCompress = `
from PIL import Image
import os

img = Image.open(r"${tempPng}").convert("RGB")
# 100% Lossless PNG with maximum deflate compression level 9 and optimization
img.save(r"${outputPng}", "PNG", optimize=True, compress_level=9)
img.save(r"${outputPngSubahu}", "PNG", optimize=True, compress_level=9)

# 100% Lossless WebP with quality=100 and method=6 (slowest/best compression)
img.save(r"${outputWebp}", "WEBP", lossless=True, quality=100, method=6)
img.save(r"${outputWebpSubahu}", "WEBP", lossless=True, quality=100, method=6)

print(f"Lossless PNG size (og-image.png): {os.path.getsize(r'${outputPng}')} bytes")
print(f"Lossless PNG size (og-image-subahu-yashika.png): {os.path.getsize(r'${outputPngSubahu}')} bytes")
print(f"Lossless WebP size (og-image.webp): {os.path.getsize(r'${outputWebp}')} bytes")
print(f"Lossless WebP size (og-image-subahu-yashika.webp): {os.path.getsize(r'${outputWebpSubahu}')} bytes")
`;

fs.writeFileSync(path.join(rootDir, "scripts", "compress.py"), pyCompress, "utf-8");
execSync(`python scripts/compress.py`, { stdio: "inherit" });

if (fs.existsSync(tempPng)) {
  fs.unlinkSync(tempPng);
}
if (fs.existsSync(path.join(rootDir, "scripts", "compress.py"))) {
  fs.unlinkSync(path.join(rootDir, "scripts", "compress.py"));
}

console.log("[generate_og] Lossless compression completed.");
