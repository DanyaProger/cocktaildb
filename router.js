const routes = {
  '/' : catalog,
  '/catalog' : catalog,
  '/index.html' : catalog
};

const scripts = {
  '/' : "scripts/catalog.js",
  '/catalog' : "scripts/catalog.js",
  '/index.html' : "scripts/catalog.js"
}

function getPathWithoutParams(pathname) {
  let startParamsIndex = pathname.indexOf('?');
  if (startParamsIndex != -1) {
    return pathname.slice(0, startParamsIndex);
  } 
  return pathname;
}

function addScript(pathname) {
  var scriptSrc = scripts[pathname];
  var script = document.createElement("script");
  script.src = scriptSrc;
  rootDiv.appendChild(script);
}

async function addContent(pathname) {
  pathname = getPathWithoutParams(pathname);
  if (pathname in routes) {
    rootDiv.innerHTML = routes[pathname];
    if (pathname in scripts) {
      addScript(pathname);
    }
  }
}

const rootDiv = document.getElementById('root');
addContent(window.location.pathname);
