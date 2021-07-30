import { useState } from "react";
import styles from "../../css-modules/NavBar.module.css";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const [toggleModal, setToggleModal] = useState("");
  const users = useSelector(state => state.session.user)

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
  return (
    <nav>
      <div>Logo Placeholder</div>
      <div>
        <button onClick={handleOnClickToggle}>Login | Signup</button>
        {toggleModal === "signup" && <SignupFormModal handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>}
        {toggleModal === "login" && <LoginFormModal handleOnClickToggle={handleOnClickToggle} handleOffClick={handleOffClick}/>}
      </div>
    </nav>
  )
}

export default NavBar;

