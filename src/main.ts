// document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
const link_list = [
  ...document.querySelectorAll<HTMLAnchorElement>("[data-active]"),
];

function toggle_active(links: HTMLAnchorElement[]) {
  links.forEach((link) => active_link(link, () => toggle_disable(links)));
}
function active_link(link: HTMLAnchorElement, callback?: () => void) {
  link.onclick = () => {
    if (callback) callback();
    link.setAttribute("data-active", "true");
  };
}

function disable_link(link: HTMLAnchorElement) {
  link.setAttribute("data-active", "false");
}

function toggle_disable(links: HTMLAnchorElement[]): void {
  links.forEach(disable_link);
}

toggle_active(link_list);
