import React from "react";
import Square from "./Square";

const Offer = () => {
    return (
        <section class="offer" id="offer">
            <h2 class="title_offer container_everything">Czym zajmuje się nasza firma?</h2>
            <div class="offer_wrapper">
                <article class="offer_container">
                    <Square></Square>
                </article>
            </div>
        </section>
    );
}

export default Offer;