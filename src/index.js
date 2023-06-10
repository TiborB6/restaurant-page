import "./styles.css";
import "./normalize.css";
import createHomePage from "./home";
import createHeader from "./header";
import createMenu from "./menu";

createHeader();
createHomePage();

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#header-link-home")
homeBtn.classList.add("current-page");
    homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    createHomePage();
})

const menuBtn = document.querySelector("#header-link-menu")
menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("current-page");
    content.innerHTML = "";
    createMenu();
});


