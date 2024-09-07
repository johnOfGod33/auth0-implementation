import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const NavBarButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const button = isAuthenticated ? (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log out
    </button>
  ) : (
    <button
      onClick={() => {
        console.log(window.location.origin);
        loginWithRedirect({
          redirectUri: `${window.location.origin}/profile`,
        });
      }}
    >
      Log in
    </button>
  );

  return <div>{button}</div>;
};
