import { useState } from "react"
import Popup from "../Popup"
import "./index.css"

function Sample(){
    const [show,setShow]=useState(false)
    const [submit,setSubmit]=useState(false)
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const onClickCheck=()=>{
        setShow(!show)
    }

    const onClickSubmit=()=>{
        setSubmit(!submit)
    }
    const check=show?'text':'password'
    return(
        <div className="sample-container">
            <div className="sign-up-form">
                <h2>Sign Up</h2>
                <label>Username</label>
                <input type="text" placeholder="Enter Username..." onChange={(e)=>setName(e.target.value)}/>
                <label>Password</label>
                <input type={check} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="chek-box-card">
                <input type="checkbox" onClick={onClickCheck}/>
                <p>Check Password</p>
                </div>
                <button type="submit" onClick={onClickSubmit}>Submit</button>
                {submit&&<Popup onClickSubmit={onClickSubmit} name={name} password={password}/>}
            </div>
        </div>
    )
}

export default Sample;