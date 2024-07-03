import Link from "next/link";
import ProjectCard from "./ProjectCard";

const myProjects = [
    {
        image: '/AI-Journal.png',
        title: 'AI Journal App',
        description: 'Developed a web application allowing users to add daily journals and leverage AI to analyze journal content, providing insights into user mood and other metrics, enhancing user self-awareness.',
        link: 'https://ai-journal-app-blond.vercel.app/',
        github: 'https://github.com/Lovepreet013/AI-Journal-App',
        tags: ['Next.js', 'Open AI API', 'Prisma', 'NeonDB', 'Tailwind CSS']
    },
    {
        image: '/Sorting.png',
        title: 'Sorting Algorithm Visualizer',
        description: 'Developed a web application that visualizes various sorting algorithms, enhancing user understanding of algorithms.',
        link: 'https://sorting-algo-visualizer-nine.vercel.app/',
        github: 'https://github.com/Lovepreet013/sorting-algo-visualizer',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        image: '/CLI.png',
        title: 'CLI Note Taking App',
        description: 'Developed a note-taking app enabling users to perform CRUD operations in the terminal, improving productivity for developers by providing a quick and efficient way to manage notes.',
        github: 'https://github.com/Lovepreet013/CLI-Note-Taking-App',
        tags: ['Node.js']
    },
];

const Projects = () => {
    return (
        <div className="flex flex-col items-center py-4 mx-auto max-w-5xl justify-between px-8" id="projects">
            <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <Link href='https://github.com/Lovepreet013' target="_blank">
                        <p className="cursor-pointer underline">View all projects</p>
                    </Link>
                </div>
                <p>Some of the projects I've built :</p>

                {/*Projects*/}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {myProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            description={project.description}
                            link={project.link ? project.link : null}
                            github={project.github}
                            tags={project.tags}
                            title={project.title}
                            alt={project.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
