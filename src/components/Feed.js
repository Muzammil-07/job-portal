import Dashboard from "@/pages/dashboard";
import React, { useState } from "react";
import { BsThreeDotsVertical, BsBookmark, BsBriefcase } from "react-icons/bs";
import { useQuery } from "react-query";
import { GrCurrency } from "react-icons/gr";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/router";
const Feed = () => {
  const router = useRouter();
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs/get-job");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const empttObj = {};
  const [currentData, setCurrentData] = useState(null);
  const data2 = useQuery("Jobs", fetchData);
  if (!data2.isLoading) {
    console.log(data2?.data?.data);
  }
  const data = [
    {
      companyName: "vision Tech",
      city: "Karachi",
      title: "Web Designing and front-end developer Intern",
      salary: "10,000 - Rs 15,000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      education: "Bachelors",
      jobType: "Fulltime",
    },
    {
      companyName: "Tech Innovators",
      city: "Lahore",
      title: "Software Engineer",
      salary: "70,000 - Rs 90,000",
      description:
        "We are looking for a software engineer with experience in developing scalable web applications. The candidate should have a strong background in JavaScript and familiarity with React and Node.js.",
      education: "Masters",
      jobType: "Fulltime",
    },
    {
      companyName: "Creative Solutions",
      city: "Islamabad",
      title: "Graphic Designer",
      salary: "40,000 - Rs 60,000",
      description:
        "Join our team of creative professionals to design stunning visuals for our clients. Proficiency in Adobe Creative Suite is required. Previous experience in a design agency is preferred.",
      education: "Bachelors",
      jobType: "Fulltime",
    },
    {
      companyName: "NextGen Corp",
      city: "Karachi",
      title: "Data Analyst Intern",
      salary: "15,000 - Rs 20,000",
      description:
        "We are seeking a data analyst intern to join our team. The ideal candidate will have a strong analytical mindset and be proficient in Excel and SQL. This is a great opportunity to gain hands-on experience in data analysis.",
      education: "Bachelors",
      jobType: "Internship",
    },
    {
      companyName: "Innovatech",
      city: "Rawalpindi",
      title: "Marketing Specialist",
      salary: "50,000 - Rs 70,000",
      description:
        "We are hiring a marketing specialist to develop and execute marketing strategies for our products. The candidate should have experience in digital marketing and be familiar with SEO, SEM, and social media marketing.",
      education: "Bachelors",
      jobType: "Fulltime",
    },
  ];
  const applyJob = (doc) => {
    const token = cookies.get("token");
    if (token) {
      router.push({ pathname: "/easy-apply", query: { job: doc } });
    }
  };
  return (
    <div
      className={`${
        !currentData
          ? "px-12 grid grid-cols-1 gap-2 h-[100vh] w-full"
          : "px-12 grid grid-cols-1 md:grid-cols-2 gap-2 h-[100vh]"
      }`}
    >
      <div className={`${!currentData ? "" : "overflow-y-scroll"}`}>
        {data2.isLoading ? (
          <div>Loading</div>
        ) : (
          data2?.data?.data?.map((doc, index) => {
            return (
              <div
                className="border md:block hidden border-black rounded-lg px-4 space-y-2 py-2 h-[350px] md:h-[250px] my-2 cursor-pointer"
                key={index}
                onClick={() => {
                  setCurrentData(doc);
                }}
              >
                <div className="flex justify-between">
                  <h1 className="font-sans text-xl underline underline-offset-4">
                    {doc.title}
                  </h1>
                  <button className="text-2xl">
                    <BsThreeDotsVertical />
                  </button>
                </div>
                <h4>{doc.companyName}</h4>
                <h5>{doc.city}</h5>
                <p>{doc.description.slice(0, 200)}</p>
                <h6>Active 3 days ago</h6>
              </div>
            );
          })
        )}
      </div>
      <div className="md:hidden block">
      <div className={`${!currentData ? "" : "overflow-y-scroll"}`}>
        {data2.isLoading ? (
          <div>Loading</div>
        ) : (
          data2?.data?.data?.map((doc, index) => {
            return (
              <div
                className="border   border-black rounded-lg px-4 space-y-2 py-2 h-[350px] md:h-[250px] my-2 cursor-pointer"
                key={index}
                onClick={() => {
                router.push("/job-view")
                }}
              >
                <div className="flex justify-between">
                  <h1 className="font-sans text-xl underline underline-offset-4">
                    {doc.title}
                  </h1>
                  <button className="text-2xl">
                    <BsThreeDotsVertical />
                  </button>
                </div>
                <h2>{doc.companyName}</h2>
                <h2>{doc.city}</h2>
                <p>{doc.description.slice(0, 200)}</p>
                <h3>Active 3 days ago</h3>
              </div>
            );
          })
        )}
      </div>
      </div>
      {!currentData ? (
        <></>
      ) : (
        <div className="border border-black rounded-lg px-4 space-y-1 py-2 h-full  overflow-y-scroll ">
          <h1 className="font-sans text-2xl ">{currentData?.title}</h1>

          <h2 className="text-xl underline underline-offset-2">
            {currentData?.companyName}
          </h2>
          <h2>{currentData?.city}</h2>
          <h2>Rs {currentData?.salary}</h2>
          <div className="flex gap-x-3">
            <button
              className="px-3 py-1 text-white text-lg bg-blue-700 hover:bg-blue-800 rounded-md my-2 font-bold"
              onClick={() => {
                applyJob(currentData?._id);
              }}
            >
              Apply Now
            </button>
            <button className="px-3  bg-slate-200 rounded-md">
              <BsBookmark />
            </button>
            <button className="px-3  bg-slate-200 rounded-md">0</button>
          </div>
          <div className="border-t-2 my-4 py-2 space-y-3 ">
            <h1 className="text-xl py-3 font-bold">Job Details</h1>
            <span className="flex gap-x-2 items-center">
              <GrCurrency />
              <h4 className="text-lg font-bold text-gray-600">Pay</h4>
            </span>
            <button>{currentData?.salary}</button>
            <span className="flex gap-x-2 items-center">
              <BsBriefcase />
              <h4 className="text-lg font-bold text-gray-600">Job Type</h4>
            </span>
            <button>{currentData?.jobType}</button>
            <h2 className="text-lg font-bold">Full Job Detail</h2>
            <p>{currentData?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
