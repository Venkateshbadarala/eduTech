"use client";

import { useEffect, useState } from "react";
import StudentQueryForm from "./StudentQueryForm";

export default function AutoPopupForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ✅ CHECK IF POPUP ALREADY SHOWN
    const popupShown = localStorage.getItem(
      "studentPopupShown"
    );

    // ✅ DON'T OPEN AGAIN
    if (popupShown === "true") return;

    // ✅ OPEN AFTER 10 SECONDS
    const timer = setTimeout(() => {
      setOpen(true);

      // ✅ SAVE FLAG
      localStorage.setItem(
        "studentPopupShown",
        "true"
      );
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