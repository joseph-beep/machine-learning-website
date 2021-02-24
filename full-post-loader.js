function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var urlString = window.location.href;
var urlParams = parseURLParams(urlString);

var title = document.getElementById("post-title");
var subtitle = document.getElementById("post-subtitle");
var body = document.getElementById("post-body");

fetch("/posts/" + urlParams.post + ".json")
  .then(response => response.json())
  .then(data => {
    title.innerHTML = data.title;
    body.innerHTML = data.body;
    subtitle.innerHTML = data.subtitle;
    document.title = data.title; })
  .catch(console.error);