
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Clock,
  CheckCircle,
  Utensils,
  Plus,
  ClipboardList,
  TrendingUp,
  ArrowUpRight,
  MoreHorizontal,
  CalendarDays,
} from "lucide-react";

const AdminDashboard = () => {
  const [orders] = useState([
    {
      id: "#ORD-1001",
      customer: "Rahim Ahmed",
      food: "Chicken Burger",
      amount: 250,
      date: "Nov 05, 2026",
      status: "Pending",
    },
    {
      id: "#ORD-1002",
      customer: "Karim Hasan",
      food: "Pizza",
      amount: 350,
      date: "Nov 05, 2026",
      status: "Completed",
    },
    {
      id: "#ORD-1003",
      customer: "Sakib Hossain",
      food: "Fried Rice",
      amount: 180,
      date: "Nov 05, 2026",
      status: "Preparing",
    },
    {
      id: "#ORD-1004",
      customer: "Nusrat Jahan",
      food: "Sandwich",
      amount: 120,
      date: "Nov 04, 2026",
      status: "Completed",
    },
    {
      id: "#ORD-1005",
      customer: "Tanvir Islam",
      food: "Chicken Pasta",
      amount: 220,
      date: "Nov 04, 2026",
      status: "Pending",
    },
  ]);

  const stats = [
    {
      title: "Total Orders",
      value: "248",
      change: "+12.5%",
      icon: ShoppingBag,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Pending Orders",
      value: "18",
      change: "Needs attention",
      icon: Clock,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Completed Orders",
      value: "210",
      change: "+8.2%",
      icon: CheckCircle,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Total Food Items",
      value: "36",
      change: "Available menu",
      icon: Utensils,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700";
      case "Pending":
        return "bg-orange-50 text-orange-700";
      case "Preparing":
        return "bg-blue-50 text-blue-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">

          <div>
            <p className="text-sm font-medium text-green-600 mb-2">
              CANTEENPRO / ADMIN
            </p>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Dashboard Overview
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Welcome back! Here's what's happening in your canteen.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              to="/admin/orders"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:border-green-300 hover:text-green-600 transition"
            >
              <ClipboardList size={18} />
              View Orders
            </Link>

            <Link
              to="/admin/add-food"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-green-200/60 hover:-translate-y-0.5 transition"
            >
              <Plus size={19} />
              Add Food
            </Link>

          </div>
        </div>

        {/* Date Section */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <CalendarDays size={17} className="text-green-600" />
          <span>Thursday, November 5, 2026</span>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-9">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-center justify-between mb-5">

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <Icon size={23} />
                  </div>

                  <button className="text-gray-400 hover:text-gray-700">
                    <MoreHorizontal size={22} />
                  </button>

                </div>

                <p className="text-sm text-gray-500 font-medium">
                  {stat.title}
                </p>

                <div className="flex items-end justify-between mt-2">

                  <h2 className="text-3xl font-extrabold text-gray-900">
                    {stat.value}
                  </h2>

                  <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                    {index === 0 || index === 2 ? (
                      <TrendingUp size={14} />
                    ) : null}
                    {stat.change}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-gray-100">

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Recent Orders
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Monitor your latest customer orders.
              </p>
            </div>

            <Link
              to="/admin/orders"
              className="flex items-center gap-1 text-sm font-bold text-green-600 hover:text-green-700 transition"
            >
              View All Orders
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full text-left whitespace-nowrap">

              <thead className="bg-gray-50/80">

                <tr className="text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-4 font-semibold">Order ID</th>
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Food Item</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100">

                {orders.map((order) => (

                  <tr
                    key={order.id}
                    className="hover:bg-green-50/30 transition"
                  >

                    <td className="px-6 py-5 text-sm font-bold text-gray-800">
                      {order.id}
                    </td>

                    <td className="px-6 py-5 text-sm font-semibold text-gray-700">
                      {order.customer}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {order.food}
                    </td>

                    <td className="px-6 py-5 text-sm font-bold text-gray-800">
                      ৳{order.amount}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-500">
                      {order.date}
                    </td>

                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyle(order.status)}`}>
                        {order.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Table Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">

            <p className="text-xs sm:text-sm text-gray-500">
              Showing 5 recent orders
            </p>

            <Link
              to="/admin/orders"
              className="text-sm font-semibold text-green-600 hover:text-green-700"
            >
              See All →
            </Link>

          </div>

        </div>

        {/* Bottom Info */}
        <div className="mt-7 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="text-xl font-bold mb-2">
              Manage Your Canteen Efficiently
            </h3>

            <p className="text-sm text-green-50">
              Keep your food menu updated and manage customer orders easily.
            </p>
          </div>

          <Link
            to="/admin/orders"
            className="shrink-0 bg-white text-green-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-50 transition"
          >
            Manage Orders
          </Link>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
