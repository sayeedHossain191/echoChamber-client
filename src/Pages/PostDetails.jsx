import { BiDownvote, BiUpvote } from "react-icons/bi";
import { FaRegCalendarTimes, FaRegCommentDots } from "react-icons/fa";


const PostDetails = () => {
    return (
        <div>
            <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex -mt-16">
                    <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>

                <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Introduction to React Hooks</h2>

                <p className="mt-2 text-xs text-gray-600 dark:text-gray-200">Posted by</p>

                <div className="flex justify-between mt-4">
                    <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" role="link">John Doe</a>
                    <div className="flex items-center gap-1 text-gray-500 ml-2">
                        <FaRegCalendarTimes />

                        <p className="text-xs">2024-05-31</p>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React</h2>
                    <p>What Skills Do You Need to Become a Front End Developer?

                        The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools.

                        HTML
                        HTML stands for HyperText Markup Language. HTML displays the content on the page like buttons, links, headings, paragraphs, and.</p>

                    <div className="card-actions justify-between items-center">
                        <div className="flex items-center gap-4">
                            <BiDownvote />
                            <BiUpvote />

                            <button className="btn btn-sm bg-[#D1CAFF] text-black ml-4"><FaRegCommentDots /></button>
                        </div>
                        <button className="btn btn-primary">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;