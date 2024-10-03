import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const UserCard = ({ user, onArchive, onHide }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArchived, setIsArchived] = useState(user.archived);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleArchive = () => {
    onArchive(); 
    setIsArchived(true);
  
  };

  return (
    <div className="card">
    <img
    src="/photoProfile.png"
    alt="Avatar"
    className={`avatar ${isArchived ? 'archived' : ''}`} 
  />
      <div className="desc">
      <h3 className='user'>{user.username}</h3>
      <p className='userAddress'>{user.address.city}</p>
      <p className='userCompany'>{user.company.name}</p>
      
      </div>


      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}> 
        <img src="/doth.svg" alt="doth" className="doth" />
        </button>

        {isDropdownOpen && (
        <div className="dropdown-menu">
        <button >
        <Link to={`/edit/${user.id}`}>Редактировать</Link>
        </button> 
          <button onClick={handleArchive}>Архивировать</button>
          <button onClick={onHide}>Скрыть</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default UserCard;
