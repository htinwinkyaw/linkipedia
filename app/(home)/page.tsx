import HomeClient from "./HomeClient";
import React from "react";
import SignInPage from "../(auth)/signin/page";
import linkServices from "../_services/linkServices";
import userServices from "../_services/userServices";

const HomePage = async () => {
  const user = await userServices.getCurrentUser();
  const links = await linkServices.getLinks();

  return user ? <HomeClient user={user!} links={links} /> : <SignInPage />;
};

export default HomePage;
