import { useState } from "react";

function Oma() {

    let [result, setResult] = useState(0);

    let [sel, setSel] = useState("I");

    let [num1, setInp1] = useState(0);
    let [num2, setInp2] = useState(0);

    function btn() {

        let n1 = Number(num1);
        let n2 = Number(num2);

        if (sel === "I") {
            setResult(n1 / n2);
        }

        if (sel === "U") {
            setResult(n1 * n2);
        }

        if (sel === "R") {
            setResult(n1 / n2);
        }
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

            <div
                className="bg-white p-5 rounded-5 shadow"
                style={{ width: "500px" }}
            >

                <div className="mb-4">

                    <label className="form-label fs-4">
                        Рассчитать:
                    </label>

                    <select
                        value={sel}
                        onChange={(e) => setSel(e.target.value)}
                        className="form-select form-select-lg"
                    >
                        <option value="I">
                            Силу тока (I)
                        </option>

                        <option value="U">
                            Напряжение (U)
                        </option>

                        <option value="R">
                            Сопротивление (R)
                        </option>

                    </select>

                </div>

                <div className="mb-4">

                    <label className="form-label fs-5">
                        Ампер
                    </label>

                    <input
                        onChange={(e) => setInp1(e.target.value)}
                        type="number"
                        className="form-control form-control-lg"
                    />

                </div>

                <div className="mb-4">

                    <label className="form-label fs-5">
                        Волть
                    </label>

                    <input
                        onChange={(e) => setInp2(e.target.value)}
                        type="number"
                        className="form-control form-control-lg"
                    />

                </div>

                <div className="mb-4">

                    <h2>
                        Результат: {result}
                    </h2>

                </div>

                <button
                    onClick={btn}
                    className="btn btn-info text-white w-100 rounded-pill py-3 fs-4"
                >
                    Рассчитать
                </button><br /><br />
                    <a href="/physicst"><button
                        className="btn btn-danger text-white w-100 rounded-pill py-2 fs-5"

                    >
                        Назад
                    </button>
                    </a>

            </div>

        </div>
    );
}

export default Oma;