import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Dialog,
  Box,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Textarea from "@mui/joy/Textarea";
import Start from "../../../Assets/Start.svg";
import Call from "../../../Assets/Call.svg";
import File from "../../../Assets/File.svg";
import Agent from "../../../Assets/Agent.svg";
import Missedcall from "../../../Assets/Missedcall.svg";
import Voicemail from "../../../Assets/Voicemail.svg";
import Roundsms from "../../../Assets/Roundsms.svg";
import Sms from "../../../Assets/SMS.svg";
import Roundmail from "../../../Assets/Email.svg";
import Mail from "../../../Assets/Email-i.svg";
import Roundmessage from "../../../Assets/RoundMsg.svg";
import Message from "../../../Assets/Messenger.svg";
import User from "../../../Assets/User.svg";
import Reschedule from "../../../Assets/Reschedule.svg";
import Tick from "../../../Assets/Completed.svg";
import Warning from "../../../Assets/Incomplete.svg";
import Cancel from "../../../Assets/cancel.png";
import Visited from "../../../Assets/Visited.svg";
import Revisit from "../../../Assets/RescheduledVisit.svg";
import Missedvisit from "../../../Assets/MissedVisit.svg";
import 'react-datepicker/dist/react-datepicker.css';
import "./History.css";

// Map icons to types
const iconMapping = {
  'Call': Call,
  'Missed Call': Missedcall,
  'Reschedule Call': Reschedule,
  'SMS': Sms,
  'Email': Mail,
  'Messenger': Message,
  'Lead Created': User,
  'Client as of': User,
  'Visited': Visited,
  'Missed Visit': Missedvisit,
  'Rescheduled Visit': Revisit,
  'Completed Task': Tick,
  'Incompleted Task': Warning,
};

const CustomStepIconWithLine = ({ src, className, showLine }) => (
  <div className="step-icon-container">
    <img src={src} alt="step icon" className={className} />
    {showLine && <div className="vertical-dashed-line"></div>}
  </div>
);

export default function History() {
  const [activeStep, setActiveStep] = useState(null);
  const [AddHistory, setAddHistory] = useState(false);
  const [type, setType] = useState('');
  const [note, setNote] = useState('');
  const [created_date, setCreatedDate] = useState(null);
  const [scheduled_date, setScheduledDate] = useState(null);
  const [points, setPoints] = useState(0);
  const [historyRecords, setHistoryRecords] = useState([]);
  const [history, setHistory] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [typeOptions, setTypeOptions] = useState([]);

  const pointsMapping = {
    'Call': 3,
    'Missed Call': 0,
    'Reschedule Call': 1,
    'SMS': 4,
    'Email': 5,
    'Messenger': 8,
    'Lead Created': 10,
    'Client as of': 15,
    'Visited': 10,
    'Missed Visit': 0,
    'Rescheduled Visit': 2,
    'Completed Task': 20,
    'Incompleted Task': 0
  };

  useEffect(() => {
    // Fetch types from backend
    fetch('http://localhost:8000/api/types')
      .then(response => response.json())
      .then(data => {
        // Map fetched types to icons
        const mappedTypes = data.map(type => ({
          type: type.name,
          icon: iconMapping[type.name] || null,
        }));
        setTypeOptions(mappedTypes);
      })
      .catch(error => console.error('Error fetching types:', error));
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  const handleCloseAddHistory = () => {
    setAddHistory(false);
  }

  const handleTypeClick = (selectedType) => {
    setType(selectedType.type);
    setPoints(pointsMapping[selectedType.type] || 0);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const data = {
      type: type || '',
      note,
      points,
      created_date: created_date ? created_date.format() : null,
      scheduled_date: scheduled_date ? scheduled_date.format() : null,
    };

    console.log("Data being sent:", JSON.stringify(data));

    fetch('http://localhost:8000/api/addhistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
      })
      .then(newRecord => {
        console.log("Record added:", newRecord);
        setHistoryRecords([...historyRecords, newRecord]);
        setAddHistory(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/history')
      .then(response => response.json())
      .then(data => setHistory(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const shouldShowScheduledDate = type === 'Reschedule Call' || type === 'Rescheduled Visit';

  return (
    <div className="history-main">
      <button className="history-add-button" onClick={() => setAddHistory(true)}>
        Add<i className="fa-solid fa-square-plus"></i>
      </button>
      <div className="history-container">
        <div orientation="vertical">
          <Step>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIconWithLine
                  src={Start}
                  className="step-icon-start"
                  showLine={true}
                />
              )}
              // onClick={() => handleStepClick(steps.length)}
            >
              <div className="call-start">
                <div className="call-title">Prospect Auto-Generated :</div>
                <div className="date">06/21 - 12:07 PM</div>
              </div>
            </StepLabel>
          </Step>
          {history.map((item, index) => (
            <Step key={index} >
              <StepLabel
                StepIconComponent={() => (
                  <CustomStepIconWithLine
                    src={iconMapping[item.type]}
                    className="step-icon"
                    showLine={false}
                  />
                )}
              >
                <div className="calll">
                  <div className="call-title">{item.type}</div>
                  <div className="date">{new Date(item.created_date).toLocaleString()}</div>
                </div>
              </StepLabel>
              <StepContent>
                <Typography>
                  <div className="file-container">
                    <img src={File} alt="file" className="fileimg" />
                    <p className="file-content">
                    <div style={{width: "35vw"}}>{item.note}</div>
                      <i
                      onClick={() => openModal(item)}
                      id="arrow-dialog"
                      style={{cursor: "pointer"}}
                        className="fa-solid fa-chevron-right"></i>
                    </p>
                  </div>
                  <div className="agent-container">
                    <img src={Agent} alt="agent" className="agentimg" />
                    <p className="agent-content">Admin 1</p>
                  </div>
                </Typography>
              </StepContent>
            </Step>
          ))}
          <Step>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIconWithLine
                  src={Start}
                  className="step-icon-start"
                  showLine={false}
                />
              )}
              // onClick={() => handleStepClick(steps.length)}
            >
              <div className="call-end">
                <div className="call-title">Prospect Auto-Generated :</div>
                <div className="date">06/21 - 12:07 PM</div>
              </div>
            </StepLabel>
          </Step>
        </div>
      </div>

      <Dialog className='popaddhistory' open={AddHistory} onClose={handleCloseAddHistory}>
        <form onSubmit={handleAdd}>
          <div className="addhistory-overlay">
            <div className="addhistory">
              <div className="dialog-header">
                <h2 className="addhistory-top">Add History
                  <img src={Cancel} alt="cancel" className="close-history" onClick={handleCloseAddHistory} />
                </h2>
              </div>
              <div className="addhistory-container">
                <div className="type-container">
                  <h3 className="addhistory-h3">Type</h3>
                  <div className="history-grid">
                    {typeOptions.map((option, index) => (
                      <div key={index} className="history-card" onClick={() => handleTypeClick(option)}>
                        <img src={option.icon} alt={option.type} className="card-image" />
                        <p className="card-text">{option.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <h3 className="addhistory-h3">Note</h3>
                  <Textarea
                    placeholder="Type anything…"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    minRows={2}
                    maxRows={4}
                    sx={{ width: 388, fontSize: '14px', background: 'none' }}
                  />
                </div>
                <div className="form-group">
                  <h3 className="addhistory-h3">Created Date</h3>
                  <DemoContainer components={['DateTimePicker']}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        value={created_date}
                        onChange={setCreatedDate}
                        format="MM/DD/YYYY hh:mm A"
                      />
                    </LocalizationProvider>
                  </DemoContainer>
                </div>
                {shouldShowScheduledDate && (
                  <div className="form-group">
                    <h3 className="addhistory-h3">Scheduled Date</h3>
                    <DemoContainer components={['DateTimePicker']}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          value={scheduled_date}
                          onChange={setScheduledDate}
                          format="MM/DD/YYYY hh:mm A"
                        />
                      </LocalizationProvider>
                    </DemoContainer>
                  </div>
                )}
              </div>
              <div className="addhistory-footer">
                <button className="save-btn">Save</button>
              </div>
            </div>
          </div>
        </form>
      </Dialog>

      {selectedItem && (
        <Dialog className="modal" open={modalIsOpen} onClose={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <Typography variant="h6">{selectedItem.type}</Typography>
            <Typography variant="body2">Created Date: {new Date(selectedItem.created_date).toLocaleString()}</Typography>
            <Typography variant="body2">Note: {selectedItem.note}</Typography>
            <Typography variant="body2">Points: {selectedItem.points}</Typography>
          </div>
        </Dialog>
      )}
    </div>
  );
}
