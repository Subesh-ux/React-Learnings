import { useState } from "react";
import MainPage from "./main";

export default function Dashboard() {
    const [Salary, setSalary] = useState(0);
    const [Yearsalary, setYearsalary] = useState(0);
    const [msalary, setMsalary] = useState(0);
    const [wsalary, setWsalary] = useState(0);
    const [dsalary, setDsalary] = useState(0);
    const [hsalary, setHsalary] = useState(0);

    const handleclick = (e) => {
        e.preventDefault();

        const yearly = Number(Salary);

        setYearsalary(yearly);
        setMsalary((yearly / 12).toFixed(2));
        setWsalary((yearly / 52).toFixed(2));
        setDsalary((yearly / 12 / 22).toFixed(2));
        setHsalary((yearly / 12 / 22 / 8).toFixed(2));
    };

    return (
        <div className="container-fluid bg-light min-vh-100 p-3 p-md-5">
            <div className="bg-danger text-white rounded-4 shadow p-4 p-md-5 mb-4">
                <h1 className="fw-bold">
                    <i className="bi bi-wallet2 me-2"></i>
                    Salary Dashboard
                </h1>
                <p className="mb-0 fs-5">
                    Annual Salary Breakdown
                </p>
            </div>

            <div className="card border-0 shadow-sm rounded-4 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold text-danger mb-3">
                        <i className="bi bi-calculator me-2"></i>
                        Enter Yearly Salary
                    </h4>

                    <form onSubmit={handleclick}>
                        <label htmlFor="salary" className="form-label fw-semibold">
                            Yearly Salary (₹)
                        </label>

                        <div className="row g-3">
                            <div className="col-12 col-md-8">
                                <input
                                    type="number"
                                    id="salary"
                                    name="salary"
                                    min="1"
                                    required
                                    className="form-control form-control-lg"
                                    placeholder="Enter your yearly salary"
                                    value={Salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>

                            <div className="col-12 col-md-4">
                                <button
                                    className="btn btn-danger btn-lg w-100 fw-semibold"
                                    type="submit"
                                >
                                    <i className="bi bi-calculator me-2"></i>
                                    Calculate
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-warning rounded-4 p-2 p-md-3 shadow-sm">
                <MainPage
                    Month={msalary}
                    Week={wsalary}
                    Day={dsalary}
                    Hour={hsalary}
                />
            </div>

            <div className="text-center text-secondary mt-4">
                <small>
                    <i className="bi bi-info-circle me-1"></i>
                    Based on 12 months, 22 working days per month,
                    and 8 working hours per day.
                </small>
            </div>
        </div>
    );
}