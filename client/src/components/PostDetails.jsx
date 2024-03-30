import React from 'react'

const PostDetails = () => {
  return (
    <div className="postDetailsCntnr">
        <div className="b1">
            <div className="postDetails">

              {/* About business */}
              <div className="aboutBusiness">
                <div className="jTitle">
                  <h4 className="title">Job Title</h4>
                </div>
                <div className="businessName">
                  <p>Business Name</p>
                </div>
                <div className="businessLoc">
                  <p>Business Location</p>
                </div>
              </div>

              <div className="line1"></div>

              {/* Apply and save button */}
              <div className="applyAndSave">
                <button>Apply now</button>
                <div className="savePost">save</div>
              </div>

              <div className="line1"></div>

              {/* Job details */}
              <div className="jobDtls">
                <div className="salary">
                  <p className="st">Salary</p>
                  <p className="sd">Describe salary range</p>
                </div>
                <div className="skillsReq">
                  <p className="sklt">Skill</p>
                  <p className="skld">Describe the skill required</p>
                </div>
                <div className="qualification">
                  <p className="qualt">qualification</p>
                  <p className="quald">Describe qualification</p>
                </div>
                <div className="jDscrp">
                  <p className="jdt">Job description</p>
                  <p className="jdd">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempore illo beatae laborum eos enim quia. Sit dicta ullam quisquam harum voluptatum numquam voluptates. Provident, unde facilis saepe harum quam quos ratione fugit veritatis possimus nulla qui labore ab, vero eligendi aperiam minima quis atque, at hic laboriosam laudantium. Similique neque harum, laborum hic assumenda quia doloremque odit a atque in sit fuga labore sequi placeat nesciunt, alias voluptate esse.</p>
                </div>
                <div className="contratType">
                  <p className="ctt">Contract type</p>
                  <p className="ctd">Describe contract type</p>
                </div>
                <div className="jobLoc">
                  <p className="jlt">Job location</p>
                  <p className="jld">Describe job location</p>
                </div>
                <div className="postOn">
                  <p className="pot">Posted On</p>
                  <p className="pod">Describe</p>
                </div>
                <div className="exp">
                  <p className="dlt">Last date to apply</p>
                  <p className="dld">Describe</p>
                </div>
              </div>

              <div className="line1"></div>

              {/* Contact */}
              <div className="contact">
                <div className="phone">
                  <p className="pht">Phone</p>
                  <p className="phd">Describe</p>
                </div>
                <div className="mail">
                  <p className="et">Email</p>
                  <p className="ed">Describe</p>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default PostDetails;