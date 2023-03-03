import ProjectCard from './Components/ProjectCard'

type ProjectData = {
    id: number,
    title: string,
    description: string,
    image?: string,
    githubURL: string,
    liveURL: string,
    tags?: string[]
}

const projectData: ProjectData[] = [
    {
        id: 1,
        title: "GitHub Wrapped",
        description: "A website that Displays the information of a GitHub User or an Organization in a beautiful way",
        image: "https://user-images.githubusercontent.com/68057995/222699221-8e1b319a-a83e-4498-aceb-02737d8437e5.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/github-wrapped",
        liveURL: "https://Siddhesh-Agarwal.github.io/github-wrapped",
        tags: ["React", "TypeScript", "GitHub API", "Bootstrap"]
    },
    {
        id: 2,
        title: "Pomofocus clone",
        description: "A clone of the Pomofocus.com website. Helps you focus on your work by using the Pomodoro Technique",
        image: "https://user-images.githubusercontent.com/68057995/220324659-6ef5e3ac-6831-42e1-8190-f7936a111850.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/Pomofocus-Clone",
        liveURL: "https://Siddhesh-Agarwal.github.io/Pomofocus-Clone",
        tags: ["React", "JavaScript", "SCSS"]
    },
    {
        id: 3,
        title: "Markdown Previewer",
        description: "A website to preview markdown. Made using React and TypeScript",
        image: "https://user-images.githubusercontent.com/68057995/220251802-c3bb6053-bb88-4a4d-8058-fe293d10ff2b.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/markdown-previewer",
        liveURL: "https://Siddhesh-Agarwal.github.io/markdown-previewer",
        tags: ["React", "TypeScript", "CSS"]
    },
    {
        id: 4,
        title: "Random Quote Machine",
        description: "A website to display random quotes. Made using React and JavaScript", 
        image: "https://user-images.githubusercontent.com/68057995/222700210-21247e1e-0888-444c-acda-76fddebfa32a.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/random-quotes",
        liveURL: "https://Siddhesh-Agarwal.github.io/random-quotes",
        tags: ["React", "JavaScript", "CSS"]
    }
]

export default function App() {
    return (
        <div className="container mx-auto py-4 px-16">
            <h1 className="text-4xl font-bold text-center mb-6 underline">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    projectData.map(
                        (project) => (
                            <ProjectCard props={project} />
                        )
                    )
                }
            </div>
        </div>
    )
}
