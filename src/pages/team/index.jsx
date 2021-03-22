import React from 'react';
import Mentor from './Mentor'
import Members from './Members'
import Mainlayout from '../../layout/Mainlayout';
function index() {
    return (
        <>
            <main class="team" id="main">
      <section>
            <div className="container">
                <div className="top">
                    <h2 className="main-title">cfd team</h2>
                    <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                    elementum
                    sem non luctus
            </p>
                </div>
                <div className="list row">
                    <Mentor mentor_name='Trần Nghĩa' mentor_title='Founder' />
                    <Mentor mentor_name='Đặng Thuyền Vương' mentor_title='Co-Founder' />
                    <Mentor mentor_name='Đặng Thuyền Quân' mentor_title='Co-Founder' />
                    <Mentor mentor_name='Nguyễn Đức Huy' mentor_title='Co-Founder' />  
                    <Members member_name='1'member_class='' />
                    <Members member_name='2'member_class='' />
                    <Members member_name='3'member_class='' />
                    <Members member_name='4'member_class='' />
                    <Members member_name='5'member_class='' />
                    <Members member_name='6'member_class='' />
                    <Members member_name='7'member_class='' />
                    <Members member_name='8'member_class='' />
                 </div>
            </div>
        </section>
   
        </main>
  
        </>
         );
}

export default index;