var debug = true;

function setValue(url, text) {
  fetch(url)
    .then(response =>
    {
      if (debug) {
        console.log(response.url);
        document.getElementById("printer").innerHTML = response.url;
      }
      return response.json();
    })
    .then(data =>
    {
      text.innerHTML = data.body.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "").replace(/^(.{200}[^\s]*).*/, "$1") + " ...";
    })
    //.catch (console.error);
    .catch((error) => {
      if (debug) {
        document.getElementById("printer").innerHTML = error;
      }
    })
}

var texts = document.getElementsByClassName("post-preview");
for (i = 0; i < texts.length; i++) {
  setValue("/posts/" + texts[i].getAttribute("post") + ".json", texts[i]);
}