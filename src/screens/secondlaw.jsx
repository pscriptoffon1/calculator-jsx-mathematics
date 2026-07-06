import { useState } from "react";

function Secondlaw() {


    let [result, setResult] = useState(0);
    let [result2, setResult2] = useState(0);
    let [result222, setResult222] = useState(0);
    let [num1, setInp1] = useState(0);
    let [num11, setInp11] = useState(0);
    let [num111, setInp111] = useState(0);
    let [num2, setInp2] = useState(0);
    let [num22, setInp22] = useState(0);
    let [num222, setInp222] = useState(0);

    let [sel, setSel] = useState("кг.");
    let [sel111, setSel111] = useState("кг.");

    function btn() {

        let mass = Number(num1);

        if (sel === "г.") {
            mass = mass / 1000;
        }

        if (sel === "т.") {
            mass = mass * 1000;
        }

        setResult(mass * Number(num2));
    }
    function btn3() {

        let mass3 = Number(num111);

        if (sel111 === "г.") {
            mass3 = mass3 / 1000;
        }

        if (sel111 === "т.") {
            mass3 = mass3 * 1000;
        }

        setResult222(Number(num222) / mass3);
    }

    function btn2() {


        setResult2(Number(num11) / Number(num22));
    }

    return (
        <div className="div">


            <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

                <div
                    className="bg-white p-5 rounded-5 shadow"
                    style={{ width: "650px" }}
                >

                    <h2 className="mb-5">
                        Рассчитать силу
                    </h2>

                    <hr className="mb-5" />

                    {/* масса */}
                    <div className="row mb-4 align-items-center">

                        <div className="col-2 text-end">
                            <h3>m =</h3>
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="0"
                                onChange={(e) => setInp1(e.target.value)}
                            />
                        </div>

                        <div className="col-3">
                            <select onChange={(e) => setSel(e.target.value)} className="form-select form-select-lg">
                                <option>кг.</option>
                                <option>г.</option>
                                <option>т.</option>
                            </select>
                        </div>

                    </div>


                    {/* ускорение */}
                    <div className="row mb-4 align-items-center">

                        <div className="col-2 text-end">
                            <h3>a =</h3>
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="0"
                                onChange={(e) => setInp2(e.target.value)}

                            />
                        </div>

                        <div className="col-3">
                            <select className="form-select form-select-lg">
                                <option>м/с²</option>
                            </select>
                        </div>

                    </div>


                    {/* формула */}
                    <div className="mb-5">

                        <h1 className="fst-italic">
                            F = am
                        </h1>

                        <h4>где:</h4>

                        <h5>m - масса</h5>
                        <h5>a - ускорение</h5>

                    </div>


                    <div className="row align-items-center mb-5">

                        <div className="col text-end">
                            <h5>Показать результат в</h5>
                        </div>

                        <div className="col-3">
                            <h2>{result} H</h2>
                        </div>


                    </div>


                    <button
                        className="btn btn-info text-white w-100 rounded-pill py-3 fs-4"
                        onClick={btn}
                    >
                        Найти
                    </button><br /><br />

                    <a href="/physicst"><button
                        className="btn btn-danger text-white w-100 rounded-pill py-2 fs-5"

                    >
                        Назад
                    </button>
                    </a>

                </div>
            </div><br /><br /><br />
            <br /><br />
            <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

                <div
                    className="bg-white p-5 rounded-5 shadow"
                    style={{ width: "650px" }}
                >

                    <h2 className="mb-5">
                        Рассчитать массу
                    </h2>

                    <hr className="mb-5" />

                    {/* масса */}
                    <div className="row mb-4 align-items-center">

                        <div className="col-2 text-end">
                            <h3>F =</h3>
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="0"
                                onChange={(e) => setInp11(e.target.value)}
                            />
                        </div>

                        <div className="col-3">
                            <select className="form-select form-select-lg">
                                <option>H</option>

                            </select>
                        </div>

                    </div>


                    {/* ускорение */}
                    <div className="row mb-4 align-items-center">

                        <div className="col-2 text-end">
                            <h3>A =</h3>
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="0"
                                onChange={(e) => setInp22(e.target.value)}

                            />
                        </div>

                        <div className="col-3">
                            <select className="form-select form-select-lg">
                                <option>м/с²</option>
                            </select>
                        </div>

                    </div>


                    {/* формула */}
                    <div className="mb-5">

                        <h1 className="fst-italic">
                            <b>m</b> = <small>F/a</small>
                        </h1>

                        <h4>где:</h4>

                        <h5>F - сила</h5>
                        <h5>a - ускорение</h5>

                    </div>


                    <div className="row align-items-center mb-5">

                        <div className="col text-end">
                            <h5>Показать результат в</h5>
                        </div>

                        <div className="col-3">
                            <h2>{result2} кг.</h2>
                        </div>


                    </div>


                    <button
                        className="btn btn-info text-white w-100 rounded-pill py-3 fs-4"
                        onClick={btn2}
                    >
                        Найти
                    </button><br /><br />

                    <a href="/physicst"><button
                        className="btn btn-danger text-white w-100 rounded-pill py-2 fs-5"

                    >
                        Назад
                    </button>
                    </a>

                </div>

            </div><br /><br /><br /><br />
            <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

                <div
                    className="bg-white p-5 rounded-5 shadow"
                    style={{ width: "650px" }}
                >

                    <h2 className="mb-5">
                        Рассчитать ускорение
                    </h2>

                    <hr className="mb-5" />




                    {/* ускорение */}
                    <div className="row mb-4 align-items-center">

                        <div className="col-2 text-end">
                            <h3>F =</h3>
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="0"
                                onChange={(e) => setInp222(e.target.value)}

                            />
                        </div>

                        <div className="col-3">
                            <select className="form-select form-select-lg">
                                <option>H</option>
                            </select>
                        </div>

                    </div>

                    {/* масса */}
                    <div className="row mb-4 align-items-center">

                        <div className="col-2 text-end">
                            <h3>m =</h3>
                        </div>

                        <div className="col">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="0"
                                onChange={(e) => setInp111(e.target.value)}
                            />
                        </div>

                        <div className="col-3">
                            <select onChange={(e) => setSel111(e.target.value)} className="form-select form-select-lg">
                                <option>кг.</option>
                                <option>г.</option>
                                <option>т.</option>
                            </select>
                        </div>

                    </div>


                    {/* формула */}
                    <div className="mb-5">

                        <h1 className="fst-italic">
                            a = F/m
                        </h1>

                        <h4>где:</h4>

                        <h5>m - масса</h5>
                        <h5>F - сила</h5>

                    </div>


                    <div className="row align-items-center mb-5">

                        <div className="col text-end">
                            <h5>Показать результат в</h5>
                        </div>

                        <div className="col-3">
                            <h2>{result222} м/с²</h2>
                        </div>


                    </div>


                    <button
                        className="btn btn-info text-white w-100 rounded-pill py-3 fs-4"
                        onClick={btn3}
                    >
                        Найти
                    </button><br /><br />

                    <a href="/physicst"><button
                        className="btn btn-danger text-white w-100 rounded-pill py-2 fs-5"

                    >
                        Назад
                    </button>
                    </a>

                </div>
            </div>
        </div>

    );
}

export default Secondlaw;