import React from "react";
import PostList from "../components/PostList";
import PostDetails from "../components/PostDetails";
import { Outlet } from "react-router-dom";
;
const Post = () => {

  return (
    <div className="postCntnr">
        <div className="b1">
            <div className="post">
                <div className="list">
                        <PostList />
                </div>
                <div className="detail">
                    <PostDetails />
                    {/* <Outlet /> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Post;