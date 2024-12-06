import React from 'react'

const Account = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto mt-24'>
            <span className='opacity-50 font-poppin text-sm'>Home /</span><span className='text-black text-sm font-poppin'>My Account</span>
            </div> 
      <h1 className="text-sm font-poppin text-right mr-20 -mt-7">
  <span className="text-black">Welcome!</span>{' '}
  <span className="text-red-500">Md Rimel</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-4 ml-[100px] mt-10">
          <h2 className="font-medium font-poppin mb-4">Manage My Account</h2>
          <ul className="space-y-2 ml-8">
            <li className="text-red-500 font-semibold">My Profile</li>
            <li className="opacity-50">Address Book</li>
            <li className="opacity-50">My Payment Options</li>
          </ul>
          <h2 className="font-medium font-poppin mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2 ml-8">
            <li className="opacity-50">My Returns</li>
            <li className="opacity-50">My Cancellations</li>
          </ul>
          <h2 className="font-medium font-poppin mt-6 mb-4">My Wishlist</h2>
        </aside>

        {/* Profile Form */}
        <div className=" max-w-[850px] min-h-[550px] md:w-3/4 border border-gray-200 rounded p-6 mt-[54px]">
          <h2 className="text-lg font-bold text-red-500 mb-6">
            Edit Your Profile
          </h2>
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black font-poppin">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full max-w-[330px] h-[50px] bg-[#F5F5F5] mt-2  p-4 opacity-50 "
                  defaultValue="Md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black font-poppin">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full max-w-[330px] h-[50px] bg-[#F5F5F5] mt-2 p-4 opacity-50"
                  defaultValue="Rimel"
                />
              </div>
            </div>

            {/* Email & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black font-poppin mt-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full max-w-[330px] h-[50px] bg-[#F5F5F5] p-4 opacity-50 mt-2"
                  defaultValue="rimel111@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black font-poppin mt-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full max-w-[330px] h-[50px] p-4 bg-[#F5F5F5] opacity-50 mt-2"
                  defaultValue="Kingston, 5236, United States"
                />
              </div>
            </div>

            {/* Password Changes */}
            <div>
              <label className="block text-sm font-poppin mt-2 text-black ">
                Password Changes
              </label>
              <div className="space-y-2">
                <input
                  type="password"
                  placeholder="Current Password"
                  className=" w-full md:w-[750px] h-[50px] bg-[#F5F5F5] p-4 mt-2"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className=" w-full md:w-[750px] h-[50px] bg-[#F5F5F5] p-4 mt-1"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className=" w-full md:w-[750px] h-[50px] bg-[#F5F5F5] p-4 mt-1"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="w-[303px] h-14 flex  ml-4 mt-6 sm:ml-[450px] ">
              <p
                className="px-6 text-black text-sm font-poppin mt-5"
              >
                Cancel
              </p>
              <button
                type="submit"
                className="w-[214px] h-[56px] px-6 py-2 font-poppin font-medium bg-[#DB4444] text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
  )
}

export default Account
