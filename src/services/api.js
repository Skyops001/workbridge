import axios from "axios";

export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem("wb_user");
  if (raw) {
    const user = JSON.parse(raw);
    if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// Backend integration map from the WorkBridge specification.
// Replace mock functions below with api.get/post/put/patch/delete calls
// when the backend is shared.
export const endpoints = {
  login: "/auth/login",
  register: "/auth/register",
  me: "/auth/me",
  sendOtp: "/auth/send-otp",
  verifyOtp: "/auth/verify-otp",
  students: "/students",
  employers: "/employers",
  jobs: "/jobs",
  applications: "/applications",
  payments: "/payments",
  ratings: "/ratings",
  notifications: "/notifications",
  adminDashboard: "/admin/dashboard"
};
