import React from 'react'

const ProfileView = () => {
    return (
        <>
            <div class="card p-3 py-4">
                <div class="text-center">
                    <img src="https://i.imgur.com/stD0Q19.jpg" width="100" class="rounded-circle" />
                    <h3 class="mt-2">Maria Smantha</h3>
                    <span class="mt-1 clearfix">Android Developer</span>

                    <div class="row mt-3 mb-3">

                        <div class="col-md-4">
                            <h5>Projects</h5>
                            <span class="num">10</span>
                        </div>
                        <div class="col-md-4">
                            <h5>Projects</h5>
                            <span class="num">10</span>
                        </div>
                        <div class="col-md-4">
                            <h5>Projects</h5>
                            <span class="num">10</span>
                        </div>

                    </div>

                    <hr class="line" />

                    <small class="mt-4">I am an android developer working at google Inc at california,USA</small>
                    {/* <div class="social-buttons mt-5">
                                <button class="neo-button"><i class="fa fa-facebook fa-1x"></i> </button>
                                <button class="neo-button"><i class="fa fa-linkedin fa-1x"></i></button>
                                <button class="neo-button"><i class="fa fa-google fa-1x"></i> </button>
                                <button class="neo-button"><i class="fa fa-youtube fa-1x"></i> </button>
                                <button class="neo-button"><i class="fa fa-twitter fa-1x"></i> </button>
                            </div> */}

                    <div class="profile mt-5">

                        <button class="profile_button px-5">View profile</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProfileView