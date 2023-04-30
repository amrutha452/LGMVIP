import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://www.bing.com/th/id/OGC.c6f0eb328ce1c5c91908054d48854dad?pid=1.7&rurl=https%3a%2f%2fc.tenor.com%2f0iK9a1WkT40AAAAC%2floading-white.gif&ehk=Db8dMprM%2bCJePTjDFuKUtV8Gq%2fZP56unEhF%2bnnsLyX0%3d"
        alt="Loaading.."
        
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">{user.email}</p>
          <p>User ID: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;