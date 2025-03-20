export default async function ProjectList() {
    const response = await fetch('http://localhost:3001/posts', {cache: "no-store"})
    const repos = await response.json()

    return(
        <ul>

        {repos.map(repo => (
            <li key={repo.id} className="mb-4"> 
                <div>Title: {repo.title}</div>
                <div>Author: {repo.author}</div>

            </li>
        ))}

    </ul>
)}