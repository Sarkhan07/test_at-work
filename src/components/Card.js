import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const UserCard = ({ user, onArchive, onHide }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="card">
      <img src="/photoProfile.png" alt="Avatar" className="avatar" />
      <h3>{user.username}</h3>
      <p>{user.address.city}</p>
      <p>{user.company.name}</p>

      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}> <img src="/doth.svg" alt="doth" className="avatar" /></button>

        {isDropdownOpen && (
        <div className="dropdown-menu">
        <button ><Link to={`/edit/${user.id}`}>Редактировать</Link></button> 
          <button onClick={onArchive}>Архивировать</button>
          <button onClick={onHide}>Скрыть</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default UserCard;
