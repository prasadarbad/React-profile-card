

import "./Card.css";
function Card({name,job,about}) {
  
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952__340.jpg" alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className="lower-container">
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{about}</p>
        <button>Visit Profile</button>
      </div>
    </div>
  );
}

export default Card;
