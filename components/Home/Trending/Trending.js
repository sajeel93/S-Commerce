import ProjectCard from "./ProjectCard/ProjectCard";
import Link from "next/link";

const Trending = () => {
    return (
        <>
            <div className="bg-Neutral-white pb-10">
                <div className="grid justify-center justify-items-center py-10 uppercase font-medium">
                    <h2 className="text-Neutral-black hover:text-Neutral-primary text-2xl">
                        <Link href="/newpage" target="_blank">
                            TRENDING
                        </Link>
                    </h2>
                    <p className="text-base py-2">TOP WISHES OF THIS WEEK</p>
                </div>
                <div class="max-w-container m-auto grid grid-cols-5 gap-8">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    );
};

export default Trending;
