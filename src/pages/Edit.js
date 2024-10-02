import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser } from '../features/usersSlice';

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    phone: '',
    company: '',
  });

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
        city: currentUser.address.city,
        phone: currentUser.phone,
        company: currentUser.company.name,
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, ...formData }));
    navigate('/');
  };

  return (
    <div className="edit-container">
      <h2>Данные профиля</h2>
      <form onSubmit={handleSubmit}>
        <label>Имя</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
        <label>Имя пользователя</label>
        <input name="username" value={formData.username} onChange={handleChange} required />
        <label>Почта</label>
        <input name="email" value={formData.email} onChange={handleChange} required />
        <label>Город</label>
        <input name="city" value={formData.city} onChange={handleChange} required />
        <label>Телефон</label> <input name="phone" value={formData.phone} onChange={handleChange} required /> 
        <label>Название компании</label> <input name="company" value={formData.company} onChange={handleChange} required />
         <button type="submit">Сохранить</button> 
        </form> 
        </div> 
      ); 
    };

export default Edit;
