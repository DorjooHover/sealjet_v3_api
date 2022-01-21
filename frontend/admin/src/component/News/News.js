import React,{ useState, Fragment } from 'react'
import "../News/News.css";
import UserList from './User/userList';

 function News() {
    return (
        <div className='News'>
            <h1 className='title'>Мэдээ</h1>
            <form className='newsForm'>
                <div className="news">
                <div className='newsItem'>
                    <label>Мэдээний гарчиг</label>
                    <input type="text"/>
                </div>
                <div className='newsItem'>
                <label>Мэдээний дэлгэрэнгүй</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='newsItem'>
                <label >Ангилал</label> 
                  <select className='classification' placeholder='Сонгоно уу' name="active" id="active">
                     <option value="classification1" placeholder='Сонгоно уу'>Ангилал1</option>
                     <option value="classification2">Ангилал2</option>
                     <option value="classification3">Ангилал3</option>
                 </select>
                </div>
                <div className='newsItem'>
                <label>Зураг оруулах</label>
                <input type="file" />
                </div>
                <button className='Button'>Нийтлэх</button>
                </div>
                <div className="news">
                    <div className='newsItem_2'>
                <label>Сүүлд оруулсан мэдээнүүд</label> 
                <UserList/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default News
