import Header from "../../components/header";

const PersonalCenter = () => {
  return (
    <>
      <Header />
      <div className="font-sans bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-5">
          {/* Profile Header */}
          <div className="relative bg-white rounded-lg mb-5 overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-blue-400 to-blue-600"></div>

            {/* Profile Info */}
            <div className="px-5 pb-5 -mt-12">
              <div className="flex items-end">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="用户头像"
                    className="rounded-full w-24 h-24 border-4 border-white shadow-md"
                  />
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="ml-4 mb-2">
                  <h1 className="text-xl font-bold text-gray-800">用户名</h1>
                  <p className="text-sm text-gray-500">@username</p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">128</div>
                  <div className="text-sm text-gray-500">关注</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">256</div>
                  <div className="text-sm text-gray-500">粉丝</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">32</div>
                  <div className="text-sm text-gray-500">游记</div>
                </div>
              </div>

              <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                编辑个人资料
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-2xl font-bold mt-0">我的游记</h2>
            <ul className="list-none p-0">
              <li className="bg-gray-50 p-4 mb-2.5 rounded flex justify-between items-center hover:bg-gray-200">
                <div>
                  <div className="text-lg font-medium">
                    探索巴厘岛的自然之美
                  </div>
                  <div className="text-gray-500">2024年4月18日</div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  查看
                </button>
              </li>
              <li className="bg-gray-50 p-4 mb-2.5 rounded flex justify-between items-center hover:bg-gray-200">
                <div>
                  <div className="text-lg font-medium">
                    探索墨西哥图卢姆的古遗址
                  </div>
                  <div className="text-gray-500">2024年4月15日</div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  查看
                </button>
              </li>
              <li className="bg-gray-50 p-4 mb-2.5 rounded flex justify-between items-center hover:bg-gray-200">
                <div>
                  <div className="text-lg font-medium">大阪的樱花季节</div>
                  <div className="text-gray-500">2024年4月10日</div>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  查看
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalCenter;
