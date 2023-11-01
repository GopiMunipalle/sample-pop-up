import { useState } from "react";
import PasswordItems from "../PasswordItems"
import "./index.css"

function PasswordManager(){
    const [website,setWebsite]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [click,setClick]=useState(false)
    const [details,setDetails]=useState([])

    const onAdd=()=>{
        let newId=details.length+1
        const user={
            id:newId,
            website:website,
            username:username,
            password:password
        }
        if(website!=='' && username!=='' && password!==''){
            setDetails([...details,user])
            setUsername('')
            setWebsite('')
            setPassword('')
        }else{
            alert("please Enter valid Details")
        }
    }
    const deleteUser=(id)=>{
        const updatedDetails=details.filter(each=>each.id!==id)
        setDetails(updatedDetails)
    }
    const clickShow=()=>{
        setClick(!click)
    }
    
    return(
        <div className="password-manager-container">
            <img src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
            alt='app logo' className="app-logo"/>
            <div className="add-password-container">
                <img src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manage" className="password-manager-image"/>
                <div className="add-new-password-container">
                    <h1 className="new-password-heading">Add New Password</h1>
                    <div className="password-items-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                        alt='website' className="website-logo"/>
                        <input type="text" 
                        onChange={(e)=>setWebsite(e.target.value)}
                        value={website}
                        placeholder="Enter Website" 
                        className="input"/>
                    </div>
                    <div className="password-items-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                        alt='website' className="website-logo"/>
                        <input type="text" 
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                        placeholder="Enter Username"
                        className="input"/>
                    </div>
                    <div className="password-items-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                        alt='website' className="website-logo"/>
                        <input type="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter Password" 
                        className="input"/>
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <button type="submit" className="add-button" onClick={onAdd}>Add</button>
                    </div>
                </div>
            </div>
            <div className="your-passwords-container">
                <div className="your-search-container">
                    <h1 className="your-passwords">Your Passwords<span>{details.length}</span></h1>
                    <div className="search-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                        alt="search" className="search-logo"/>
                        <input type="search" className="input" placeholder="Search"/>
                    </div>
                </div>
                <hr/>
                <div className="bottom-items-container">
                    <div className="check-password-container">
                        <input type="checkbox" 
                        onClick={clickShow}
                        className="check-box"/>
                        <p>Show Passwords</p>
                    </div>
                    <ul className="password-items">
                        {details.length===0&&
                        <div className="no-items-image">
                            <img src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                            className="no-passwords" alt="no passwords"/>
                        </div>}
                        {details.map(each=>(
                            <PasswordItems key={each.id}
                            click={click}
                             deleteUser={deleteUser} 
                             itemDetails={each}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PasswordManager;