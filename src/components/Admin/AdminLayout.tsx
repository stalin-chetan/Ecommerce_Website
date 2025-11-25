import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      
      {/* Mobile toggle */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static transition-transform duration-300 z-20`}
      >
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="grow p-6 overflow-auto">
        <Outlet /> {/* Child pages render here */}
      </div>
    </div>
  );
};

export default AdminLayout;
