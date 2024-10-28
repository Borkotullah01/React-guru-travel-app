import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Home from '../Pages/HomePage/Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className='h-[68px]'></div> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;