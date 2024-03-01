import React from "react";

function InquiryForm() {
  return (
    <div className=" mx-10 flex gap-12 py-10">
      <div className=" w-96 font-inter text-3xl text-slate-600">
        <span>Sign up and get exclusive special deals</span>
      </div>
      <div className="flex items-center sm:flex-wrap">
        <div className="flex border border-purple-200 rounded-xl">
          <input
            type="text"
            className="block w-32 sm:w-96 px-4 py-2 text-black-700 bg-white rounded-xl focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Enter email..."
          />
          <button className="px-10 text-white bg-blue-500  border-l rounded-xl ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default InquiryForm;
