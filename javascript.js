var title = document.getElementById("post-title");
var subtitle = document.getElementById("post-subtitle");
var body = document.getElementById("post-body");

title.innerHTML = "Hello";
subtitle.innerHTML = "Hello2";
body.innerHTML = "Hello I am text.";

fetch("/posts/test-post.json")
  .then(response => response.json())
  .then(data => { title.innerHTML = data.title; body.innerHTML = data.body; subtitle.innerHTML = data.subtitle; })
  .catch(console.error);