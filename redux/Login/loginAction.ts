import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "next-auth/react";

// 🔐 LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        return rejectWithValue(res.error);
      }

      return "Login Success";
    } catch (err) {
      return rejectWithValue("Login failed");
    }
  }
);

// 📝 REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        return rejectWithValue(result.message);
      }

      return result;
    } catch (err) {
      return rejectWithValue("Register failed");
    }
  }
);

// 🔁 FORGOT PASSWORD
export const forgotPassword = createAsyncThunk(
  "auth/forgot",
  async (email: string, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        return rejectWithValue(result.message);
      }

      return result;
    } catch (err) {
      return rejectWithValue("Failed");
    }
  }
);