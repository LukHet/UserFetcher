import User from "./User";

const UsersList = (props) => {
  const usersList = props.users?.map((user) => (
    <User
      key={user.id}
      firstname={user.firstName}
      lastname={user.lastName}
      image={user.image}
      birthdate={user.birthDate}
      email={user.email}
      gender={user.gender}
      phone={user.phone}
      weight={user.weight}
      height={user.height}
      address={user.address.address}
      city={user.address.city}
    />
  ));
  return <div className="UsersList">{usersList}</div>;
};

export default UsersList;
