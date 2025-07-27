"use client";

import { useTransition } from "react";
import { signOutAction } from "../_lib/actions";


function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(() => {
      signOutAction();
    });
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={isPending}
      className={`px-6 py-3 rounded-xl   text-white ${
        isPending ? "bg-gray cursor-not-allowed" : "bg-gray hover:bg-grayDark"
      }`}
    >
      {isPending ? "Signing out..." : "Sign Out"}
    </button>
  );
}

export default SignOutButton;
