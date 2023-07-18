import User from "./User";
import "../styles/UsersList.css";

const UsersList = (props) => {
  const usersList = props.users?.map((user) => (
    <User key={user.id} firstname={user.firstName} lastname={user.lastName} />
  ));
  return <div className="UsersList">{usersList}</div>;
};

export default UsersList;
