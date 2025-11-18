import MyOrdersPage from "./MyOrdersPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/*Left Side - Profile Info*/}
          <div className="w-full md:w-1/3 lg:w1/4 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Karuna Shah</h1>
            <p className="text-lg text-gray-600 mb-4">Karuna@example.com</p>
            <button className="w-full bg-red-500 text-white py-2 px4 rounded-2xl hover:bg-red-600">
              Logout
            </button>
          </div>
            {/*Right Side - Orders*/}
            <div className="w-full md:w-2/3 lg:h-3/4">
            <MyOrdersPage />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
