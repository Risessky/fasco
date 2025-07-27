"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function ErrorToastOnRedirect() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error === "login") {
      toast.error("You must be logged in");
    }
    if (error === "oneItem") {
      toast.error("You just can order one Item");
    }
  }, [error]);

  return null;
}

export default ErrorToastOnRedirect;
