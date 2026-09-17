import React from "react";
import { CheckCircle2, FileCheck2, Flag, Users } from "lucide-react";
export default function AdminPanel(){
 const cards=[["Users","10,000","Total students & employers",Users],["Verifications","128","Pending review",FileCheck2],["Jobs","52","Awaiting approval",CheckCircle2],["Complaints","17","Open reports",Flag]];
 return <div><div className="page-heading"><div><span className="eyebrow">ADMINISTRATION</span><h1>Admin control center</h1><p>Manage users, verification, jobs, complaints and platform analytics.</p></div></div>
 <div className="admin-cards">{cards.map(([a,b,c,I])=><div className="admin-stat" key={a}><div className="stat-icon"><I size={20}/></div><span>{a}</span><b>{b}</b><small>{c}</small></div>)}</div>
 <div className="section-head"><div><h2>Verification queue</h2><p>Latest student and employer verification requests</p></div></div>
 <div className="table-card"><table><thead><tr><th>User</th><th>Role</th><th>Submitted</th><th>Status</th><th>Action</th></tr></thead><tbody>{["Sanjay Rao","Meghana Reddy","Kiran Foods"].map((n,i)=><tr key={n}><td><b>{n}</b></td><td>{i===2?"EMPLOYER":"STUDENT"}</td><td>Today</td><td><span className="status pending">PENDING</span></td><td><button className="mini-btn">Review</button></td></tr>)}</tbody></table></div></div>
}
