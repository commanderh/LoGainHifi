import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import LogoutButton from "./LogoutButton";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user" />
      </button>
      {showMenu && 
      (
      <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;