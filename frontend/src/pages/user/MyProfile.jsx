
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Edit,
  Save,
  X,
  ShoppingBag,
  CheckCircle,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    phone: "01712345678",
    studentId: "2024001",
    department: "Computer Science & Engineering",
    batch: "20th Batch",
  });

  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-bold text-green-600 uppercase">
            CanteenPro / Profile
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 mt-2">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Green Header */}
          <div className="h-36 bg-gradient-to-r from-green-600 to-emerald-500"></div>

          <div className="px-6 sm:px-10 pb-9">

            {/* Profile Image */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-14 mb-8">

              <div className="flex items-end gap-4">

                <div className="w-28 h-28 rounded-2xl bg-white p-1.5 shadow-md">
                  <div className="w-full h-full rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                    <User size={55} />
                  </div>
                </div>

                <div className="pb-2">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {user.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Student Account
                  </p>
                </div>

              </div>

              {!isEditing ? (
                <button
                  onClick={() => {
                    setFormData(user);
                    setIsEditing(true);
                  }}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl text-sm font-bold transition"
                >
                  <Edit size={17} />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">

                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold"
                  >
                    <X size={17} />
                    Cancel
                  </button>

                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl text-sm font-bold"
                  >
                    <Save size={17} />
                    Save
                  </button>

                </div>
              )}

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-9">

              <div className="bg-green-50 rounded-xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-green-600">
                  <ShoppingBag size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Total Orders</p>
                  <h3 className="text-2xl font-extrabold text-gray-900">24</h3>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-blue-600">
                  <CheckCircle size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <h3 className="text-2xl font-extrabold text-gray-900">20</h3>
                </div>
              </div>

            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      name="name"
                      value={isEditing ? formData.name : user.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-green-500 disabled:text-gray-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 block">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      name="email"
                      type="email"
                      value={isEditing ? formData.email : user.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-green-500 disabled:text-gray-600"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 block">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      name="phone"
                      value={isEditing ? formData.phone : user.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-green-500 disabled:text-gray-600"
                    />
                  </div>
                </div>

                {/* Student ID */}
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 block">
                    Student ID
                  </label>

                  <div className="relative">
                    <GraduationCap size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      value={user.studentId}
                      disabled
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600"
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 block">
                    Department
                  </label>

                  <input
                    value={user.department}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600"
                  />
                </div>

                {/* Batch */}
                <div>
                  <label className="text-sm font-semibold text-gray-600 mb-2 block">
                    Batch
                  </label>

                  <input
                    value={user.batch}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600"
                  />
                </div>

              </div>
            </div>

            {/* Logout */}
            <div className="mt-9 pt-6 border-t border-gray-100">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-sm transition"
              >
                <LogOut size={18} />
                Logout
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
