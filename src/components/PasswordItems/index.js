import './index.css'

function PasswordItems(props){
    const {itemDetails,deleteUser,click}=props
    const {id,website,username,password}=itemDetails

    const onDelete=()=>{
        deleteUser(id)
    }

    return(
        <div className='li-container'>
            <div className='initial-container'>
            <h1 className='first-letter'>{website[0]}</h1>
            </div>
            <div>
            <h2 className='heading'>{website}</h2>
            <p className='password'>{username}</p>
            {click?<p>{password}</p>:<img src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
            alt='stars' className='stars'/>}
            </div>
            <img src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
            alt="delete" 
            onClick={onDelete} 
            className='delete'/>
        </div>
    )
}
export default PasswordItems;