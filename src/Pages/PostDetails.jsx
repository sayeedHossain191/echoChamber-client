import { useContext } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegCalendarTimes, FaRegCommentDots } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PostDetails = () => {

    const post = useLoaderData();

    const { author_name, author_image, post_title, post_description, tag, post_time } = post;
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="w-full max-w-md px-8 py-4 mx-20 mt-20 border bg-white shadow-lg dark:bg-gray-800 font-poppins">
                <div className="flex -mt-16">
                    <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>

                <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{post_title}</h2>

                <p className="mt-2 text-xs text-gray-600 dark:text-gray-200">Posted by</p>

                <div className="flex justify-between mt-4">
                    <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">{author_name}</a>
                    <div className="flex items-center gap-1 text-gray-500 ml-2">
                        <FaRegCalendarTimes />

                        <p className="text-xs">{post_time}</p>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl mx-20 border font-poppins rounded-l-none rounded-r-none">
                <div className="card-body">
                    <h2 className="card-title">{tag}</h2>
                    <p>{post_description}</p>

                    <div className="card-actions justify-between items-center">
                        <div className="flex items-center gap-4 text-xl mt-4">
                            <button className="btn rounded-full border-red-100"><BiDownvote /></button>
                            <button className="btn rounded-full border-red-100"><BiUpvote /></button>
                        </div>
                        <button className="btn btn-primary">Share</button>
                    </div>
                </div>
            </div>

            <div className="mx-20 font-poppins">
                <div className="label flex justify-start items-center gap-2 mt-10 md-2">
                    <img className="h-10 w-10 rounded-full" src={user?.photoURL} />
                    <span className="label-text text-lg">{user?.displayName}</span>
                </div>
                <textarea placeholder="What are your comments ?" className="textarea textarea-bordered resize-none textarea-md w-full max-w-full border-x-0 border-t-0 " ></textarea>

                <button className="btn btn-sm bg-[#D1CAFF] text-black ml-4"><FaRegCommentDots /></button>
            </div>
        </div>
    );
};

export default PostDetails;