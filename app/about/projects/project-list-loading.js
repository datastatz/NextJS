export default async function ProjectListLoading() {
    return(
    
    <ul className="space-y-8">

        {Array(3).fill(0).map((_el, index) => (
            <li key={index} className="mb-4"> 
                <div className="w-full h-24 animte-pulse bg-neutral-100 dark:bg-neutral-700">Loading...</div>
              

            </li>
        ))}

    </ul>
    
    
    

)}