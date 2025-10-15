import { useState } from "react";
import LoginForm from "./LoginForm";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email", username);
    console.log("password", password);
    if (username && password) {
      setIsloggedIn(true);
    }
  };
  return (
    <div className="bg-sky-500 h-screen w-full flex justify-center items-center">
      <div className="w-1/3">
        {isLoggedIn ? (
          <div className="text-center text-4xl font-semibold mb-3">
            Hello {username}
          </div>
        ) : (
          <LoginForm
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handleSubmit={handleSubmit}
            isRegistered={isRegistered}
          />
        )}
      </div>
    </div>
  );
}
