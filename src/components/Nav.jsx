import React from "react";

const Nav = () => {
    return(
        <nav class="nav">
            <div class="nav-wrapper container_everything">
                <div class="nav-logo">
                    <a class="logo-link" href="#home">Nazwa Firmy</a>
                </div>
                <div class="nav-links">
                    <a class="nav-links-clik" href="#about_us">O nas</a>
                    <a class="nav-links-clik" href="#offer">Oferta</a>
                    <a class="nav-links-clik" href="#home">Kontakt</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;