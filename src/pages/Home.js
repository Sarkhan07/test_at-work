import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, archiveUser, hideUser } from '../features/usersSlice';
import UserCard from '../components/Card';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleArchive = (id) => {
    dispatch(archiveUser(id));
  };

  const handleHide = (id) => {
    dispatch(hideUser(id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Активные</h2>
      <div className="cards">
        {users.filter((user) => !user.archived).slice(0, 6).map((user) => (
          <UserCard key={user.id} user={user} onArchive={() => handleArchive(user.id)} onHide={() => handleHide(user.id)} />
        ))}
      </div>

      <h2>Архив</h2>
      <div className="cards">
        {users.filter((user) => user.archived).map((user) => (
          <UserCard key={user.id} user={user} onArchive={() => handleArchive(user.id)} onHide={() => handleHide(user.id)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
