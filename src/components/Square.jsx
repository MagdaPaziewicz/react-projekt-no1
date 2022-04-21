import React from "react";

const Square = () => {
    const offersData = [
        { num: 1, isNew: 1 },
        { num: 2, isNew: 0 },
        { num: 3, isNew: 0 },
        { num: 4, isNew: 0 },
        { num: 5, isNew: 0 },
        { num: 6, isNew: 0 },
    ];

    return offersData.map((item) => 
        item.isNew === 1 ? (
            <div class="square">
                <div class="dot"></div>
                <p class="service">{"Usługa " + item.num + " (nowość)"}</p>
            </div>
        ) : (
            <div class="square">
                <p class="service">{"Usługa " + item.num}</p>
            </div>
        )
    );
}

export default Square;