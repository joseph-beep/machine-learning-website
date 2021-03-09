function setValue(url, text) {
  fetch(url)
    .then(response =>
    {
      return response.json();
    })
    .then(data =>
    {
      text.innerHTML = data.body.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "").replace(/^(.{200}[^\s]*).*/, "$1") + " ...";
    })
    .catch (console.error);
}

var texts = document.getElementsByClassName("post-preview");
for (i = 0; i < texts.length; i++) {
  setValue("/posts/" + texts[i].getAttribute("post") + ".json", texts[i]);
}