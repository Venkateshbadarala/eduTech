
"use client";

import { useEffect, useState } from "react";
import StudentQueryForm from "./StudentQueryForm";

export default function AutoPopupForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open popup after 20 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <StudentQueryForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}