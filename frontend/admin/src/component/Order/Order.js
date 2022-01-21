import React from 'react'

import Table from '../Table/Table'
import customerList from "../../assets/JsonData/customer-list.json"
import "../Order/Order.css";
import { DeleteOutline } from "@material-ui/icons";
const customerTableHead = [
  
    'Овог, нэр ',
    'Холбогдох утас',
    'И-мэйл',
    'Бүтээгдэхүүний хүсэлт',
    'Огноо',
    '',
    
]
// const handleDeleteClick=(orderID)=>{
//     const newOrders=[...orders];

//     const index=orders
// }

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
      
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.product}</td>
        <td>{item.date}</td>
        <td> <button onclick="document.getElementById('idRow')">Устгах</button>
         <DeleteOutline  /></td>
    </tr>
)

const Order = () => {
    return (
        <div>
            <h2 className="page-header">
                Захиалга
            </h2>
            <div  id="idRow" className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='8'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order