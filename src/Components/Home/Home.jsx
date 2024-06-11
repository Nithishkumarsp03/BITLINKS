import React, { useState } from "react";
import "./Home.css";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Logo from "../../Assets/bitlinks log.png";
import Settings from "../../Assets/settings.png";
import Search from "../../Assets/search.png";
import sortby from "../../Assets/tune.png";
import Scanner from "../../Assets/scanner.png";
import Myconnections from "../Connections/Myconnections";
import Networks from "../Connections/Networks";
import Myschedule from "../Connections/Myschedule";
import ScheduleNetwork from "../Connections/ScheduleNetwork";
import Flowchart from "../Flowchart/flowchart";
import { useLocation } from "react-router-dom";
import { Dialog } from '@mui/material';

export default function Home() {
  const location = useLocation();
  const { name, picture } = location.state || {};
  const [networks, showNetworks] = useState(false);
  const [placeholder, setPlaceholder] = useState('Connections');
  const [myschedule, setMyschedule] = useState(true);
  const [schedulenetwork, setScheduleNetwork] = useState(false);
  const [sidebarOpen1, setSidebarOpen1] = useState(true);
  const [sidebarOpen2, setSidebarOpen2] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [MarkedComplete, setMarkedComplete] = useState(false);
  const [View, setView] = useState(false);
  const [contentWidth, setContentWidth] = useState(false);
  const [showFlowchart, setShowFlowchart] = useState(false);
  const [showCall, setShowCall] = useState(false);

  const Myconnection = () => {
    setPlaceholder('Connections');
    showNetworks(false);
    setMyschedule(true);
    setScheduleNetwork(false); // Reset the schedule network state
    setShowFlowchart(false); // Reset the flowchart visibility
    setMarkedComplete(false); // Reset the marked complete state
    setSidebarOpen1(true);
    setSidebarOpen2(false);
    setContentWidth(true);
    setIsEditing(false);
    setShowCall(false);
  };
  

  const Networksfunc = () => {
    setPlaceholder('Networks');
    showNetworks(true);
    setMyschedule(false);
    setScheduleNetwork(false);
    setShowFlowchart(false);
    setMarkedComplete(false);
    setSidebarOpen1(false);
    setSidebarOpen2(true);
    setContentWidth(true);
    setIsEditing(false);
    setShowCall(false);
  }

  const handleContinue = () => {
    setOpen(false);
    setShowAddAccount(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditProfileToggle = () => {
    const newEditingState = !isEditing;
    setIsEditing(newEditingState);
  };

  const handleMarkedCompleteToggle = () => {
    const newMarkedComplete = !MarkedComplete;
    setMarkedComplete(newMarkedComplete);
    if (newMarkedComplete) {
      setMyschedule(false);
      setScheduleNetwork(false);
      setShowFlowchart(true);
      setShowCall(true);
    } else {
      setMyschedule(true);
      setShowFlowchart(false);
      setShowCall(false);
    }
  };

  const handleViewToggle = () => {
    const newView = !View;
    setMarkedComplete(newView);
    if (newView) {
      setMyschedule(false);
      setScheduleNetwork(false);
      setShowFlowchart(true);
      setShowCall(true);
    } else {
      setMyschedule(true);
      setShowFlowchart(false);
      setShowCall(false);
    }
  };

  return (
    <div className="bitlinks-mainpage">
      <header className="header">
        <div>
          <img className="logo" src={Logo} alt="" width="161.21" />
        </div>
        <div className="side-box">
          <div className="Search">
            <img className="search-icon" src={Search} alt="" width="24" height="24" />
            <input className="search" placeholder='Search anything' />
          </div>
          <hr />
          <div className="user">
            <div className="profile-picture">
              <img src={picture} alt="" style={{ objectFit: 'contain', objectPosition: 'center' }} />
            </div>
            <div className="username">
              <p className='you' style={{ color: "grey", cursor: "pointer", marginTop: "3px" }}>YOU</p>
              <h3>{name}</h3>
              <p style={{ marginLeft: '0px' }}>Admin</p>
            </div>
          </div>
          <hr />
          <div className="settings">
            <div className="settings-content">
              <img src={Settings} alt="" width="24" height="24" />
              <p>SETTINGS</p>
            </div>
          </div>
        </div>
      </header>
      <body>
        <div className={`side-bar ${MarkedComplete ? 'editing' : ''}`}>
          <aside>
            <button onClick={Myconnection} className={`${sidebarOpen1 ? "open" : ""} ${MarkedComplete ? "editing" : ""}`} id='myconnections'><h4><i className="fa-solid fa-circle-dot"></i> My connections</h4>
            </button>
            <button onClick={Networksfunc} className={`${sidebarOpen2 ? "open" : ""} ${MarkedComplete ? "editing" : ""}`} id='networks'><h4><i className="fa-sharp fa-solid fa-link"></i> Networks</h4></button>
            <button onClick={handleClickOpen} className={`${MarkedComplete ? "editing" : ""}`} id='addconnections'><h4><i className="fa-solid fa-square-plus"></i> Add Connections</h4></button>
            <div className="calender">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </aside>
        </div>
        <div className={`contents ${MarkedComplete ? 'editing' : ''} ${View ? 'editing' : ''} ${contentWidth ? 'wide' : ''}`}>
          <div className={`Connections-search ${MarkedComplete ? 'editing' : ''}`}>
            <h3>{placeholder}</h3>
            <hr className={`Connections-search-hr ${MarkedComplete ? 'editing' : ''}`}/>
              <input type="search" placeholder={`Search ${placeholder}`} className={`search-connections ${MarkedComplete ? 'editing' : ''}`}/>
              <img src={sortby} alt="" className={`sortbyicon ${MarkedComplete ? 'editing' : ''}`}/>
              <img src={Search} alt="" className={`searchicons ${MarkedComplete ? 'editing' : ''}`}/>
          </div>
          <div className={`horizontal-scroll ${MarkedComplete ? 'editing' : ''}`}>
            <div className="options">
              <p>Expertise</p>
            </div>
            <div className="options">
              <p>Company</p>
            </div>
            <div className="options">
              <p>Previous experience</p>
            </div>
            <div className="options">
              <p>Placement</p>
            </div>
            <div className="options">
              <p>Consultancy</p>
            </div>
            <div className="options">
              <p>Internship</p>
            </div>
            <div className="options">
              <p>Alumni</p>
            </div>
            <div className="options">
              <p>Others</p>
            </div>
            <div className="options">
              <p>With BIT</p>
            </div>
          </div>
          <div className="scrollable-container">
            {networks ? (
              <Networks />
            ) : (
              <Myconnections onEditProfileToggle={handleEditProfileToggle} onMarkedCompleteToggle={handleMarkedCompleteToggle} markedComplete={MarkedComplete} onViewToggle={handleViewToggle} View={View}/>
            )}
          </div>
        </div>
        <div>
        <div>
  {!MarkedComplete && (myschedule ? <Myschedule onMarkedCompleteToggle={handleMarkedCompleteToggle} /> : <ScheduleNetwork onViewToggle={handleViewToggle} />)}
</div>

        </div>
        {MarkedComplete && showFlowchart && <Flowchart />}
        {/* {MarkedComplete && showCall && <Call />} */}
        
        <Dialog id='popconnections' open={open} onClose={handleClose}>
          <div>
            <button id='popaddconnections'><i className="fa-solid fa-square-plus"></i> Add Connections</button>
            <h6 id='namephone'><p id='period'>.</p><p id='insidenamephone'>Name or Phone No</p></h6>
            <input id='inputname' type='text' placeholder='name'></input>
            <div id='scannercontainer'><img id='scannerimg' src={Scanner} alt='Scanner img'></img></div>
            <div id='buttonContainer'>
              <button onClick={handleClose} color="primary" id='discard'>Discard</button>
              <button className={showAddAccount ? "open" : ""} onClick={handleContinue} color="primary" id='continue'>Continue</button>
            </div>
          </div>
        </Dialog>
      </body>
    </div>
  );
}
