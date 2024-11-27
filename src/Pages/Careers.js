import React, { useState } from "react";
import careersbg from "../assets/careerBg.jpg";
import Header from "../Components/Header";
import jobsData from "./jobsData";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

  // State for filters and search
  const [experience, setExperience] = useState("");
  const [workSite, setWorkSite] = useState("");
  const [profession, setProfession] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [appliedSearchKeyword, setAppliedSearchKeyword] = useState("");

  // Function to filter jobs based on selected filter options and applied search
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearchKeyword =
      appliedSearchKeyword === "" ||
      job.title.toLowerCase().includes(appliedSearchKeyword.toLowerCase()) ||
      job.location.toLowerCase().includes(appliedSearchKeyword.toLowerCase()) ||
      job.profession.toLowerCase().includes(appliedSearchKeyword.toLowerCase());

    return (
      matchesSearchKeyword &&
      (experience === "" || job.experience.toLowerCase() === experience) &&
      (workSite === "" || job.workType.toLowerCase() === workSite) &&
      (profession === "" || job.profession.toLowerCase() === profession) &&
      (employmentType === "" ||
        job.employmentType.toLowerCase() === employmentType)
    );
  });

  // Function to handle tag removal
  const handleRemoveTag = (filterType) => {
    switch (filterType) {
      case "experience":
        setExperience("");
        break;
      case "workSite":
        setWorkSite("");
        break;
      case "profession":
        setProfession("");
        break;
      case "employmentType":
        setEmploymentType("");
        break;
      case "searchKeyword":
        setAppliedSearchKeyword("");
        setSearchClicked(false); // Hide search results count
        break;
      default:
        break;
    }
  };

  // Function to handle Find Jobs button click
  const handleFindJobs = () => {
    // Apply the search keyword
    setAppliedSearchKeyword(searchKeyword);
    setSearchClicked(true);
  };

  // Function to handle Enter key press in the search input box
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFindJobs();
    }
  };

  // Check if any filter is applied to determine if results found count should be displayed
  const isFilterApplied =
    appliedSearchKeyword ||
    experience ||
    workSite ||
    profession ||
    employmentType;

  return (
    <div className="bg-[#f5f8fa]">
      <Header />

      {/* Background Section */}
      <div
        className="h-[464px] w-[100%] flex justify-center items-center bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://cdn.pixabay.com/photo/2021/07/20/06/13/businessmen-6479839_1280.jpg"})`,
        }}
      >
        <div className="z-10">
          <p
            className="font-bold lg:text-[64px] text-4xl text-white text-center"
            // data-aos="fade-up"
          >
            Careers
          </p>
          <p
            className="text-[24px] lg:mt-6 text-white font-medium text-center"
            // data-aos="fade-up"
          >
            This is a place to grow, learn and connect. Everything that makes
            you who you are is welcome here.
          </p>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="container max-w-screen-lg mx-auto p-6 -mt-40">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Search Job Section */}
          <div className="flex flex-col lg:flex-row gap-4 items-end mb-4">
            <label className="relative w-full lg:w-full">
              <span className="block text-gray-700 mb-1">Search Jobs</span>
              <input
                type="text"
                placeholder="Search by job title, location, or profession"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 p-3 border box-border border-gray-300 rounded-md w-full"
              />
              {searchKeyword && (
                <button
                  onClick={() => setSearchKeyword("")}
                  className="absolute right-4 top-10 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </label>
            <button
              onClick={handleFindJobs}
              className="bg-gradient-to-tr from-gray-900 to-gray-700 w-[240px] px-6 py-3 rounded-md hover:cursor-pointer text-white shadow-md shadow-gray-900/10 "
            >
              Find Jobs
            </button>
          </div>

          {/* Divider Line */}
          <hr className="my-7" />

          {/* Filters Section */}
          <div className="flex flex-wrap justify-between gap-6 mb-2">
            <label className="w-48">
              <span className="block text-gray-700 mb-1">Experience</span>
              <select
                className="border px-3 py-3 rounded-md bg-white w-full"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </label>

            <label className="w-48">
              <span className="block text-gray-700 mb-1">Work Site</span>
              <select
                className="border px-3 py-3 rounded-md bg-white w-full"
                value={workSite}
                onChange={(e) => setWorkSite(e.target.value)}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="remote">Remote</option>
                <option value="on-site">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>

            <label className="w-48">
              <span className="block text-gray-700 mb-1">Profession</span>
              <select
                className="border px-3 py-3 rounded-md bg-white w-full"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="software">Software Engineering</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="customer support">Customer Support</option>
              </select>
            </label>

            <label className="w-48">
              <span className="block text-gray-700 mb-1">Employment Type</span>
              <select
                className="border px-3 py-3 rounded-md bg-white w-full"
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row container mx-auto p-6">
        {/* Left Section - Job List with Selected Filters as Tags */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-2">
            Job Listings
            {isFilterApplied && searchClicked && (
              <span className="text-lg text-gray-600 ml-2">
                ({filteredJobs.length} result
                {filteredJobs.length !== 1 ? "s" : ""} found)
              </span>
            )}
          </h2>

          {/* Filter Tags Below Heading */}
          {isFilterApplied && (
            <div className="flex flex-wrap gap-2 mb-4">
              {appliedSearchKeyword && (
                <div className="bg-red-200 text-red-900 px-3 py-1 rounded-full flex items-center">
                  <span>Search: {appliedSearchKeyword}</span>
                  <button
                    className="ml-2 text-red-900 hover:text-red-700"
                    onClick={() => handleRemoveTag("searchKeyword")}
                  >
                    ✕
                  </button>
                </div>
              )}
              {experience && (
                <div className="bg-green-200 text-green-900 px-3 py-1 rounded-full flex items-center">
                  <span>Experience: {experience}</span>
                  <button
                    className="ml-2 text-green-900 hover:text-green-700"
                    onClick={() => handleRemoveTag("experience")}
                  >
                    ✕
                  </button>
                </div>
              )}
              {workSite && (
                <div className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full flex items-center">
                  <span>Work Site: {workSite}</span>
                  <button
                    className="ml-2 text-yellow-900 hover:text-yellow-700"
                    onClick={() => handleRemoveTag("workSite")}
                  >
                    ✕
                  </button>
                </div>
              )}
              {profession && (
                <div className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full flex items-center">
                  <span>Profession: {profession}</span>
                  <button
                    className="ml-2 text-purple-900 hover:text-purple-700"
                    onClick={() => handleRemoveTag("profession")}
                  >
                    ✕
                  </button>
                </div>
              )}
              {employmentType && (
                <div className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full flex items-center">
                  <span>Employment Type: {employmentType}</span>
                  <button
                    className="ml-2 text-blue-900 hover:text-blue-700"
                    onClick={() => handleRemoveTag("employmentType")}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            {filteredJobs.length > 0
              ? filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`p-4 border rounded-lg shadow-sm cursor-pointer  hover:bg-blue-100 hover:shadow-blue-100 hover:border-blue-200 ${
                      selectedJob?.id === job.id
                        ? "bg-blue-50 shadow-blue-50 border-blue-100 "
                        : "bg-white"
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-600">
                      {job.location} - {job.workType}
                    </p>
                    <p className="text-xs text-gray-500">
                      Posted on: {job.datePosted}
                    </p>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="text-blue-700 underline mt-2 hover:text-blue-500"
                    >
                      View Details
                    </button>
                  </div>
                ))
              : searchClicked &&
                isFilterApplied && (
                  <p className="text-center text-gray-500">No jobs found.</p>
                )}
          </div>
        </div>

        {/* Right Section - Job Description */}
        <div className="w-full lg:w-2/3 lg:pl-8 mt-8 lg:mt-0 sticky top-0 right-0 ">
          {selectedJob ? (
            <div className="border p-6 rounded-lg shadow-sm bg-white">
              <h2 className="text-3xl font-bold mb-4">{selectedJob.title}</h2>
              {/* Job Information in Two Columns */}
              <div className="text-sm text-gray-600 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {selectedJob.location}
                </p>
                <p>
                  <span className="font-semibold">Work Type:</span>{" "}
                  {selectedJob.workType}
                </p>
                <p>
                  <span className="font-semibold">Profession:</span>{" "}
                  {selectedJob.profession}
                </p>
                <p>
                  <span className="font-semibold">Employment Type:</span>{" "}
                  {selectedJob.employmentType}
                </p>
                <p>
                  <span className="font-semibold">Travel:</span>{" "}
                  {selectedJob.travel}
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="mb-4">{selectedJob.description}</p>
              <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
              <ul className="list-disc pl-5">
                {selectedJob.qualifications.map((qualification, index) => (
                  <li key={index} className="mb-2">
                    {qualification}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-gradient-to-tr from-blue-600 to-blue-300 text-white py-2 px-4 rounded-md hover:cursor-pointer ">
                Apply Now
              </button>
            </div>
          ) : (
            <div className="text-gray-500 text-center border p-6 rounded-lg shadow-sm">
              <p>Select a job to see the details here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
