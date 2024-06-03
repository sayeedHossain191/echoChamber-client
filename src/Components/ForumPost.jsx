import { FaRegComments } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ForumPost = () => {

    const [dsc, setDsc] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/posts?sort=${dsc ? 'dsc' : 'asc'}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [dsc])

    return (
        <div>

            <button onClick={() => setDsc(!dsc)} className="btn btn-primary my-20 w-full">
                {dsc ? 'Post: Low to High' : 'Post: High to Low'}
            </button>

            <div>
                {posts.map(post => <div key={post._id}>
                    <Link to={`details/${post._id}`}>
                        <article className="rounded-xl border-2 border-gray-100 bg-white max-w-3xl mx-auto font-poppins my-10">
                            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                                <a href="#" className="block shrink-0">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                        className="size-14 rounded-lg object-cover"
                                    />
                                </a>

                                <div>
                                    <h3 className="font-medium sm:text-lg">
                                        <a href="#" className="hover:underline"> {post.post_title} </a>
                                    </h3>

                                    <p className="line-clamp-2 text-sm text-gray-700">
                                        {post.tag}
                                    </p>

                                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                        <div className="flex items-center gap-1 text-gray-500 bg-[#D1CAFF] p-1 rounded-full">
                                            <FaRegComments />

                                            <p className="text-xs">14 comments</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 bg-blue-200 p-1 rounded-full">
                                            <MdHowToVote />

                                            <p className="text-xs">7 votes</p>
                                        </div>

                                        <div className="flex items-center gap-1 text-gray-500 ml-2 bg-[#9AB78D] rounded-full p-1">
                                            <FaRegCalendarTimes />

                                            <p className="text-xs">{post.post_time}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="hidden sm:block sm:text-xs sm:text-gray-500 mr-4">
                                    Posted by
                                    <a href="#" className="font-medium underline hover:text-gray-700"> {post.author_name} </a>
                                </p>
                            </div>
                        </article>
                    </Link>
                </div>)}

            </div>

            {/* Pagination */}
            <div className="flex justify-center">
                <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    previous
                </a>

                <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    1
                </a>

                <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                    Next
                </a>
            </div>
        </div>
    );
};

export default ForumPost;