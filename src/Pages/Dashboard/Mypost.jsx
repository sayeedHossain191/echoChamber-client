import { FaCommentDots } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Mypost = () => {
    return (
        <div>
            <h2>My Post</h2>


            <div className="">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Post Title</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">No. of Votes</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Comment</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Delete</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-900">Helen Howard</th>
                            <td className="px-6 py-4">Nov.4 2022</td>
                            <td className="px-6 py-4">
                                <button className="btn bg-white border-none"><FaCommentDots className="text-2xl" /></button>
                            </td>
                            <td className="px-6 py-4"><button className="btn bg-white border-none"><RiDeleteBin6Line className="text-2xl" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Mypost;