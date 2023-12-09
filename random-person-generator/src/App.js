import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [randomUser, setRandomUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.randomuser.me/api`);
      if (response.status !== 200) throw new Error("Server Response Error.");

      const data = await response.json();

      setRandomUser(data.results[0]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <div className="table">
          {randomUser && (
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>{randomUser.gender}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>
                    {randomUser.name.title} {randomUser.name.first}{" "}
                    {randomUser.name.last}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{randomUser.email}</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>{randomUser.login.username}</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>{new Date(randomUser.dob.date).toLocaleDateString()}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{randomUser.dob.age}</td>
                </tr>
                <tr>
                  <td>Registered Date</td>
                  <td>
                    {new Date(randomUser.registered.date).toLocaleDateString()}
                  </td>
                </tr>
                <tr>
                  <td>Registered Age</td>
                  <td>{randomUser.registered.age}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{randomUser.phone}</td>
                </tr>
                <tr>
                  <td>Cell</td>
                  <td>{randomUser.cell}</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>{randomUser.nat}</td>
                </tr>
                {/* Add more properties here */}
              </tbody>
            </table>
          )}
        </div>
      )}
      {error && <p>{error.message}</p>}
      <button type="button" onClick={fetchData}>
        Generate a new person
      </button>
    </div>
  );
}

export default App;
