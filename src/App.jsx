import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const users = [
    {
      name: "Alice",
      age: 28,
      country: "USA",
    },
    {
      name: "Bob",
      age: 35,
      country: "Canada",
    },
    {
      name: "Charlie",
      age: 22,
      country: "Australia",
    },
    {
      name: "David",
      age: 42,
      country: "United Kingdom",
    },
  ];

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countriesPromises = users.map((user) =>
      fetch(`https://restcountries.com/v3.1/name/${user.country}`).then((res) =>
        res.json()
      )
    );

    Promise.all(countriesPromises).then((data) =>
      setCountries(data.map((country) => country[0]))
    );
    console.log(countriesPromises);
  });

  return (
    <>
      {countries.map((country, index) => (
        <h2 key={index}>
          {country.name.common}: {country.region}
        </h2>
      ))}
    </>
  );
}

export default App;
