import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchPage = () => {
    return (
        <>
            <div class="container">
                <div class="row height d-flex justify-content-center align-items-center">
                    <div class="col-md-8">
                        <div class="git-search">
                            <input type="text" class="form-control" placeholder="Search github profile" />
                            <button class="btn btn-success">Search</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default SearchPage;