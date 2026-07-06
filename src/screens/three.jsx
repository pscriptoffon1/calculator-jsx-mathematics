import { useState } from "react";

function Three() {
    let [m1, setM1] = useState(0);
    let [a1, setA1] = useState(0);
    let [m2, setM2] = useState(0);
    let [a2, setA2] = useState(0);

    let [result, setResult] = useState(0);
    let [check, setCheck] = useState("");

    function btn() {
        let nm1 = Number(m1);
        let na1 = Number(a1);
        let nm2 = Number(m2);
        let na2 = Number(a2);

        let f1 = nm1 * na1;
        let f2 = nm2 * na2;

        setResult(f1);

   
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

            <div className="bg-white p-5 rounded-5 shadow" style={{ width: "500px" }}>

                <h3 className="text-center mb-4">
                    Закон Ньютона (F = m × a)
                </h3>

                <div className="mb-3">
                    <label className="form-label">Масса m1 (кг)</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setM1(e.target.value)}
                    />
                </div>

         

                <div className="mb-3">
                    <label className="form-label">Масса m2 (кг)</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setM2(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Ускорение a2 (м/с²)</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setA2(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Сила F</label>
                    <input
                        className="form-control form-control-lg"
                        value={result}
                        readOnly
                    />
                </div>

                <div className="mb-3 text-center fw-bold">
                    {check}
                </div>

                <button
                    onClick={btn}
                    className="btn btn-primary w-100 rounded-pill py-3 fs-4"
                >
                    Рассчитать
                </button>

                <a href="/physicst">
                    <button className="btn btn-danger w-100 rounded-pill py-2 fs-5 mt-3">
                        Назад
                    </button>
                </a>

            </div>
        </div>
    );
}

export default Three;