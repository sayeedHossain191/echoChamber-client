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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn btn-sm"><GoReport /></button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllComments;