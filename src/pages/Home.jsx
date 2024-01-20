import React, { Component, useEffect, useState, useRef } from 'react';
import "./Home.css";

const Home = () => {
    //TODO: job section needs unique div name

    const [date, setDate] = useState('');
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [jobs_list, setList] = useState([
        { r_company: 'Amazon', r_title: 'Software Engineer', r_date: '01-15-2022', r_status: 'Pending' }
    ]);

    const dateInputRef = useRef(null);
    
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    
    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const addRow = () => {
        // create an object, add it to the global list of objects

        const row = {
            r_company: company,
            r_title: title,
            r_date: date,
            r_status: status
        };
        
        //jobs_list.push(row)

        setList([...jobs_list, row]);
        console.log("button pushed");

    }

   
        return (
        <div>
            <div className='websiteTitle'>FhJobs</div>
            <div className='wrapper'>
                <div className='explanationRow'>
                    <div className='companyName'>Company</div>
                    <div className='jobTitle'>Title</div>
                    <div className='dateApplied'>Date Applied</div>
                    <div className='jobStatus'>Status</div>
                </div>
                <div className='inputRow'>
                    <div className='companyDiv'>
                        <input onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className='titleDiv'>
                        <input onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='dateDiv'>
                        <input
                            type="date"
                            onChange={handleDateChange}
                            ref={dateInputRef}
                        />
                        {/* <p>Selected Date: {date}</p> */}
                    </div>
                    <div className='statusDiv'>
                    <select name="statusDrop" className='statusDropDown' onChange={(e) => setStatus(e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="interview">Interview</option>
                        <option value="oa">OA</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    </div>
                    
                    </div>
                </div>
           

            <div className='addButton' onClick={addRow}>Add Row</div>

            <div className='jobsSection'>
            {jobs_list.map((job) => (
                <div key={job.id}>
                <strong>Title:</strong> {job.r_title},{' '}
                <strong>Company:</strong> {job.r_company},{' '}
                <strong>Date:</strong> {job.r_date},{' '}
                <strong>Status:</strong> {job.r_status}
                </div>
                ))}
            </div>

        </div>
        );

    
}
export default Home;