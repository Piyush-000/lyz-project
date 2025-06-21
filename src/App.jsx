import React, { useEffect, useState } from 'react';
import { FaUserFriends, FaUserTie, FaAd, FaVideo, FaHome, FaSignOutAlt, FaUserCircle, FaPhone, FaCommentDots, FaCamera, FaBell } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    realtimeUsers: 0,
    totalAds: 0,
    businessProfile: 0,
    bannerAds: 0,
    videoAds: 0,
    homeAds: 0,
    revenue: 0
  });

  const revenueData = [
    { name: '0%', value: 0 },
    { name: '10%', value: 23849 * 0.1 },
    { name: '20%', value: 23849 * 0.2 },
    { name: '40%', value: 23849 * 0.4 },
    { name: '60%', value: 23849 * 0.6 },
    { name: '80%', value: 23849 * 0.8 },
    { name: '100%', value: 23849 }
  ];

  useEffect(() => {
    const fetchData = () => {
      const apiResponse = {
        totalUsers: 12,
        realtimeUsers: 3,
        totalAds: 12,
        businessProfile: 0,
        bannerAds: 0,
        videoAds: 0,
        homeAds: 0,
        revenue: 23849
      };
      setData(apiResponse);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f6fd]">
      {/* Header Bar */}
      <div className="bg-white flex items-center justify-between px-6 py-3 shadow">
        <img src="/lzy_logo-Cl4gUC2f.png" alt="Logo" className="h-10" />
        <div className="flex items-center gap-2 bg-[#f3f6fd] px-4 py-2 rounded-full text-sm">
          <FaUserCircle className="text-lg" />
          <span>Mohd Hassan ID: lc001</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600 text-xl">
          <FaPhone className="cursor-pointer hover:text-blue-500" />
          <FaCamera className="cursor-pointer hover:text-blue-500" />
          <FaCommentDots className="cursor-pointer hover:text-blue-500" />
          <FaBell className="cursor-pointer hover:text-blue-500" />
          <FaUserCircle className="h-8 w-8 rounded-full object-cover text-lg cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Whole Dashboard Section */}
      <div className="bg-white mt-2 shadow rounded-md mx-2 md:mx-4 p-4">
        <div className="bg-[#f8991d] text-white py-3 text-center font-bold text-lg md:text-2xl rounded">
          Client Onboarding & Real-Time Engagement Analytics System
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="bg-[#fef8e7] rounded-md p-4 shadow text-left relative border-l-4 border-yellow-400">
            <span className="absolute top-2 right-2 h-3 w-3 bg-yellow-400 rounded-full"></span>
            <p className="text-sm text-gray-500">Statistics</p>
            <p className="text-sm text-gray-600 font-medium">Total Users</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">{String(data.totalUsers).padStart(3, '0')}</h2>
          </div>

          <div className="bg-[#e8f8f3] rounded-md p-4 shadow text-left relative border-l-4 border-green-400">
            <span className="absolute top-2 right-2 h-3 w-3 bg-green-400 rounded-full"></span>
            <p className="text-sm text-gray-500">Statistics</p>
            <p className="text-sm text-gray-600 font-medium">Realtime Users</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">{String(data.realtimeUsers).padStart(2, '0')}</h2>
          </div>

          <div className="bg-white rounded-md p-4 shadow border border-gray-200">
            <label className="block text-sm font-semibold mb-2 text-gray-700">Select Location</label>
            <div className="space-y-2">
              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select State</option>
                <option>Uttar Pradesh</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </select>
              <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select City</option>
                <option>New Delhi</option>
                <option>Lucknow</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md p-4 shadow">
            <h3 className="text-sm text-gray-500 mb-2">Revenue Graph</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ff7300" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-right text-xs text-gray-500 mt-1">₹{data.revenue.toLocaleString()}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <InfoCard title="Total User Ads" value={data.totalAds} icon={<FaAd />} bgColor="bg-[#fcebea]" />
            <InfoCard title="Business Profile" value={data.businessProfile} icon={<FaUserTie />} bgColor="bg-[#f4f4f5]" />
            <InfoCard title="Banner Ads" value={data.bannerAds} icon={<FaUserFriends />} bgColor="bg-[#e8f8f3]" />
            <InfoCard title="Video Ads" value={data.videoAds} icon={<FaVideo />} bgColor="bg-[#e0f2fe]" />
            <InfoCard title="Home Ads" value={data.homeAds} icon={<FaHome />} bgColor="bg-[#fef9c3]" />
            <div className="flex flex-col items-center justify-center rounded-md p-4 shadow text-white font-semibold bg-gradient-to-r from-red-500 to-orange-500">
              ID: lc001
              <button className="mt-2 text-sm flex items-center gap-1 hover:underline">
                <FaSignOutAlt /> <span>Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, value, icon, bgColor }) => (
  <div className={`flex flex-col items-center justify-center rounded-md p-4 shadow ${bgColor}`}>
    <div className="text-2xl text-gray-700 mb-2">{icon}</div>
    <p className="text-xs text-green-600 mb-1">Live</p>
    <p className="text-lg font-semibold text-gray-700">{title}</p>
    <p className="text-2xl font-bold text-black mt-1">{String(value).padStart(2, '0')}</p>
  </div>
);

export default Dashboard;