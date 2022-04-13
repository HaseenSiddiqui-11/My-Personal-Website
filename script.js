console.log(document.documentElement.scrollHeight / 2 + 230.6)
x = document.getElementsByTagName("div")[0];
x.style.position = "absolute";
x.style.top = document.documentElement.scrollHeight / 2 - (230.6 / 2) + "px";