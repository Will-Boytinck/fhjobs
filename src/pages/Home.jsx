import React, { Component, useEffect, useState, useRef } from 'react';
import "./Home.css";
import ReactDOM from 'react-dom';


var jobs_list = [];
class Home extends Component {


    render() {



        const addRow = (company, title, date, status) => {
            // create an object, add it to the global list of objects
            const row = {
                r_company: company,
                r_title: title,
                r_date: date,
                r_status: status
              };
            jobs_list.add(row)
        }

        const setCompany = (changedValue) => {
            console.log(changedValue);
        }

        const setTitle = (changedTitle) => {

        }

        const setDate = (changedDate) => {

        }

        const setStatus = () => {

        }



        return (
        <div>
            <div className='websiteTitle'>FhJobs</div>
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
                    <p>filler</p>
                </div>
                <div className='statusDiv'>
                    <select className='form-select' value={product.productCategory} onChange={(evt)=>setProduct({...product,productCategory:evt.target.value})}>
                        <option value={Pending}>Pending</option>
                        <option value={Rejected}>Rejected</option>
                        <option value={Interview}>Interview</option>
                        <option value={Online-Assessment}>Online Assessment</option>
                    </select>
                </div>
            </div>
            {/* {render the list of objects} */}




            <div className='addButton' onClick={addRow()}>Add Row</div>
        </div>
        );

    }
}
export default Home;