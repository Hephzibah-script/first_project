import { useState } from "react";
// import { useHistory } from "react-router-dom";

function Hostel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Choose location");
  const [imageUrl, setImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const country = { title, description, imageUrl, location };

    setIsLoading(true);

    setTimeout(() => {
      fetch("http://localhost:8000/countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(country),
      }).then(() => {
        console.log("new country added");
        setIsLoading(false);
        // history.go(-1);
        // history.push("/");
      });
    }, 2000);
  };

  return (
    <div className="hostel">
      <h1>Upload new info here</h1>
      <form onSubmit={handleSubmit}>
        <label>Hostel name:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Hostel description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Upload Pictures</label>
        <input
          type="file"
          class="form-control"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>
        <label>Location</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option>Choose location</option>
          <option value="Off-Campus">Off-Campus</option>
          <option value="On-Campus">On-Campus</option>
        </select>

        {!isLoading && <button>Submit</button>}
        {isLoading && (
          <button disabled>
            <span className="spinner-border text-light mx-2"></span>Submit
          </button>
        )}
        <p>{title}</p>
        <p>{description}</p>
        <p>{imageUrl}</p>
        <p>{location}</p>
      </form>
    </div>
  );
}

export default Hostel;
