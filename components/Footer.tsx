import Link from "next/link"


const Footer = () => {
    return (
        <div className="flex flex-col py-24 pb-40 mx-auto max-w-5xl justify-between px-8" id="contact">
            <div className="">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold ">Get in touch</h1>
                    <p>Do you have a job opportunity or idea you'd like to discuss? Feel free to reach me at
                        <Link href='mailto:singhlovepreet1209@gmail.com'>
                        <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` @singhlovepreet1209@gmail.com`}</span>
                        </Link>
                        . You can also find me on
                    <Link href='https://x.com/Dev_013_' target="_blank">
                        <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` Twitter`}</span>
                    </Link>,
                    <Link href='https://github.com/Lovepreet013' target="_blank">
                    <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` Github `}</span>
                    </Link>
                    and
                    <Link href='https://www.linkedin.com/in/lovepreetsingh013/' target="_blank">
                    <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` Linkedin`}</span>.
                    </Link>
                    </p>
                </div>
            </div>
            <div className="border-t-gray-200 border-t-[1px] mt-16">
                <h1 className="text-sm mt-8">Build with Next.js, Shadcn Ui and Tailwind CSS🔥🔥</h1>
            </div>
        </div>
    )
}

export default Footer
