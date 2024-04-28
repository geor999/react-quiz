import { Button } from "../../components/Button/Button";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";

export default function Menu({ rootDarkMode, loggedIn = false }) {
  const [darkMode, setDarkMode] = useState(rootDarkMode);
  const navigate = useNavigate();
  useEffect(() => {
    setDarkMode(rootDarkMode);
    darkMode;
  }, [rootDarkMode]);
  const buttons = [
    {
      id: 0,
      name: "Start",
      onclickfun: () => {
        navigate("/game");
      },
    },
    {
      id: 1,
      name: "Categories",
      onclickfun: () => {
        navigate("/categories");
      },
    },
    {
      id: 2,
      name: "Leaderboard",
      onclickfun: () => {
        navigate("/leaderboard");
      },
    },
    {
      id: 3,
      name: "Settings",
      onclickfun: () => {
        navigate("/settings");
      },
    },
  ];

  return (
    <div>
      {console.log(loggedIn)}
      {loggedIn == true && (
        <div>
          <Title text="Quizzionare" darkMode={darkMode} />
          {buttons.map(function (button) {
            return (
              <div key={button.id}>
                <Button
                  text={button.name}
                  onCLick={button.onclickfun}
                  parentDarkMode={darkMode}
                />
              </div>
            );
          })}
        </div>
      )}
      {!loggedIn && (
        <div>
          <Title text="Oops, you are not logged in." />
          <Button
            text="Login"
            onCLick={() => {
              navigate("/authentication");
            }}
          />
        </div>
      )}
    </div>
  );
}
