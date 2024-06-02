import { FaRegComments } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { useState } from "react";

const ForumPost = () => {

    const [dsc, setDsc] = useState(true)

    return (
        <div>

            <button onClick={() => setDsc(!dsc)} className="btn btn-primary my-20">
                {dsc ? 'Post: Low to High' : 'Post: High to Low'}
            </button>

            <article className="rounded-xl border-2 border-gray-100 bg-white max-w-3xl mx-auto font-poppins">
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
                            <a href="#" className="hover:underline"> Introduction to React Hooks </a>
                        </h3>

                        <p className="line-clamp-2 text-sm text-gray-700">
                            React
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

                                <p className="text-xs">2024-05-31</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    {/* <strong
                        className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>

                        <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
                    </strong> */}
                    <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                    <p className="hidden sm:block sm:text-xs sm:text-gray-500 mr-4">
                        Posted by
                        <a href="#" className="font-medium underline hover:text-gray-700"> John </a>
                    </p>
                </div>
            </article>
        </div>
    );
};

export default ForumPost;