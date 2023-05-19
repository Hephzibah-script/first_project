const { Link } = require("react-router-dom");

function Card({ countries, title }) {
  // const [countries, setCountry] = useState([countries]);

  return (
    <>
      <h3 className="title">{title}</h3>
      {countries.map((country) => (
        <div className="row justify-content-center wrap" key={country.id}>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <img
              src={`../images/${country.imageUrl}`}
              className="round"
              alt="countryImage"
            />
            {/* src="/images/paint.jpg" alt="" */}
          </div>
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="c-location">
              <i className="bi bi-geo-alt-fill text-danger" />
              <span className="text-primary">{country.country}</span>
              <span>{country.location}</span>
              <Link to="https://googlemap.com" className="g-link">
                View on Google Map
              </Link>
            </div>
            <h3 className="c-title">{country.title}</h3>
            <div className="c-date">
              <span>{country.startDate} </span>
              <span>{country.endDate}</span>
            </div>
            <p className="mb-1 text-dark fw-bold"></p>
            <p className="c-des">{country.description}</p>
            <Link to={`/trips/${country.id}`} className="see-details">
              Book Now
            </Link>

            {/* <button onClick={() => handleCancel(country.id)}>
              Cancel Trip
            </button> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
