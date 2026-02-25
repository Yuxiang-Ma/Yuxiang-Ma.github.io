# Website Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers-extended-cc:executing-plans to implement this plan task-by-task.

**Goal:** Redesign Yuxiang Ma's personal academic website with a clean academic style, two-column hero, research filter toggle (Selected/By Date), and a new Projects section with class/hobby tabs.

**Architecture:** Single `index.html` + `style.css` + inline vanilla JS. Remove W3.CSS dependency. No build step. GitHub Pages compatible.

**Tech Stack:** HTML5, CSS3 (custom, ~200 lines), vanilla JS (~40 lines)

---

### Task 1: Build HTML skeleton

**Files:**
- Modify: `index.html` (full rewrite)

**Step 1: Replace the entire index.html with the new skeleton**

The new structure (all sections present, content TBD):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Yuxiang Ma</title>
  <meta name="description" content="Yuxiang Ma is a PhD student at MIT MechE working on tactile sensing and robotic manipulation.">
  <meta name="keywords" content="Yuxiang Ma, Robotics, GelSight, Tactile, MIT, 马宇翔">
  <meta name="author" content="Yuxiang Ma">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

<!-- NAV -->
<nav id="navbar">
  <div class="nav-inner">
    <span class="nav-name">Yuxiang Ma</span>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#research">Research</a>
      <a href="#projects">Projects</a>
      <a href="https://www.dropbox.com/scl/fi/iowcpgl0x0t1w81h6u04p/CV.pdf?rlkey=66n6yttvjnmhdeq3anavi0uco&dl=0" target="_blank">Resume</a>
    </div>
  </div>
</nav>

<!-- ABOUT -->
<section id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-photo">
        <img src="images/yx.jpg" alt="Yuxiang Ma">
      </div>
      <div class="about-text">
        <h1>Yuxiang Ma</h1>
        <p class="about-title">PhD Student, MIT Mechanical Engineering</p>
        <p>
          I am a PhD student at Mechanical Engineering, <a href="https://www.mit.edu/">MIT</a>, advised by Professor
          <a href="http://persci.mit.edu/people/adelson">Edward Adelson</a>.
          My research interests lie in tactile sensing, robotic manipulation and simulation.
          Currently, I am working on dynamic manipulation with adaptive control and designing
          underactuated mechanisms for a multi-DOF hand.
        </p>
        <p>
          I received my bachelor's degree from the Department of Engineering Mechanics,
          <a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a>.
          I also spent half a year as an undergraduate researcher in
          <a href="https://xugroup.eng.ucsd.edu/">Xu Group</a> at UC San Diego,
          working on ultrasound imaging with wearable ultrasound patches.
        </p>
        <p>
          I have both hardware and software experience in robotics. I am interested in
          making robots manipulate objects dynamically — with better perception, hardware design,
          and control, we can expand robotic manipulation skills to more real-world scenarios.
        </p>
        <p>In my spare time, I enjoy weightlifting and playing basketball.</p>
        <p class="about-links">
          <a href="mailto:yxma20@mit.edu">Email</a> &nbsp;/&nbsp;
          <a href="https://scholar.google.com/citations?user=HmPiPZEAAAAJ">Google Scholar</a> &nbsp;/&nbsp;
          <a href="https://www.linkedin.com/in/yuxiang-ma-1382741a4/">LinkedIn</a> &nbsp;/&nbsp;
          <a href="https://github.com/Yuxiang-Ma">GitHub</a>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- RESEARCH -->
<section id="research" class="alt-bg">
  <div class="container">
    <h2>Research</h2>
    <div class="toggle-bar">
      <a href="#" id="btn-selected" class="toggle-btn active" onclick="showSelected(event)">Selected</a>
      <a href="#" id="btn-date" class="toggle-btn" onclick="showByDate(event)">By Date</a>
    </div>

    <div class="papers">

      <!-- T3 — selected -->
      <div class="paper-row" data-selected="true" data-year="2024">
        <div class="paper-img">
          <img src="images/T3.png" alt="T3">
        </div>
        <div class="paper-info">
          <p class="paper-title">Transferable Tactile Transformers for Representation Learning Across Diverse Sensors and Tasks</p>
          <p class="paper-authors">Alan Zhao, <strong>Yuxiang Ma</strong>, Edward Adelson</p>
          <p class="paper-venue"><em>arXiv 2024</em></p>
          <p class="paper-links">
            [<a href="https://t3.alanz.info/">project website</a>]
            [<a href="https://arxiv.org/abs/2406.13640">arxiv</a>]
            [<a href="https://github.com/alanzjl/t3">code</a>]
          </p>
          <p class="paper-desc">A tactile representation learned from multi-sensors and multi-tasks, and a tactile dataset containing over 3M tactile images collected from 13 sensors and 11 tasks.</p>
        </div>
      </div>

      <!-- GelLink — selected -->
      <div class="paper-row" data-selected="true" data-year="2024">
        <div class="paper-img">
          <img src="images/taclink.jpg" alt="GelLink">
        </div>
        <div class="paper-info">
          <p class="paper-title">GelLink: A Compact Multi-phalanx Finger with Vision-based Tactile Sensing and Proprioception</p>
          <p class="paper-authors"><strong>Yuxiang Ma</strong>, Alan Zhao, Edward Adelson</p>
          <p class="paper-venue"><em>arXiv 2024</em></p>
          <p class="paper-links">
            [<a href="https://arxiv.org/abs/2403.14887">arxiv</a>]
            [<a href="https://youtu.be/hZwUpAig5C0">video</a>]
          </p>
          <p class="paper-desc">GelLink has three phalanges and two DOFs, actuated by only one motor and visualized by only one camera. A compact mechanism with a mirror-based tactile sensing system achieves a versatile multi-phalanx design with embedded tactile sensing and accurate proprioception.</p>
        </div>
      </div>

      <!-- Scalable Fin Ray — selected -->
      <div class="paper-row" data-selected="true" data-year="2024">
        <div class="paper-img">
          <img src="images/simfr.jpg" alt="Scalable Fin Ray">
        </div>
        <div class="paper-info">
          <p class="paper-title">Scalable, Simulation-Guided Compliant Tactile Finger Design</p>
          <p class="paper-authors"><strong>Yuxiang Ma</strong>*, Arpit Agarwal*, Sandra Liu*, Wenzhen Yuan, Edward Adelson</p>
          <p class="paper-venue"><em>arXiv 2024</em></p>
          <p class="paper-links">
            [<a href="https://arxiv.org/abs/2403.04638">arxiv</a>]
            [<a href="https://youtu.be/CnTUTA5cfMw">video</a>]
          </p>
          <p class="paper-desc">A simulation framework combining FEM mechanical simulation and physically based rendering (PBR) for end-to-end forward design of GelSight Fin Ray sensors, enabling faster design and prototyping of new sensors.</p>
        </div>
      </div>

      <!-- Baby Fin Ray -->
      <div class="paper-row" data-selected="false" data-year="2023">
        <div class="paper-img">
          <img src="images/bbfr.png" alt="Baby Fin Ray">
        </div>
        <div class="paper-info">
          <p class="paper-title">GelSight Baby Fin Ray: A Compact, Compliant, Flexible Finger with High-Resolution Tactile Sensing</p>
          <p class="paper-authors">Sandra Liu, <strong>Yuxiang Ma</strong>, Edward Adelson</p>
          <p class="paper-venue"><em>RoboSoft 2023</em></p>
          <p class="paper-links">
            [<a href="https://arxiv.org/abs/2303.14883">arxiv</a>]
            [<a href="https://www.youtube.com/watch?app=desktop&v=_oD_QFtYTPM">video</a>]
          </p>
          <p class="paper-desc">Flexible mirrors and high-elongation silicone fluorescent paints incorporated into the GelSight Baby Fin Ray enable grasping through clutter and classification of in-shell nuts.</p>
        </div>
      </div>

      <!-- Elastography -->
      <div class="paper-row" data-selected="false" data-year="2023">
        <div class="paper-img">
          <img src="images/elastography.png" alt="Elastography">
        </div>
        <div class="paper-info">
          <p class="paper-title">Stretchable ultrasonic arrays for the three-dimensional mapping of the modulus of deep tissue</p>
          <p class="paper-authors">Hongjie Hu, <strong>Yuxiang Ma</strong>, Xiaoxiang Gao, Dawei Song, Mohan Li, Hao Huang, … Sheng Xu</p>
          <p class="paper-venue"><em>Nature Biomedical Engineering 2023</em></p>
          <p class="paper-links">
            [<a href="https://www.nature.com/articles/s41551-023-01038-w">paper</a>]
          </p>
          <p class="paper-desc">A stretchable ultrasonic array for serial non-invasive elastographic measurements of tissues up to 4 cm beneath the skin at 0.5 mm spatial resolution.</p>
        </div>
      </div>

      <!-- Wearable cardiac -->
      <div class="paper-row" data-selected="false" data-year="2023">
        <div class="paper-img">
          <img src="images/heartimager.png" alt="Cardiac Imager">
        </div>
        <div class="paper-info">
          <p class="paper-title">A wearable cardiac ultrasound imager</p>
          <p class="paper-authors">Hongjie Hu, Hao Huang, Mohan Li, Xiaoxiang Gao, Lu Yin, Ruixiang Qi, Ray S. Wu, Xiangjun Chen, <strong>Yuxiang Ma</strong>, … Sheng Xu</p>
          <p class="paper-venue"><em>Nature 2023</em></p>
          <p class="paper-links">
            [<a href="https://www.nature.com/articles/s41586-022-05498-z">paper</a>]
          </p>
          <p class="paper-desc">A wearable ultrasonic device for continuous, real-time cardiac function assessment using a deep learning model that automatically extracts left ventricular volume waveforms.</p>
        </div>
      </div>

      <!-- Blood pressure -->
      <div class="paper-row" data-selected="false" data-year="2021">
        <div class="paper-img">
          <img src="images/bperror.jpg" alt="Blood Pressure">
        </div>
        <div class="paper-info">
          <p class="paper-title">The effect of arterial stiffness on the accuracy of cuff-based blood pressure measurement</p>
          <p class="paper-authors"><strong>Yuxiang Ma</strong>, Ying Chen, Yinji Ma, Xue Feng</p>
          <p class="paper-venue"><em>Extreme Mechanics Letters 2021</em></p>
          <p class="paper-links">
            [<a href="https://www.sciencedirect.com/science/article/pii/S2352431621000742">paper</a>]
          </p>
          <p class="paper-desc">A theoretical model studying the impact of arterial wall properties on non-invasive blood pressure measurement, revealing that arteriosclerotic patients' blood pressure may be overestimated.</p>
        </div>
      </div>

    </div><!-- .papers -->
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="container">
    <h2>Projects</h2>
    <div class="toggle-bar">
      <a href="#" id="btn-class" class="toggle-btn active" onclick="showClass(event)">Class Projects</a>
      <a href="#" id="btn-hobby" class="toggle-btn" onclick="showHobby(event)">Hobby Projects</a>
    </div>

    <div class="project-grid">

      <!-- CLASS PROJECTS -->
      <div class="project-card" data-category="class">
        <div class="project-card-img">
          <img src="images/harp.bmp" alt="Music Factory">
        </div>
        <div class="project-card-body">
          <h3>Music Factory: Harp Robot &amp; Human-Machine Interaction</h3>
          <p>A 32-channel automatic harp robot with a layered modular framework integrating hardware and software for real-time control and machine learning algorithms for human-machine collaborative music performance.</p>
          <p class="project-meta">Tsinghua University · Prof. Gangtie Zheng</p>
        </div>
      </div>

      <!-- HOBBY PROJECTS — placeholder cards -->
      <div class="project-card" data-category="hobby">
        <div class="project-card-img project-card-placeholder"></div>
        <div class="project-card-body">
          <h3>Hobby Project (coming soon)</h3>
          <p>This section will be filled with hobby projects.</p>
        </div>
      </div>

    </div><!-- .project-grid -->
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <p>Updated Feb 2026 &nbsp;·&nbsp; Yuxiang Ma</p>
  </div>
</footer>

<script>
// Research toggle
function showSelected(e) {
  e.preventDefault();
  document.querySelectorAll('.paper-row').forEach(function(row) {
    row.style.display = row.dataset.selected === 'true' ? '' : 'none';
  });
  document.getElementById('btn-selected').classList.add('active');
  document.getElementById('btn-date').classList.remove('active');
}

function showByDate(e) {
  e.preventDefault();
  document.querySelectorAll('.paper-row').forEach(function(row) {
    row.style.display = '';
  });
  document.getElementById('btn-selected').classList.remove('active');
  document.getElementById('btn-date').classList.add('active');
}

// Projects toggle
function showClass(e) {
  e.preventDefault();
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.style.display = card.dataset.category === 'class' ? '' : 'none';
  });
  document.getElementById('btn-class').classList.add('active');
  document.getElementById('btn-hobby').classList.remove('active');
}

function showHobby(e) {
  e.preventDefault();
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.style.display = card.dataset.category === 'hobby' ? '' : 'none';
  });
  document.getElementById('btn-class').classList.remove('active');
  document.getElementById('btn-hobby').classList.add('active');
}

// Init: show selected papers and class projects by default
document.addEventListener('DOMContentLoaded', function() {
  showSelected({ preventDefault: function(){} });
  showClass({ preventDefault: function(){} });
});
</script>

</body>
</html>
```

**Step 2: Verify file saved correctly**

Open `index.html` in a browser and confirm: nav bar visible, two-column about section renders, research and projects sections exist.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: rebuild index.html with new academic layout skeleton"
```

---

### Task 2: Write style.css

**Files:**
- Create: `style.css`

**Step 1: Write the full stylesheet**

```css
/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Lato', Verdana, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

a { color: #1772d0; text-decoration: none; }
a:hover { color: #f09228; }

/* ===== LAYOUT ===== */
.container {
  max-width: 850px;
  margin: 0 auto;
  padding: 0 24px;
}

section { padding: 48px 0; }
section.alt-bg { background: #f9f9f9; }

h2 {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}

/* ===== NAV ===== */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  z-index: 100;
}

.nav-inner {
  max-width: 850px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-name {
  font-weight: 700;
  font-size: 15px;
  color: #333;
}

.nav-links a {
  margin-left: 24px;
  font-size: 14px;
  font-weight: 700;
  color: #555;
}

.nav-links a:hover { color: #1772d0; }

/* ===== ABOUT ===== */
#about { padding-top: 90px; } /* offset for fixed nav */

.about-grid {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 36px;
  align-items: start;
}

.about-photo img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.about-text h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
}

.about-title {
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}

.about-text p { margin-bottom: 10px; }

.about-links { margin-top: 4px; }

/* ===== TOGGLE BAR ===== */
.toggle-bar {
  margin-bottom: 24px;
  display: flex;
  gap: 20px;
}

.toggle-btn {
  font-size: 14px;
  font-weight: 400;
  color: #888;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
}

.toggle-btn.active {
  color: #1772d0;
  font-weight: 700;
  border-bottom: 2px solid #1772d0;
}

.toggle-btn:hover { color: #1772d0; }

/* ===== RESEARCH PAPERS ===== */
.paper-row {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.paper-row:last-child { border-bottom: none; }

.paper-img {
  flex-shrink: 0;
  width: 160px;
}

.paper-img img {
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
}

.paper-info { flex: 1; }

.paper-title {
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 4px;
}

.paper-authors {
  font-size: 13px;
  color: #555;
  margin-bottom: 2px;
}

.paper-venue {
  font-size: 13px;
  color: #777;
  margin-bottom: 6px;
}

.paper-links {
  font-size: 13px;
  margin-bottom: 6px;
}

.paper-desc {
  font-size: 13px;
  color: #555;
}

/* ===== PROJECTS ===== */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.project-card {
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.project-card-img img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
}

.project-card-placeholder {
  width: 100%;
  height: 140px;
  background: #f0f0f0;
}

.project-card-body { padding: 14px; }

.project-card-body h3 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
}

.project-card-body p {
  font-size: 13px;
  color: #555;
  margin-bottom: 4px;
}

.project-meta { color: #888 !important; font-size: 12px !important; }

/* ===== FOOTER ===== */
footer {
  background: #f9f9f9;
  border-top: 1px solid #e8e8e8;
  padding: 24px 0;
  text-align: center;
  font-size: 13px;
  color: #888;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 680px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .about-photo { display: flex; justify-content: center; }
  .project-grid { grid-template-columns: 1fr; }
  .paper-row { flex-direction: column; }
  .paper-img { width: 100%; }
  .paper-img img { width: 100%; height: auto; }
}

@media (max-width: 900px) and (min-width: 681px) {
  .project-grid { grid-template-columns: repeat(2, 1fr); }
}
```

**Step 2: Commit**

```bash
git add style.css
git commit -m "feat: add style.css for new academic layout"
```

---

### Task 3: Final cleanup and verification

**Files:**
- None to add; verify and commit

**Step 1: Open index.html locally in browser**

Check:
- [ ] Nav is sticky and links work
- [ ] About section: photo and bio side by side
- [ ] Research toggle: Selected shows 3 papers, By Date shows all 7
- [ ] Projects toggle: Class shows harp project, Hobby shows placeholder
- [ ] Mobile view (resize to <680px): stacks correctly

**Step 2: Remove old stylesheet reference (already done in Task 1), verify no broken links**

Open browser dev tools → Console: no 404 errors.

**Step 3: Commit**

```bash
git add .
git commit -m "feat: complete website redesign with research filter and projects section"
```
