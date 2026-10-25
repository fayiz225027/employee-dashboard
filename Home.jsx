import { useEffect, useState } from "react";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadEmployees() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to load employee data. Please try again.");
        }

        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadEmployees();
    return () => controller.abort();
  }, []);

  return (
    <section>
      <div className="hero-panel">
        <div>
          <p className="eyebrow">PEOPLE OVERVIEW</p>
          <h1>Employee Dashboard</h1>
          <p className="hero-copy">
            View your team directory and employee contact details in one place.
          </p>
        </div>
        <div className="hero-icon" aria-hidden="true">👥</div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Employee Directory</h2>
          <p className="muted-text">Employee information fetched from the API</p>
        </div>
        <span className="count-badge">
          {loading ? "Loading…" : `${employees.length} employees`}
        </span>
      </div>

      {loading && (
        <div className="status-card">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading employee details…</p>
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-warning rounded-4" role="alert">
          {error} Check your internet connection and refresh the page.
        </div>
      )}

      {!loading && !error && (
        <div className="table-card">
          <div className="table-responsive">
            <table className="table employee-table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">EMPLOYEE NAME</th>
                  <th scope="col">EMAIL ADDRESS</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td><span className="id-chip">#{employee.id}</span></td>
                    <td>
                      <div className="employee-name-cell">
                        <div className="avatar">
                          {employee.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="fw-semibold">{employee.name}</span>
                      </div>
                    </td>
                    <td>
                      <a className="email-link" href={`mailto:${employee.email}`}>
                        {employee.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="api-note">
        Data source: <code>jsonplaceholder.typicode.com/users</code>
      </p>
    </section>
  );
}