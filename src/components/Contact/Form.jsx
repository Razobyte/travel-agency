import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import axios from 'axios';

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

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
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validate = () => {
    let tempErors = {};
    tempErors.fullName = formValues.fullName ? '' : 'This field is required.';
    tempErors.phone = formValues.phone ? '' : 'This field is required.';
    tempErors.email = formValues.email ? '' : 'This field is required.';
    tempErors.message = formValues.message ? '' : 'This field is required.';

    setErrors({
      ...tempErors
    });

    return Object.values(tempErors).every(x => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('fullName', formValues.fullName);
        formData.append('phone', formValues.phone);
        formData.append('email', formValues.email);
        formData.append('message', formValues.message);

        const res = await axios.post('https://dtstaxi.com/Apis/inquiry.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });

        if (res.data && res.data.msgcode === "1") {
          setFormSuccess(true);
          setMsg(res.data.message);
          setFormValues({
            fullName: '',
            phone: '',
            email: '',
            message: ''
          });
        } else {
          console.error('Unexpected response:', res);
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
    <div className='w-screen flex justify-center items-center sm:pl-0 pl-5'>
      <div className='max-w-6xl flex flex-col md:flex-row lg:gap-12 sm:gap-6 gap-3 lg:mt-12 sm:mt-6 mt-4'>
        {/* Contact Form */}
        <div className='w-10/12 md:w-1/2 flex justify-center items-center'>
          <Box
            component="form"
            sx={{
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              padding: '20px',
              borderRadius: '8px',
            }}
            onSubmit={handleSubmit}
          >
            <h3 className='text-center text-[#252525] font-bold text-3xl mb-4 py-5'>
              Ride With Us
            </h3>
            <TextField
              id="fullName"
              label="Full Name *"
              variant="outlined"
              name="fullName"
              type='text'
              value={formValues.fullName}
              onChange={handleChange}
              InputProps={{ style: { backgroundColor: '#ffffff' } }}
              error={!!errors.fullName}
              helperText={errors.fullName}
              sx={{ mb: 2, width: '100%' }}
            />
            <TextField
              id="phone"
              label="Phone Number *"
              variant="outlined"
              name="phone"
              type='number'
              value={formValues.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              InputProps={{ style: { backgroundColor: '#ffffff' } }}
              sx={{ mb: 2, width: '100%' }}
            />
            <TextField
              id="email"
              label="Email *"
              variant="outlined"
              name="email"
              type='email'
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{ style: { backgroundColor: '#ffffff' } }}
              sx={{ mb: 2, width: '100%' }}
            />
            <TextField
              id="message"
              label="Message *"
              variant="outlined"
              name="message"
              type='text'
              value={formValues.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{ style: { backgroundColor: '#ffffff' } }}
              multiline
              rows={2}
              sx={{ mb: 2, width: '100%' }}
            />
            <div className='flex justify-center items-center
             w-full rounded bg-[#f57c00] hover:bg-[#e65132] hover:text-white font-bold text-white py-3 my-6'>
              <button
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? 'Submitting...' : 'ENQUIRY NOW'}
              </button>
            </div>
            {formSuccess && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                <p>{msg}</p>
              </div>
            )}
          </Box>
        </div>

        {/* Contact Information */}
        <div className='w-full md:w-1/2'>
          <div>
            <h1 className='text-[#5E5E5E] font-semibold text-3xl'>India</h1>
            <h2 className='text-[#5E5E5E] font-medium text-2xl'>Gurugram</h2>
          </div>
          <div className='flex gap-2 pt-5'>
            <IoLocationSharp color='#FF9307' size={30} />
            <p className='text-[#5E5E5E] text-md'>
              Shop No - 2 Khasra No. 224/2/2/3 Sector - 37 D
              Beside BPTP Society Near Bharat Petrol Pump Gurgaon
            </p>
          </div>
          <div className='flex gap-2 pt-5'>
            <IoLocationSharp color='#FF9307' size={30} />
            <p className='text-[#5E5E5E] text-md'>
              House no, 133C, Dayanand Colony Rd, near ICICI Bank, Ashok
              Puri, Dayanand Colony, Sector 6, Gurugram, Haryana 122006
            </p>
          </div>
          <a href="https://wa.me/9310488108" target="_blank" rel="noopener noreferrer">
            <div className='flex gap-4 pt-5'>
              <FaPhoneVolume color='#FF9307' size={18} />
              <p className='text-[#5E5E5E] text-md'>
                <span className='font-bold'>Phone</span> - 9310488108/9315535846/8700302272
              </p>
            </div>
          </a>
          <a href="mailto:support@dtstaxi.com" target="_blank" rel="noopener noreferrer">
            <div className='flex gap-3 pt-7'>
              <IoIosMail color='#FF9307' size={26} />
              <p className='text-[#5E5E5E] text-md'>
                <span className='font-bold'>Email</span> - support@dtstaxi.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}