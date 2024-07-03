'use client'
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const RoughComp = (text : String, color : any, animationDelay : number, type = 'highlight') => {
    return(
        <RoughNotation show={true} type={`${type}`} color={`${color}`} iterations={1} animationDelay={animationDelay} padding={[1,1,1,1]}>
            {` ${text} `}
        </RoughNotation>
    )
}

const getWidth = () =>{
    const w = window.innerWidth
    if(w == 360) return w
    if(w == 540) return w
    if(w == 768) return w
    console.log(w);
}
getWidth()

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row pt-10 pb-20 mx-auto max-w-5xl justify-between px-8 tracking-tight items-center" id="about">
            <div className="space-y-4 mr-6">
                <h1 className="text-4xl font-bold">
                    Hello! I'm Lovepreet, a
                    {RoughComp('developer', "#80adf6", 0)}
                    based in India.
                </h1>
                <p>
                    I love building tools that are
                    <span className={`min-[375px]:inline-block min-[500px]:inline ${getWidth()? `inline-block` : ''}`}>
                        {RoughComp('user friendly, simple', '#e3ae83', 500)}
                    </span>
                    and delightful.
                </p>
                <p>
                    I am a Mechanical Eng. student fall in love with
                    <span className={`${getWidth() ? 'inline-block' : 'inline'}`}>
                        {RoughComp('Frontend-Development.', '#d095e8', 1000)}
                        I have experience in developing innovative web applications using technologies such as Javascript, React.js and Next.js.
                    </span>
                </p>
                <p>
                    I'm currently looking for a new role as developer.
                    <span className={`${getWidth() ? 'inline' : ''}`}>
                        {RoughComp('Hire me?', '#b61af3', 1500, 'circle')}
                    </span>
                </p>
                <div className="flex-col sm:flex-row ">
                    <Link href='https://www.linkedin.com/in/lovepreetsingh013/' target="_blank">
                        <button className="border rounded-md px-6 py-2 mr-2 mt-4 sm:mr-4 bg-black text-white hover:bg-gray-800">View Linkedin</button>
                    </Link>
                    <Link href='https://github.com/Lovepreet013' target="_blank">
                        <button className="border px-7 py-2 border-black/20 rounded-md mt-3">View Github</button>
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <Image src={'/portfolioImg.jpg'} width={520} height={380} className="border rounded-lg shadow-2xl" alt="Hero-image" priority/>
            </div>
        </div>
    )
}

export default Hero