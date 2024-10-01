"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  const handleClick = async (provider: string) => {
    await signIn(provider);
  };

  return (
    <div className="w-full gap-3 flex items-center">
      <Button
        onClick={() => handleClick("google")}
        size="lg"
        className="w-full"
        variant="outline">
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        onClick={() => handleClick("github")}
        size="lg"
        className="w-full"
        variant="outline">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
