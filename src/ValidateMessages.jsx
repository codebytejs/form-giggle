import React from 'react';

const ValidateMSG = (props) => { 
     if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  else {
    return null;
  }

}

export default ValidateMSG