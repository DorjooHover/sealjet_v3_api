import React from 'react'
import logo from "../image/logo.png";
import "../App.css";
import '../component/Sidebar.css'
import { Link } from 'react-router-dom';
function Sidebar(props) {
    return <div className="Sidebar">
        <div className='side-menu'>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt='webscript' />
                </div>
                <div className='arrow'>
                    <i className="bi bi-list-ul"></i>
                </div>

            </div>
            <div className='main-menu'>
                <ul>
                    <Link to="/order" className="link">
                        <li>
                            <a className='menu-item'>
                                <div className='menu-icon'>
                                    <i className="bi bi-check2-square"></i>
                                </div>
                                Захиалга</a>
                        </li>
                    </Link>
                    <Link to="/product" className="link">
                        <li>
                            <a className='menu-item'>
                                <div className='menu-icon'>
                                    <i className="bi bi-box-seam"></i>
                                </div>
                                Бүтээгдэхүүн</a>
                        </li>
                    </Link>

                    <Link to="/news" className="link">
                        <li>
                            <a className='menu-item'>
                                <div className='menu-icon'>
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>
                                Мэдээ</a>
                        </li>
                    </Link>

                    <Link to="/setting" className="link">
                        <li>
                            <a className='menu-item'>
                                <div className='menu-icon'>
                                    <i className="bi bi-gear"></i>
                                </div>
                                Тохиргоо</a>
                        </li>
                    </Link>

                </ul>
            </div>

        </div>
    </div >

}

export default Sidebar
