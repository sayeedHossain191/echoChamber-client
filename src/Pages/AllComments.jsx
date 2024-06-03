import { GoReport } from "react-icons/go";

const AllComments = () => {

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
                                <details className="dropdown">
                                    <summary className="m-1 btn">Choose Feedback</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </details>
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