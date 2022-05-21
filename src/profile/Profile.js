import PropTypes from 'prop-types';
const Profile = ({fullName="roukaya" , bio="bio" , profession ="ingénieur",handleName ,children}) => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{marginLeft:'auto',marginRight:'auto',marginTop:10}} >
        {children}
        </div>
        <h2 style={{color:'red',textAlign:'center'}}>{fullName}</h2>
        <h4 style={{textAlign:'center',color:'blue'}}>{profession} </h4>
        <p style={{fontStyle:'italic',textAlign:'center',marginLeft:50,marginRight:50}}>{bio}</p>
        <button style={{background:'rgb(35 187 173)',border:'none',fontWeight:'bolder',padding:'7px 22px 7px 22px',color:'white',borderRadius:30,marginRight: 'auto',marginLeft: 'auto',marginBottom:20}} onClick={() => handleName(fullName)}>Send</button>
    </div>
  )
}

Profile.propTypes = {
    fullName :PropTypes.string,
    bio :PropTypes.string, 
    profession :PropTypes.string,
    handleName :PropTypes.func,
    children :PropTypes.element
}

export default Profile