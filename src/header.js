function createHeader() {
    const body = document.querySelector("body");

    const header = document.createElement("div");
        header.classList.add("header"); 
    body.appendChild(header);    
        const left = document.createElement("div");
            left.classList.add("left"); 
        header.appendChild(left); 
            const logo = document.createElement("p");
                logo.id = "logo";
                logo.textContent = "Italian Restaurant";
            left.appendChild(logo)
        const right = document.createElement("div");
            right.classList.add("right");
        header.appendChild(right);
            const homeLink = document.createElement("button");
                homeLink.id = "header-link-home"
                homeLink.textContent = "Home"
            right.appendChild(homeLink);
            const menuLink = document.createElement("button");
                menuLink.id = "header-link-menu"
                menuLink.textContent = "Menu"
            right.appendChild(menuLink);
            const contactLink = document.createElement("button");
                contactLink.id = "header-link-menu"
                contactLink.textContent = "Contact"
            right.appendChild(contactLink);
}

export default createHeader;