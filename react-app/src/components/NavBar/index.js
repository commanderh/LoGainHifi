import { useState } from "react";
import styles from "../../css-modules/NavBar.module.css";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreateTopicModal from "../CreateTopicModal"

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
        <button id="newTopic" onClick={handleOnClickToggle}>New Topic</button>
        {toggleModal === "newTopic" && <CreateTopicModal handleOffClick={handleOffClick}/>}
      </>
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

