import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
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
import Roundessage from "../../../Assets/RoundMsg.svg";
import Message from "../../../Assets/Messenger.svg";
import User from "../../../Assets/User.svg";
import Reschedule from "../../../Assets/Reschedule.svg";
import Tick from "../../../Assets/Completed.svg";
import Warning from "../../../Assets/Incomplete.svg";
import Visited from "../../../Assets/Visited.svg";
import Revisit from "../../../Assets/RescheduledVisit.svg";
import Missedvisit from "../../../Assets/MissedVisit.svg";
import "./History.css";

const steps = [
  {
    icon: Call,
    subicon: File,
    call: "Call :",
    date: "06/21 - 12:07 PM",
    content: "Hello. Thank you for calling...",
  },
  {
    icon: Missedcall,
    subicon: Voicemail,
    call: "Missed Call :",
    date: "06/21 - 12:07 PM",
    content: "Hi. I saw your commercial and wanted to learn more. Call me...",
  },
  {
    icon: Roundsms,
    subicon: Sms,
    call: "SMS :",
    date: "06/21 - 12:07 PM",
    content: "Yes, I will be available this afternoon. Please have them ready...",
  },
  {
    icon: Roundmail,
    subicon: Mail,
    call: "Email :",
    date: "06/21 - 12:07 PM",
    content: "Thank you for your assistance.",
  },
  {
    icon: Roundessage,
    subicon: Message,
    call: "Messenger :",
    date: "06/21 - 12:07 PM",
    content: "Thank you for your assistance.",
  },
  {
    icon: User,
    call: "Lead Created :",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: User,
    call: "Client as of :",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Reschedule,
    call: "Reschedule :",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Tick,
    call: "Completed first Task as of :",
    date: "07/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Warning,
    call: "First Task incomplete as of :",
    date: "07/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Tick,
    call: "Completed 13 months of Project as of :",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Warning,
    call: "Did not complete 13 months of Task as of :",
    date: "07/21 - 12:07 PM",
    content: "",
  },
];

const CustomStepIconWithLine = ({ src, className, showLine }) => (
  <div className="step-icon-container">
    <img src={src} alt="step icon" className={className} />
    {showLine && <div className="vertical-dashed-line"></div>}
  </div>
);

export default function History() {
  const [activeStep, setActiveStep] = useState(null); 

  const handleStepClick = (index) => {
    setActiveStep(index === activeStep ? null : index); 
  };


  return (
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
            onClick={() => handleStepClick(steps.length)} 
          >
            <div className="call-start">
              <div className="call-title">Prospect Auto-Generated :</div>
              <div className="date">06/21 - 12:07 PM</div>
            </div>
          </StepLabel>
        </Step>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIconWithLine
                  src={step.icon}
                  className="step-icon"
                  showLine={false}
                />
              )}
            >
              <div className="calll">
                <div className="call-title">{step.call}</div>
                <div className="date">{step.date}</div>
              </div>
            </StepLabel>
            <StepContent>
              <Typography>
                <div className="file-container">
                  <img src={step.subicon} alt="file" className="fileimg" />
                  <p className="file-content">
                    {step.content}
                    <i
                      // onClick={handleClickShowCall}
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
            onClick={() => handleStepClick(steps.length)} 
          >
            <div className="call-end">
              <div className="call-title">Prospect Auto-Generated :</div>
              <div className="date">06/21 - 12:07 PM</div>
            </div>
          </StepLabel>
        </Step>
      </div>
    </div>
  );
}
