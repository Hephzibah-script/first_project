import { useParams, Link } from "react-router-dom";

// import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

function TripDetails() {
  const { id } = useParams();
  const {
    data: country,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/countries/" + id);

  // const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/countries/" + country.id, {
      method: "DELETE",
    }).then(() => {
      // history.push("/");
    });
  };

  return (
    <section className="details">
      <div className="row">
        {isLoading && <span className="spinner-border text-success p"></span>}
        {error && (
          <span className="alert alert-danger alert-dismissible fade show p">
            {error}
          </span>
        )}
        {country && (
          <>
            <div className="col-md-6 col-sm-6 left">
              <span>{country.location}</span>
              <i className="bi bi-geo-alt-fill text-danger px-1" />
              <Link to="https://googlemap.com" className="g-link">
                View on Google Map
              </Link>
              <h1>{country.title}</h1>
              <p>{country.description}</p>

              <button onClick={handleClick}>delete</button>
            </div>
            <div className="col-md-6 col-sm-6 right">
              <img
                src={`../images/${country.imageUrl}`}
                className="round"
                alt="countryImage"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TripDetails;
