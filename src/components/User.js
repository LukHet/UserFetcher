import "../styles/User.css";

const User = (props) => {
  return (
    <div>
      <div className="user">
        <div className="username">
          {props.firstname} {props.lastname}
        </div>
        <div className="userinfo">
          <div>
            <div>Birth date: {props.birthdate}</div>
            <div>City: {props.city}</div>
            <div>Address: {props.address}</div>
          </div>
          <div className="userbodyinfo">
            Measurements:
            <div>Gender: {props.gender}</div>
            <div>Weight: {props.weight}</div>
            <div>Height: {props.height}</div>
          </div>
        </div>
        <img src={props.image} alt="user" className="userimg" />
        <div className="usercontact">
          Contact:
          <div>E-mail: {props.email}</div>
          <div>Phone number: {props.phone}</div>
        </div>
      </div>
      <div className="separation" />
    </div>
  );
};

export default User;
