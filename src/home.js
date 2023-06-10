function createHomePage() {
    const content = document.querySelector("#content");
        const header = document.createElement("div");
            header.classList.add("header"); 
        content.appendChild(header);    
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
                    homeLink.id = "header-link"
                    homeLink.textContent = "Home"
                right.appendChild(homeLink);
                const menuLink = document.createElement("button");
                    menuLink.id = "header-link"
                    menuLink.textContent = "Menu"
                right.appendChild(menuLink);
                const contactLink = document.createElement("button");
                    contactLink.id = "header-link"
                    contactLink.textContent = "Contact"
                right.appendChild(contactLink);
                



        const pictureSlide = document.createElement("div");
            pictureSlide.classList.add("pictures");
        content.appendChild(pictureSlide);

        const description = document.createElement("div");
            description.classList.add("description");
        content.appendChild(description);
}

export default createHomePage;