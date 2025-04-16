import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Section2 = ({ sec2Ref }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        remarks: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        resume: '',
        remarks: '',
    });

    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.name) {
            formErrors.name = 'Full name is required';
            isValid = false;
        }

        if (!formData.email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.phone) {
            formErrors.phone = 'Contact number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = 'Contact number must be 10 digits';
            isValid = false;
        }

        if (!formData.resume) {
            formErrors.resume = 'Resume is required';
            isValid = false;
        }
        if (!formData.remarks) {
            formErrors.remarks = 'Remarks is required';
            isValid = false;
        }


        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
               e.preventDefault();
               if (!validateForm()) return;
       
               let data = { ...formData, formType:"form3" };
       
               setLoading(true); // Set loading to true when submitting
       
               const url = "https://script.google.com/macros/s/AKfycbwa-5_zC4AmvEQXokUoPxBhi5GtoszTveWy64Pr0lcMvsJ5o8Bk7p2l863C0hB-EzQP/exec";
               const formBody = new URLSearchParams(data).toString();
       
       
               fetch(url, {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/x-www-form-urlencoded",
                   },
                   body: formBody,
               })
                   .then((response) => response.text())
                   .then((data) => {
                       setFormData({ name: '', phone: '', email: '', message: '', resume , remarks: '' });
                       setErrors({});
                       setLoading(false); // Reset loading state after submission
                       toast.success("Form submitted successfully!");
                   })
                   .catch((error) => {
                       setLoading(false); // Reset loading state if there's an error
                       toast.error("Submission failed. Please try again.");
                   });
           };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            resume: file,
        });
    };

    return (
        <div ref={sec2Ref} className="w-full min-h-screen flex items-center justify-center p-[2.5vw] sm:px-[4vw] sm:pt-[35vw] md:pt-[20vw] lg:pt-[15vw] pt-[5.5vw] bg-white">
            <div className="sm:w-full md:w-full lg:w-full w-[50%] h-auto backdrop-blur-lg bg-white/60 border border-zinc-200 rounded-2xl p-[2.5vw] flex flex-col justify-between">
                <div className="w-full">
                    <h1 className="sm:font-semibold sm:text-[7vw] md:text-[7vw] text-[3vw] sm:mb-[6vw] capitalize leading-none">Careers at Allastir</h1>
                    <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] text-[1vw] w-[80%] sm:w-full my-[1vw] sm:my-[4.5vw] leading-tight text-zinc-700">
                        We're always looking for passionate individuals to join our team. Share your details below — let’s build something amazing together.
                    </p>
                </div>

                <form onSubmit={handleSubmit}  encType="multipart/form-data"  className="w-full mt-[1.5vw] flex flex-col gap-[1.5vw] sm:gap-[3vw] md:gap-[3vw] sm:text-[3.8vw] md:text-[3.5vw]">
                    <div className="w-full">
                        {errors.name && <p className="text-red-500 text-sm mb-1 sm:text-[3.5vw]">{errors.name}</p>}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] py-[.6vw] sm:px-[2vw] border border-black/20 rounded-md bg-transparent placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/30 transition-all duration-300"
                        />
                    </div>

                    <div className="w-full flex gap-[1vw] sm:gap-[2vw]">
                        <div className="w-full sm:w-[48%]">
                            {errors.phone && <p className="text-red-500 text-sm mb-1 sm:text-[3.5vw]">{errors.phone}</p>}
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                placeholder="Phone Number"
                                onChange={handleChange}
                                className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] py-[.6vw] sm:px-[2vw] border border-black/20 rounded-md bg-transparent placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/30 transition-all duration-300"
                            />
                        </div>

                        <div className="w-full sm:w-[48%]">
                            {errors.email && <p className="text-red-500 text-sm mb-1 sm:text-[3.5vw]">{errors.email}</p>}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email Address"
                                onChange={handleChange}
                                className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] py-[.6vw] sm:px-[2vw] border border-black/20 rounded-md bg-transparent placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/30 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        {errors.resume && <p className="text-red-500 text-sm mb-1 sm:text-[3.5vw]">{errors.resume}</p>}
                        <label htmlFor="resume" className="text-zinc-500 sm:text-[3.5vw] md:text-[3.5vw] mb-[.5vw] block">
                            {'Upload your Resume'}
                        </label>
                        <input
                            type="file"
                            id="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] py-[.6vw] sm:px-[2vw] border border-black/20 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-black/30 transition-all duration-300"
                        />
                    </div>

                    <div className="w-full">
                        {errors.remarks && <p className="text-red-500 text-sm mb-1 sm:text-[3.5vw]">{errors.remarks}</p>}
                        <textarea
                            name="remarks"
                            value={formData.remarks}
                            onChange={handleChange}
                            placeholder="Enter your remarks here"
                            className="w-full resize-none sm:h-[18vw] md:h-[18vw] lg:h-[18vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] py-[.6vw] sm:px-[2vw] border border-black/20 rounded-md bg-transparent placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/30 transition-all duration-300"
                        ></textarea>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] md:py-[2vw] lg:py-[2vw] xl:py-[1.5vw] py-[.6vw] rounded-full font-semibold'>
                            {loading ? (
                                <div className="loader w-full flex items-center justify-center"><img src="/loader.gif" className='w-6' alt="" /></div> // You can use a spinner here
                            ) : (
                                <h4 className='sm:text-[3.5vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[1.8vw] text-[1.1vw] font-normal'>Submit</h4>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Section2;
