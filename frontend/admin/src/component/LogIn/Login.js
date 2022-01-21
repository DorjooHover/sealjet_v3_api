import React ,{useState}from 'react'
import "./Login.css";
import logo from '../img/sealjet.png';
function LoginForm({Login,error}) {
    const[details,setDetails] = useState ({name:'', email:'',password:''});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }


    return (
        <div>
            <div className="login">
            <form onSubmit={submitHandler} >
                <div className="form-inner">
                    <div className="logo">
                        <img src={logo} width={176}  alt="" />
                    </div>
                    {(error !='') ?( <div className="error">{error}</div> ) :'' }
                    {/* <div className="form-group">
                        <label htmlFor="name">Нэвтрэх нэр:</label>
                        <input type="text" name='name' id='name' onChange={e=> setDetails ({...details,name: e.target.value})} value={details.name} />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="email">Нэвтрэх нэр</label>
                        <input type="text" name="email" id="email" onChange={e=> setDetails ({...details,email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Нууц үг:</label>
                        <input type="password" name="password" id=""  onChange={e=> setDetails ({...details,password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="Нэвтрэх" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginForm