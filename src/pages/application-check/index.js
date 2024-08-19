import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsBookmark ,BsBriefcase} from "react-icons/bs";
import { GrCurrency } from "react-icons/gr";
import { useQuery } from "react-query";
import moment from "moment";
import axios from "axios";
import Link from "next/link";
const Application = () => {
  const router = useRouter();
  const [isLoadingjobData, setIsLoadingjobData] = useState(false);
  const [jobData, setjobData] = useState({});
  const [id,setId]=useState(router?.query?.data?._id);
  const [data,setData]=useState({})
  useEffect(() => {
    if(router.query.data){
        const query = router.query?.data;
        let parsedData= JSON.parse(query)
        setId(parsedData._id)
        const fetchData =async()=>{
            try{
             const res = await axios.get(`http://localhost:5000/api/jobApplication/jobs/applications/${parsedData._id}/apply`)
           console.log(res)
           setData(res.data);
             return res.data
            }catch(error){
                console.log(error)
            }
          }
          fetchData()
        setjobData(JSON.parse(query));
        setIsLoadingjobData(true);
    }
    
  }, [router?.query]);

//   const {isLoading,data}=useQuery("applications",fetchData)
//   if(!isLoading){
//     console.log(data)
//   }
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 py-2 px-2">
      <div>
       
        {
            isLoadingjobData? 
            <div>
                 <h3 className="mb-4 text-center">Applications {jobData?.applicantCount}</h3>
                {
                    data?.data?.map((doc,index)=>{
                  return(
                    <div key={index} className="border mx-2 border-black px-2 py-2 rounded-md" >
                        
                        <h4 className="text-lg"> Applicant Name : {doc?.fName} {doc?.lName}</h4>
                        <h4 className="text-lg">  Email : {doc?.email}</h4>
                        <h4 className="text-lg">  Phone : {doc?.phone}</h4>
                        <h4 className="text-lg">  City : {doc?.city}</h4>
                        <h4 className="text-lg"> Applied Time: {moment(doc?.appliedAt).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                         <div className="space-x-4">
                         <Link href={doc?.cvUrl}>Download CV</Link>
                         <button className=" bg-blue-500 hover:bg-blue-900 rounded-md text-white px-2 py-1">Mark as view</button>
                        </div>
                        </div>
                  )
                    })
                }
            </div>
            :<div>Loading</div>
        }
      </div>
      <div>
        {isLoadingjobData ? (
          <div className="border border-black rounded-lg px-4 space-y-1 py-2 h-full  overflow-y-scroll ">
            <h1 className="font-sans text-2xl ">{jobData?.title}</h1>

            <h2 className="text-xl underline underline-offset-2">
              {jobData?.companyName}
            </h2>
            <h2>{jobData?.city}</h2>
            <h2>Rs {jobData?.salary}</h2>
            <div className="flex gap-x-3">
            </div>
            <div className="border-t-2 my-4 py-2 space-y-3 ">
              <h1 className="text-xl py-3 font-bold">Job Details</h1>
              <span className="flex gap-x-2 items-center">
                <GrCurrency />
                <h4 className="text-lg font-bold text-gray-600">Pay</h4>
              </span>
              <button>{jobData?.salary}</button>
              <span className="flex gap-x-2 items-center">
                <BsBriefcase />
                <h4 className="text-lg font-bold text-gray-600">Job Type</h4>
              </span>
              <button>{jobData?.jobType}</button>
              <h2 className="text-lg font-bold">Full Job Detail</h2>
              <p>{jobData?.description}</p>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Application;
