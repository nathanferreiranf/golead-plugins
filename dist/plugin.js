const paramsToObject = entries => {
  const result = {};

  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }

  return result;
};

const getParams = () => {
  var scripts = document.getElementsByTagName('script');
  var script = scripts[scripts.length - 1];
  var scriptURL = script.src;
  var url = new URL(scriptURL);
  var params = paramsToObject(url.searchParams.entries());
  window.open(`https://chat.golead.com.br/${params.id_user}`, 'pagina', "width=390, height=600, top=100, left=110, scrollbars=no");
};

const loadButton = () => {
  var btn = document.createElement("button");
  btn.innerHTML = "<div style='width: 40px'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512.002 512.002\"><path d=\"M256.002 32.001c-141.152 0-256 100.48-256 224 0 50.624 19.328 99.2 54.816 138.24L3.874 453.569a15.903 15.903 0 00-2.4 17.088 15.972 15.972 0 0014.528 9.344h240c141.152 0 256-100.48 256-224s-114.848-224-256-224z\" fill=\"#2196f3\"/><g fill=\"#fafafa\"><circle cx=\"256.002\" cy=\"256.001\" r=\"32\"/><circle cx=\"128.002\" cy=\"256.001\" r=\"32\"/><circle cx=\"384.002\" cy=\"256.001\" r=\"32\"/></g></svg></div>";
  btn.style.position = "absolute";
  btn.style.bottom = 0;
  btn.style.right = 0;
  btn.style.margin = "15px";
  btn.style.backgroundColor = "transparent";
  btn.style.border = 0;
  btn.style.cursor = "pointer";
  btn.addEventListener('click', function () {
    getParams();
  });
  document.body.appendChild(btn);
};

window.onload = loadButton;