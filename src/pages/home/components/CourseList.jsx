import React from 'react';
import Course from '../../../components/Course'
function CourseList(props) {
    return (
        <>
                <section className="section-courseoffline">
                    <div className="container">
                        <p className="top-des">
                            The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                            has
                            a more-or-less normal
              </p>
                        <div className="textbox">
                            <h2 className="main-title">Khóa học Offline</h2>
                        </div>
                        <div className="list row">

                            <Course name='reactjs' status='dang-dien-ra' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='html' status='da-ket-thuc' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='css' status='' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='scss' status='da-ket-thuc' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='java' status='' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='angular' status='' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='python' status='' des='' image='' teacher_name='' teacher_img='' slug />

                        </div>
                    </div>
                </section>
                <section className="section-courseonline section-blue">
                    <div className="container">
                        <div className="textbox">
                            <h2 className="main-title">Khóa học Online</h2>
                        </div>
                        <div className="list row">
                            <Course name='reactjs' status='dang-dien-ra' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='html' status='da-ket-thuc' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='css' status='' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='scss' status='da-ket-thuc' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='java' status='' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='angular' status='' des='' image='' teacher_name='' teacher_img='' slug />
                            <Course name='python' status='' des='' image='' teacher_name='' teacher_img='' slug />

                        </div>
                        <div className="text-deco">C</div>
                    </div>
                </section>
             
        </>
    );
}

export default CourseList;