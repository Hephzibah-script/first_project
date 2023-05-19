import Card from "../layout/Card";
// import { countries } from "../Data/Data";
import useFetch from "../layout/useFetch";

function Home() {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/countries",
  );

  // const handleCancel = (id) => {
  //   const newTrip = trip.filter((country) => country.id !== id);
  //   setTrip(newTrip);
  // };

  return (
    <>
      {isLoading && (
        <div className="p">
          <span className="spinner-border text-success"></span>
        </div>
      )}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show p">
          {error}
        </div>
      )}
      {data && (
        <Card
          countries={data}
          title="Fun Facts about Travelling"
          // handleCancel={handleCancel}
        />
      )}
      {/* <Card
        countries={countries.filter((country) => country.id === 1)}
        title="2024 VACATION!"
      /> */}
    </>
  );
}

export default Home;
