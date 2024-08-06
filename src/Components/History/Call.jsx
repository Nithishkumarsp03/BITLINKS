import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Dialog, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import './History.css';
import Search from '../../Assets/search.png';
import CallsImage from '../../Assets/call.png';
import MissedCallImage from '../../Assets/missedcall.png';
import ScheduledCallImage from '../../Assets/scheduledcall.png';
import VisitedImage from '../../Assets/visited.png';
import MissedVisitImage from '../../Assets/missedvisited.png';
import ScheduledVisitImage from '../../Assets/scheduledvisited.png';
import File from '../../Assets/File.png';
import Agent from '../../Assets/Agent.png';

function CustomStepIcon(props) {
  const { src, className } = props;

  return (
    <div className={className}>
      <img src={src} alt="Step Icon" style={{ width: 24, height: 24 }} />
    </div>
  );
}

function Call() {
  const [opencall, setOpenCall] = useState(false);
  const [openvisited, setOpenVisited] = useState(false);
  const [showcall, setShowCall] = useState(false);
  const [showvisit, setShowVisit] = useState(false);
  const [age, setAge] = useState('');
  const [value, setValue] = useState(dayjs('2022-04-17T15:30'));

  const steps = [
    {
      icon: CallsImage,
      call: "Call :",
      content: "Hello. Thank you for calling...",
      date: "23/06/24 - 12:07 PM",
    },
    {
      icon: MissedCallImage,
      call: "Missed Call :",
      content: "Hi how are you?",
      date: "03/07/24 - 02:07 PM",
    },
    {
      icon: ScheduledCallImage,
      call: "Scheduled Call :",
      content: "My name is hi",
      date: "21/05/24 - 10:17 PM",
    },
  ];

  const visitsteps = [
    {
      icon: VisitedImage,
      call: "Visited :",
      content: "Hello. Thank you for calling...",
      date: "23/06/24 - 12:07 PM",
    },
    {
      icon: MissedVisitImage,
      call: "Missed Visit :",
      content: "Hi how are you?",
      date: "03/07/24 - 02:07 PM",
    },
    {
      icon: ScheduledVisitImage,
      call: "Scheduled Visit :",
      content: "My name is hi",
      date: "21/05/24 - 10:17 PM",
    },
  ];

  const handleClickOpenCall = () => {
    setOpenCall(true);
  };

  const handleClickOpenVisited = () => {
    setOpenVisited(true);
  };

  const handleClickShowCall = () => {
    setShowCall(true);
  }

  const handleClickShowVisit = () => {
    setShowVisit(true);
  }

  const handleClose = () => {
    setOpenCall(false);
    setOpenVisited(false);
    setShowCall(false);
    setShowVisit(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='history'>
      <div className='call'>
        <div className='call-main'>
          <p>Call History<i className="fa-solid fa-circle-info"></i></p>
          <div className='call-tags' >
            <div className='call-tag'>Call</div>
            <div className='search-call'>
              <input type='search' placeholder='Search' className='search-tag' style={{height:'30px'}} />
              <img className="search-icon-call" src={Search} alt="" width="17" height="17" />
            </div>
          </div>
          <hr className='call-line' />
          <hr className='call-tag-line' />
        </div>
        <div className='call-below'>
          <div orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel StepIconComponent={() => <CustomStepIcon src={step.icon} className='step-icon'/>}>
                  <div className='calll'>
                    <div className='call-title'></div>{step.call}<div className='date'>{step.date}</div>
                  </div>
                </StepLabel>
                <StepContent>
                  <Typography>
                    <div className='file-container'>
                      <img src={File} alt='file' className='fileimg' />
                      <p className='file-content'>{step.content}<i onClick={handleClickShowCall} className="fa-solid fa-chevron-right"></i></p>
                    </div>
                    <div className='agent-container'>
                      <img src={Agent} alt='agent' className='agentimg' />
                      <p className='agent-content'>Admin 1</p>
                    </div>
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </div>
        </div>
        <div onClick={handleClickOpenCall} className='addcalllog'>
          <p>Add Call Log</p>
          <i className="fa-solid fa-square-plus"></i>
        </div>
        </div>
        <Dialog className='call-popup' open={showcall} onClose={handleClose}>
          <div>
            <p className='addcallpop'>Add Call log</p>
            <div className='call-logs'>
            <div className='call-type'>
              Type : 
              <div className='type-input'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Type</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Call</MenuItem>
                    <MenuItem value={20}>Missed Call</MenuItem>
                    <MenuItem value={30}>Scheduled Call</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='date-type'>
              Date/Time : 
              <div className='date-input'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <input {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            </div>
            {/* <div className='call-note-main'> */}
            <h6 className='call-form'>
              <p className='call-period'>.</p>
              <p className='call-note'>Note :</p>
            </h6>
            <input className='call-input' type='text' placeholder='Type a note...' />
          </div>
        </Dialog>
        <Dialog className='call-popup' open={opencall} onClose={handleClose}>
          <div>
            <p className='addcallpop'>Add Call log</p>
            <div className='call-logs'>
            <div className='call-type'>
              Type : 
              <div className='type-input'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Type</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Call</MenuItem>
                    <MenuItem value={20}>Missed Call</MenuItem>
                    <MenuItem value={30}>Scheduled Call</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='date-type'>
              Date/Time : 
              <div className='date-input'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <input {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            </div>
            {/* <div className='call-note-main'> */}
            <h6 className='call-form'>
              <p className='call-period'>.</p>
              <p className='call-note'>Note :</p>
            </h6>
            <input className='call-input' type='text' placeholder='Type a note...' />
          </div>
        </Dialog>
      
      <div className='visited'>
        <div className='call-main'>
          <p>Visited History<i className="fa-solid fa-circle-info"></i></p>
          <div className='call-tags'>
            <div className='call-tag'>Visited</div>
            <div className='search-call'>
            <input type='search' placeholder='Search' className='search-tag' style={{height:'30px'}} />
              <img className="search-icon-call" src={Search} alt="" width="17" height="17" />
            </div>
          </div>
          <hr className='visited-line' />
          <hr className='visited-tag-line' />
        </div>
        <div className='visited-below'>
          <div orientation="vertical">
            {visitsteps.map((step, index) => (
              <Step key={index}>
                <StepLabel StepIconComponent={() => <CustomStepIcon src={step.icon} className='step-icon'/>}>
                  <div className='calll'>
                    <div className='call-title'></div>{step.call}<div className='date'>{step.date}</div>
                  </div>
                </StepLabel>
                <StepContent>
                  <Typography>
                    <div className='file-container'>
                      <img src={File} alt='file' className='fileimg' />
                      <p className='file-content'>{step.content}<i onClick={handleClickShowVisit} className="fa-solid fa-chevron-right"></i></p>
                    </div>
                    <div className='agent-container'>
                      <img src={Agent} alt='agent' className='agentimg' />
                      <p className='agent-content'>Admin 1</p>
                    </div>
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </div>
        </div>
        <div onClick={handleClickOpenVisited} className='addvisitedlog'>
          <p>Add Visited Log</p>
          <i className="fa-solid fa-square-plus"></i>
        </div>
        </div>
        <Dialog className='call-popup' open={showvisit} onClose={handleClose}>
          <div>
            <p className='addcallpop'>Add Visited log</p>
            <div className='call-logs'>
            <div className='call-type'>
              Type : 
              <div className='type-input'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Type</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Call</MenuItem>
                    <MenuItem value={20}>Missed Call</MenuItem>
                    <MenuItem value={30}>Scheduled Call</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='date-type'>
              Date/Time : 
              <div className='date-input'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <input {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            </div>
            {/* <div className='call-note-main'> */}
            <h6 className='call-form'>
              <p className='call-period'>.</p>
              <p className='call-note'>Note :</p>
            </h6>
            <input className='call-input' type='text' placeholder='Type a note...' />
            {/* </div> */}
          </div>
        </Dialog>
        <Dialog className='call-popup' open={openvisited} onClose={handleClose}>
          <div>
            <p className='addcallpop'>Add Visited log</p>
            <div className='call-logs'>
            <div className='call-type'>
              Type : 
              <div className='type-input'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Type</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Type"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Call</MenuItem>
                    <MenuItem value={20}>Missed Call</MenuItem>
                    <MenuItem value={30}>Scheduled Call</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='date-type'>
              Date/Time : 
              <div className='date-input'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <input {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            </div>
            {/* <div className='call-note-main'> */}
            <h6 className='call-form'>
              <p className='call-period'>.</p>
              <p className='call-note'>Note :</p>
            </h6>
            <input className='call-input' type='text' placeholder='Type a note...' />
            {/* </div> */}
          </div>
        </Dialog>
      </div>
  );
}

export default Call;
