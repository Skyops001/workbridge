import React from "react";
import { ArrowUpRight, Briefcase, CheckCircle2, CreditCard, Users } from "lucide-react";

const icons = [Briefcase, Users, CheckCircle2, CreditCard];

export default function StatCard({ index, title, value, note }) {
  const Icon = icons[index % icons.length];
  return <div className="stat-card">
    <div className="stat-icon"><Icon size={21}/></div>
    <div className="stat-label">{title}</div>
    <div className="stat-value">{value}</div>
    <div className="stat-note"><ArrowUpRight size={14}/>{note}</div>
  </div>;
}
