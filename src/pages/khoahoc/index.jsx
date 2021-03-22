import React from 'react';
import Course from '../../components/Course'
import Mainlayout from '../../layout/Mainlayout';
function Khoahoc(props) {
    return (
        <>
            <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">ONLINE</h2>
                    </div>
                    <div className="list row">
                        <Course name='reactjs' status='dang-dien-ra' des='' image='/img/img1.png' teacher_name='' teacher_img='' slug />
                        <Course name='html' status='da-ket-thuc' des='' image='/img/img5.png' teacher_name='' teacher_img='' slug />
                        <Course name='css' status='' des='' image='/img/img4.png' teacher_name='' teacher_img='' slug />
                        <Course name='scss' status='da-ket-thuc' des='' image='/img/img3.png' teacher_name='' teacher_img='' slug />
                        <Course name='java' status='' des='' image='/img/img2.png' teacher_name='' teacher_img='' slug />
                        <Course name='angular' status='' des='' image='/img/img1.png' teacher_name='' teacher_img='' slug />
                        <Course name='python' status='' des='' image='/img/img.png' teacher_name='' teacher_img='' slug /></div>
                </div>
            </section>
            <section className="section-2 section-blue">
                <div className="container">
                    <div className="textbox white">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        <Course name='reactjs' status='dang-dien-ra' des='' image='/img/img.png' teacher_name='' teacher_img='' slug />
                        <Course name='html' status='da-ket-thuc' des='' image='/img/img1.png' teacher_name='' teacher_img='' slug />
                        <Course name='css' status='' des='' image='/img/img2.png' teacher_name='' teacher_img='' slug />
                        <Course name='css' status='' des='' image='/img/img3.png' teacher_name='' teacher_img='' slug />
                        <Course name='css' status='' des='' image='/img/img4.png' teacher_name='' teacher_img='' slug />
                        <Course name='css' status='' des='' image='/img/img1.png' teacher_name='' teacher_img='' slug />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </main>
    
        </>
        );
}

export default Khoahoc;