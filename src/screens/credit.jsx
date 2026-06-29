import { useState } from "react";

function Credit() {

    let [s, sum] = useState(0);
    let [p, percent] = useState(0);
    let [l, loan] = useState(0);
    let [c, commission] = useState(0);

    let [result1, setResult1] = useState(0);
    let [result2, setResult2] = useState(0);
    let [result3, setResult3] = useState(0);

    let [timeType, setTimeType] = useState("года");

    function btn() {

        let r = Number(p) / 12 / 100; // месячный %

        let n;

        if (timeType === "года") {
            n = Number(l) * 12;
        } else {
            n = Number(l);
        }

        let x = (1 + r) ** n;

        let payment = Number(s) * (r * x);

        let total = payment / (x - 1);

        total = total * n;

        total = total + Number(c);

        /* Всего выплат */

        setResult1(total.toFixed(2));

        /* Переплата */

        let overpay = total - Number(s);

        setResult2(overpay.toFixed(2));

        /* В месяц */

        let inm = total / n;

        setResult3(inm.toFixed(2));
    }

    return (
        <div
            className="container-fluid p-5"
            style={{
                background: "#27bcad",
                minHeight: "100vh",
            }}
        >
            <div
                className="card mx-auto shadow-lg p-5"
                style={{
                    maxWidth: "1300px",
                    borderRadius: "30px"
                }}
            >

                <div className="row g-4">

                    <div className="col-md-4">
                        <label className="mb-2">
                            Сумма кредита/займа
                        </label>

                        <div className="input-group">
                            <input
                                onChange={(e) => sum(e.target.value)}
                                type="number"
                                className="form-control p-3"
                                placeholder="50000"
                            />
                            <span className="input-group-text">₽</span>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Процентная ставка
                        </label>

                        <input
                            type="number"
                            className="form-control p-3"
                            placeholder="10"
                            onChange={(e) => percent(e.target.value)}
                        />
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Срок кредита
                        </label>

                        <div className="input-group">

                            <input
                                type="number"
                                className="form-control p-3"
                                placeholder="3"
                                onChange={(e) => loan(e.target.value)}
                            />

                            <select
                                className="form-select"
                                value={timeType}
                                onChange={(e) => setTimeType(e.target.value)}
                            >
                                <option>года</option>
                                <option>месяц</option>
                            </select>

                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Периодичность
                        </label>

                        <div className="form-select p-3">
                            Ежемесячно
                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Единовременная комиссия
                        </label>

                        <input
                            onChange={(e) => commission(e.target.value)}
                            type="number"
                            className="form-control p-3"
                            defaultValue="0"
                        />
                    </div>

                </div>

                <hr className="my-5" />

                <div className="row align-items-center">

                    <div className="col-md-3">
                        <small>Всего выплат</small>

                        <h1 className="fw-bold">
                            {result1} ₽
                        </h1>
                    </div>

                    <div className="col-md-3">
                        <small>Переплата</small>

                        <h1 className="fw-bold">
                            {result2} ₽
                        </h1>
                    </div>

                    <div className="col-md-3">
                        <small>В месяц</small>

                        <h1 className="fw-bold">
                            {result3} ₽
                        </h1>
                    </div>

                    <div className="col-md-3 text-end">

                        <button
                            className="btn btn-warning rounded-pill px-5 py-3 fw-bold"
                            onClick={btn}
                        >
                            Считать
                        </button>

                    </div>


                    <a href="/bank"> <button
                            className="btn btn-warning rounded-pill px-5 py-3 fw-bold"
                         
                        >
                           NEXT
                        </button></a> 

                </div>

            </div>
        </div>
    );
}

export default Credit;