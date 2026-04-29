"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CancelIcon } from "@/constants/svgIcons";
import { CircleX } from "lucide-react";

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
      <Toaster position="top-center" />

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
            <form
              onSubmit={registerForm.handleSubmit(handleRegister)}
              className="space-y-3"
            >
              <input
                placeholder="Name"
                {...registerForm.register("name", { required: "Name required" })}
                className="input-style"
              />
              {registerForm.formState.errors.name && (
                <p className="error-text">
                  {registerForm.formState.errors.name.message}
                </p>
              )}

              <input
                placeholder="Email"
                {...registerForm.register("email", { required: "Email required" })}
                className="input-style"
              />
              {registerForm.formState.errors.email && (
                <p className="error-text">
                  {registerForm.formState.errors.email.message}
                </p>
              )}

              <input
                placeholder="Phone"
                {...registerForm.register("phone", {
                  required: "Phone required",
                })}
                className="input-style"
              />

              <input
                type="password"
                placeholder="Password"
                {...registerForm.register("password", {
                  required: "Password required",
                })}
                className="input-style"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                {...registerForm.register("confirmPassword", {
                  required: "Confirm password required",
                })}
                className="input-style"
              />

              <button className="w-full bg-(--color-secondary) text-white py-2 rounded-lg hover:scale-105 transition">
                {loading ? "Loading..." : "Register"}
              </button>

              <p
                onClick={() => setView("login")}
                className="text-center text-(--color-black-1) cursor-pointer"
              >
                Back to Login
              </p>
            </form>
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
    className="input-style"
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
    className="input-style"
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
    className="input-style"
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
        .input-style {
          width: 100%;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 5px;
          outline: none;
        }
        .input-style:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px #6366f130;
        }
        .error-text {
          color: red;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}