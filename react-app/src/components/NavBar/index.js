import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { Link } from "react-router-dom";
import CreateTopicModal from "../CreateTopicModal";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
import logo from "../../assets/logo.png";
import styles from "../../css-modules/NavBar.module.css";

const NavBar = () => {
  const [toggleModal, setToggleModal] = useState("");
  const user = useSelector(state => state.session.user)

  const handleOnClickToggle = (e) => {
    // if(!toggleModal) {
    //   setToggleModal("signup");
    //   return
    // }
    // const modalToShow = toggleModal === "signup" ? "login" : "signup"
    console.log(e.target.id)
    setToggleModal(e.target.id);
  }
  
  const handleOffClick = () => {
    setToggleModal("");
  }




  let isUserLoggedIn;
  if(!user) {
    isUserLoggedIn = (
      <>
        <button id="signup" onClick={handleOnClickToggle}>Login | Signup</button>
        {(toggleModal === "signup" || toggleModal === "signup2")&& <SignupFormModal handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>}
        {toggleModal === "login" && <LoginFormModal handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>}
      </>
    )
  } else {
    isUserLoggedIn = (
      <>
        <ProfileButton user={user}/>
      </>
    )
  }
  console.log(styles)
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLeftContainer}>
        <Link to="/">
          <img className={styles.navLogo} src={logo} alt=""></img>
        </Link>
      </div>
      <div className={styles.navbarRightContainer}>
        {isUserLoggedIn}
      </div>
    </nav>
  )
}

export default NavBar;

