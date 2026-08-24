const navElement = document.getElementById("nav_content");
if (navElement) {
  const isHtmlsFolder = window.location.pathname.includes('/htmls/');
  const navPath = isHtmlsFolder ? "./nav.html" : "./htmls/nav.html";
  fetch(navPath)
    .then((response) => response.text())
    .then((data) => {
      navElement.innerHTML = data;
    });
}
