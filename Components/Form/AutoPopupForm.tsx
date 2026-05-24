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
    <div className="blur-3xl">
<StudentQueryForm
      isOpen={open}
      onClose={() => setOpen(false)}
    />
    </div>
    
  );
}