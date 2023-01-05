import star from "../images/Star1.png";

function Experiences(props) {
  let text;
  if (props.openCount === 0) {
    text = "SOLD OUT";
  } else {
    text = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card--status">{text}</div>
      <img
        src={
          props.img
            ? require("../images/" + props.img)
            : require("../images/image 30.png")
        }
        className="card--image"
        alt="card"
      />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span className="">{props.ratings}</span>
        <span className="gray"> ({props.reviewCount}) • </span>
        <span className="gray"> {props.location} </span>
      </div>
      <p className="card--title">{props.title}</p>
      <div className="card--stats">
        <span className="bold">From ${props.price}</span> / Person
      </div>
    </div>
  );
}

export default Experiences;
