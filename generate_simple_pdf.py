import os
import subprocess
import tempfile
import sys
import shutil

def build_simple_html():
    html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Creators Blueprint - Quick Brand Style Guide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&family=Readex+Pro:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    @page {
      size: A4 portrait;
      margin: 12mm 14mm 12mm 14mm;
    }

    body {
      background-color: #FAF8F5;
      color: #101828;
      font-family: 'Inter', -apple-system, sans-serif;
      font-size: 10pt;
      line-height: 1.5;
    }

    .page {
      width: 100%;
      min-height: 100%;
      position: relative;
    }

    .page-break {
      page-break-before: always;
      padding-top: 8px;
    }

    .no-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Clean Modern Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
      margin-bottom: 18px;
      border-bottom: 2px solid #E2DCD5;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-badge {
      background: #FF5500;
      color: #FFFFFF;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 11pt;
      padding: 6px 12px;
      border-radius: 8px;
      letter-spacing: -0.3px;
    }

    .header-title-group h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 17pt;
      font-weight: 800;
      color: #101828;
      line-height: 1.15;
      letter-spacing: -0.5px;
    }

    .header-title-group p {
      font-size: 9pt;
      color: #475569;
      margin-top: 2px;
    }

    .header-tag {
      background: #0F1B3D;
      color: #FFFFFF;
      font-size: 8pt;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Section titles */
    .section-header {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 13pt;
      font-weight: 800;
      color: #101828;
      margin: 16px 0 10px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-subtitle {
      font-size: 8.8pt;
      color: #475569;
      margin-bottom: 12px;
    }

    /* Color Grid - Simple & Spacious */
    .color-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 14px;
    }

    .color-card {
      background: #FFFFFF;
      border: 1px solid #E2DCD5;
      border-radius: 12px;
      padding: 12px;
      display: flex;
      gap: 12px;
      align-items: center;
      box-shadow: 0 2px 6px rgba(15, 27, 61, 0.03);
    }

    .swatch {
      width: 52px;
      height: 52px;
      border-radius: 10px;
      flex-shrink: 0;
      border: 1px solid rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 9pt;
    }

    .color-content {
      flex: 1;
    }

    .color-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2px;
    }

    .color-name {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
      font-size: 9.5pt;
      color: #101828;
    }

    .hex-pill {
      font-family: 'Inter', monospace;
      font-weight: 700;
      font-size: 8pt;
      background: #F1F5F9;
      color: #0F172A;
      padding: 2px 7px;
      border-radius: 6px;
      border: 1px solid #CBD5E1;
    }

    .color-role {
      font-size: 8.2pt;
      font-weight: 600;
      color: #FF5500;
      margin-bottom: 2px;
    }

    .color-role.blue { color: #1D4ED8; }
    .color-role.lime { color: #5B7A00; }
    .color-role.dark { color: #0F1B3D; }
    .color-role.slate { color: #475569; }

    .color-usage {
      font-size: 8pt;
      color: #475569;
      line-height: 1.35;
    }

    /* Font Cards */
    .font-card {
      background: #FFFFFF;
      border: 1px solid #E2DCD5;
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 12px;
      box-shadow: 0 2px 6px rgba(15, 27, 61, 0.03);
    }

    .font-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .font-name {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 12pt;
      font-weight: 800;
      color: #101828;
    }

    .font-tag {
      font-size: 7.5pt;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
      background: #EFF6FF;
      color: #1D4ED8;
      border: 1px solid rgba(29, 78, 216, 0.2);
    }

    .font-tag.orange {
      background: #FFF2EB;
      color: #FF5500;
      border-color: rgba(255, 85, 0, 0.2);
    }

    .font-tag.lime {
      background: #F7FFD1;
      color: #4D6600;
      border-color: rgba(212, 255, 0, 0.4);
    }

    .font-preview {
      background: #FAF8F5;
      border: 1px solid #E2DCD5;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 8px;
    }

    .font-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      font-size: 8.2pt;
      color: #475569;
      line-height: 1.4;
    }

    .font-details strong {
      color: #101828;
    }

    /* Do's and Don'ts */
    .rules-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
    }

    .rule-box {
      border-radius: 10px;
      padding: 12px 14px;
      font-size: 8.2pt;
      line-height: 1.45;
    }

    .rule-box.do {
      background: #F0FDF4;
      border: 1px solid #BBF7D0;
      color: #166534;
    }

    .rule-box.dont {
      background: #FEF2F2;
      border: 1px solid #FECACA;
      color: #991B1B;
    }

    .rule-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: 9.5pt;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .rule-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .rule-list li {
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }

    /* Footer */
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #E2DCD5;
      padding-top: 10px;
      margin-top: 14px;
      font-size: 7.5pt;
      color: #64748B;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COLORS ================= -->
  <div class="page">
    <div class="header">
      <div class="logo-area">
        <div class="logo-badge">CB</div>
        <div class="header-title-group">
          <h1>Brand Style &amp; Color Guide</h1>
          <p>Creators Blueprint • Quick Visual Cheat Sheet</p>
        </div>
      </div>
      <div class="header-tag">Brand Reference</div>
    </div>

    <!-- Intro box -->
    <div style="background:#FFFFFF; border:1px solid #E2DCD5; border-radius:10px; padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
      <div style="font-size:8.6pt; color:#475569; max-width:80%;">
        <strong>The Creators Blueprint Look:</strong> Warm, high-end, and energetic. We use warm cream backgrounds (instead of plain white), deep midnight navy (instead of plain black), and bold orange &amp; blue buttons that tell people exactly what to do.
      </div>
      <div style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:800; font-size:9pt; color:#FF5500; text-align:right;">
        Simple • Clean • Bold
      </div>
    </div>

    <div class="section-header">
      🎨 1. Primary Action &amp; Highlight Colors
    </div>
    <div class="section-subtitle">The main vibrant colors we use for buttons, badges, and attention-grabbers.</div>

    <div class="color-grid">
      <!-- Orange -->
      <div class="color-card">
        <div class="swatch" style="background:#FF5500; color:#FFFFFF;">CTA</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Electric Orange</span>
            <span class="hex-pill">#FF5500</span>
          </div>
          <div class="color-role">Primary Action / "Click Here"</div>
          <div class="color-usage">Used for main buttons ("Get Started", "Claim Your Store", "Reserve Spot") and important action links.</div>
        </div>
      </div>

      <!-- Royal Blue -->
      <div class="color-card">
        <div class="swatch" style="background:#1D4ED8; color:#FFFFFF;">Trust</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Royal Blue</span>
            <span class="hex-pill">#1D4ED8</span>
          </div>
          <div class="color-role blue">Trust, Security &amp; Tech Accent</div>
          <div class="color-usage">Used for secondary buttons, highlighted title words, verified checkmarks, and trusted links.</div>
        </div>
      </div>

      <!-- Acid Lime -->
      <div class="color-card">
        <div class="swatch" style="background:#D4FF00; color:#101828;">0%</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Acid Neon Lime</span>
            <span class="hex-pill">#D4FF00</span>
          </div>
          <div class="color-role lime">Money &amp; Growth Highlight</div>
          <div class="color-usage">Used for "0% Fees" tags, "Save 20%" discount pills, and live earning metric highlights.</div>
        </div>
      </div>

      <!-- Royal Purple -->
      <div class="color-card">
        <div class="swatch" style="background:#8B5CF6; color:#FFFFFF;">VIP</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Royal Purple</span>
            <span class="hex-pill">#8B5CF6</span>
          </div>
          <div class="color-role" style="color:#8B5CF6;">VIP &amp; AI Feature Accent</div>
          <div class="color-usage">Used for creator tier badges, premium creator spotlights, and AI feature pills.</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      🖼️ 2. Background &amp; Surface Colors
    </div>
    <div class="section-subtitle">Where content sits to give our site its warm, luxury feel.</div>

    <div class="color-grid">
      <!-- Warm Cream -->
      <div class="color-card">
        <div class="swatch" style="background:#FAF8F5; border:1px solid #CBD5E1; color:#101828;">BG</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Warm Cream Canvas</span>
            <span class="hex-pill">#FAF8F5</span>
          </div>
          <div class="color-role slate">Main Page Background</div>
          <div class="color-usage">The full page background across the entire site. Warmer and friendlier than harsh white.</div>
        </div>
      </div>

      <!-- Pure White -->
      <div class="color-card">
        <div class="swatch" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#101828;">Card</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Pure White</span>
            <span class="hex-pill">#FFFFFF</span>
          </div>
          <div class="color-role slate">Cards &amp; Container Surfaces</div>
          <div class="color-usage">Used for cards, review boxes, pricing containers, and form fields sitting on the cream background.</div>
        </div>
      </div>

      <!-- Midnight Navy -->
      <div class="color-card">
        <div class="swatch" style="background:#0F1B3D; color:#FFFFFF;">Dark</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Midnight Navy</span>
            <span class="hex-pill">#0F1B3D</span>
          </div>
          <div class="color-role dark">Dark Sections &amp; Footer</div>
          <div class="color-usage">Our replacement for pure black. Used for footer, creator highlight cards, and dark banners.</div>
        </div>
      </div>

      <!-- Warm Stone -->
      <div class="color-card">
        <div class="swatch" style="background:#F3EFEA; border:1px solid #CBD5E1; color:#101828;">Tint</div>
        <div class="color-content">
          <div class="color-top">
            <span class="color-name">Soft Warm Stone</span>
            <span class="hex-pill">#F3EFEA</span>
          </div>
          <div class="color-role slate">Subtle Section Boxes</div>
          <div class="color-usage">Used for bottom call-to-action boxes and light background pills.</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      ✍️ 3. Text &amp; Border Colors
    </div>
    <div class="color-grid" style="margin-bottom: 4px;">
      <div class="color-card">
        <div class="swatch" style="background:#101828; color:#FFFFFF;">Aa</div>
        <div class="color-content">
          <div class="color-top"><span class="color-name">Dark Slate</span><span class="hex-pill">#101828</span></div>
          <div class="color-usage"><strong>Main Headings &amp; Titles:</strong> Clean, high contrast, easy to read.</div>
        </div>
      </div>

      <div class="color-card">
        <div class="swatch" style="background:#475569; color:#FFFFFF;">Aa</div>
        <div class="color-content">
          <div class="color-top"><span class="color-name">Slate Grey</span><span class="hex-pill">#475569</span></div>
          <div class="color-usage"><strong>Body &amp; Descriptions:</strong> Soft paragraph text and subtitle copy.</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>Creators Blueprint • Brand &amp; Color Style Sheet</div>
      <div>Page 1 of 2 • Visual Palette</div>
    </div>
  </div>

  <!-- ================= PAGE 2: TYPOGRAPHY & QUICK RULES ================= -->
  <div class="page page-break">
    <div class="header">
      <div class="logo-area">
        <div class="logo-badge">CB</div>
        <div class="header-title-group">
          <h1>Typography &amp; Quick Rules</h1>
          <p>Creators Blueprint • Font Hierarchy &amp; Usage Rules</p>
        </div>
      </div>
      <div class="header-tag">Typography Spec</div>
    </div>

    <div class="section-header">
      ✒️ 1. The Fonts We Use &amp; Where
    </div>
    <div class="section-subtitle">We keep it simple with 2 main English fonts and 1 native Arabic font.</div>

    <!-- FONT 1 -->
    <div class="font-card">
      <div class="font-card-header">
        <div>
          <span class="font-name">1. Plus Jakarta Sans</span>
        </div>
        <span class="font-tag orange">HEADLINES &amp; BIG TITLES</span>
      </div>
      <div class="font-preview">
        <div style="font-family:'Plus Jakarta Sans', sans-serif; font-size:15pt; font-weight:800; color:#101828; line-height:1.2; letter-spacing:-0.5px;">
          The Link in Bio for Your Creator Business.
        </div>
        <div style="font-family:'Plus Jakarta Sans', sans-serif; font-size:11pt; font-weight:700; color:#FF5500; margin-top:3px;">
          Turn Followers into Direct Revenue • 75 AED • $29/mo
        </div>
      </div>
      <div class="font-details">
        <div>
          <strong>Where to use it:</strong><br>
          • Big hero headline on the top of the page<br>
          • Section headings (Features, Reviews, Pricing)<br>
          • Big numbers, prices ($29), and card titles
        </div>
        <div>
          <strong>Why we use it:</strong><br>
          Bold, modern, punchy, and premium. It grabs attention immediately and gives an editorial magazine feel.
        </div>
      </div>
    </div>

    <!-- FONT 2 -->
    <div class="font-card">
      <div class="font-card-header">
        <div>
          <span class="font-name">2. Inter</span>
        </div>
        <span class="font-tag">BODY TEXT, BUTTONS &amp; UI</span>
      </div>
      <div class="font-preview">
        <div style="font-family:'Inter', sans-serif; font-size:9.5pt; color:#101828; line-height:1.45;">
          Build your custom creator store, sell digital products, accept 0% fee payouts, and monetize your audience effortlessly.
        </div>
        <div style="margin-top:6px; display:flex; gap:8px;">
          <span style="background:#FF5500; color:#FFF; font-size:8pt; font-weight:700; padding:4px 10px; border-radius:6px;">Claim Your Store</span>
          <span style="background:#1D4ED8; color:#FFF; font-size:8pt; font-weight:700; padding:4px 10px; border-radius:6px;">Login to Account</span>
        </div>
      </div>
      <div class="font-details">
        <div>
          <strong>Where to use it:</strong><br>
          • Paragraphs, explanations, descriptions<br>
          • Buttons, menu links, navigation bar<br>
          • Form fields (First Name, Email, Instagram @handle)<br>
          • Review quotes, FAQs, and footer links
        </div>
        <div>
          <strong>Why we use it:</strong><br>
          The cleanest, most readable font for screens. It looks crisp and comfortable on mobile phones and desktops.
        </div>
      </div>
    </div>

    <!-- FONT 3 -->
    <div class="font-card">
      <div class="font-card-header">
        <div>
          <span class="font-name">3. Readex Pro</span>
        </div>
        <span class="font-tag lime">ARABIC LANGUAGE ONLY</span>
      </div>
      <div class="font-preview">
        <div style="font-family:'Readex Pro', sans-serif; font-size:12pt; font-weight:700; color:#101828; direction:rtl; text-align:right;">
          الرابط في البايو المخصص لأعمالك وصناع المحتوى
        </div>
      </div>
      <div class="font-details">
        <div>
          <strong>Where to use it:</strong><br>
          • All text, titles, and buttons when the page is switched to Arabic.
        </div>
        <div>
          <strong>Why we use it:</strong><br>
          Modern Arabic font designed specifically to match the style and weight of our English fonts.
        </div>
      </div>
    </div>

    <div class="section-header" style="margin-top: 14px;">
      ⚡ 2. Quick Do's &amp; Don'ts (Cheat Sheet)
    </div>

    <div class="rules-grid">
      <!-- DO -->
      <div class="rule-box do">
        <div class="rule-title">✅ DO THIS</div>
        <ul class="rule-list">
          <li><strong>Use Electric Orange (#FF5500)</strong> for the 1 main button you want people to click on any screen.</li>
          <li><strong>Use Warm Cream (#FAF8F5)</strong> for main page backgrounds and <strong>Pure White (#FFFFFF)</strong> for cards on top.</li>
          <li><strong>Use Acid Lime (#D4FF00)</strong> for badges like "0% Fee" or "Save 20%".</li>
          <li><strong>Use Plus Jakarta Sans</strong> for big bold headlines only.</li>
          <li><strong>Use Inter</strong> for all body text, buttons, and form labels.</li>
        </ul>
      </div>

      <!-- DONT -->
      <div class="rule-box dont">
        <div class="rule-title">❌ DON'T DO THIS</div>
        <ul class="rule-list">
          <li><strong>Never use pure pitch black (#000000)</strong> — always use Midnight Navy (#0F1B3D) or Dark Slate (#101828).</li>
          <li><strong>Don't make everything orange</strong> — if every button is orange, none of them stand out.</li>
          <li><strong>Never use harsh white as full-page background</strong> — stick to our warm cream signature canvas.</li>
          <li><strong>Don't introduce random new fonts</strong> — stick strictly to Plus Jakarta Sans and Inter.</li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <div>Creators Blueprint • Brand &amp; Color Style Sheet</div>
      <div>Page 2 of 2 • Typography &amp; Rules</div>
    </div>
  </div>

</body>
</html>
"""
    return html

def main():
    downloads_dir = os.path.join(os.environ['USERPROFILE'], 'Downloads')
    os.makedirs(downloads_dir, exist_ok=True)
    
    file1 = os.path.join(downloads_dir, "CreatorsBlueprint_Brand_Style_Guide.pdf")
    file2 = os.path.join(downloads_dir, "CreatorsBlueprint_Typography_and_Color_System_Guide.pdf")
    file3 = os.path.join(downloads_dir, "CreatorsBlueprint_Design_System_Guide.pdf")
    
    html_content = build_simple_html()
    
    temp_dir = tempfile.gettempdir()
    temp_html = os.path.join(temp_dir, "cb_simple_brand_guide.html")
    
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        chrome_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
        
    print(f"Generating simple clean PDF to: {file1}")
    
    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={file1}",
        temp_html
    ]
    
    res = subprocess.run(cmd, capture_output=True, text=True)
    
    if os.path.exists(file1) and os.path.getsize(file1) > 0:
        # Also copy over the previous names so whichever file is opened, it's the simple clean one!
        shutil.copyfile(file1, file2)
        shutil.copyfile(file1, file3)
        
        print(f"SUCCESS: Generated 2-page simple PDF ({os.path.getsize(file1):,} bytes)")
        print(f"Updated files in Downloads:\n - {file1}\n - {file2}\n - {file3}")
        return True
    else:
        print(f"FAILED: {res.stderr}")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
