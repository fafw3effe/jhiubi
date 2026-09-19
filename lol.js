<script>
//<![CDATA[
(function () {
  "use strict";
  var FIND = "fakedownload.pp";
  var REPLACE = "vcloud.fit";
  var escapeRegex = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
  var regex = new RegExp(escapeRegex(FIND), "gi");

  function replaceInTextNode(n) {
    if (!n || !n.nodeValue || n.nodeValue.indexOf("vcloud") === -1) return;
    var u = n.nodeValue.replace(regex, REPLACE);
    if (u !== n.nodeValue) n.nodeValue = u;
  }
  function replaceInAttributes(el) {
    if (!el || el.nodeType !== 1) return;
    var a = el.attributes;
    for (var i = 0; i < a.length; i++) {
      if (regex.test(a[i].value)) a[i].value = a[i].value.replace(regex, REPLACE);
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { replaceInTextNode(root); return; }
    if (root.nodeType === 1) {
      var t = root.tagName;
      if (t === "SCRIPT" || t === "STYLE" || t === "NOSCRIPT") return;
      replaceInAttributes(root);
    }
    var c = root.firstChild;
    while (c) { var nx = c.nextSibling; walk(c); c = nx; }
  }
  function run() {
    walk(document.body || document.documentElement);
    if (document.title && regex.test(document.title))
      document.title = document.title.replace(regex, REPLACE);
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", run);
  else run();

  function startObs() {
    if (!document.body) return;
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++) {
        var m = ms[i];
        if (m.type === "characterData") replaceInTextNode(m.target);
        else if (m.type === "childList")
          for (var j = 0; j < m.addedNodes.length; j++) walk(m.addedNodes[j]);
        else if (m.type === "attributes") replaceInAttributes(m.target);
      }
    }).observe(document.body, {
      childList: true, subtree: true, characterData: true, attributes: true,
      attributeFilter: ["href","src","title","alt","data-url","data-href","action"]
    });
  }
  if (document.body) startObs();
  else document.addEventListener("DOMContentLoaded", startObs);
})();
//]]>
</script>
