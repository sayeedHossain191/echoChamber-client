import Banner from "../Components/Banner";
import ForumPost from "../Components/ForumPost";
import PostDetails from "./PostDetails";


const Home = () => {
    return (
        <div className="mx-20">
            <Banner />
            <ForumPost />
            <PostDetails />
        </div>
    );
};

export default Home;