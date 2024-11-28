import React, { useState } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import jobsData from "../data/jobsData";

const ApplyForm = () => {
  const { jobId } = useParams(); // Get jobId from URL
  const job = jobsData.find((job) => job.id === parseInt(jobId)); // Find job by id

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [educationQualification, setEducationQualification] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Application submitted successfully!");
  };

  if (!job) {
    return (
      <div className="text-center mt-20">
        <p className="text-2xl text-gray-600">Job not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f8fa] min-h-screen">
      <Header />

      {/* Background Section */}
      <div
        className="h-[300px] w-[100%] flex justify-center items-center bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2021/07/20/06/13/businessmen-6479839_1280.jpg"})`,
        }}
      >
        {/* <div className="z-10">
          <p className="font-bold lg:text-[48px] text-4xl text-white text-center">
            Apply for the Job
          </p>
        </div> */}
      </div>

      {/* Form Section */}
      <div className="container max-w-screen-md mx-auto p-6 -mt-[188px]">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Job Information */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-1 text-center">
              {job.title}
            </h2>

            <div className="flex justify-between items-center mt-4 mb-6 flex-row">
              <p className="text-center text-gray-600 ">
                <span className="text-gray-700">Job Title:</span> {job.jobTitle}
              </p>
              <p className="text-center text-gray-600 ">
                <span className="text-gray-700">Posted Date:</span>{" "}
                {job.datePosted}
              </p>
            </div>
            <hr />
          </div>

          {/* Application Form */}
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Application Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name and Gender Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-grow">
                <label className="block text-gray-700 mb-1" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="block text-gray-700 mb-1" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Email and Mobile Number Row */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2">
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="mobileNumber"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            {/* Education Qualification */}
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="educationQualification"
              >
                Education Qualification
              </label>
              <select
                id="educationQualification"
                value={educationQualification}
                onChange={(e) => setEducationQualification(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white"
                required
              >
                <option value="" hidden>
                  Select Qualification
                </option>

                <option value="bachelor">Graduate</option>
                <option value="master">Post Graduate</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            {/* LinkedIn Profile URL */}
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="linkedInProfile"
              >
                LinkedIn Profile URL (Optional)
              </label>
              <input
                type="url"
                id="linkedInProfile"
                value={linkedInProfile}
                onChange={(e) => setLinkedInProfile(e.target.value)}
                placeholder="Enter LinkedIn profile URL"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            {/* Resume URL */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="resumeUrl">
                Resume URL
              </label>
              <input
                type="url"
                id="resumeUrl"
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
                placeholder="Enter Google Drive link to your resume"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-500 hover:cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
