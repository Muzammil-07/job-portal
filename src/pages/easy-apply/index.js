import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';  // Make sure the path is correct for your project structure
import cities from '../cities';
import { useRouter } from 'next/router';
import cookies from 'js-cookie';
const EasyApply = () => {
  
  const router =useRouter();
  useEffect(()=>{
    const uid = cookies.get("res")
  setFormData((e)=>({...e,jobId:router.query.job, userId:uid}))
  },[])
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        city: "",
        cvUrl: "", // To store the CV URL from Firebase Storage
        jobId:"",
        userId:""
    });
    const [cvFile, setCvFile] = useState(null);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event) => {
        setCvFile(event.target.files[0]);
    };

    const handleOnSelect = (item) => {
        setFormData((e) => ({ ...e, city: item.name }));
    };

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left', width: 200 }}> {item.name}</span>
            </>
        );
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!cvFile) {
            alert("Please upload your CV.");
            return;
        }

        // Create a storage reference in Firebase
        const storageRef = ref(storage, `cvs/${cvFile.name}`);

        // Upload the file to Firebase Storage
        const uploadTask = uploadBytesResumable(storageRef, cvFile);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                console.error('Error uploading file:', error);
            },
            async () => {
                // Get the download URL once upload is complete
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('File available at', downloadURL);

                // Update formData with the CV URL
                setFormData((prev) => ({ ...prev, cvUrl: downloadURL }));
               const id = router?.query?.job
                // Now, you can send the formData including the cvUrl to your backend
                try {
                    const res = await axios.post(`http://localhost:5000/api/jobApplication/jobs/${id}/apply`, {
                        ...formData,
                        cvUrl: downloadURL // Send the CV URL to your backend
                    });
                    console.log(res);
                    alert("Application Submitted Successfully");
                    handleCancle();
                } catch (error) {
                    console.log(error);
                }
            }
        );
    };

    const handleCancle = () => {
        setFormData({
            title: "",
            companyName: "",
            education: "",
            jobType: "",
            salaryFrom: "",
            salaryTo: "",
            category: "",
            description: "",
            fName: "",
            lName: "",
            email: "",
            phone: "",
            city: "",
            cvUrl: ""
        });
        setCvFile(null);
    };

    return (
        <div className="flex items-center flex-col justify-center">
            <Header />
            <div className="w-full px-12 p-8 space-y-8 my-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">Apply for Job</h2>
                <div className='grid grid-cols-2'>
                    <form className="space-y-2 col-span-2" onSubmit={handleFormSubmit}>
                        <div className='px-4'>
                            <label htmlFor="fName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                required
                                type="text"
                                id="fName"
                                name='fName'
                                value={formData.fName}
                                placeholder="Enter your first name"
                                onChange={handleFormChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='px-4'>
                            <label htmlFor="lName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                required
                                type="text"
                                id="lName"
                                name='lName'
                                value={formData.lName}
                                onChange={handleFormChange}
                                placeholder="Enter last name"
                                className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='px-4'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name='email'
                                value={formData.email}
                                onChange={handleFormChange}
                                placeholder="Enter email address"
                                className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='px-4 col-span-2 md:col-span-1'>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Select City</label>
                            <ReactSearchAutocomplete
                                items={cities}
                                onSelect={handleOnSelect}
                                autoFocus
                                formatResult={formatResult}
                                placeholder='Select City'
                            />
                        </div>
                        <div className='px-4'>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                required
                                type="tel"
                                id="phone"
                                name='phone'
                                value={formData.phone}
                                onChange={handleFormChange}
                                placeholder="Enter phone number"
                                className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='px-4'>
                            <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Upload CV</label>
                            <input
                                required
                                type="file"
                                id="cv"
                                accept="application/pdf"
                                onChange={handleFileChange}
                                className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className='flex justify-center bg-slate-500 col-span-2'>
                            <button
                                type="submit"
                                className="px-4 w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Apply Now
                            </button>
                        </div>
                    </form>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default EasyApply;
