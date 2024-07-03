import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ image, title, description, link, github, tags, alt }) {
    return (
        <Card className="w-full h-full max-w-s rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <Image
                src={image}
                width={400}
                height={200}
                alt={alt}
                priority
                className="w-full h-48 object-cover"
            />
            <CardContent className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>
                </div>
                <div className="flex items-center space-x-3">
                    <Link href={link ? link : ''} prefetch={false} target="_blank">
                        <button className={`text-sm hover:underline ${link ? '' : 'hidden'}`}>View live project</button>
                    </Link>
                    <Link href={github} prefetch={false} target="_blank">
                        <button className={`translate-y-1 ${link ? '' : '-translate-x-3'}`}><GithubIcon className="w-4 h-4" /></button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

function GithubIcon(props : any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}
