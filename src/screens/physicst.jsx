import { useState } from "react";

function Physicst() {



    return (

        <div className="physics-container">

            <h1 className="title">
                Калькуляторы физики
            </h1>

            <div className="cards">

                <a href="/secondlaw" className="physics-card">
                    <i className="fa-solid fa-rocket icon"></i>
                    <h3>Второй Закон Ньютона</h3>
                </a>

                <a href="/oma" className="physics-card">
                    <i className="fa-solid fa-bolt icon"></i>
                    <h3>Закон Ома</h3>
                </a>



                <a href="/acceleration" className="physics-card">
                    <i className="fa-solid fa-gauge-high icon"></i>
                    <h3>Ускорение движения</h3>
                </a>
                <a href="/three" className="physics-card">
                    <i className="fa-solid fa-gauge-high icon"></i>
                    <h3>Третий закон Ньтона</h3>
                </a>



                <a href="secondlaw" className="physics-card">
                    <i className="fa-solid fa-atom icon"></i>
                    <h3>Определение Силы, масса, ускорение</h3>
                </a>

                <a href="energy" className="physics-card">
                    <i className="fa-solid fa-battery-full icon"></i>
                    <h3>Расчет потенциальной энергии, массы или высоты</h3>
                </a>




            </div>

        </div>
    );
}

export default Physicst;