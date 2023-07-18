import "../styles/User.css";

const User = (props) => {
  return (
    <div className="User">
      {props.firstname} {props.lastname}
    </div>
  );
};

export default User;
