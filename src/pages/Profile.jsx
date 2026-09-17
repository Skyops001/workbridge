import React from "react";
import { useAuth } from "../context/AuthContext";
export default function Profile(){
 const {user}=useAuth();
 return <div><div className="page-heading"><div><span className="eyebrow">ACCOUNT</span><h1>My Profile</h1><p>Keep your WorkBridge information up to date.</p></div><button className="primary-btn">Save changes</button></div>
 <div className="profile-grid"><div className="profile-card"><div className="profile-avatar">{user.name.charAt(0)}</div><h2>{user.name}</h2><p>{user.role}</p><span className="verified">✓ Account verified</span></div>
 <div className="form-card"><h2>Personal information</h2><div className="form-grid"><label>Full name<input defaultValue={user.name}/></label><label>Email<input defaultValue={user.email}/></label><label>Mobile number<input placeholder="+91 98765 43210"/></label><label>City<input defaultValue="Hyderabad"/></label></div>{user.role==="STUDENT"&&<><h2 className="form-section">Student details</h2><div className="form-grid"><label>College<input placeholder="College / University"/></label><label>Qualification<input placeholder="Qualification"/></label><label>Skills<input placeholder="e.g. Sales, Customer Support"/></label><label>Experience<input placeholder="Years of experience"/></label></div></>}</div></div></div>
}
