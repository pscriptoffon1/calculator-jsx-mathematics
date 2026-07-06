import { useState } from "react";

function Acceleration() {

    let [result, setResult] = useState(0);

    let [sel, setSel] = useState("a");

    let [num1, setInp1] = useState(0);
    let [num2, setInp2] = useState(0);
    let [num3, setInp3] = useState(0);

    function btn() {

        let n1 = Number(num1);
        let n2 = Number(num2);
        let n3 = Number(num3);

        // a=(V1-V0)/t
        if (sel === "a") {
            setResult((n2 - n1) / n3);
        }

        // V0=V1-a*t
        if (sel === "V0") {
            setResult(n2 - n1 * n3);
        }

        // V1=V0+a*t
        if (sel === "V1") {
            setResult(n1 + n2 * n3);
        }

        // t=(V1-V0)/a
        if (sel === "t") {
            setResult((n2 - n1) / n3);
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

                        <option value="a">
                            Ускорение (a)
                        </option>

                        <option value="V0">
                            Начальную скорость (V0)
                        </option>

                        <option value="V1">
                            Конечную скорость (V1)
                        </option>

                        <option value="t">
                            Время (t)
                        </option>

                    </select>

                </div>


                <div className="mb-4">

                    <label className="form-label fs-5">
                        Начальная скорость (V0), м/с:
                    </label>

                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setInp1(e.target.value)}
                    />

                </div>


                <div className="mb-4">

                    <label className="form-label fs-5">
                        Конечная скорость (V1), м/с:
                    </label>

                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setInp2(e.target.value)}
                    />

                </div>


                <div className="mb-4">

                    <label className="form-label fs-5">
                        Время/Ускорение:
                    </label>

                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setInp3(e.target.value)}
                    />

                </div>


                <div className="mb-4">

                    <label className="form-label fs-5">
                        Результат:
                    </label>

                    <input
                        className="form-control form-control-lg"
                        value={result}
                        readOnly
                    />

                </div>


                <button
                    onClick={btn}
                    className="btn btn-info text-white w-100 rounded-pill py-3 fs-4"
                >
                    Рассчитать
                </button>


               
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

export default Acceleration;