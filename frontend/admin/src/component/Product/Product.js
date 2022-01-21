import React from 'react'
import "../Product/Product.css";
import { Alert } from 'react-alert'

function Product() {
    return (
     <div className='Products'>
        <h1 className='title'>Бүтээгдэхүүн</h1>
        <form className='productForm'>
        <div className="product">
            <div className='productItem'>
              <label>Бүтээгдэхүүний нэр </label> 
              <input type="text" />
             </div>
             
             <div className='productItem'>
            <label>Бүтээгдэхүүний код</label> 
            <input type="text"/>
            </div>

            <div className='productItem'>
            <label>Тайлбар</label> 
            <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className='productItem'>
           <label for="image">Зураг оруулах</label> 
            <input type="file"/>
            </div>
            <button onclick="Button1" className='Button1'>Нийтлэх</button>
            <script>
              {
             alert("Амжилттай нийтлэгдлээ.")
              }
            </script>
         </div>

         <div className="product2">
            <div className='productItem'>
        <label placeholder='Сонгоно уу'>Ангилал</label> 
        <select className='classification' placeholder='Сонгоно уу' name="active" id="active">
            <option value="classification1">Бүлүүрийн сальник</option>
            <option value="classification2">Голын сальник</option>
            <option value="classification3">Арчих сальник</option>
            <option value="classification3">Эргэлтийн сальник</option>
            <option value="classification3">Чиглүүлэгч цагираг</option>
            <option value="classification3">Туслах цагираг</option>
            <option value="classification3">Бусад</option>


        </select>
        </div>
        <div className='productItem'>
        <label placeholder='Сонгоно уу'>Температур</label> 
        <select className='classification' placeholder='Сонгоно уу' name="active" id="active">
            <option value="classification1">-30C..+110C</option>
            <option value="classification2">-20C...+110C</option>
            <option value="classification3">-20C...+110C</option>
            <option value="classification3">-50C...+110C</option>
            <option value="classification3">-30C...+110C</option>

        </select>
        </div>
        <div className='productItem'>
        <label placeholder='Сонгоно уу'>Шилжилтийн хурд</label> 
        <select className='classification' placeholder='Сонгоно уу' name="active" id="active">
            <option value="classification1">0.5 m/s</option>
            <option value="classification2">0.7 m/s</option>
            <option value="classification3">1 m/s</option>
        </select>
        </div>

        <div className='productItem'>
        <label placeholder='Сонгоно уу'>Даралт</label> 
        <select className='classification' placeholder='Сонгоно уу' name="active" id="active">
            <option value="classification1">16 bar (230 psi)</option>
            <option value="classification2">25 bar (360 psi)</option>
            <option value="classification3">100 bar (1450 psi)</option>
            <option value="classification4">160 bar (2300 psi)</option>
            <option value="classification5">200 bar (2900 psi)</option>
            <option value="classification6">250 bar (3600 psi)</option>
            <option value="classification7">400 bar (5800 psi)</option>
            <option value="classification8">500 bar (7200 psi)</option>
            <option value="classification9">600 bar (8700 psi)</option>
            <option value="classification10">700 bar (10.000 psi)</option>
            <option value="classification11">1500 bar (21000 psi)</option>
        </select>
        </div>
        
        <div className='productItem'>
        <label placeholder='Сонгоно уу'>Материал</label> 
        <input type="text"/>
        </div>
      
</div>
<div className="product">

           

            
        </div>
        </form>
            
            
          
</div>
          
        
            
    )
}

export default Product
/*<label for="pcode">Бүтээгдэхүүний код</label>
            <input type="text" id="pcode" name="pcode" className='pcode'/>
            <label for="description">Тайлбар</label>
            <input type="text" id="description" name="description" className='description'/>*/