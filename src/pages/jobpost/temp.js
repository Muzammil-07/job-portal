import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import cities from '@/cities';
import { useQuery,useQueryClient } from 'react-query';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { AiOutlineSend } from "react-icons/ai";
import { getDownloadURL,uploadString ,ref } from 'firebase/storage';
// import { addDoc,collection } from 'firebase/firestore';
import { addDoc,collection,doc,getDocs,updateDoc,query, where } from 'firebase/firestore'
import QRCode from 'qrcode'
import emailjs, { send } from '@emailjs/browser';
import { db ,storage} from '../config/firebase.js';

import Layout from './Layout.jsx';
const Invites = () => {
const items = cities
    const [formData, setFormData] = useState({
        doctorName: "",
        email: "",
        phone: "",
        hospital: "",
        city: "",

    });
    const Router = useRouter();
    const [isLoading,setIsLoading]=useState(false);
    const[data,setData]=useState([])
    console.log(Router.query);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [loader, setLoader] = useState(false);
    const [uuid,setUuid]=useState("");
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const MySwal = withReactContent(Swal);
    function openModal() {
        setIsOpen(true);
    }
    useEffect(()=>{
    let uuuid =Router.query.uid
    const getData =async(uid)=>{
      let arr = [];
        const dbRef = collection(db, "invites");
        if(localStorage.getItem("role")=="admin"){
          try {
     console.log(Router.query.uid,"UUID")
   
            const querySnapshot = await  getDocs(query(dbRef ,where("refId","==",uid)));
      console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              arr.push(doc.data());
              console.log(doc.data(),"data")
              // console.log( new Date( doc.data().Date.seconds).getMonth())
            });
            // console.log(arr,"data")

            // handleCancel();
            setData(arr);
            setIsLoading(true)
            return arr;
            
          } catch (error) {
            console.log(error);
          }}
    }
    if(Router.query.uid){
        getData(Router.query.uid);
    }
   
    },[Router.query.uid])
    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }
    const queryClient =useQueryClient();
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item.name)
        setFormData((e)=>({...e,city:item.name}));
        
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left',width:200 }}> {item.name}</span>
          </>
        )
      }
    function closeModal() {
        setIsOpen(false);
        setFormData({
            doctorName: "",
            email: "",
            phone: "",
            hospital: "",
            city: "",
        });
        setLoader(false)
    }
    const createUser = async (e) => {
        setLoader(true);
        e.preventDefault();
        try {
            const dbRef = await addDoc(collection(db, "doctors"), {
                ...formData
            });
            const docId = dbRef.id;

            // Update the document with its own ID
            await updateDoc(doc(db, "doctors", docId), {
                uid: docId,
            });
            queryClient.invalidateQueries(["Doctors"])
            console.log("data added", dbRef)
            MySwal.fire({
                icon: 'success',
                text: 'Event Created',

            })
            closeModal();
            setLoader(false)
        } catch (error) {
            console.log(error)
        }

        
    }
    const fetchData = async () => {
        let arr = [];
        const dbRef = collection(db, "invites");
        if(localStorage.getItem("role")=="admin"){
          try {
     console.log(Router.query.uid,"UUID")
     let uuuid = await Router.query.uid
            const querySnapshot = await  getDocs(query(dbRef ,where("refId","==",uuuid)));
      console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              arr.push(doc.data());
              console.log(doc.data(),"data")
              // console.log( new Date( doc.data().Date.seconds).getMonth())
            });
            // console.log(arr,"data")
            // handleCancel();
            return arr;
            
          } catch (error) {
            console.log(error);
          }
        }else{
          try {
         
            const querySnapshot = await  getDocs(query(dbRef, where("receiverId", "==", localStorage.getItem("id"))));
      
            querySnapshot.forEach((doc) => {
              arr.push(doc.data());
            });
            return arr;
          } catch (error) {
            console.log(error);
          }
        }
     
      };
    //   const { isLoading, data, error, } = useQuery(["Invites"],  fetchData, {
    //     // refetchOnWindowFocus:"always",
      
    //    });
    //    // Example function to call the /phone endpoint
    //    const updateInvite=async(docId)=>{
    //    try{
    //      const docRef =     await updateDoc(doc(db, "doctors", docId), {
    //         inviteSent: true,
    //     });
    //    }catch(error){
    //     console.log(error)
    //    }
    //    }
const sendPhoneMessage = async (userPhone,id) => {
    try {
        const response = await fetch('http://localhost:3001/phone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({phone:userPhone}),
        });
        
        if (response.ok) {
               updateInvite(id)
            MySwal.fire({
                icon: "success",
                title: "Sent",
                text: 'Invite sent successfully!',
               
              });
            console.log('Phone message sent successfully');
        } else {
            console.error('Failed to send phone message');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

       const sendWhatsAppMessage = async (userPhone,urlData,id) => {
        try {
            const response = await fetch('http://localhost:3001/whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({phone:userPhone,urlData}),
            });
            
            if (response.ok) {
                sendPhoneMessage(userPhone,id)
                console.log('WhatsApp message sent successfully');
            } else {
                console.error('Failed to send WhatsApp message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
       const sendEmail = (urlData,userEmail,userPhone,id) => {
        // e.preventDefault();
      // console.log(urlData)
        // Retrieve name, email, and image URL from sessionStorage
        // const userName = sessionStorage.getItem('user_name');
        // const userEmail = sessionStorage.getItem('user_email');
        // const imageUrl = sessionStorage.getItem('image_url');
      
        // Check if any of the required data is missing
        // if (!userName || !userEmail || !imageUrl) {
        //   console.error('Missing required data');
        //   return;
        // }
        const htmlContent = `
       
                <h1>Hello!</h1>
                <p>This is a sample HTML email.</p>
                <p>You can include any HTML content here, including images, links, and styling.</p>
                <a href="">Link to the HTML page</a>
        
      `;
      
        // Prepare the email parameters
        // const email = sessionStorage.getItem("email")
        const {name ,venue,start,end}= formData;
        
        const emailParams = {
          from_name: "Our Team",
          from_email:"reactdev90@gmail.com",
          reply_to:userEmail,
          to:userEmail,
          data:urlData,
          message:`Hello ${name} , hope your are doing well you have invited to Event starting from ${start} to ${end} and venue is ${venue}`,
         
    
        //   image_url: imageUrl,
        // message:urlData
        };
      console.log(userEmail)
        // Send the email using emailjs.send
        emailjs
          .send('service_u9vzs43', 'template_87gucso', emailParams,{
            publicKey:"7nhMaen6xYmjxVqT5"
          })
          .then(
            () => {
            //   setIsEmailButtonDisabled(false)
           sendWhatsAppMessage(userPhone,urlData,id)
              // console.log('Email sent successfully!');
      
            },
    
            (error) => {
              console.error('Failed to send email:', error);
            //   setIsEmailButtonDisabled(false)
            }
          );
      };
      
       const sendInvite= async(doc)=>{
       try{
        const docRef= await addDoc(collection(db,"invites"),{
            ...doc,
            refId:uuid,
            inviteSent:true
        });
        const generateQr = await QRCode.toDataURL(docRef.id);
        console.log(generateQr);
        const storageRef = ref(storage,`qrCodes/${docRef.id}.png`);
        const snapShot = await uploadString(storageRef,generateQr,'data_url');
        const downloadUrl = await getDownloadURL(storageRef);
        sendEmail(downloadUrl,doc?.email,doc?.phone,doc?.uid)
       }catch(error){
console.log(error)
       }
       }
    return (

        <div className=' overflow-x-scroll w-full'>
            <div className='flex justify-between px-4  py-4'>
                <h2 className='text-xl text-white font-bold'>Invites</h2>
                {/* <button onClick={openModal} className='bg-white px-4 py-2 outline-none hover:text-purple-400 rounded-lg'>Add Doctor</button> */}
            </div>
            <div  className='px-2 bg-gray-400 bg-opacity-50 text-white font-bold py-2 grid grid-cols-[200px_400px_200px_200px_200px_200px_200px_200px_200px_200px_200px] mb-2 '>
            <h1 className=''>Name</h1>
            <h2 className='col-span-2'> Email </h2>
            <h2>Phone</h2>
            <h2>Hospital</h2>
            <h2>City</h2>
            <h2>CheckIn</h2>
            <h2>CheckIn Time</h2>
            <h2>Invite sent</h2>
            <h2>Send Invitation</h2>
            <h2>Send Remainder</h2>
            </div>
            <div>
         {isLoading?
         data?.map((doc,index)=>{
         return(
            <div key={index} className='px-2 bg-gray-400 bg-opacity-50 text-white py-2 grid grid-cols-[200px_400px_200px_200px_200px_200px_200px_200px_200px_200px_200px] mb-1'>
            <h1 key={index}>{doc?.doctorName}</h1>
            <h2 className='col-span-2'> {doc?.email} </h2>
            <h2>{doc?.phone}</h2>
            <h2>{doc?.hospital}</h2>
            <h2>{doc?.city}</h2>
            <h2>True</h2>
            <h2>True</h2>
            <h2>False</h2>
            <h2><button onClick={()=>{sendInvite(doc)}} className='flex justify-center gap-2 items-center bg-blue-500 px-4 py-1 rounded-md hover:bg-blue-300'><span>Send</span><AiOutlineSend /></button></h2>
            <h2><button className='flex justify-center gap-2 items-center bg-blue-500 px-4 py-1 rounded-md hover:bg-blue-300'><span>Send Reminder</span><AiOutlineSend /></button></h2>
            </div>
         )
         }) :""}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"

            >
            

                <div className='flex justify-between  h-full'>
                    <form className='flex flex-col px-4 justify-center' onSubmit={createUser}>
                        <h1 className='text-4xl mb-12 text-purple-500 '>Add Doctor</h1>
                        <div className='flex gap-8'>
                            <div className='py-4 space-x-3'>
                                <label>Doctor Name</label>
                                <input placeholder='Name' type='text' required name='doctorName' value={formData.doctorName} onChange={handleFormChange} className='outline-none border-2 px-2 py-1 rounded-md w-[200px]' />
                            </div>
                            <div className='py-4 space-x-12 justify-between'>
                                <label> Email </label>
                                <input type='email' required name='email' placeholder='Email' value={formData.email} onChange={handleFormChange} className='outline-none ml-4 border-2 px-2 py-1 rounded-md w-[200px]' />
                            </div>
                        </div>
                        <div className='flex gap-8 justify-between'>
                            <div className='py-4 space-x-8 justify-between'>
                                <label>Phone No   </label>
                                <input type='tel' required name='phone' placeholder='e.g 92' value={formData.phone} onChange={handleFormChange} className='outline-none border-2 px-2 py-1 rounded-md w-[200px]' />
                            </div>
                            <div className='py-4 space-x-12 '>
                                <label> Hospital </label>
                                <input type='text' required name='hospital' placeholder='Hospital Name' value={formData.hospital} onChange={handleFormChange} className='outline-none border-2 px-2 py-1 rounded-md w-[200px]' />
                            </div>
                        </div>
                        <div className='flex gap-8 justify-between'>
                            <div className='py-4 space-x-8 justify-between'>
                                <label>Phone No 2   </label>
                                <input type='tel'  name='phone2'  placeholder='e.g 92'  value={formData.phone2} onChange={handleFormChange} className='outline-none border-2 px-2 py-1 rounded-md w-[200px]' />
                            </div>
                       <div className='flex  items-center gap-4'>
                        <label>Select City</label>
                            <div className='w-[200px]'>
                        <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder='Select City'
          />
          </div>
          </div>
                        </div>
                

          

                        <div className='flex justify-end mt-8'>
                            {
                                !loader ? <button type='submit' className='bg-purple-400 text-white px-8 py-2 rounded-lg hover:bg-purple-500 '> Create</button>
                                    :
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                            }



                        </div>
                    </form>
                    <div className='flex flex-col justify-between'>
                        <button onClick={closeModal} className='text-2xl self-end'>X</button>
                        {/* <Image src={sidebar} height={600} width={300} className='object-contain ' alt='sidebar'/> */}
                    </div>
                </div>
            </Modal>
        </div>
    
    )
}

export default Invites