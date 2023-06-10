import Menu from "./img/menu.webp";

function createMenu(){
    const content = document.querySelector("#content");
    const menu = document.createElement("img");
    menu.src = Menu;
    content.appendChild(menu);
};

export default createMenu;