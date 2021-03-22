import React from 'react';
import Form from '../../components/Form'
import Mainlayout from '../../layout/Mainlayout';
import Form_hoptac from './Form_hoptac';
function Hoptac(props) {
  return (
    <>
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
        <Form_hoptac />
      </section>

    </main>
    </>
  );
}

export default Hoptac;