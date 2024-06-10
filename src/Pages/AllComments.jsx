import { GoReport } from "react-icons/go";
import { useLoaderData } from "react-router-dom";

const AllComments = () => {

    const posts = useLoaderData();
    // const { _id, email, } = posts

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Comments</th>
                            <th>Feedback</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>

                            <td>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Choose your feedback</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </td>
                            <td><button className="btn brn-sm"><GoReport className="text-lg" /></button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllComments;