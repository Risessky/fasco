"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel,styles }) {
  const { pending } = useFormStatus();

  return (
    <button
    type="submit"
      className={styles}
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
