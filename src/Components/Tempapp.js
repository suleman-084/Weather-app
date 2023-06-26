import React, { useEffect, useState } from "react";
import "./css/style.css";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bengaluru");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2f83bf57758a27fd28acf86fc2dcb429`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg"> No Data Found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <ion-icon name="location-outline"></ion-icon> {search}
              </h2>
              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="tempmin_min_max">
                Min : {city?.temp_min} °Cel | Max : {city?.temp_ma} °Cel
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Tempapp;
