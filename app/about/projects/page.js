import { Suspense } from "react";
import ProjectList from "./project-list";
import ProjectListLoading from "./project-list-loading";

// export const dynamic = 'force-dynamic'; // Disables caching globally
export default async function ProjectsPage() {
   


    return (
    <div>
    
    <h1 className="mb-8 text-xl">Posts</h1>
    
    <div className="mb-8">Hello, this is the list of my repos!</div>
    
    <Suspense fallback={<ProjectListLoading />} >
       <ProjectList />
    </Suspense>
    
    
    </div>
   
)}