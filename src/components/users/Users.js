import React, { useContext } from "react";
import GithubContext from '../../context/github/githubContext';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
  gridGap: "1rem"
};

export default Users;
