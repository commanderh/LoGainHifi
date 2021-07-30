import { useState } from "react";
import styles from "../../css-modules/NavBar.module.css";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

const NavBar = () => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState("");
  const user = useSelector(state => state.session.user)

  const handleOnClickToggle = () => {
    if(!toggleModal) {
      setToggleModal("signup");
      return
    }
    const modalToShow = toggleModal === "signup" ? "login" : "signup"
    setToggleModal(modalToShow);
  }
  
  const handleOffClick = () => {
    setToggleModal("");
  }

  let isUserLoggedIn;
  if(!user) {
    isUserLoggedIn = (
      <>
        <button onClick={handleOnClickToggle}>Login | Signup</button>
        {toggleModal === "signup" && <SignupFormModal handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>}
        {toggleModal === "login" && <LoginFormModal handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>}
      </>
    )
  } else {
    isUserLoggedIn = (
      <ProfileButton user={user}/>
    )
  }

  return (
    <nav>
      <div>Logo Placeholder</div>
      <div className="right-side">
        {isUserLoggedIn}
      </div>
    </nav>
  )
}

export default NavBar;

