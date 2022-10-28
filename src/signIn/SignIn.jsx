import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counterSlice";
import "./SignIn.scss";
const SignIn = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="sign__in">
      <h1>you have successfully loggedin {user.name}</h1>
      <h1>you have successfully loggedin {user.email}</h1>
      <h3>
        hi there i am a freelance and a software developer i develop webapp for
        you . I use technology like react nextjs tailwind css express and many
        more .Feel free to contact with me and share your ideads with me .
      </h3>
    </div>
  );
};

export default SignIn;
