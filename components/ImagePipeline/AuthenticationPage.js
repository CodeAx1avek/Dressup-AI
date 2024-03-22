import React from "react";
import { useRouter } from "next/router";

const AuthenticationPage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-center mb-5">
        Please sign in to access this feature.
      </h2>
      <div className="flex items-center space-x-3">
        <button onClick={handleSignIn} className="btn btn-primary">
          Sign In
        </button>
        <button onClick={handleSignUp} className="btn btn-secondary">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthenticationPage;