import { fetchUser, UserItem } from "./BackendAPI";

const reader = fetchUser();

const UserInfo = () => {
  const user = reader.read() as UserItem;
  return (
    <div>
      <h2>User 정보</h2>
      <ul>
        <li>ID : {user.id}</li>
        <li>UserID : {user.userid}</li>
        <li>Name : {user.username}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
