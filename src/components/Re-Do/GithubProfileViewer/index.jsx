import React, { useEffect, useState } from 'react'
import ProfileSearch from './ProfileSearch';
import ProfileView from './ProfileView';
const GithubProfileViewer = () => {
    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState('tanzimr8');
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        fetchUserData();
    }
    const fetchUserData = async () => {
        const url = `https://api.github.com/users/${username}`;
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            // console.log(typeof('type pf data:', data));
            if (data) {
                setUsers(data);
                setLoading(false);
            }
        }
        catch (e) {
            console.log(e);
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return (<h2>Please wait...</h2>)
    }

    return (
        <>
            <div className="github-profile-search">
                <ProfileSearch username={username} setUsername={setUsername} handleSubmit={handleSubmit} />
            </div>
            <div className="github-profile-view">
                {users && <ProfileView users={users} />}

            </div>
        </>
    )
}

export default GithubProfileViewer;