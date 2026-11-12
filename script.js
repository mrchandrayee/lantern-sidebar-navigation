const pages = {
  overview: { title: "Overview", description: "Sales are up 12% this week." },
  orders: { title: "Orders", description: "32 orders to ship today, 4 running late." },
  clients: { title: "Clients", description: "Your customer relationships are looking good." },
  products: { title: "Products", description: "Manage your catalog and stock levels." },
  reports: { title: "Reports", description: "The weekly report is ready to send." },
  settings: { title: "Settings", description: "Manage your workspace preferences." }
};

const links = [...document.querySelectorAll(".nav-link")];
const lantern = document.querySelector("#lantern");
const sidebar = document.querySelector(".sidebar");
const title = document.querySelector("#pageTitle");
const description = document.querySelector("#pageDescription");

function moveLantern(link, animate = true) {
  const sidebarRect = sidebar.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  const lanternHeight = lantern.getBoundingClientRect().height;
  const top = linkRect.top - sidebarRect.top + linkRect.height / 2 - lanternHeight / 2;
  if (!animate) lantern.style.transition = "none";
  lantern.style.top = `${top}px`;
  if (!animate) requestAnimationFrame(() => lantern.style.transition = "");
}

function activate(link, updateHash = true) {
  const pageKey = link.dataset.page;
  links.forEach(item => {
    const active = item === link;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  title.textContent = pages[pageKey].title;
  description.textContent = pages[pageKey].description;
  const copy = document.querySelector(".content-copy");
  copy.style.animation = "none";
  void copy.offsetWidth;
  copy.style.animation = "";
  moveLantern(link);

  if (updateHash) history.replaceState(null, "", `#${pageKey}`);
}

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    activate(link);
  });
});

const initialKey = location.hash.slice(1);
const initialLink = links.find(link => link.dataset.page === initialKey) || links[0];
activate(initialLink, false);
window.addEventListener("resize", () => {
  const active = links.find(link => link.getAttribute("aria-current") === "page");
  if (active) moveLantern(active, false);
});
