import React from 'react';

// Placeholder Icons (using simple SVG-like structure or emojis)
const IconWrapper = ({ children, color }) => (
    <div className={`p-3 rounded-full ${color} text-white flex items-center justify-center`}>
        {children}
    </div>
);

const RevenueIcon = () => <IconWrapper color="bg-green-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V9m0 6v1m-9-5h1.5a2.5 2.5 0 012.5 2.5v1a2.5 2.5 0 01-2.5 2.5H3m18-5h-1.5a2.5 2.5 0 00-2.5 2.5v1a2.5 2.5 0 002.5 2.5H21"></path></svg></IconWrapper>;
const SubscriptionIcon = () => <IconWrapper color="bg-blue-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></IconWrapper>;
const SalesIcon = () => <IconWrapper color="bg-indigo-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></IconWrapper>;
const UsersIcon = () => <IconWrapper color="bg-yellow-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M20 10a8 8 0 10-16 0 8 8 0 0016 0zm-8 12v-2m0-10V4"></path></svg></IconWrapper>;


const statsData = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", changeType: 'positive', icon: RevenueIcon },
    { title: "Subscriptions", value: "+2,350", change: "+180.1%", changeType: 'positive', icon: SubscriptionIcon },
    { title: "Sales", value: "12,234", change: "+19%", changeType: 'positive', icon: SalesIcon },
    { title: "Active Users", value: "573", change: "-1.1%", changeType: 'negative', icon: UsersIcon },
];

const recentActivityData = [
    { id: 1, user: "Sarah J.", action: "completed order #1024", time: "2 min ago", status: "success" },
    { id: 2, user: "Michael K.", action: "logged in", time: "1 hour ago", status: "info" },
    { id: 3, user: "System", action: "database backup failed", time: "3 hours ago", status: "error" },
    { id: 4, user: "Ahmed M.", action: "updated profile details", time: "5 hours ago", status: "warning" },
    { id: 5, user: "Jane D.", action: "registered a new account", time: "1 day ago", status: "success" },
];

const StatCard = ({ title, value, change, changeType, Icon }) => {
    const changeColor = changeType === 'positive' ? 'text-green-500' : 'text-red-500';
    const arrow = changeType === 'positive' ? '▲' : '▼';

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-xl border border-gray-100">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <Icon />
            </div>
            <div className="mt-4">
                <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
            </div>
            <div className="mt-2 flex items-center">
                <span className={`text-sm font-semibold ${changeColor}`}>
                    {arrow} {change}
                </span>
                <span className="ml-2 text-xs text-gray-500">
                    vs last month
                </span>
            </div>
        </div>
    );
};

const RecentActivityItem = ({ user, action, time, status }) => {
    let statusColor = '';
    let statusIcon = '';

    switch (status) {
        case 'success':
            statusColor = 'bg-green-100 text-green-700';
            statusIcon = '✓';
            break;
        case 'error':
            statusColor = 'bg-red-100 text-red-700';
            statusIcon = '✕';
            break;
        case 'warning':
            statusColor = 'bg-yellow-100 text-yellow-700';
            statusIcon = '!';
            break;
        case 'info':
        default:
            statusColor = 'bg-blue-100 text-blue-700';
            statusIcon = 'i';
            break;
    }

    return (
        <li className="py-3 flex items-center space-x-4 border-b border-gray-100 last:border-b-0">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${statusColor}`}>
                {statusIcon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 truncate">
                    <span className="font-semibold">{user}</span> {action}
                </p>
            </div>
            <div className="text-right">
                <p className="text-xs text-gray-500">{time}</p>
            </div>
        </li>
    );
};

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">
                    Analytics Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    Welcome back! Here is an overview of your performance.
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {statsData.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Main Content Area: Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 1. Sales Overview Chart (Placeholder) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Overview</h2>
                    <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-400">Chart Placeholder (e.g., Line Chart)</p>
                    </div>
                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                        <span>Last 30 Days Performance</span>
                        <button className="text-indigo-600 hover:text-indigo-700 font-medium">View Report</button>
                    </div>
                </div>

                {/* 2. Recent Activity */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                    <ul className="divide-y divide-gray-50">
                        {recentActivityData.map(activity => (
                            <RecentActivityItem key={activity.id} {...activity} />
                        ))}
                    </ul>
                    <div className="mt-4 text-center">
                        <button className="w-full py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-150">
                            View All Activity
                        </button>
                    </div>
                </div>
            </div>

            {/* Secondary Charts/Data (Optional Footer Section) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Top Products */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Products</h2>
                    <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-400">Data Table / Bar Chart Placeholder</p>
                    </div>
                </div>

                {/* Traffic Sources */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Traffic Sources</h2>
                    <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-400">Pie Chart Placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;