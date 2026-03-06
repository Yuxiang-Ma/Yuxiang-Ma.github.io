// Coauthor information — add/update URLs here.
// Keys must match the name exactly as written in the paper-authors field.
const COAUTHORS = {
  // ── Frequent collaborators ──────────────────────────────────────────
  "Edward Adelson":        { url: "http://persci.mit.edu/people/adelson" },
  "Yilun Du":              { url: "https://yilundu.github.io/" },

  // ── Robotics / MIT ──────────────────────────────────────────────────
  "Haonan Chen":           { url: "https://haonan16.github.io/" },
  "Jialiang (Alan) Zhao":  { url: "https://alanz.info/" },
  "Stephen Tian":          { url: "https://s-tian.github.io/" },
  "Xiaoshen Han":          { url: "https://xshenhan.github.io/" },
  "Wenlong Huang":         { url: "https://wenlonghuang.com/" },
  "Yunzhu Li":             { url: "https://yunzhuli.github.io/" },
  "Jiajun Wu":             { url: "https://jiajunwu.com/" },
  "Arpit Agarwal":         { url: "https://arpit15.github.io/" },
  "Sandra Liu":            { url: "https://sqliu343.github.io/" },
  "Wenzhen Yuan":          { url: "https://siebelschool.illinois.edu/about/people/faculty/yuanwz" },
  "Pengfei Ye":            { url: "" },
  "Yi Zhou":               { url: "" },
  "Molong Duan":           { url: "https://www.linkedin.com/in/molongduan/" },

  // ── Flexible electronics / UCSD ─────────────────────────────────────
  "Hongjie Hu":            { url: "" },
  "Xiaoxiang Gao":         { url: "" },
  "Dawei Song":            { url: "" },
  "Mohan Li":              { url: "" },
  "Hao Huang":             { url: "" },
  "Sheng Xu":              { url: "https://xugroup.eng.ucsd.edu/" },
  "Lu Yin":                { url: "" },
  "Ruixiang Qi":           { url: "" },
  "Ray S. Wu":             { url: "" },
  "Xiangjun Chen":         { url: "" },

  // ── Tsinghua ────────────────────────────────────────────────────────
  "Ying Chen":             { url: "" },
  "Yinji Ma":              { url: "" },
  "Xue Feng":              { url: "" },
};

// Replaces plain-text coauthor names in all .paper-authors elements with links.
function linkifyAuthors() {
  document.querySelectorAll('.paper-authors').forEach(function(el) {
    let html = el.innerHTML;
    // Process longer names first to prevent partial-name matches
    Object.entries(COAUTHORS)
      .filter(function(entry) { return entry[1].url; })
      .sort(function(a, b) { return b[0].length - a[0].length; })
      .forEach(function(entry) {
        var name = entry[0], url = entry[1].url;
        var escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        html = html.replace(
          new RegExp(escaped, 'g'),
          '<a href="' + url + '" target="_blank">' + name + '</a>'
        );
      });
    el.innerHTML = html;
  });
}
