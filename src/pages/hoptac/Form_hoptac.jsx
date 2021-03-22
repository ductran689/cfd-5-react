import React, { useRef, useState } from 'react';

export default function Form_hoptac(props) {
  let inputRef = useRef()

  let [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    title:'',
    content:''

  })

  let [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    title:'',
    content:''
  })


  function Click() {
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

    if(!form.website){
      errorObj.website='Your website URL is missing'
    }else if(!/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i.test(form.website)){
      errorObj.website='Your website URL is Invalid'

    }
    if(!form.title){
      errorObj.title='Title is missing'
    }
    if(!form.content){
      errorObj.content='Title is missing'
    }

    setError(errorObj)

    if(Object.keys(errorObj).length===0){
alert('success')
    }
  }


  function inputChange(e) {
    /* let name = e.target.name
    let value = e.target.value */
    console.log(typeof(e.target.value));
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }




    return (
        <div className="form">
        <label>
          <p>Họ và tên<span>*</span></p>
          <input onChange={inputChange} value ={form.name}  type="text" placeholder="Họ và tên bạn" name="name" />
          {error.name && <p className="error-text" > {error.name}</p>}
        </label>
        <label>
          <p>Số điện thoại</p>
          <input onChange={inputChange} value ={form.phone} type="text" placeholder="Số điện thoại" name="phone" />
          {error.phone && <p className="error-text" > {error.phone}</p>}
        </label>
        <label>
          <p>Email<span>*</span></p>
          <input onChange={inputChange} value ={form.email} type="text" placeholder="Email của bạn" name="email" />
          {error.email && <p className="error-text" > {error.email}</p>}
        </label>
        <label>
          <p>Website</p>
          <input onChange={inputChange} value ={form.website} type="text" placeholder="Đường dẫn website http://" name="website" />
          {error.website && <p className="error-text" > {error.website}</p>}
        </label>
        <label>
          <p>Tiêu đề<span>*</span></p>
          <input onChange={inputChange} value ={form.title} type="text" placeholder="Tiêu đề liên hệ" name="title" />
          {error.title && <p className="error-text" > {error.title}</p>}
        </label>
        <label>
          <p>Nội dung<span>*</span></p>
          <textarea onChange={inputChange} value ={form.content} name id cols={30} rows={10} defaultValue={""} name="content" />
          {error.content && <p className="error-text" > {error.content}</p>}
        </label>
        <div onClick={Click} className="btn main rect">đăng ký</div>
      </div>
    );
    }

