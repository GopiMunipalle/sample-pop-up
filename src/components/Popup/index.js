import "./index.css"

function Popup(props){
    const {onClickSubmit,name,password}=props
    const onClickClose=()=>{
        onClickSubmit(false)
    }
    return(
        <div className="pop-card">
            <h2>Chek the Enterd Details</h2>
            <label>Username</label>
            <input type="text" value={name}/>
            <label>Password</label>
            <input type="password" value={password}/>

            <button style={{marginTop:'10px'}} type="button" onClick={onClickClose}>Close</button>
        </div>
    )
}
export default Popup;