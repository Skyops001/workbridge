import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BriefcaseBusiness, ClipboardList, LayoutDashboard, LogOut, Menu, ShieldCheck, UserRound, X, Bell } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/jobs", label: user.role === "EMPLOYER" ? "My Jobs" : "Find Jobs", icon: BriefcaseBusiness },
    { to: "/applications", label: "Applications", icon: ClipboardList },
    { to: "/profile", label: "My Profile", icon: UserRound },
    ...(user.role === "ADMIN" ? [{ to: "/admin", label: "Admin Panel", icon: ShieldCheck }] : [])
  ];

  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand"><div className="brand-mark">W</div><div><strong>WorkBridge</strong><span>Smart Work Platform</span></div></div>
        <nav>
          <p className="nav-title">MAIN MENU</p>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <Icon size={19}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><ShieldCheck size={20}/><div><b>Verified platform</b><small>Safe work connections</small></div></div>
          <button className="logout-btn" onClick={logout}><LogOut size={18}/> Sign out</button>
        </div>
      </aside>

      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
          <div><span className="breadcrumb">WorkBridge / </span><b>{location.pathname === "/dashboard" ? "Dashboard" : location.pathname.replace("/", "")}</b></div>
          <div className="top-actions">
            <button className="icon-btn"><Bell size={19}/><i/></button>
            <div className="user-chip"><div className="avatar">{user.name.charAt(0)}</div><div><b>{user.name}</b><span>{user.role}</span></div></div>
          </div>
        </header>
        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}
