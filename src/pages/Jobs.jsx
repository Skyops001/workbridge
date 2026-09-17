import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { jobs } from "../data/mockData";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const {user}=useAuth(); const [q,setQ]=React.useState("");
  const filtered=jobs.filter(j=>(j.title+j.company+j.category+j.city+j.skills).toLowerCase().includes(q.toLowerCase()));
  return <div><div className="page-heading"><div><span className="eyebrow">{user.role==="EMPLOYER"?"EMPLOYER":"OPPORTUNITIES"}</span><h1>{user.role==="EMPLOYER"?"My Jobs":"Find your next job"}</h1><p>{user.role==="EMPLOYER"?"Create and manage temporary jobs.":"Search flexible work based on skills, location and pay."}</p></div></div>
    <div className="search-bar"><Search size={19}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search jobs, skills, categories..."/><button className="filter-btn"><SlidersHorizontal size={18}/> Filters</button></div>
    <div className="job-list">{filtered.map(j=><JobCard key={j.id} job={j}/>)}</div>
  </div>;
}
