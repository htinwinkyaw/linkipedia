import React from "react";
import userServices from "../_services/userServices";

const HomePage = async () => {
  const user = await userServices.getCurrentUser();

  return <div>{user ? user.email : "No User"}</div>;
};

export default HomePage;
