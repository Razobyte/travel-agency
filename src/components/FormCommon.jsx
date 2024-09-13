import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import fb from '../../public/Imgae/facebook.png';
import instra from '../../public/Imgae/instagram.png';
import wp from '../../public/Imgae/whatsapp.png';
import phone from '../../public/Imgae/telephone.png';

const FormCommon = () => {
    const [formValue, setFormValue] = useState({
        fromCity: '',
        toDestination: '',
        pickupDate: '',
        pickupTime: '',
        contactPhone: '',
        contactEmail: '',
    });

    const [errors, setErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState();

    useEffect(() => {
        let timer;
        if (formSuccess) {
            timer = setTimeout(() => {
                setFormSuccess(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [formSuccess]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formValue.fromCity) tempErrors.fromCity = 'From city is required';
        if (!formValue.toDestination) tempErrors.toDestination = 'Destination is required';
        if (!formValue.pickupDate) tempErrors.pickupDate = 'Pickup date is required';
        if (!formValue.pickupTime) tempErrors.pickupTime = 'Pickup time is required';
        if (!formValue.contactPhone) tempErrors.contactPhone = 'Contact number is required';
        else if (!/^[0-9]{10}$/.test(formValue.contactPhone)) tempErrors.contactPhone = 'Please enter a valid 10-digit phone number';
        if (!formValue.contactEmail) tempErrors.contactEmail = 'Email is required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValue.contactEmail)) tempErrors.contactEmail = 'Please enter a valid email address';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchContactData(formValue);
    };

    const fetchContactData = async (data) => {
        if (validateForm()) {
            setLoading(true);
            try {
                let formData = new FormData();
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key]);
                });

                const res = await axios.post('https://www.dtstaxi.com/Apis/inquiry.php', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

                if (res.data && res.data.msgcode === "1") {
                    setFormSuccess(true);
                    setMsg(res.data);
                    setFormValue({
                        fromCity: '',
                        toDestination: '',
                        pickupDate: '',
                        pickupTime: '',
                        contactPhone: '',
                        contactEmail: '',
                    });
                } else {
                    setMsg(res.data);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setLoading(false);
            }
            setErrors({});
        }
    };

    return (
        <div className='flex flex-col justify-center items-center sm:py-5  py-0 px-4 sm:px-6 lg:px-8'>
            <div className='w-full sm:max-w-4xl sm:bg-white bg-transparent p-4 sm:p-6 rounded shadow-lg border-t border-gray-200'>
                <h1 className='text-center text-[#303030] text-xl sm:text-2xl lg:text-[25px] font-bold py-4'>Countless destinations at unbeatable prices</h1>
                <Box className="w-full">
                    <form onSubmit={handleSubmit} className="w-full">
                        <Box className="flex flex-col sm:flex-row sm:gap-4 gap-2">
                            <Box className="flex-1">
                                <label className="block text-lg font-semibold text-[#303030] mb-2">From</label>
                                <TextField
                                    name="fromCity"
                                    label="City, Airport, Station, etc."
                                    variant="outlined"
                                    fullWidth
                                    value={formValue.fromCity}
                                    onChange={handleChange}
                                    error={!!errors.fromCity}
                                    helperText={errors.fromCity}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="pickupDate"
                                    label="Pickup Date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={formValue.pickupDate}
                                    onChange={handleChange}
                                    error={!!errors.pickupDate}
                                    helperText={errors.pickupDate}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="contactPhone"
                                    label="Contact No (+91)"
                                    variant="outlined"
                                    type='tel'
                                    fullWidth
                                    value={formValue.contactPhone}
                                    onChange={handleChange}
                                    error={!!errors.contactPhone}
                                    helperText={errors.contactPhone}
                                    sx={{ marginBottom: 2 }}
                                />
                            </Box>
                            <Box className="fmd:lex-1 hidden">
                                <label className="block text-lg font-semibold text-[#303030] mb-2">To</label>
                                <TextField
                                    name="toDestination"
                                    label="Destination"
                                    variant="outlined"
                                    fullWidth
                                    value={formValue.toDestination}
                                    onChange={handleChange}
                                    error={!!errors.toDestination}
                                    helperText={errors.toDestination}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="pickupTime"
                                    label="Pickup Time"
                                    type="time"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={formValue.pickupTime}
                                    onChange={handleChange}
                                    error={!!errors.pickupTime}
                                    helperText={errors.pickupTime}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="contactEmail"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    value={formValue.contactEmail}
                                    onChange={handleChange}
                                    error={!!errors.contactEmail}
                                    helperText={errors.contactEmail}
                                    sx={{ marginBottom: 2 }}
                                />
                            </Box>
                        </Box>
                        <div className='flex justify-center items-center py-4'>
                            <button type="submit" className='w-full sm:w-auto text-[#252525] bg-[#FF9307] text-base sm:text-lg font-bold px-8 sm:px-40 py-3 sm:py-4 rounded'>
                                {loading ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                        </div>
                        {formSuccess && (
                            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                <p>{msg.message}</p>
                            </div>
                        )}
                    </form>
                </Box>
                <div className='flex items-center justify-center mt-4'>
                    <Checkbox />
                    <p className='text-center text-black text-sm sm:text-base'>I hereby declare the terms and conditions</p>
                </div>
                <div className='flex justify-center items-center gap-3 mt-4'>
                    <a href="https://www.facebook.com/share/6Tcqa3wSLwCaTWg2/?mibextid=LQQJ4d" target='_blank' rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" className='w-8 h-8' />
                    </a>
                    <a href="https://www.instagram.com/dashmeshtravelservices/?igsh=MTNsNGxsb3U1a3FydA%3D%3D" target='_blank' rel="noopener noreferrer">
                        <img src={instra} alt="Instagram" className='w-8 h-8' />
                    </a>
                    <a href="https://wa.me/9310488108" target='_blank' rel="noopener noreferrer">
                        <img src={wp} alt="WhatsApp" className='w-8 h-8' />
                    </a>
                    <a href="tel:9310488108">
                        <img src={phone} alt="Phone" className='w-8 h-8' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FormCommon;