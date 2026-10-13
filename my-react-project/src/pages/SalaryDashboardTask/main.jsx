export default function Main({ Month, Week, Day, Hour }) {
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h3 className="fw-bold text-danger">Salary Overview</h3>
                <p className="text-secondary">Your salary breakdown at a glance</p>
            </div>

            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body bg-danger text-white rounded p-4">
                            <i className="bi bi-calendar-month fs-2"></i>
                            <p className="mt-3 mb-2">Monthly Salary</p>
                            <h3 className="fw-bold">₹{Month}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body bg-warning text-dark rounded p-4">
                            <i className="bi bi-calendar-week fs-2"></i>
                            <p className="mt-3 mb-2">Weekly Salary</p>
                            <h3 className="fw-bold">₹{Week}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body bg-light text-danger rounded p-4">
                            <i className="bi bi-calendar-day fs-2"></i>
                            <p className="mt-3 mb-2">Daily Salary</p>
                            <h3 className="fw-bold">₹{Day}</h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body bg-dark text-warning rounded p-4">
                            <i className="bi bi-clock fs-2"></i>
                            <p className="mt-3 mb-2">Hourly Salary</p>
                            <h3 className="fw-bold">₹{Hour}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}