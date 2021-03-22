import React, { useRef, useState } from 'react';

export default function Form() {
  let inputRef = useRef()

  let [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    facebook: '',
    coin: false,
    gender:'',
    gender2:''

  })

  let [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    facebook: '',
    coin:false,
    gender:'',
    gender2:''

  })
  
  function selectCustom(e){
    console.log(e.target.dataset.value); /* dataset sẽ lấy toàn bộ attr có data.   value vì tag đặt attr là data-value */
  }

  function Click() {
    console.log(form);
    let errorObj={}
    if(!form.name){
      errorObj.name='Name is missing'
    }


    if(!form.phone){
      errorObj.phone='Phone number is missing'
    } else if(form.phone.length <9 || form.phone.length >11){
      errorObj.phone ='Invalid phone number'
    }

    if(!form.email){
      errorObj.email='Email is missing'
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(form.email)){
      errorObj.email='Invalid email'


    }

    if(!form.facebook){
      errorObj.facebook='Your facebook URL is missing'
    }else if(!/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i.test(form.facebook)){
      errorObj.facebook='Your facebook URL is Invalid'

    }
    setError(errorObj)

    if(Object.keys(errorObj).length===0){
alert('success')
    }
  }


  function inputChange(e) {
    let name = e.target.name,
     value = e.target.value,
    type=e.target.type

    if(type ==='checkbox'){
      value = e.target.checked  /* lấy attr checked  */
    }


    console.log(typeof(e.target.value));
    setForm({
      ...form,    /* cách lấy nhanh 1 object */
      [name]:value /* lấy value của form[name] tại nơi click */
    })

    
  }

  return (
    <div className="form">
      <label>
        <p>Họ và tên<span>*</span></p>
        <input value={form.name} onChange={inputChange} ref={inputRef} type="text" placeholder="Họ và tên bạn" name="name" />
        {error.name && <p className="error-text"> {error.name} </p>}
      </label>
      <label>
        <p>Số điện thoại<span>*</span></p>
        <input value={form.phone} onChange={inputChange} type="text" placeholder="Số điện thoại" name="phone" />
        {error.phone && <p className="error-text"> {error.phone} </p>}
      </label>
      <label>
        <p>Email<span>*</span></p>
        <input value={form.email} onChange={inputChange} type="text" placeholder="Email của bạn" name="email" />
        {error.email && <p className="error-text"> {error.email}</p>}
      </label>
      <label>
        <p>URL Facebook<span>*</span></p>
        <input value={form.facebook} onChange={inputChange} type="text" placeholder="https://facebook.com" name="facebook" />
        {error.facebook && <p className="error-text">{error.facebook} </p>}
      </label>
      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          
          <input checked={form.coin} type="checkbox"  onClick={inputChange} name="coin" />
          <span className="checkmark" />
        </div>
      </label>
      

      <label className="disable">


    
        <p>Sử dụng COIN 2</p>
        <div className="checkcontainer">
          
          
          <input checked={form.gender==='male'} type="radio"  onClick={inputChange} name="gender" value='male' /> Male

          {/* form.gender === 'male' vì 1 lúc chỉ đc tick 1 giá trị male hoặc female */}
          <span className="checkmark" />
          
        </div>
      </label>
      <label className="disable">
        
        <div className="checkcontainer">
          
          
          
          <input checked={form.gender==='female'} type="radio"  onClick={inputChange} name="gender" value='female' /> Female
          {/* form.gender === 'male' vì 1 lúc chỉ đc tick 1 giá trị male hoặc female */}
          <span className="checkmark" />
        </div>
      </label>

       

         {/* -----------xử lí option------------ */}
     {/*  <label className="disable">
        
        <div className="checkcontainer">
          <select name="gender2" id="" onChange={inputChange}>
            <option value=""selected ={form.gender2===''}>------gender------</option>
            <option value="male" selected ={form.gender2==='male'}>male</option>
            <option value="female" selected ={form.gender2==='female'}>female</option>
          </select>
          
          
          
        </div>
      </label> */}
      <label>
                            <p>Hình thức thanh toán</p>
                            <div class="select">
                                <div class="head">Chuyển khoản</div>
                                <div class="sub">
                                    <a href="#" onClick={selectCustom} data-value ='chuyen-khoan'>Chuyển khoản</a>
                                    <a href="#" onClick={selectCustom} data-claue='tien-mat'>Thanh toán tiền mặt</a>
                                </div>
                            </div>
                        </label>
      <label>
        <p>Ý kiến cá nhân</p>
        <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
      </label>
      <div className="btn main rect" onClick={Click}>đăng ký</div>
    
    </div>

  );
}

