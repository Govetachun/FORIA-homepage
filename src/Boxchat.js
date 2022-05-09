import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Boxchat.css'
import CloseIcon from '@mui/icons-material/Close';
import HeadphonesIcon from '@mui/icons-material/Headphones';
function Boxchat() {
  return (
    <div className='boxchat'>
      <div id="center-text">
  </div> 
<div id="body"> 
  
<div id="chat-circle" class="btn btn-raised">
        <div id="chat-overlay"></div>
		    <div class="headphone"><HeadphonesIcon/></div>
	</div>
  
  <div class="chat-box">
    <div class="chat-box-header">
      Tổng đài
      <span class="chat-box-toggle"><i class="material-icons"><CloseIcon/></i></span>
    </div>
    <div class="chat-box-body">
      <div class="chat-box-overlay">   
      </div>
      <div class="chat-logs">
       
      </div>
    </div>
    <div class="chat-input">      
      <form>
        <input type="text" id="chat-input" placeholder="Send a message..."/>
      <button type="submit" class="chat-submit" id="chat-submit"><i class="ti-love"></i>Send</button>
      </form>      
    </div>
  </div>
  
  
  
  
</div>
    </div>
  )
}

export default Boxchat