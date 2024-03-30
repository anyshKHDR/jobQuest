import React from 'react';
import { Link } from 'react-router-dom';

const SubmitAndCancelButtons = ({top, bottom, distance, cancelRoute, submitRoute}) => {
//   top,bottom and distance should be in the form of "2rem"
  return (
    <div>
        <div className="MCstmBtn" >
                <button type="button" className="cancel" style={{marginTop:top, marginBottom:bottom, marginRight:distance}}>
            <Link to={cancelRoute}>
                    Cancel
            </Link>
                </button> 
            <button type="button" className="submit" style={{marginTop:top, marginBottom:bottom, marginLeft:distance}}>
            <Link to="">
                Submit
            </Link>
            </button>
        </div>
    </div>
  )
}

export default SubmitAndCancelButtons