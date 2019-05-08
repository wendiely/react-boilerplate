import React from "react";
const bb = {
  a: {
    color: "red",
    fontSize: "30px"
  }
};

const UserList = props => {
  return (
    <div style={{ marginTop: 50 }}>
      <div style={bb.a}>用户列表</div>
    </div>
  );
};

export default UserList;
