function UserGretting(props) {
  if (props.isLoggedin) {
    return <h2 className="welcome-message">Welcome {props.username}</h2>;
  }
  else{
    return <h2 className="login-prompt">please log in to continue</h2>
  }
}

export default UserGretting;
