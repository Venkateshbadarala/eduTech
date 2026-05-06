"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CancelIcon } from "@/constants/svgIcons";
import { CircleX } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface ForgotData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function AuthModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [view, setView] = useState<"login" | "register" | "forgot">("login");
  const [loading, setLoading] = useState(false);
 const [phone, setPhone] = useState("");
  const loginForm = useForm<LoginData>({ mode: "onChange" });
  const registerForm = useForm<RegisterData>({ mode: "onChange" });
  const forgotForm = useForm<ForgotData>({ mode: "onChange" });

  if (!isOpen) return null;

  // 🔐 LOGIN
  const handleLogin = async (data: LoginData) => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Welcome back 🎉");
        loginForm.reset();
        onClose();
      }
    } catch {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  // 📝 REGISTER
  const handleRegister = async (data: RegisterData) => {
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post("/api/register", data);

    toast.success(res.data.message || "Account created 🚀");

    registerForm.reset();
    setView("login");

  } catch (error: any) {
    console.error("REGISTER ERROR:", error);

    toast.error(
      error.response?.data?.error || "Registration failed"
    );
  } finally {
    setLoading(false);
  }
};

  // 🔁 FORGOT
  const handleForgot = async (data: ForgotData) => {
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post("/api/forgot", data);

    toast.success("Password updated successfully 🔐");
    forgotForm.reset();
    setView("login");
  } catch (error: any) {
    toast.error(error.response?.data?.error || "Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 z-50 grid place-items-center px-3">
      

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-(--color-white) rounded-xl shadow-2xl overflow-hidden transition-all duration-500">

        {/* Header */}
        <div className=" p-4 text-(--color-black-1) text-center font-semibold text-2xl">
          {view === "login"
            ? "Welcome Back"
            : view === "register"
            ? "Create Account"
            : "Reset Password"}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-(--color-black-1) text-xl"
        >
          <CircleX />
        </button>

        {/* Forms */}
        <div className="p-6 space-y-4">

          {/* LOGIN */}
          {view === "login" && (
            <form
              onSubmit={loginForm.handleSubmit(handleLogin)}
              className="space-y-4"
            >
              <div>
                <input
                  placeholder="Email"
                  {...loginForm.register("email", { required: "Email required" })}
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...loginForm.register("password", {
                    required: "Password required",
                  })}
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 text-sm">
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:scale-105 transition">
                {loading ? "Loading..." : "Login"}
              </button>

              <p className="text-center text-sm">
                No account?{" "}
                <span
                  onClick={() => setView("register")}
                  className="text-(--color-primary) cursor-pointer"
                >
                  Register
                </span>
              </p>

              <p
                onClick={() => setView("forgot")}
                className="text-center text-(--color-gray-2) cursor-pointer text-sm"
              >
                Forgot Password?
              </p>
            </form>
          )}

          {/* REGISTER */}
         {view === "register" && (
  <motion.form
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    onSubmit={registerForm.handleSubmit(handleRegister)}
    className="space-y-4"
  >
    {/* NAME */}
    <div>
      <input
        placeholder="Full Name"
        {...registerForm.register("name", { required: "Name required" })}
        className="input-modern"
      />
      {registerForm.formState.errors.name && (
        <p className="error-text">
          {registerForm.formState.errors.name.message}
        </p>
      )}
    </div>

    {/* EMAIL */}
    <div>
      <input
        placeholder="Email Address"
        {...registerForm.register("email", { required: "Email required" })}
        className="input-modern"
      />
      {registerForm.formState.errors.email && (
        <p className="error-text">
          {registerForm.formState.errors.email.message}
        </p>
      )}
    </div>

    {/* 📱 PHONE WITH COUNTRY */}
     <div className="phone-root">

      <PhoneInput
        country={"in"} // ✅ default India
        enableSearch
        value={registerForm.watch("phone")}
        onChange={(phone) => registerForm.setValue("phone", phone)}

        inputClass="phone-input"
        buttonClass="phone-flag"
        containerClass="phone-container"
        dropdownClass="phone-dropdown"
      />

      {/* ERROR */}
      {registerForm.formState.errors.phone && (
        <p className="error-text">
          {registerForm.formState.errors.phone.message}
        </p>
      )}
    </div>

    {/* PASSWORD */}
    <div>
      <input
        type="password"
        placeholder="Password"
        {...registerForm.register("password", {
          required: "Password required",
          minLength: { value: 6, message: "Min 6 characters" },
        })}
        className="input-modern"
      />
      {registerForm.formState.errors.password && (
        <p className="error-text">
          {registerForm.formState.errors.password.message}
        </p>
      )}
    </div>

    {/* CONFIRM PASSWORD */}
    <div>
      <input
        type="password"
        placeholder="Confirm Password"
        {...registerForm.register("confirmPassword", {
          required: "Confirm password required",
        })}
        className="input-modern"
      />
    </div>

    {/* BUTTON */}
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md"
    >
      {loading ? "Creating..." : "Create Account"}
    </motion.button>

    {/* SWITCH */}
    <p
      onClick={() => setView("login")}
      className="text-center text-gray-600 cursor-pointer text-sm"
    >
      Already have an account?{" "}
      <span className="text-blue-600 font-semibold">Login</span>
    </p>
  </motion.form>
)}

          {/* FORGOT */}
          {view === "forgot" && (
            <form
  onSubmit={forgotForm.handleSubmit(handleForgot)}
  className="space-y-4"
>
  {/* EMAIL */}
  <input
    placeholder="Enter Email"
    {...forgotForm.register("email", {
      required: "Email required",
    })}
    className="input-modern"
  />
  {forgotForm.formState.errors.email && (
    <p className="error-text">
      {forgotForm.formState.errors.email.message}
    </p>
  )}

  {/* PASSWORD */}
  <input
    type="password"
    placeholder="New Password"
    {...forgotForm.register("password", {
      required: "Password required",
      minLength: { value: 6, message: "Min 6 characters" },
    })}
    className="input-modern"
  />
  {forgotForm.formState.errors.password && (
    <p className="error-text">
      {forgotForm.formState.errors.password.message}
    </p>
  )}

  {/* CONFIRM PASSWORD */}
  <input
    type="password"
    placeholder="Confirm Password"
    {...forgotForm.register("confirmPassword", {
      required: "Confirm password required",
    })}
    className="input-modern"
  />
  {forgotForm.formState.errors.confirmPassword && (
    <p className="error-text">
      {forgotForm.formState.errors.confirmPassword.message}
    </p>
  )}

  <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
    {loading ? "Updating..." : "Update Password"}
  </button>

  <p
    onClick={() => setView("login")}
    className="text-center text-blue-500 cursor-pointer"
  >
    Back to Login
  </p>
</form>
          )}
        </div>
      </div>

      {/* Tailwind helpers */}
     <style jsx>{`
  .input-modern {
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
    transition: all 0.25s ease;
    background: #f9fafb;
  }

  .input-modern:focus {
    border-color: #6366f1;
    background: white;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }

  .error-text {
    color: #ef4444;
    font-size: 12px;
    margin-top: 4px;
  }

  .phone-container {
    width: 100%;
  }

  .phone-input {
    width: 100% !important;
    padding: 12px 14px 12px 50px !important;
    border-radius: 10px !important;
    border: 1px solid #e5e7eb !important;
    background: #f9fafb !important;
    font-size: 14px;
    transition: all 0.25s ease;
  }

  .phone-input:focus {
    border-color: #6366f1 !important;
    background: white !important;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }

  .phone-flag {
    border: none !important;
    background: transparent !important;
    margin-left: 6px;
  }
`}</style>
    </div>
  );
}