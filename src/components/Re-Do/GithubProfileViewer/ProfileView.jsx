import React from 'react'

const ProfileView = ({users}) => {
    const {login,avatar_url,type,name,blog,location,bio,public_repos,followers,following} = users;
    return (
        <>
            <div class="card p-3 py-4">
                <div class="text-center">
                    <img src={avatar_url && avatar_url} width="100" class="rounded-circle" />
                    <h3 class="mt-2">{name}</h3>
                    <span class="mt-1 clearfix">{location}</span>

                    <div class="row mt-3 mb-3">

                        <div class="col-md-4">
                            <h5>Git Repos</h5>
                            <span class="num">{public_repos}</span>
                        </div>
                        <div class="col-md-4">
                            <h5>Followers</h5>
                            <span class="num">{followers}</span>
                        </div>
                        <div class="col-md-4">
                            <h5>following</h5>
                            <span class="num">{following}</span>
                        </div>

                    </div>

                    <hr class="line" />

                    <small class="mt-4">{bio}</small>
                    {/* <div class="social-buttons mt-5">
                                <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button>
                                <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button>
                                <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button>
                                <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
                                <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
                            </div> */}

                    <div class="profile mt-5">

                        <a target='_blank' href={`https://github.com/${login}`} class="profile_button px-5">View profile</a>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProfileView