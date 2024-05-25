import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useFetcher } from 'react-router-dom';
import { useEffect } from 'react';
import { postListAsync,deletePostAsync } from '../app/features/postListSlice';
import { setSelectedPost } from '../app/features/selectedPostSlice';
import { setDeleteConfirmation } from '../app/features/deleteConfirmationSlice';
import { userFeedAsync } from '../app/features/userFeedSlice';

const PostList = () => {

  const dispatch = useDispatch();

  const recruiterLoginState = useSelector((state)=>state.login.value);
  const userLoginStatus = useSelector((state)=>state.userSignIn.value)
  const deleteConfirmation = useSelector((state) => state.deleteConfirmation.value);
  const postListData = useSelector((state)=>state.postList.value);
  const selectedPost = useSelector((state)=> state.selectedPost.value);

  useEffect(()=>{
    if(userLoginStatus.exist){
      dispatch(userFeedAsync(userLoginStatus.id))
    };
    dispatch(postListAsync());
  },[dispatch])

  useEffect(()=>{
    if(postListData.length != 0){
      const data = postListData[0]
      dispatch(setSelectedPost(data))
      // console.log(selectedPost);
    }else{
      dispatch(setSelectedPost({}))
    }
  },[postListData])

  const handleClick = (id, index)=>{
    const data = postListData[index]
    dispatch(setSelectedPost(data));
  }
  
  const handleDelete = (postId, businessId)=>{
    dispatch(setDeleteConfirmation(postId));
    dispatch(setSelectedPost(postId))
  }

  const confirmDelete = (postId, businessId)=>{
    dispatch(deletePostAsync({postId, businessId}));
    dispatch(postListAsync())
  }

  const handleCancel = ()=>{
    dispatch(setDeleteConfirmation(0))   
  } 

  const handleColor = (index)=>{
    // console.log(index)
  }

  const handleDate = (date)=>{
    const sliceDate = date.slice(0, 10)
    const splitDate = sliceDate.split("-");
    // console.log(splitDate[2] +"-"+ splitDate[1]+"-"+splitDate[0])
    return splitDate[2] +"-"+ splitDate[1]+"-"+splitDate[0]
  }

  if(postListData != 0 && selectedPost != {})
  return (
    <div className="postListCntnr">
        <div className="b1">
            {postListData.map((item, index)=>(
              <div key={index} onClick={()=>handleColor(index)}>
              <div className="postList" style={{border:(item._id == selectedPost._id) ? "solid #9932CC .25rem" :""}}  onClick={()=>handleClick(item._id, index)}>
                {/* {console.log(item)} */}
                  <div className="jTitle"><h5>{item.jobTitle}</h5></div>
                  <div className="businessName"> at {item.businessName}</div>
                  <div className="jLoc">Job location: {item.location}</div>
                  <div className="postedOn">Posted on: {item.postDate}</div>
                  {/* <div className="postExpire">Last date: {item.deadline.slice(0,10)}</div> */}
                  <div className="postExpire">Last date: {item.deadline && handleDate(item.deadline)}</div>
                  {/* <div className="postedOn">{}</div> */}
                  {recruiterLoginState.exist ==1 ? 
                    <div className="pLBtn">
                      { deleteConfirmation != item._id  ? 
                      <button type="button" className='postDelbtn' onClick={()=>handleDelete(item._id, item.businessId)}>Delete</button>
                      :""}
                      {deleteConfirmation == item._id ? 
                      <>
                        <button type="button" className='postDelbtn' onClick={()=>confirmDelete(item._id, item.businessId)}>Delete</button>
                        <button type="button" className='postDelCnclBtn' onClick={()=>handleCancel(item._id, item.businessId)}>Cancel</button>
                      </>
                      : ""}
                      {/* <button type="button" className="postHideBtn" onClick={()=>console.log("hide post")}>Hide</button> */}
                      {/* <button type="button" className="postEditBtn" onClick={()=>console.log("edit post")}>Edit</button> */}
                    </div>
                  :""}
              </div>

              </div>
            ))}
        </div>
    </div>
  )
}

export default PostList;