const routes = {
  '/' : catalog,
  '/catalog' : catalog,
  '/index.html' : catalog,
  '/cocktail-info' : cocktailInfo,
  '/create-cocktail' : cocktailCreate,
  '/login' : login,
  '/register' : register,
  '/404' : notFound
};

const authRoutes = ['/create'];

const scripts = {
  '/' : "scripts/catalog.js",
  '/catalog' : "scripts/catalog.js",
  '/index.html' : "scripts/catalog.js",
  '/cocktail-info' : "scripts/cocktail-info.js",
  '/create-cocktail' : "scripts/create-cocktail.js",
  '/login' : "scripts/auth.js",
  '/register' : "scripts/auth.js"
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

  if (authRoutes.includes(pathname)) {
    if (!authService.isAuthenticated()) {
      onNavigate('/404');
      return;
    }
  }

  if (pathname in routes) {
    rootDiv.innerHTML = routes[pathname];
    if (pathname in scripts) {
      addScript(pathname);
    }
  }
  else {
    onNavigate('/404');
  }
}

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  addContent(pathname);
}

window.onpopstate = () => {
  addContent(window.location.pathname);
}

const rootDiv = document.getElementById('root');
addContent(window.location.pathname);
