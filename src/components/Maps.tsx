import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface CountryData {
  country: string;
  cases: number;
  recovered: number;
  deaths: number;
  active: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

const fetchData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries").then(
    (res) => res.json()
  );
  return response;
};

const Maps: React.FC = () => {
  const { data, isLoading, isError } = useQuery<CountryData[]>(
    ["covidData"],
    fetchData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const position: LatLngExpression = [30, 0]; // Initial map position

  return (
    <div>
      <MapContainer
        center={position}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <strong>{country.country}</strong>
              <br />
              Active Cases: {country.active}
              <br />
              Recovered: {country.recovered}
              <br />
              Deaths: {country.deaths}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
