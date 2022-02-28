import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const onLogOutClick = () => {
    signOut(auth);
    navigate('/'); //redirect 2번째 방법
  };
  return <button onClick={onLogOutClick}>Log Out</button>;
};
export default Profile;
