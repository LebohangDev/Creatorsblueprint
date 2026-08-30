import os
import subprocess
import tempfile
import sys

def build_html_content():
    html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Creators Blueprint - Design System Specification</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Readex+Pro:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-page: #FAF8F5;
      --bg-surface: #FFFFFF;
      --bg-surface-subtle: #F3EFEA;
      --bg-dark: #0F1B3D;
      --text-primary: #101828;
      --text-secondary: #475569;
      --text-muted: #64748B;
      --text-on-dark: #FFFFFF;
      --accent-orange: #FF5500;
      --accent-orange-hover: #E64C00;
      --accent-orange-subtle: #FFF2EB;
      --accent-blue: #1D4ED8;
      --accent-blue-hover: #1E40AF;
      --accent-blue-subtle: #EFF6FF;
      --accent-lime: #D4FF00;
      --accent-lime-subtle: #F7FFD1;
      --accent-purple: #8B5CF6;
      --accent-purple-subtle: #F3E8FF;
      --border-light: #E2DCD5;
      --border-strong: #CBD5E1;
      --border-dark: #1E293B;
      --shadow-sm: 0 2px 8px rgba(15, 27, 61, 0.04);
      --shadow-md: 0 10px 30px rgba(15, 27, 61, 0.08);
      --font-display: 'Plus Jakarta Sans', sans-serif;
      --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-arabic: 'Readex Pro', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    @page {
      size: A4 portrait;
      margin: 14mm 14mm 14mm 14mm;
    }

    body {
      background-color: var(--bg-page);
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 9.5pt;
      line-height: 1.5;
      padding: 0;
    }

    .document-container {
      width: 100%;
      max-width: 100%;
    }

    /* Page Breaks */
    .page-break {
      page-break-before: always;
      padding-top: 10px;
    }

    .no-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Header Banner */
    .header-banner {
      background: linear-gradient(135deg, #0F1B3D 0%, #16254F 100%);
      color: #FFFFFF;
      border-radius: 14px;
      padding: 24px 28px;
      margin-bottom: 20px;
      box-shadow: 0 10px 30px rgba(15, 27, 61, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
    }

    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 12px;
    }

    .brand-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-display);
      font-size: 15pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #FFFFFF;
    }

    .brand-dot {
      width: 10px;
      height: 10px;
      background: var(--accent-orange);
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 10px var(--accent-orange);
    }

    .doc-badge {
      background: rgba(212, 255, 0, 0.15);
      color: var(--accent-lime);
      border: 1px solid rgba(212, 255, 0, 0.35);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 7.5pt;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .header-banner h1 {
      font-family: var(--font-display);
      font-size: 20pt;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: -0.8px;
      margin-bottom: 8px;
      color: #FFFFFF;
    }

    .header-banner p {
      color: #94A3B8;
      font-size: 9.5pt;
      line-height: 1.45;
      max-width: 90%;
    }

    .meta-bar {
      display: flex;
      gap: 20px;
      margin-top: 14px;
      font-size: 8pt;
      color: #CBD5E1;
      font-weight: 500;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .meta-item strong {
      color: #FFFFFF;
    }

    /* Section Headings */
    .section-title {
      font-family: var(--font-display);
      font-size: 14pt;
      font-weight: 800;
      color: var(--text-primary);
      margin: 18px 0 10px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: -0.4px;
    }

    .section-title-icon {
      width: 26px;
      height: 26px;
      border-radius: 7px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 10pt;
      background: var(--bg-surface-subtle);
      border: 1px solid var(--border-light);
    }

    .section-desc {
      color: var(--text-secondary);
      font-size: 8.5pt;
      margin-bottom: 14px;
      line-height: 1.45;
    }

    /* Grid & Cards */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 14px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      margin-bottom: 14px;
    }

    .card {
      background: var(--bg-surface);
      border: 1px solid var(--border-light);
      border-radius: 12px;
      padding: 14px;
      box-shadow: var(--shadow-sm);
    }

    .card-dark {
      background: var(--bg-dark);
      border: 1px solid var(--border-dark);
      border-radius: 12px;
      padding: 14px;
      color: var(--text-on-dark);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }

    .card-title {
      font-family: var(--font-display);
      font-size: 11pt;
      font-weight: 700;
      color: var(--text-primary);
    }

    .card-dark .card-title {
      color: #FFFFFF;
    }

    .pill-badge {
      display: inline-block;
      font-size: 7pt;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 12px;
      letter-spacing: 0.2px;
    }

    .pill-orange { background: var(--accent-orange-subtle); color: var(--accent-orange); border: 1px solid rgba(255, 85, 0, 0.2); }
    .pill-blue { background: var(--accent-blue-subtle); color: var(--accent-blue); border: 1px solid rgba(29, 78, 216, 0.2); }
    .pill-lime { background: var(--accent-lime); color: #101828; font-weight: 800; }
    .pill-purple { background: var(--accent-purple-subtle); color: var(--accent-purple); border: 1px solid rgba(139, 92, 246, 0.2); }
    .pill-dark { background: rgba(255,255,255,0.12); color: #FFFFFF; }

    /* Typography Specimens */
    .specimen-box {
      background: var(--bg-surface-subtle);
      border: 1px solid var(--border-light);
      border-radius: 8px;
      padding: 10px 12px;
      margin: 8px 0;
    }

    .specimen-display {
      font-family: var(--font-display);
      font-size: 14pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .specimen-body {
      font-family: var(--font-body);
      font-size: 9pt;
      color: var(--text-secondary);
      line-height: 1.45;
    }

    .specimen-arabic {
      font-family: var(--font-arabic);
      font-size: 11pt;
      font-weight: 700;
      color: var(--text-primary);
      direction: rtl;
      text-align: right;
    }

    .font-meta-list {
      list-style: none;
      font-size: 7.8pt;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .font-meta-list li {
      display: flex;
      align-items: baseline;
      gap: 6px;
      color: var(--text-secondary);
    }

    .font-meta-list strong {
      color: var(--text-primary);
      min-width: 80px;
    }

    /* Color Swatch Card */
    .color-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-light);
      border-radius: 10px;
      padding: 10px;
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 8px;
      box-shadow: var(--shadow-sm);
    }

    .color-chip {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      flex-shrink: 0;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
      position: relative;
    }

    .color-info {
      flex: 1;
      min-width: 0;
    }

    .color-name-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2px;
    }

    .color-name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 8.8pt;
      color: var(--text-primary);
    }

    .color-codes {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 7.2pt;
      color: var(--text-muted);
      margin-bottom: 3px;
    }

    .hex-badge {
      background: #F1F5F9;
      padding: 1px 5px;
      border-radius: 4px;
      color: #0F172A;
      font-weight: 600;
      border: 1px solid #E2E8F0;
    }

    .token-badge {
      background: #FEF3C7;
      color: #92400E;
      padding: 1px 5px;
      border-radius: 4px;
      font-weight: 600;
      border: 1px solid #FDE68A;
    }

    .color-desc {
      font-size: 7.6pt;
      color: var(--text-secondary);
      line-height: 1.35;
    }

    .color-usage {
      font-size: 7.2pt;
      color: var(--accent-blue);
      font-weight: 600;
      margin-top: 2px;
    }

    /* Tables */
    .table-container {
      width: 100%;
      border: 1px solid var(--border-light);
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 14px;
      box-shadow: var(--shadow-sm);
      background: var(--bg-surface);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.8pt;
      text-align: left;
    }

    th {
      background: #F8FAFC;
      color: var(--text-primary);
      font-family: var(--font-display);
      font-weight: 700;
      padding: 8px 10px;
      border-bottom: 1px solid var(--border-light);
      font-size: 7.8pt;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    td {
      padding: 7px 10px;
      border-bottom: 1px solid #F1F5F9;
      color: var(--text-secondary);
      vertical-align: middle;
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:nth-child(even) {
      background-color: #FAF8F5;
    }

    .component-tag {
      font-family: var(--font-mono);
      font-weight: 600;
      color: var(--text-primary);
      font-size: 7.6pt;
    }

    /* Alert / Note Callouts */
    .callout {
      background: #EFF6FF;
      border-left: 4px solid var(--accent-blue);
      border-radius: 0 8px 8px 0;
      padding: 10px 14px;
      margin: 12px 0;
      font-size: 8pt;
      color: #1E3A8A;
      line-height: 1.45;
    }

    .callout-orange {
      background: #FFF7ED;
      border-left-color: var(--accent-orange);
      color: #9A3412;
    }

    .callout-dark {
      background: #0F1B3D;
      border-left-color: var(--accent-lime);
      color: #F8FAFC;
    }

    .callout-title {
      font-weight: 700;
      margin-bottom: 3px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    /* Footer */
    .doc-footer {
      border-top: 1px solid var(--border-light);
      padding-top: 8px;
      margin-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 7.2pt;
      color: var(--text-muted);
    }
  </style>
</head>
<body>
  <div class="document-container">

    <!-- COVER / HEADER BANNER -->
    <div class="header-banner">
      <div class="header-top">
        <div class="brand-title">
          <span class="brand-dot"></span>
          CREATORS BLUEPRINT
        </div>
        <div class="doc-badge">Brand &amp; Engineering Spec</div>
      </div>
      <h1>Design System: Typography, Fonts &amp; Color Code Architecture</h1>
      <p>
        Official design reference document specifying the complete typography hierarchy, font application rules across all components, full color codes (Hex, RGB, CSS Variable Tokens), and the precise functional &amp; conversion purpose behind every design decision.
      </p>
      <div class="meta-bar">
        <div class="meta-item"><strong>Platform:</strong> CreatorsBlueprint.io &amp; CB SaaS</div>
        <div class="meta-item"><strong>Version:</strong> 2.0 (Active Rebrand)</div>
        <div class="meta-item"><strong>Generated:</strong> February 2025</div>
        <div class="meta-item"><strong>Locale Parity:</strong> LTR (English) &amp; RTL (Arabic)</div>
      </div>
    </div>

    <!-- CORE DESIGN PHILOSOPHY -->
    <div class="card no-break" style="margin-bottom: 16px; border-left: 4px solid var(--accent-orange);">
      <div class="card-title" style="margin-bottom: 6px; font-size: 11pt;">🎯 Core Design Philosophy &amp; Visual Strategy</div>
      <p style="font-size: 8.5pt; color: var(--text-secondary); line-height: 1.5;">
        Creators Blueprint blends <strong>Organic Editorial Luxury</strong> with <strong>High-Conversion Creator Tech</strong>. The system deliberately rejects sterile pure-white backgrounds in favor of a warm cream canvas (<code style="background:#F1F5F9; padding:1px 4px; border-radius:3px;">#FAF8F5</code>), rejects harsh pure-black (<code style="background:#F1F5F9; padding:1px 4px; border-radius:3px;">#000000</code>) in favor of deep Midnight Navy (<code style="background:#F1F5F9; padding:1px 4px; border-radius:3px;">#0F1B3D</code>), and utilizes a high-contrast dual-accent engine: <strong>Electric Orange</strong> (<code style="background:#FFF2EB; color:#FF5500; padding:1px 4px; border-radius:3px;">#FF5500</code>) for primary conversion velocity and <strong>Royal Blue</strong> (<code style="background:#EFF6FF; color:#1D4ED8; padding:1px 4px; border-radius:3px;">#1D4ED8</code>) for fintech trust and security.
      </p>
    </div>

    <!-- SECTION 1: TYPOGRAPHY SYSTEM -->
    <div class="section-title">
      <span class="section-title-icon">✒️</span>
      Part 1: Typography System &amp; Font Mapping
    </div>
    <div class="section-desc">
      Our typography is built on a 3-font hierarchy plus vector glyphs, delivering editorial authority for display headlines, effortless legibility for dense UI controls, and native GCC typography parity.
    </div>

    <div class="grid-2 no-break">
      <!-- FONT 1: PLUS JAKARTA SANS -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">1. Plus Jakarta Sans</div>
            <span style="font-size: 7.5pt; color: var(--text-muted);">Primary Display &amp; Headline Font</span>
          </div>
          <span class="pill-badge pill-orange">HEADLINES &amp; TITLES</span>
        </div>

        <div class="specimen-box">
          <div class="specimen-display">The Link in Bio for Your Creator Business.</div>
          <div style="font-size: 7.2pt; color: var(--text-muted); margin-top: 3px; font-family: var(--font-mono);">
            Plus Jakarta Sans • Weights: 500, 600, 700, 800 • Letter-spacing: -1px
          </div>
        </div>

        <ul class="font-meta-list">
          <li><strong>Weights Used:</strong> 800 (ExtraBold), 700 (Bold), 600 (SemiBold), 500 (Medium)</li>
          <li><strong>CSS Variable:</strong> <code style="color:var(--accent-orange); font-weight:700;">--font-display</code></li>
          <li><strong>Where Applied:</strong>
            <div style="margin-top:2px;">
              • Hero main headline (<code>h1</code>) &amp; dynamic animated text flipper<br>
              • Section titles across Features, How It Works, Reviews, FAQ, CTA<br>
              • Pricing tier amounts (<code>$0</code>, <code>$29</code>) &amp; feature benefit headers<br>
              • Modal dialog titles, Event hook header, Waitlist title
            </div>
          </li>
          <li><strong>Strategic Purpose:</strong> Modern geometric elegance with high visual weight. Creates an immediate premium editorial impression and commands instant focal hierarchy.</li>
        </ul>
      </div>

      <!-- FONT 2: INTER -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">2. Inter</div>
            <span style="font-size: 7.5pt; color: var(--text-muted);">Body, UI Controls &amp; Micro-copy</span>
          </div>
          <span class="pill-badge pill-blue">BODY &amp; CONTROLS</span>
        </div>

        <div class="specimen-box">
          <div class="specimen-body">Build custom creator stores, package digital products, and accept direct 0% fee payouts.</div>
          <div style="font-size: 7.2pt; color: var(--text-muted); margin-top: 3px; font-family: var(--font-mono);">
            Inter • Weights: 300, 400, 500, 600, 700, 800, 900 • Line-height: 1.5 - 1.6
          </div>
        </div>

        <ul class="font-meta-list">
          <li><strong>Weights Used:</strong> 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)</li>
          <li><strong>CSS Variable:</strong> <code style="color:var(--accent-blue); font-weight:700;">--font-body</code> (Global Default on <code>&lt;body&gt;</code>)</li>
          <li><strong>Where Applied:</strong>
            <div style="margin-top:2px;">
              • Body paragraphs, feature explanations, FAQ answers, legal policies<br>
              • Navigation links, login auth button, mobile navigation drawer<br>
              • Form inputs, email/insta fields, placeholders, error alerts<br>
              • Review card testimonials, creator metadata, footer links
            </div>
          </li>
          <li><strong>Strategic Purpose:</strong> The industry gold standard for user interface clarity. Maximizes legibility at compact mobile sizes and reduces optical fatigue.</li>
        </ul>
      </div>
    </div>

    <div class="grid-2 no-break">
      <!-- FONT 3: READEX PRO -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">3. Readex Pro</div>
            <span style="font-size: 7.5pt; color: var(--text-muted);">Arabic Regional &amp; RTL Typography</span>
          </div>
          <span class="pill-badge pill-lime">GCC / ARABIC RTL</span>
        </div>

        <div class="specimen-box">
          <div class="specimen-arabic">الرابط في البايو لجميع أعمالك الإبداعية</div>
          <div style="font-size: 7.2pt; color: var(--text-muted); margin-top: 3px; font-family: var(--font-mono); direction: ltr; text-align: left;">
            Readex Pro • Weights: 400, 500, 600, 700, 800 • Applied on <code>html[dir="rtl"]</code>
          </div>
        </div>

        <ul class="font-meta-list">
          <li><strong>Weights Used:</strong> 400, 500, 600, 700, 800</li>
          <li><strong>Where Applied:</strong> Global override for all headlines, buttons, body copy, and navigation when the language is toggled to Arabic (<code style="font-size:7.2pt;">dir="rtl"</code>).</li>
          <li><strong>Strategic Purpose:</strong> Modern, open-counter Arabic typography that matches the visual optical weight and baseline proportions of Latin Plus Jakarta Sans and Inter.</li>
        </ul>
      </div>

      <!-- FONT 4 & 5: REMIX ICON & MONOSPACE -->
      <div class="card">
        <div class="card-header">
          <div>
            <div class="card-title">4. Remix Icon &amp; Monospace</div>
            <span style="font-size: 7.5pt; color: var(--text-muted);">Iconography &amp; Technical Identifiers</span>
          </div>
          <span class="pill-badge pill-purple">ICONS &amp; DATA</span>
        </div>

        <div class="specimen-box" style="display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size: 8.5pt; color: var(--text-primary);">
            <span style="color:var(--accent-blue); font-weight:bold;">✦ ✓ ➔ 🔒 ★ ⚡</span> Vector Glyph System
          </div>
          <code style="font-family:var(--font-mono); font-size:7.8pt; background:#FFF; padding:2px 6px; border-radius:4px; border:1px solid #CBD5E1;">--bg-page: #FAF8F5;</code>
        </div>

        <ul class="font-meta-list">
          <li><strong>Remix Icon (CDN):</strong> Checkmarks, arrow pills, star ratings, social handles, lock indicators. Ensures scalable vector sharpness with zero render latency.</li>
          <li><strong>Monospace (System):</strong> Privacy clauses, technical data schemas, token definitions. Creates instant visual demarcation for code and developer parameters.</li>
        </ul>
      </div>
    </div>

    <!-- PAGE BREAK FOR COLOR SYSTEM -->
    <div class="page-break"></div>

    <!-- SECTION 2: COLOR PALETTE & PURPOSE -->
    <div class="section-title">
      <span class="section-title-icon">🎨</span>
      Part 2: Color Palette Architecture &amp; Strategic Purpose
    </div>
    <div class="section-desc">
      Every color code in Creators Blueprint has been engineered with a precise functional, psychological, and contrast role to guide creator focus and maximize conversion flow.
    </div>

    <!-- CANVAS & SURFACE SURFACES -->
    <div style="margin-bottom: 12px;">
      <div style="font-family: var(--font-display); font-size: 10pt; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        A. Base Canvas &amp; Background Surfaces
      </div>

      <div class="grid-2 no-break">
        <!-- #FAF8F5 -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #FAF8F5; border: 1px solid #E2DCD5;"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Warm Cream Canvas</div>
              <span class="pill-badge pill-orange">PRIMARY BG</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge">#FAF8F5</span>
              <span>rgb(250, 248, 245)</span>
              <span class="token-badge">--bg-page</span>
            </div>
            <div class="color-desc">Tactile, warm editorial canvas. Replaces clinical white with a calm, high-end organic feel.</div>
            <div class="color-usage">📍 Where: Body background, layout wrapper, full page backdrop.</div>
          </div>
        </div>

        <!-- #FFFFFF -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #FFFFFF; border: 1px solid #CBD5E1;"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Pure Surface White</div>
              <span class="pill-badge pill-blue">CARDS &amp; UI</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge">#FFFFFF</span>
              <span>rgb(255, 255, 255)</span>
              <span class="token-badge">--bg-surface</span>
            </div>
            <div class="color-desc">Creates elevated foreground contrast against the warm cream canvas for cards and modals.</div>
            <div class="color-usage">📍 Where: Feature cards, pricing box, review cards, input fields, popups.</div>
          </div>
        </div>

        <!-- #F3EFEA -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #F3EFEA; border: 1px solid #E2DCD5;"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Soft Warm Stone</div>
              <span class="pill-badge" style="background:#E2DCD5; color:#475569;">SUBTLE BG</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge">#F3EFEA</span>
              <span>rgb(243, 239, 234)</span>
              <span class="token-badge">--bg-surface-subtle</span>
            </div>
            <div class="color-desc">Subtle tonal container background for section demarcation without harsh outlines.</div>
            <div class="color-usage">📍 Where: Final CTA box, secondary callouts, pill backgrounds, specimen areas.</div>
          </div>
        </div>

        <!-- #0F1B3D -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #0F1B3D;"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Deep Midnight Navy</div>
              <span class="pill-badge pill-dark">DARK SECTIONS</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge" style="background:#0F1B3D; color:#FFF;">#0F1B3D</span>
              <span>rgb(15, 27, 61)</span>
              <span class="token-badge">--bg-dark-section</span>
            </div>
            <div class="color-desc">Luxury tech dark tone. Deliberately replaces pure black (#000) to keep a rich navy warmth.</div>
            <div class="color-usage">📍 Where: Dark feature modules, creator spotlight cards, footer base, contrast badges.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- BRAND ACCENT & ACTION COLORS -->
    <div style="margin-bottom: 12px;">
      <div style="font-family: var(--font-display); font-size: 10pt; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        B. Brand Accent &amp; High-Conversion Action Colors
      </div>

      <div class="grid-2 no-break">
        <!-- #FF5500 / #FF4D00 -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #FF5500; box-shadow: 0 4px 14px rgba(255,85,0,0.4);"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Vibrant Electric Orange</div>
              <span class="pill-badge pill-orange">PRIMARY CTA</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge">#FF5500</span>
              <span>rgb(255, 85, 0)</span>
              <span class="token-badge">--accent-orange</span>
            </div>
            <div class="color-desc">Primary conversion driver. High urgency and energetic focal point engineered to maximize click-throughs.</div>
            <div class="color-usage">📍 Where: Primary CTA buttons ("Claim Your Store", "Reserve Spot"), button glows.</div>
          </div>
        </div>

        <!-- #1D4ED8 -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #1D4ED8; box-shadow: 0 4px 14px rgba(29,78,216,0.35);"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Electric Royal Blue</div>
              <span class="pill-badge pill-blue">TRUST &amp; TECH</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge">#1D4ED8</span>
              <span>rgb(29, 78, 216)</span>
              <span class="token-badge">--accent-blue</span>
            </div>
            <div class="color-desc">Instills institutional fintech trust, platform security, and technical authority.</div>
            <div class="color-usage">📍 Where: Secondary action buttons, highlighted headline words, checkmarks, link hovers.</div>
          </div>
        </div>

        <!-- #D4FF00 -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #D4FF00; box-shadow: 0 4px 14px rgba(212,255,0,0.4);"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Acid Neon Lime</div>
              <span class="pill-badge pill-lime">HIGH VALUE</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge" style="background:#D4FF00; color:#101828;">#D4FF00</span>
              <span>rgb(212, 255, 0)</span>
              <span class="token-badge">--accent-lime</span>
            </div>
            <div class="color-desc">High-voltage visual magnet. Denotes 0% transaction fees, discounts, and creator revenue growth.</div>
            <div class="color-usage">📍 Where: "0% Fee" highlights, "Save 20%" discount badge, live radar pulse animations.</div>
          </div>
        </div>

        <!-- #8B5CF6 -->
        <div class="color-card">
          <div class="color-chip" style="background-color: #8B5CF6; box-shadow: 0 4px 14px rgba(139,92,246,0.35);"></div>
          <div class="color-info">
            <div class="color-name-row">
              <div class="color-name">Royal Amethyst Purple</div>
              <span class="pill-badge pill-purple">TIER ACCENT</span>
            </div>
            <div class="color-codes">
              <span class="hex-badge">#8B5CF6</span>
              <span>rgb(139, 92, 246)</span>
              <span class="token-badge">--accent-purple</span>
            </div>
            <div class="color-desc">Represents VIP creator tier status, intelligent AI features, and luxury monetization.</div>
            <div class="color-usage">📍 Where: Creator tier badges, AI analytics pills, luxury creator highlights.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- TYPOGRAPHY & NEUTRAL SLATE SCALES -->
    <div style="margin-bottom: 12px;">
      <div style="font-family: var(--font-display); font-size: 10pt; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        C. Typography &amp; Neutral Slate Scale
      </div>

      <div class="grid-3 no-break">
        <!-- #101828 -->
        <div class="color-card" style="padding: 8px;">
          <div class="color-chip" style="width:34px; height:34px; background-color: #101828;"></div>
          <div class="color-info">
            <div class="color-name" style="font-size:8pt;">Dark Slate Text</div>
            <div class="color-codes"><span class="hex-badge">#101828</span> <span class="token-badge">--text-primary</span></div>
            <div class="color-desc">Headings &amp; main text. WCAG AAA contrast without pure #000 harshness.</div>
          </div>
        </div>

        <!-- #475569 -->
        <div class="color-card" style="padding: 8px;">
          <div class="color-chip" style="width:34px; height:34px; background-color: #475569;"></div>
          <div class="color-info">
            <div class="color-name" style="font-size:8pt;">Slate Grey 600</div>
            <div class="color-codes"><span class="hex-badge">#475569</span> <span class="token-badge">--text-secondary</span></div>
            <div class="color-desc">Body copy, subtitles, descriptive text, and nav items.</div>
          </div>
        </div>

        <!-- #64748B -->
        <div class="color-card" style="padding: 8px;">
          <div class="color-chip" style="width:34px; height:34px; background-color: #64748B;"></div>
          <div class="color-info">
            <div class="color-name" style="font-size:8pt;">Muted Slate 500</div>
            <div class="color-codes"><span class="hex-badge">#64748B</span> <span class="token-badge">--text-muted</span></div>
            <div class="color-desc">Captions, helper text, timestamps, input placeholders, footer links.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- BORDERS, SHADOWS & STATUS -->
    <div style="margin-bottom: 14px;">
      <div style="font-family: var(--font-display); font-size: 10pt; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
        D. Structural Borders, Elevation Shadows &amp; Status Colors
      </div>

      <div class="grid-3 no-break">
        <!-- Border Light -->
        <div class="color-card" style="padding: 8px;">
          <div class="color-chip" style="width:34px; height:34px; background-color: #E2DCD5; border:1px solid #CBD5E1;"></div>
          <div class="color-info">
            <div class="color-name" style="font-size:8pt;">Warm Cream Border</div>
            <div class="color-codes"><span class="hex-badge">#E2DCD5</span> <span class="token-badge">--border-light</span></div>
            <div class="color-desc">Subtle card outlines, section dividers, and nav border.</div>
          </div>
        </div>

        <!-- Status Green -->
        <div class="color-card" style="padding: 8px;">
          <div class="color-chip" style="width:34px; height:34px; background-color: #10B981;"></div>
          <div class="color-info">
            <div class="color-name" style="font-size:8pt;">Emerald Status</div>
            <div class="color-codes"><span class="hex-badge">#10B981</span> <span>Live / Success</span></div>
            <div class="color-desc">Live status indicator dots, positive growth badges, checkmarks.</div>
          </div>
        </div>

        <!-- Star Gold -->
        <div class="color-card" style="padding: 8px;">
          <div class="color-chip" style="width:34px; height:34px; background-color: #FFB800;"></div>
          <div class="color-info">
            <div class="color-name" style="font-size:8pt;">Review Star Gold</div>
            <div class="color-codes"><span class="hex-badge">#FFB800</span> <span>Rating Stars</span></div>
            <div class="color-desc">5-star customer ratings, trust badges, verified metrics.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- PAGE BREAK FOR COMPONENT MAPPING -->
    <div class="page-break"></div>

    <!-- SECTION 3: COMPONENT IMPLEMENTATION MATRIX -->
    <div class="section-title">
      <span class="section-title-icon">🧱</span>
      Part 3: Component-by-Component Typography &amp; Color Matrix
    </div>
    <div class="section-desc">
      Detailed mapping of which fonts, weights, colors, and layout rules are applied in each functional area of the application.
    </div>

    <div class="table-container no-break">
      <table>
        <thead>
          <tr>
            <th style="width:16%;">Component</th>
            <th style="width:22%;">Typography / Font Stack</th>
            <th style="width:22%;">Color Tokens Applied</th>
            <th style="width:40%;">Key Functional &amp; Visual Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="component-tag">&lt;Nav /&gt;</span></td>
            <td><strong>Inter</strong> 500/600/700</td>
            <td><code>--bg-page</code> (88% blur), <code>--border-light</code>, <code>--accent-blue</code></td>
            <td>Floating glassmorphism header. Primary CTA in blue with animated shine reflection.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Hero /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 800 (H1)<br><strong>Inter</strong> 400/500/700</td>
            <td><code>--text-primary</code>, <code>--accent-orange</code>, <code>--accent-lime</code>, <code>#10B981</code></td>
            <td>High-impact value proposition with animated word switcher and live earning ticker.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Features /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 700/800<br><strong>Inter</strong> 400/500</td>
            <td><code>--bg-surface</code> (White), <code>--border-light</code>, <code>--accent-blue</code></td>
            <td>Bento-grid cards showcasing zero-fee payouts, instant checkout, and custom domains.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;HowItWorks /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 800 (Steps)<br><strong>Inter</strong> 400/600</td>
            <td><code>--accent-orange</code> (Step badges), <code>--text-secondary</code></td>
            <td>Step-by-step onboarding flow (1. Claim link &rarr; 2. Add products &rarr; 3. Get paid).</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Spotlight /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 700<br><strong>Inter</strong> 400/500</td>
            <td><code>--bg-dark-section</code> (Navy), <code>--accent-lime</code>, <code>#FFFFFF</code></td>
            <td>Dark-mode contrast card highlighting high-earning Dubai/GCC creators.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Reviews /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 700<br><strong>Inter</strong> 400/500</td>
            <td><code>--bg-surface</code>, <code>#FFB800</code> (Stars), <code>--text-primary</code></td>
            <td>Social proof grid with star ratings, creator handles, and authentic testimonials.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Pricing /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 800 (Price)<br><strong>Inter</strong> 500/600</td>
            <td><code>--accent-lime</code> (Save 20%), <code>--accent-orange</code> (CTA), <code>--accent-blue</code></td>
            <td>Single transparent pricing tier with interactive monthly/yearly discount toggle.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Event /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 800<br><strong>Inter</strong> 400/500/600</td>
            <td><code>--bg-surface</code>, <code>--accent-orange</code> (Submit), <code>#E1306C</code> (Instagram)</td>
            <td>Split-view workshop registration with real-time validation and Stripe checkout.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;FinalCTA /&gt;</span></td>
            <td><strong>Plus Jakarta Sans</strong> 800<br><strong>Inter</strong> 500/700</td>
            <td><code>--bg-surface-subtle</code>, <code>--accent-orange</code> (Glow), <code>--accent-blue</code></td>
            <td>High-conversion bottom banner driving instant creator sign-ups.</td>
          </tr>
          <tr>
            <td><span class="component-tag">&lt;Footer /&gt;</span></td>
            <td><strong>Inter</strong> 400/500/600</td>
            <td><code>--text-secondary</code>, <code>--text-muted</code>, <code>--border-light</code></td>
            <td>Clean multi-column sitemap, legal compliance links, and copyright metadata.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 4: GCC LOCALIZATION & ARABIC PARITY -->
    <div class="section-title">
      <span class="section-title-icon">🌍</span>
      Part 4: GCC Regional Localization &amp; Arabic RTL Rules
    </div>
    <div class="section-desc">
      Strict design guidelines for ensuring seamless visual harmony when switching between English (LTR) and Arabic (RTL).
    </div>

    <div class="grid-2 no-break">
      <div class="card">
        <div class="card-title" style="margin-bottom: 6px;">1. Automatic Font Swap Mechanism</div>
        <p style="font-size: 8pt; color: var(--text-secondary); line-height: 1.45;">
          When the user toggles the language to Arabic (<code style="background:#F1F5F9; padding:1px 4px; border-radius:3px;">dir="rtl"</code>), the CSS root automatically switches the primary font family to <strong>Readex Pro</strong> for all headings, body text, buttons, and form labels.
        </p>
        <div style="background:#FAF8F5; border:1px solid #E2DCD5; padding:8px; border-radius:6px; margin-top:8px; font-family:var(--font-mono); font-size:7.2pt; color:#0F172A;">
          html[dir="rtl"] { font-family: 'Readex Pro', sans-serif; }<br>
          html[dir="rtl"] h1, h2, h3, button { font-family: 'Readex Pro', sans-serif; }
        </div>
      </div>

      <div class="card">
        <div class="card-title" style="margin-bottom: 6px;">2. Directional &amp; Brand Token Invariance</div>
        <p style="font-size: 8pt; color: var(--text-secondary); line-height: 1.45;">
          While layout containers, flex directions, and arrows automatically mirror in RTL mode, the following elements <strong>must never be reversed</strong>:
        </p>
        <ul style="font-size: 7.8pt; color: var(--text-secondary); margin-left: 16px; margin-top: 6px; line-height: 1.4;">
          <li>Financial currencies (<code>AED 75</code>, <code>$29/mo</code>)</li>
          <li>Social media handles (<code>@creatorsblueprint</code>, <code>@formclub</code>)</li>
          <li>Brand names, domain URLs, and hex color token values</li>
        </ul>
      </div>
    </div>

    <!-- DOCUMENT FOOTER -->
    <div class="doc-footer no-break">
      <div>Creators Blueprint Design System • Confidential &amp; Proprietary</div>
      <div>Page 1 of 1 • System Architecture Document</div>
      <div>Generated for Engineering &amp; Design Alignment</div>
    </div>

  </div>
</body>
</html>
"""
    return html

def main():
    downloads_dir = os.path.join(os.environ['USERPROFILE'], 'Downloads')
    os.makedirs(downloads_dir, exist_ok=True)
    
    output_pdf_name = "CreatorsBlueprint_Typography_and_Color_System_Guide.pdf"
    output_pdf_path = os.path.join(downloads_dir, output_pdf_name)
    
    # Also save a copy with a short friendly name in Downloads
    short_pdf_name = "CreatorsBlueprint_Design_System_Guide.pdf"
    short_pdf_path = os.path.join(downloads_dir, short_pdf_name)
    
    html_content = build_html_content()
    
    temp_dir = tempfile.gettempdir()
    temp_html = os.path.join(temp_dir, "cb_design_system_spec.html")
    
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        chrome_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
        
    print(f"Using browser binary: {chrome_path}")
    print(f"Generating PDF to: {output_pdf_path}")
    
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={output_pdf_path}",
        temp_html
    ]
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    
    if os.path.exists(output_pdf_path) and os.path.getsize(output_pdf_path) > 0:
        # Also copy to short friendly name
        import shutil
        shutil.copyfile(output_pdf_path, short_pdf_path)
        
        file_size = os.path.getsize(output_pdf_path)
        print(f"SUCCESS: Generated PDF '{output_pdf_name}' ({file_size:,} bytes)")
        print(f"SUCCESS: Copied to '{short_pdf_name}'")
        print(f"Saved to user Downloads folder: {downloads_dir}")
        return True
    else:
        print(f"FAILED to generate PDF. Error: {res.stderr}")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
