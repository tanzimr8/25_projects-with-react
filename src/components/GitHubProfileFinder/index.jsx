import React, { useEffect, useState } from 'react'
import Profile from './Profile';

const GitHubProfileFinder = () => {
  const [users, setUsers] = useState(null);
  const [inputUser, setInputUser] = useState('tanzimr8');
  const [loading, setLoading] = useState(false);
  const handleSubmit = ()=>{
    fetchGitUsers();
  }
  const fetchGitUsers = async () => {
    try{
      setLoading(true);
      const url = `https://api.github.com/users/${inputUser}`
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(data){
        setUsers(data);
        setLoading(false);
        setInputUser('');
      }
    }
    catch(e){
      console.log(e);
    }

  }
  useEffect(() => {
    fetchGitUsers();
  }, []);
  if(loading){
    <h2>Please wait...</h2>
  }
  return (
    <>
      <div className='search-profile'>
        <label htmlFor="user">Search github profile</label>
        <input type="text" name="user" id="user" placeholder='search user...' value={inputUser} onChange={(e) => { setInputUser(e.target.value) }} />
        <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
      </div>
      <div className="search-result">
      {users != null ? <Profile user = {users}/> : null} 
    
      </div>
    </>
  )
}

export default GitHubProfileFinder