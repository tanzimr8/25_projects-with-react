import React from 'react'
import ProfileSearch from './ProfileSearch';
import ProfileView from './ProfileView';
const GithubProfileViewer = () => {
    return (
        <>
            <div className="github-profile-search">
                <ProfileSearch />
            </div>
            <div className="github-profile-view">
                <ProfileView />
            </div>
        </>
    )
}

export default GithubProfileViewer;