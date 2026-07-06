import { useState } from "react";

function PotentialEnergy() {

    const [result, setResult] = useState(0);

    const [sel, setSel] = useState("E");

    const [m, setM] = useState(0);
    const [h, setH] = useState(0);

    function btn() {
        const mass = Number(m);
        const height = Number(h);
        const g = 9.8;

        if (sel === "E") {
            setResult(mass * g * height);
        }

        if (sel === "m") {
            setResult(height !== 0 ? result / (g * height) : 0);
        }

        if (sel === "h") {
            setResult(mass !== 0 ? result / (mass * g) : 0);
        }
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

            <div className="bg-white p-5 rounded-5 shadow" style={{ width: "500px" }}>

                <div className="mb-4">
                    <label className="form-label fs-4">Рассчитать:</label>

                    <select
                        value={sel}
                        onChange={(e) => setSel(e.target.value)}
                        className="form-select form-select-lg"
                    >
                        <option value="E">Потенциальная энергия (E)</option>
                        <option value="m">Масса (m)</option>
                        <option value="h">Высота (h)</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="form-label fs-5">Масса (m)</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setM(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label fs-5">Высота (h)</label>
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        onChange={(e) => setH(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <h2>Результат: {result}</h2>
                </div>

                <button
                    onClick={btn}
                    className="btn btn-info text-white w-100 rounded-pill py-3 fs-4"
                >
                    Рассчитать
                </button>

            </div>
        </div>
    );
}

export default PotentialEnergy;