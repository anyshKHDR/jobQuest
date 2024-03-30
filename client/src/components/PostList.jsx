import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {

    // sample data
    const postList = [];
    let num =0;
    for(num; num<15; num++){
       const t = `Title ${num}`;
       const b = `business ${num}`;
       const l = `location ${num}`;
       const e = `expire ${num}`;
       const o = `posted on${num}`;
       postList.push({t,b,l,e,o});
    }
    console.log(postList);
    
  return (
    <div className="postListCntnr">
        <div className="b1">
            {postList.map((item)=>(
              // <Link to={`postDetails/${num}`}>
              <div className="postList">
                  <div className="jTitle"><h5>JavaScript Senior Developer</h5></div>
                  <div className="businessName">{item.b}</div>
                  <div className="jLoc">{item.l}</div>
                  <div className="postExpire">{item.e}</div>
                  <div className="postedOn">{item.o}</div>
                  <div className="pLBtn">
                    <button type="button" className='postDelbtn'>Delete</button>
                    <button type="button" className="postHideBtn">Hide</button>
                    <button type="button" className="postEditBtn">Edit</button>
                  </div>
              </div>
              // </Link>
            ))}
        </div>
    </div>
  )
}

export default PostList;