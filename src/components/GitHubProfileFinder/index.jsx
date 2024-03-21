import React, { useState } from 'react'
import Profile from './Profile';

const GitHubProfileFinder = () => {
  const [users,setUsers] = useState([]);
  const [inputUser,setInputUser] = useState('');
  const [loading,setLoading] = useState(false);
  return (
    <>
      <div className='search-profile'>
        <label htmlFor="user">Search github profile</label>
        <input type="text" name="user" id="user" placeholder='search user...' />
      </div>
      <div className="search-result">

      </div>
      <div>
        <Profile/>
      </div>
    </>
  )
}

export default GitHubProfileFinder