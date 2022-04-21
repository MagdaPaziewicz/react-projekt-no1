import React from "react";

const About = () => {
    return (
        <section class="about_us container_everything" id="about_us">
            <h2 class="title_about_us">Nasi specjaliści</h2>
            <div class="specialists_wrapper">
                <div class="box">
                    <div class="photo"></div>
                    <div class="about_people">
                        <p class="surname">Anna Nowak [dział]</p>
                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, explicabo adipisci. Excepturi, et labore necessitatibus vitae hic voluptatum eum repudiandae eos voluptates iure, ipsa ipsum earum sunt sint libero? Perferendis!
                        </p>
                    </div>
                </div>
                <div class="box">
                    <div class="photo"></div>
                    <div class="about_people">
                        <p class="surname">Adam Kowalski [dział]</p>
                        <p class="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, explicabo adipisci. Excepturi, et labore necessitatibus vitae hic voluptatum eum repudiandae eos voluptates iure, ipsa ipsum earum sunt sint libero? Perferendis!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;