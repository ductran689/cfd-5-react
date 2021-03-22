import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Popup_login from '../components/Popup_login';

function Mainlayout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            <Popup_login/>
        </>
    );
}

export default Mainlayout;