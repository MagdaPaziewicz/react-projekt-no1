import React from "react";

const Header = () => {
    return (
        <header class="header">
            <div class="shadow"></div>
            <div class="header_wrapper container_everything">
                <h1 class="title_header">Nasza firma oferuje najlepszej jakości produkty</h1>
                <p class="text_header">Nie wierz nam na słowo - sprawdź nas</p>
                <a class="header_link_offer" href="#offer">Oferta</a>
            </div>
        </header>
    );
}

export default Header;