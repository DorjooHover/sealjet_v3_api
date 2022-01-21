import React from 'react'
import "../settingss/Settings.css";
function Settings() {
    return (

        <div className='Settings'>
        <h1 className='title'>Тохиргоо</h1>
        <form className='settingForm'>
        <div className="setting">
            <div className='settingItem'>
              <label>Хэрэглэгчийн нэр солих </label> 
              <input type="text" placeholder='User name'/>
             </div>
             <div className='settingItem'>
              <label> Өмнөх нууц үг оруулах</label> 
              <input type="text" placeholder='********'/>
             </div>
             <button className='Button'>Хадгалах</button>
             </div>
             
             <div className="setting">
             <div className='settingItem'>
              <label>Шинэ нууц үг оруулах </label> 
              <input type="text"  placeholder='********'/>
             </div>
             <div className='settingItem'>
              <label>Шинэ нууц үг давтах </label> 
              <input type="text"  placeholder='********'/>
             </div>
             </div>
            
             </form>
             </div>
    )
}

export default Settings
