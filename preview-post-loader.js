var texts = document.getElementsByClassName("post-preview");

for (i = 0; i < texts.length; i++) {
  var currentText = texts[i];

  fetch("/posts/" + currentText.getAttribute("post") + ".json")
    .then(response => response.json())
    .then(data => { currentText.innerHTML = data.body; })
    .catch(console.error);
}