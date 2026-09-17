import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./components/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";
import PostJob from "./pages/employee/PostJob/PostJob";

// NEW PAGES
import JobDetails from "./pages/JobDetails";

function Protected({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
}

function RoleRoute({ roles, children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return roles.includes(user.role)
    ? children
    : <Navigate to="/dashboard" replace />;
}

export default function App() {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <Protected>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </Protected>
        }
      />

      {/* JOBS */}
      <Route
        path="/jobs"
        element={
          <Protected>
            <DashboardLayout>
              <Jobs />
            </DashboardLayout>
          </Protected>
        }
      />

      {/* NEW - JOB DETAILS */}
      <Route
        path="/jobs/:id"
        element={
          <Protected>
            <DashboardLayout>
              <JobDetails />
            </DashboardLayout>
          </Protected>
        }
      />

      {/* POST JOB - Keep only ONE route */}
      <Route
        path="/post-job"
        element={
          <Protected>
            <DashboardLayout>
              <PostJob />
            </DashboardLayout>
          </Protected>
        }
      />

      {/* APPLICATIONS */}
      <Route
        path="/applications"
        element={
          <Protected>
            <DashboardLayout>
              <Applications />
            </DashboardLayout>
          </Protected>
        }
      />

     <Route path="/job-details/:id" element={<JobDetails />} />

      {/* PROFILE */}
      <Route
        path="/profile"
        element={
          <Protected>
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </Protected>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <RoleRoute roles={["ADMIN"]}>
            <DashboardLayout>
              <AdminPanel />
            </DashboardLayout>
          </RoleRoute>
        }
      />

      <Route
        path="/job-details/:id"
        element={<JobDetails />}
      />

      {/* NOT FOUND */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  );
}