import { useEffect, useState } from "react";


const Banner = () => {

    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://b9a12-forum-server.vercel.app/posts?search=${search}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [search])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText)
        setSearch(searchText)
    }

    return (
        <div>
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Easiest way to create your website
                        </h1>

                        <div className="mt-8 space-y-5">
                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Clean and Simple Layout</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Just Copy Paste Codeing</span>
                            </p>

                            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <span className="mx-2">Easy to Use</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">

                        <form onSubmit={handleSearch} className="flex flex-col lg:flex-row">
                            <input type="text" name="search" placeholder="Type here" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                            <button type="submit" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                Search
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;