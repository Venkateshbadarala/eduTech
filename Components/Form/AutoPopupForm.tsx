"use client";

import { useEffect, useState } from "react";
import StudentQueryForm from "./StudentQueryForm";

export default function AutoPopupForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 🔥 OPEN POPUP AFTER 2 MINUTES
    const timer = setTimeout(() => {
      setOpen(true);
    }, 0 * 60 * 1000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 POPUP FORM */}
      <StudentQueryForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}