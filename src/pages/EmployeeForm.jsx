import { useState } from "react";

const initialForm = {
  name: "",
  designation: "",
  location: "",
  salary: ""
};

export default function EmployeeForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Assignment requirement: no need to post data from the frontend.
    // This only displays a local confirmation and does not send data to an API.
    setSubmitted(true);
  }

  return (
    <section className="form-page">
      <div className="hero-panel form-hero">
        <div>
          <p className="eyebrow">TEAM MANAGEMENT</p>
          <h1>Employee Form</h1>
          <p className="hero-copy">
            Enter employee details in the form below.
          </p>
        </div>
        <div className="hero-icon" aria-hidden="true">📝</div>
      </div>

      <div className="form-card">
        <div className="form-card-heading">
          <div className="form-icon">＋</div>
          <div>
            <h2>Employee Information</h2>
            <p className="muted-text mb-0">All fields are required.</p>
          </div>
        </div>

        {submitted && (
          <div className="alert alert-success rounded-3" role="status">
            Form validated successfully. No data was sent to a server.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter employee name"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="designation">Designation</label>
              <input
                className="form-control form-control-lg"
                id="designation"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="location">Location</label>
              <input
                className="form-control form-control-lg"
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter location"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="salary">Salary</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text">₹</span>
                <input
                  className="form-control"
                  id="salary"
                  name="salary"
                  type="number"
                  min="0"
                  step="any"
                  value={form.salary}
                  onChange={handleChange}
                  placeholder="Enter salary"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-light btn-lg"
              onClick={() => {
                setForm(initialForm);
                setSubmitted(false);
              }}
            >
              Clear
            </button>
            <button type="submit" className="btn btn-primary btn-lg px-4">
              Validate Form <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
      <p className="form-footnote">
        Note: As specified in the assignment, form data is not posted to an API.
      </p>
    </section>
  );
}
