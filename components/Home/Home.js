import HeroSlider from "./HeroSlider/HeroSlider";
import Categories from "./Categories/Categories";
import Projects from "./Projects/Projects";
import Blogs from "./Blogs/Blogs";
import TrendingCategories from "./TrendingCategories/TrendingCategories";
import Trending from "./Trending/Trending";
import InstaPost from "./InstaPost/InstaPost";

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <Categories />
            <Projects />
            <TrendingCategories />
            <Trending />
            <Blogs />
            <InstaPost />
        </div>
    );
};

export default Home;
