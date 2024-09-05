import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import fb from '../../public/Imgae/facebook.png';
import instra from '../../public/Imgae/instagram.png';
import wp from '../../public/Imgae/whatsapp.png';
import phone from '../../public/Imgae/telephone.png';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';


const FormComponent = () => {
    const [formData, setFormData] = useState({
        fromCity: '',
        toDestination: '',
        pickupDate: '',
        pickupTime: '',
        returnDate: '',
        returnTime: '',
        contactPhone: '',
        contactEmail: '',
    });

    const [errors, setErrors] = useState({});
    const [selectedForm, setSelectedForm] = useState('Taxi');
    const [formSuccess, setFormSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState()

    useEffect(() => {
        let timer;
        if (formSuccess) {
            timer = setTimeout(() => {
                setFormSuccess(false); // Hide success message after 5 seconds
            }, 5000);
        }
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, [formSuccess]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.fromCity) tempErrors.fromCity = 'From city is required';
        if (!formData.toDestination) tempErrors.toDestination = 'Destination is required';
        if (!formData.pickupDate) tempErrors.pickupDate = 'Pickup date is required';
        if (!formData.pickupTime) tempErrors.pickupTime = 'Pickup time is required';
        if (selectedForm === 'Rental') {
            if (!formData.returnDate) tempErrors.returnDate = 'Return date is required';
            if (!formData.returnTime) tempErrors.returnTime = 'Return time is required';
        }
        if (!formData.contactPhone) tempErrors.contactPhone = 'Contact number is required';
        else if (!/^[0-9]{10}$/.test(formData.contactPhone)) tempErrors.contactPhone = 'Please enter a valid 10-digit phone number';
        if (!formData.contactEmail) tempErrors.contactEmail = 'Email is required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.contactEmail)) tempErrors.contactEmail = 'Please enter a valid email address';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchContactData(formData);
    };
    const fetchContactData = async (data) => {
        if (validateForm()) {
            setLoading(true); // Set loading state while submitting
            try {
                console.log('Data received:', data);

                let formData = new FormData();
                formData.append('fromCity', data.fromCity);
                formData.append('toDestination', data.toDestination);
                formData.append('pickupDate', data.pickupDate);
                formData.append('pickupTime', data.pickupTime);
                formData.append('returnDate', data.returnDate);
                formData.append('returnTime', data.returnTime);
                formData.append('phone', data.contactPhone);
                formData.append('email', data.contactEmail);              

                const res = await axios.post('https://www.dtstaxi.com/Apis/inquiry.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

                console.log('API Response:', res);

                if (res.data && res.data.msgcode === "1") {
                    console.log('Form submitted successfully', res.data);
                    setFormSuccess(true);
                    setMsg(res.data);
                    setFormData({
                        fromCity: '',
                        toDestination: '',
                        pickupDate: '',
                        pickupTime: '',
                        returnDate: '',
                        returnTime: '',
                        contactPhone: '',
                        contactEmail: '',
                    });
                } else {
                    console.error('Unexpected response:', res.data);
                    setMsg(res.data);
                }
            } catch (error) {
                if (error.response) {
                    console.error('Server error:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error setting up the request:', error.message);
                }
            } finally {
                setLoading(false); // Reset loading state
            }

            setErrors({});
        }
    }


    const handleFormSelection = (formType) => {
        setSelectedForm(formType);
    };

    return (
        <div className='flex flex-col justify-center items-center py-5'>
            <div className='lg:shadow bg-white p-6 rounded border-t border-gray-200'>
                <h1 className='text-center text-[#303030] text-[25px] font-[700] py-4'>Countless destinations at unbeatable prices</h1>
                {/* <div className='flex justify-center items-center text-[20px] font-semibold mb-3'>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="One Way Trip"
                            control={<Radio sx={{ '&.Mui-checked': { color: '#FF9307' } }} />}
                            label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>One Way Trip</span>}
                        />
                        <FormControlLabel
                            value="Round Trip"
                            control={<Radio sx={{ '&.Mui-checked': { color: '#FF9307' } }} />}
                            label={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Round Trip</span>}
                        />
                    </RadioGroup>
                </div> */}
                {/* <div className='flex justify-evenly mb-8'>
                    <nav className='bg-[#FF9307] flex justify-evenly py-2 w-[40%] rounded-full'>
                        <ul className='list-none flex items-center justify-evenly w-full'>
                            {['Taxi', 'Rental', 'Airport'].map((formType) => (
                                <li
                                    key={formType}
                                    className={`text-[#252525] font-[700] text-md hover:text-[#fff] cursor-pointer ${selectedForm === formType ? 'text-[#fff] bg-[#252525] px-4 py-1 rounded-full' : ''}`}
                                    onClick={() => handleFormSelection(formType)}
                                >
                                    {formType}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div> */}
                <Box className="max-w-2xl flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="w-full">
                        <Box className="flex flex-wrap gap-1">
                            <Box className="flex-1">

                                {selectedForm === 'Rental' ? (
                                    <label htmlFor="" className="mb-in" style={{ fontSize: '18px', fontWeight: '600', color: '#303030' }}>
                                        Pickup
                                    </label>

                                ) :
                                    (
                                        <label htmlFor="" className="mb-in" style={{ fontSize: '18px', fontWeight: '600', color: '#303030' }}>
                                            From
                                        </label>
                                    )


                                }


                                <TextField
                                    name="fromCity"
                                    label={selectedForm === 'Rental' ? 'House no-133C, Dayanand Colony, Sector 6, Gurugram' : 'City, Airport, Station, etc.'}
                                    variant="outlined"
                                    fullWidth
                                    value={formData.fromCity}
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
                                    value={formData.pickupDate}
                                    onChange={handleChange}
                                    error={!!errors.pickupDate}
                                    helperText={errors.pickupDate}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="contactPhone"
                                    label="Contact No (+91)"
                                    variant="outlined"
                                    type='number'
                                    fullWidth
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    error={!!errors.contactPhone}
                                    helperText={errors.contactPhone}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="returnDate"
                                    label="Return Date"
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.returnDate}
                                    onChange={handleChange}
                                    error={!!errors.returnDate}
                                    helperText={errors.returnDate}
                                    sx={{ marginBottom: 2 }}
                                />
                                {selectedForm === 'Rental' && (
                                    <TextField
                                        name="returnDate"
                                        label="Return Date"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                        error={!!errors.returnDate}
                                        helperText={errors.returnDate}
                                        sx={{ marginBottom: 2 }}
                                    />
                                )}
                            </Box>
                            <Box className="flex-1 min-w-[300px]">
                                <label htmlFor="" className="mb-in" style={{ fontSize: '18px', fontWeight: '600', color: "#303030" }}>To</label>
                                <TextField
                                    name="toDestination"
                                    label="Destination"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.toDestination}
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
                                    value={formData.pickupTime}
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
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    error={!!errors.contactEmail}
                                    helperText={errors.contactEmail}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    name="returnTime"
                                    label="Return Time"
                                    type="time"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={formData.returnTime}
                                    onChange={handleChange}
                                    error={!!errors.returnTime}
                                    helperText={errors.returnTime}
                                    sx={{ marginBottom: 2 }}
                                />
                                {selectedForm === 'Rental' && (
                                    <TextField
                                        name="returnTime"
                                        label="Return Time"
                                        type="time"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.returnTime}
                                        onChange={handleChange}
                                        error={!!errors.returnTime}
                                        helperText={errors.returnTime}
                                        sx={{ marginBottom: 2 }}
                                    />
                                )}
                            </Box>
                        </Box>
                        <div className='flex justify-center items-center py-4'>
                            <button type="submit" className='text-[#252525] bg-[#FF9307] text-[15px] font-[800] px-40 py-4 rounded'> {loading ? 'Submitting...' : 'Submit Enquiry'}</button>
                        </div>
                        {formSuccess && (
                            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                <p>{msg.message}</p>
                            </div>
                        )}
                    </form>
                </Box>
                <div className='flex justify-center items-center'>
                    <Checkbox />
                    <p className='text-center'>I hereby declare the terms and conditions</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <a href="https://www.facebook.com/share/6Tcqa3wSLwCaTWg2/?mibextid=LQQJ4d" target='_blank'> <img src={fb} alt="fb" className='max-w-full' /> </a>
                    <a href="https://www.instagram.com/dashmeshtravelservices/?igsh=MTNsNGxsb3U1a3FydA%3D%3D" target='_blank'>
                        <img src={instra} alt="fb" className='max-w-full' /> </a>
                    <a href="https://wa.me/9310488108" target='_blank'><img src={wp} alt="fb" className='max-w-full' /></a>
                    <a href="https://wa.me/9310488108" target='_blank'><img src={phone} alt="fb" className='max-w-full' /></a>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;