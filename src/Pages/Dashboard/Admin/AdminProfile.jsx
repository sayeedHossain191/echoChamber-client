import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminProfile = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();


    const { data: chartData = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const pieChartData = [
        { name: 'Users', value: chartData.users },
        { name: 'Posts', value: chartData.posts },

    ];


    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <div className="flex justify-center items-center font-poppins bg-gray-100 text-gray-800">
                <div className="rounded-lg bg-white shadow-lg w-full p-8">
                    <h1 className="text-2xl font-semibold mb-1">Admin Profile</h1>
                    <p className="text-gray-400">Keep your basic details updated at all times</p>

                    <div className="grid grid-cols-4 grid-rows-2 gap-2 items-center p-4 rounded-lg border border-gray-200 bg-gray-50 mt-2">
                        <img src={user?.photoURL} alt="Profile picture" className="rounded-lg row-span-2" />

                        <button className="p-2 border border-blue-500 bg-blue-50 text-blue-500 rounded-md col-span-2 hover:bg-blue-500 hover:text-white transition-colors">Update Profile Picture</button>

                        <button className="p-2 border border-red-500 bg-red-50 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors">Remove</button>

                        <p className="col-span-3 text-xs text-gray-500">We recommend uploading at a higher resolution, ideally 1000 x 1000 pixels or above.</p>
                    </div>
                    <div className="m-2">
                        <h2 className="card-title">{user?.displayName}</h2>
                        <p className="text-sm">{user?.email}</p>
                    </div>

                </div>
            </div>


            {/* PIE Chart */}
            <div className="w-1/2">
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
            </div>


            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Legend></Legend>
                </PieChart>

            </ResponsiveContainer>
        </div>
    );
};

export default AdminProfile;