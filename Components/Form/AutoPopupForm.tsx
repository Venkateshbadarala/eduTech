"use client";

import { useEffect, useState } from "react";
import StudentQueryForm from "./StudentQueryForm";

export default function AutoPopupForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ✅ OPEN AFTER 10 SECONDS
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10 * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StudentQueryForm
      isOpen={open}
      onClose={() => setOpen(false)}
    />
  );
}