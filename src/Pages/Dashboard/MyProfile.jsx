import { FaMedal } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const {
        data: posts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['posts', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/posts/${user?.email}`)

            return data
        },
    })
    console.log(posts)

    return (
        <div>
            <h2>My profile</h2>

            <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                <div className="flex items-center gap-4">
                    <img
                        src={user?.photoURL}
                        className="size-16 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="text-lg font-medium text-white">{user?.displayName}</h3>

                        <div className="flow-root">
                            {user?.email}
                        </div>

                        <div className="my-2 flex gap-2">
                            <div className="badge bg-yellow-500 text-black badge-lg"><FaMedal /></div>
                            <div className="badge bg-amber-900 badge-lg"><FaMedal /></div>
                        </div>
                    </div>
                </div>

                <ul className="mt-4 space-y-2">
                    <li>
                        <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                            <strong className="font-medium text-white">Project A</strong>

                            <p className="mt-1 text-xs font-medium text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur deleniti,
                                unde ab ut in!
                            </p>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                            <strong className="font-medium text-white">Project B</strong>

                            <p className="mt-1 text-xs font-medium text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque saepe sit.
                            </p>
                        </a>
                    </li>
                </ul>
            </article>
        </div>
    );
};

export default MyProfile;