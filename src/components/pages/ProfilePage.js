import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { updateUser, deleteUser } from "../../api/api"

const ProfilePage = () => {
  const { user, setUser, logout } = useContext(Context);
  const [userData, setUserData] = useState({ ...user });

  const handleUpdate = async () => {
    const updatedUser = await updateUser(user._id, userData);
    setUser(updatedUser);
  };

  const handleDelete = async () => {
    await deleteUser(user._id);
    logout();
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        value={userData.firstName}
        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
      />
      <input
        type="text"
        value={userData.lastName}
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default ProfilePage;
