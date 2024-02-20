import { Grid, Card } from "@tremor/react";

import { useWeather } from "../../hooks/useWeather";

const CurrentWeather = ({ lat, lon }) => {
  const { error, isError, isFetching, isLoading, currentWeather } = useWeather(
    lat,
    lon
  );

  if (isLoading) {
    return <p>Cargando datos del tiempo ...</p>;
  }

  if (isFetching) {
    return <p>Solicitando datos del tiempo ...</p>;
  }

  if (isError) {
    return (
      <>
        <p>Existe un error:</p>
        <pre>{error ? error.message : "Error desconocido"}</pre>
      </>
    );
  }

  if (!currentWeather || !currentWeather.name) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <>
      <h1>Tiempo actual en {currentWeather.name} </h1>

      <Grid
        numItemsMd={2}
        numItemsLg={2}
        className="gap-6 mt-6"
        color="fuchsia"
      >
        <Card>
          <div>
            <strong>{currentWeather.name} </strong>
            <br></br>
            <p style={{ fontSize: 32 }}> {currentWeather.main.temp} ºC </p>
            <h5> {currentWeather.main.temp_min} ºC Min </h5>
            <h5> {currentWeather.main.temp_max} ºC Max</h5>
            <br></br>
            <p>
              {" "}
              <i>{currentWeather.weather[0].description}</i>{" "}
            </p>
          </div>
        </Card>
        <div>
          <img
            style={{
              width: 150,
              height: 150,
              display: "block",
              "margin-left": "auto",
              "margin-right": "auto",
            }}
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
          />
        </div>
      </Grid>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card style={{ textAlign: "center" }}>
          {currentWeather.wind.speed} kmph
        </Card>
        <Card style={{ textAlign: "center" }}>
          <h2>{currentWeather.main.pressure} mb</h2>
        </Card>
        <Card style={{ textAlign: "center" }}>
          <h2>{currentWeather.main.humidity} %</h2>
        </Card>
      </Grid>
    </>
  );
};

export default CurrentWeather;

/*

     <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card>{currentWeather.wind.speed} kmph</Card>
        <Card>
          <h2>{currentWeather.main.pressure} mb</h2>
        </Card>
        <Card>
          <h2>{currentWeather.main.humidity} %</h2>
        </Card>
      </Grid>

      <h2>{currentWeather.name} </h2>
      <h2>{currentWeather.wind.speed} </h2>
      <h2>{currentWeather.wind.deg} </h2>
      <h2>{currentWeather.main.feels_like} </h2>
      <h2>{currentWeather.main.pressure} </h2>

      <h2>{currentWeather.main.humidity} </h2>

      <h2>{currentWeather.main.temp} </h2>


      {
    "coord": {
        "lon": 2.0167,
        "lat": 41.3
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 10.27,
        "feels_like": 9.18,
        "temp_min": 5.98,
        "temp_max": 12.2,
        "pressure": 1018,
        "humidity": 70
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 320
    },
    "clouds": {
        "all": 20
    },
    "dt": 1707807464,
    "sys": {
        "type": 2,
        "id": 2012021,
        "country": "ES",
        "sunrise": 1707807030,
        "sunset": 1707844921
    },
    "timezone": 3600,
    "id": 3121519,
    "name": "Gavà",
    "cod": 200
}

*/
