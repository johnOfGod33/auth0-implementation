import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <PageLayout>
      {isAuthenticated ? (
        <div className="content-layout">
          <h1 id="page-title" className="content__title">
            Profile Page
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span>
                <strong>
                  Only authenticated users should access this page.
                </strong>
              </span>
            </p>
            <div className="profile-grid">
              <div className="profile__header">
                <img
                  src={user.picture}
                  alt="Profile"
                  className="profile__avatar"
                />
                <div className="profile__headline">
                  <h2 className="profile__title">{user.name}</h2>
                  <span className="profile__description">{user.email}</span>
                </div>
              </div>
              <div className="profile__details">
                <CodeSnippet
                  title="User Profile Object"
                  code={JSON.stringify(user, null, 2)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-grid">
          <div className="profile__details">
            <p>You're are not logged in.Log in to view your profile</p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};
