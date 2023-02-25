import BlogCard from "./BlogCard/BlogCard";
import Link from "next/link";

const Blogs = () => {
    return (
        <>
            <div className="bg-Neutral-white pb-10">
                <div className="grid justify-center justify-items-center py-10 uppercase font-medium">
                    <h2 className="text-Neutral-black hover:text-Neutral-primary text-2xl">
                        <Link href="/newpage" target="_blank">
                            LATEST FROM BLOG
                        </Link>
                    </h2>
                    <p className="text-base py-2">
                        THE FRESHEST AND MOST EXCITING NEWS
                    </p>
                </div>
                <div class="max-w-container m-auto grid grid-cols-3 gap-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </>
    );
};

export default Blogs;
