import React from "react";
import { Dialog, Box, TextareaAutosize } from "@mui/material";
import Input from '@mui/joy/Input';
import { Tree, TreeNode } from "react-organizational-chart";
import "./flowchart.css";
import { useState, useRef  } from "react";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import Textarea from "@mui/joy/Textarea";
import Profile from "../../../Assets/Profile.png";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const ChangingProgressProvider = ({ value, children }) => {
  return children(value);
};

const Flowchart = () => {
  const userProfile = Cookies.get("userProfile");
  const parsedProfile = userProfile ? JSON.parse(userProfile) : null;
  const email = parsedProfile?.email;
  const [person, setPerson] = useState(false);
  const [company, setCompany] = useState(false);
  const [alumni, setAlumni] = useState(false);
  const [outcome, setOutcome] = useState(false);
  const [incidents, setIncidents] = useState(false);
  const [previousExperience, setPreviousExperience] = useState(false);
  const [experience, setExperience] = useState("");
  const [placement, setPlacement] = useState(false);
  const [consultancy, setConsultancy] = useState(false);
  const [internship, setInternship] = useState(false);
  const [expertise, setExpertise] = useState(false);
  const [others, setOthers] = useState(false);
  const [file, setFile] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [imagePreview, setImagePreview] = useState(Profile);
  const [Ifexperience, setIfexperience] = useState("");
  const [Ifplacement, setIfplacement] = useState("");
  const [Ifconsultancy, setIfconsultancy] = useState("");
  const [Ifinternship, setIfinternship] = useState("");
  const [Reference, setReference] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("")

  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  const [progress5, setProgress5] = useState(0);
  const [progress6, setProgress6] = useState(0);
  const [progress7, setProgress7] = useState(0);
  const [progress8, setProgress8] = useState(0);
  const [progress9, setProgress9] = useState(0);
  const [progress10, setProgress10] = useState(0);
  const [progress11, setProgress11] = useState(0);

  const fileInputRef = useRef(null);

  const handleClickOpen = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const [personInfo, setPersonInfo] = useState({
    fullname: "",
    phoneNumber: "",
    age: "",
    email: "",
    linkedinUrl: "",
    address: "",
    shortDescription: "",
  });

  const [PreviousExperienceinfo, setPreviousExperienceinfo] = useState({
    companyName: "",
    position: "",
    experience: "",
    role: "",
    companyAddress: "",
  });

  const [CompanyInfo, setCompanyinfo] = useState({
    companyName: "",
    position: "",
    experience: "",
    role: "",
    companyAddress: "",
  });

  const [ExpertiseInfo, setExpertiseinfo] = useState({
    domain: "",
    specialistskills: "",
    skillset: "",
  });

  const [Alumniinfo, setAlumniinfo] = useState({
    name: "",
    batch: "",
    graduatedyear: "",
    phonenumber: "",
    companyAddress: "",
  });

  const [Outcomeinfo, setOutcomeinfo] = useState({
    eventname: "",
    date: "",
    description: "",
  });

  const [Incidentsinfo, setIncidentsinfo] = useState({
    eventname: "",
    date: "",
    description: "",
  });

  const [Placementinfo, setPlacementinfo] = useState({
    role: "",
    domain: "",
    skillset: "",
    eligibility: "",
  });

  const [Consultancyinfo, setConsultancyinfo] = useState({
    role: "",
    domain: "",
    skillset: "",
    eligibility: "",
    projecttype: "",
  });

  const [Internshipinfo, setInternshipinfo] = useState({
    role: "",
    domain: "",
    skillset: "",
    eligibility: "",
    projecttype: "",
  });

  const [OthersInfo, setOthersInfo] = useState({
    Name: "",
  });

  const handleDetailsChange1 = (e) => {
    const { name, value } = e.target;
    setPersonInfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange2 = (e) => {
      const { name, value } = e.target;
    setPreviousExperienceinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange3 = (e) => {
      const { name, value } = e.target;
    setCompanyinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange4 = (e) => {
      const { name, value } = e.target;
    setExpertiseinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange5 = (e) => {
      const { name, value } = e.target;
    setAlumniinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange6 = (e) => {
      const { name, value } = e.target;
    setOutcomeinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange7 = (e) => {
      const { name, value } = e.target;
    setIncidentsinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange8 = (e) => {
      const { name, value } = e.target;
    setPlacementinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange9 = (e) => {
      const { name, value } = e.target;
    setConsultancyinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange10 = (e) => {
      const { name, value } = e.target;
    setInternshipinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));}

    const handleDetailsChange11 = (e) => {
      const { name, value } = e.target;
    setOthersInfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        body: formData, // Send the FormData object as the request body
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Upload failed with status:", response.status);
        console.error("Response text:", text);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setImagePreview(data.path);
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    // Clear the file input after upload (optional)
    e.target.value = null;
  };

  const handlePerson = async (e) => {
    calculateProgress1();
    setPerson(false);
    e.preventDefault();
    let errorMessage = "";

    if (!personInfo.fullname) {
      errorMessage += "Please Enter the Fullname. ";
    }
    if (!personInfo.phoneNumber) {
      errorMessage += "Please Enter the Phone Number. ";
    }
    if (!personInfo.email) {
      errorMessage += "Please enter the email. ";
    }
    if (!personInfo.age) {
      errorMessage += "Please enter the age. ";
    }
    if (!personInfo.linkedinUrl) {
      errorMessage += "Please provide LinkedIn URL. ";
    }
    if (!personInfo.address) {
      errorMessage += "Please enter the address. ";
    }
    if (!personInfo.shortDescription) {
      errorMessage += "Please enter the Description. ";
    }

    if (errorMessage) {
      setError(errorMessage.trim());
      return;
    }

    let imagePath = null;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadResponse = await fetch("http://localhost:8000/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          const text = await uploadResponse.text();
          console.error("Upload failed with status:", uploadResponse.status);
          console.error("Response text:", text);
          throw new Error("Network response was not ok");
        }

        const uploadData = await uploadResponse.json();
        console.log('Imagepath: ',uploadData.path);
        imagePath = uploadData.path;
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred during file upload. Please try again.");
        return;
      }
    }

    try {
      const personResponse = await fetch("http://localhost:8000/api/person", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personInfo,
          imagePath, // Only send imagePath if a file was uploaded
          email,
        }),
      });

      if (!personResponse.ok) {
        const text = await personResponse.text();
        console.error("Upload failed with status:", personResponse.status);
        console.error("Response text:", text);
        throw new Error("Network response was not ok");
      }

      const personData = await personResponse.json();
      setError("Saved Successfully. You may now close this popup");
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }

    e.target.value = null;
  };
  const handleExperience = async (e) => {};
  const handleCompany = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CompanyInfo,
        }),
      });
      if (response.ok) {
        console.log("Company info uploaded successfully");
      } else {
        console.log("Company info upload failed");
        console.error("Company info upload failed");
      }
    } catch (error) {
      console.error("Error sending Company:", error);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const calculateProgress = () => {
    const totalFields = Object.keys(personInfo).length + 1;
    const filledFields =
      Object.values(personInfo).filter((value) => value !== "").length +
      (file ? 1 : 0);
    const progressValue = (filledFields / totalFields) * 100;
    setProgress(progressValue);
  };

  // const handlePerson = () => {
  //   setPerson(false);
  //   calculateProgress();
  // };

  const calculateProgress1 = () => {
    const totalFields = Object.keys(personInfo).length + 1;
    const filledFields =
      Object.values(personInfo).filter((value) => value !== "").length +
      (file ? 1 : 0);
    const progressValue1 = (filledFields / totalFields) * 100;
    setProgress1(progressValue1);
  };

  

  const calculateProgress2 = () => {
    const totalFields = Object.keys(PreviousExperienceinfo).length;
    const filledFields =
      Object.values(PreviousExperienceinfo).filter((value) => value !== "")
        .length ;
    const progressValue2 = (filledFields / totalFields) * 100;
    setProgress2(progressValue2);
  };

  const handleSubmit2 = () => {
    setPreviousExperience(false);
    calculateProgress2();
  };

  const calculateProgress3 = () => {
    const totalFields = Object.keys(CompanyInfo).length;
    const filledFields =
      Object.values(CompanyInfo).filter((value) => value !== "").length;
    const progressValue3 = (filledFields / totalFields) * 100;
    setProgress3(progressValue3);
  };

  const handleSubmit3 = () => {
    setCompany(false);
    calculateProgress3();
  };

  const calculateProgress4 = () => {
    const totalFields = Object.keys(ExpertiseInfo).length;
    const filledFields =
      Object.values(ExpertiseInfo).filter((value) => value !== "").length;
    const progressValue4 = (filledFields / totalFields) * 100;
    setProgress4(progressValue4);
  };

  const handleSubmit4 = () => {
    setExpertise(false);
    calculateProgress4();
  };

  const calculateProgress5 = () => {
    const totalFields = Object.keys(Alumniinfo).length;
    const filledFields =
      Object.values(Alumniinfo).filter((value) => value !== "").length;
    const progressValue5 = (filledFields / totalFields) * 100;
    setProgress5(progressValue5);
  };

  const handleSubmit5 = () => {
    setAlumni(false);
    calculateProgress5();
  };

  const calculateProgress6 = () => {
    const totalFields = Object.keys(Outcomeinfo).length;
    const filledFields =
      Object.values(Outcomeinfo).filter((value) => value !== "").length;
    const progressValue6 = (filledFields / totalFields) * 100;
    setProgress6(progressValue6);
  };

  const handleSubmit6 = () => {
    setOutcome(false);
    calculateProgress6();
  };

  const calculateProgress7 = () => {
    const totalFields = Object.keys(Incidentsinfo).length ;
    const filledFields =
      Object.values(Incidentsinfo).filter((value) => value !== "").length;
    const progressValue7 = (filledFields / totalFields) * 100;
    setProgress7(progressValue7);
  };

  const handleSubmit7 = () => {
    setIncidents(false);
    calculateProgress7();
  };

  const calculateProgress8 = () => {
    const totalFields = Object.keys(Placementinfo).length;
    const filledFields =
      Object.values(Placementinfo).filter((value) => value !== "").length;
    const progressValue8 = (filledFields / totalFields) * 100;
    setProgress8(progressValue8);
  };

  const handleSubmit8 = () => {
    setPlacement(false);
    calculateProgress8();
  };

  const calculateProgress9 = () => {
    const totalFields = Object.keys(Consultancyinfo).length;
    const filledFields =
      Object.values(Consultancyinfo).filter((value) => value !== "").length;
    const progressValue9 = (filledFields / totalFields) * 100;
    setProgress9(progressValue9);
  };

  const handleSubmit9 = () => {
    setConsultancy(false);
    calculateProgress9();
  };

  const calculateProgress10 = () => {
    const totalFields = Object.keys(Internshipinfo).length; 
    const filledFields =
      Object.values(Internshipinfo).filter((value) => value !== "").length;
    const progressValue10 = (filledFields / totalFields) * 100;
    setProgress10(progressValue10);
  };

  const handleSubmit10 = () => {
    setInternship(false);
    calculateProgress10();
  };

  const calculateProgress11 = () => {
    const totalFields = Object.keys(OthersInfo).length;
    const filledFields =
      Object.values(OthersInfo).filter((value) => value !== "").length;
    const progressValue11 = (filledFields / totalFields) * 100;
    setProgress11(progressValue11);
  };

  const handleSubmit11 = () => {
    setOthers(false);
    calculateProgress11();
  };

  return (
    <div className="flowchart">
      <div className="flow2">
        <Tree
          lineColor="#B6B6B6"
          lineStyle="dashed"
          lineWidth="3px"
          lineHeight="10px"
          className="contact-tree"
          label={
            // <div className="node">
            <a1 onClick={() => setPerson(true)} className="a1-flow-person" id="a1-flow-person css-to7de5-person">
              <span className="topics-flowchart1">
                <ChangingProgressProvider value={progress1}>
                  {(value) => (
                    <CircularProgressbarWithChildren
                      value={value}
                      circleRatio={0.75}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "butt",
                        trailColor: "#C8D1D8",
                        pathColor: value > 0 ? "#122E50" : "transparent",
                      })}>
                      <div
                        className="person-icon"
                        style={{ textAlign: "center" }}>
                        <svg
                          className="svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={18}
                          height={27}
                          color={"#122E50"}
                          fill={"none"}
                          style={{ display: "block", margin: "0 auto" }}>
                          <path
                            d="M9.13435 2.5C6.46808 2.56075 4.91073 2.81456 3.84667 3.87493C2.9154 4.80297 2.60409 6.10756 2.50003 8.2M14.8657 2.5C17.532 2.56075 19.0893 2.81456 20.1534 3.87493C21.0847 4.80297 21.396 6.10756 21.5 8.2M14.8657 21.5C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0847 19.197 21.396 17.8924 21.5 15.8M9.13435 21.5C6.46808 21.4392 4.91073 21.1854 3.84667 20.1251C2.9154 19.197 2.60409 17.8924 2.50003 15.8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.50003 17C9.83173 14.5578 14.1433 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9916 12C10.6089 12 9.488 10.8807 9.488 9.5C9.488 8.11929 10.6089 7 11.9916 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h6 style={{ color: "#122E50" }}>Person</h6>
                      </div>
                    </CircularProgressbarWithChildren>
                  )}
                </ChangingProgressProvider>
              </span>
            </a1>
            // </div>
          }>
          <TreeNode>
            <TreeNode
              label={
                <div className="node child">
                  <div className="dote"></div>
                  <div className="border-image-container"></div>
                  <div className="icon">
                    <a2
                      onClick={() => setPreviousExperience(true)}
                      className="a1-flow">
                      <span className="topics-flowchart">
                        <ChangingProgressProvider value={progress2}>
                          {(value) => (
                            <CircularProgressbarWithChildren
                              value={value}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#C8D1D8",
                                pathColor:
                                  value > 0 ? "#122E50" : "transparent",
                              })}>
                              <div className="person-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width={18}
                                  height={20}
                                  color={"#122E50"}
                                  fill={"none"}>
                                  <path
                                    d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.7159C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.7159C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.7159 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.7159 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                  />
                                  <path
                                    d="M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89544 10.8955 8.00001 12 8.00001C13.1046 8.00001 14 8.89544 14 10Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                <h6>Experience</h6>
                              </div>
                            </CircularProgressbarWithChildren>
                          )}
                        </ChangingProgressProvider>
                      </span>
                    </a2>
                  </div>
                </div>
              }></TreeNode>
            <TreeNode
              label={
                <div className="node child">
                  <div className="dote"></div>
                  <div className="border-image-container"></div>
                  <div className="icon">
                    <a3 onClick={() => setCompany(true)} className="a1-flow">
                      <span className="topics-flowchart">
                        <ChangingProgressProvider value={progress3}>
                          {(value) => (
                            <CircularProgressbarWithChildren
                              value={value}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#C8D1D8",
                                pathColor:
                                  value > 0 ? "#122E50" : "transparent",
                              })}>
                              <div className="person-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width={17}
                                  height={17}
                                  color={"#122E50"}
                                  fill={"none"}>
                                  <path
                                    d="M2 22H22"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M18 9H14C11.518 9 11 9.518 11 12V22H21V12C21 9.518 20.482 9 18 9Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 22H3V5C3 2.518 3.518 2 6 2H12C14.482 2 15 2.518 15 5V9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M3 6H6M3 10H6M3 14H6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M15 13H17M15 16H17"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M16 22L16 19"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h6>Company</h6>
                              </div>
                            </CircularProgressbarWithChildren>
                          )}
                        </ChangingProgressProvider>
                      </span>
                    </a3>
                  </div>
                </div>
              }>
              <TreeNode
                label={
                  <div className="node child">
                    <div className="dote"></div>
                    <div className="border-image-container"></div>
                    <div className="icon">
                      <a4 className="a1-flow">
                        <span className="topics-flowchart">
                          <ChangingProgressProvider value={progress}>
                            {(value) => (
                              <CircularProgressbarWithChildren
                                value={value}
                                circleRatio={0.75}
                                styles={buildStyles({
                                  rotation: 1 / 2 + 1 / 8,
                                  strokeLinecap: "butt",
                                  trailColor: "#C8D1D8",
                                  pathColor:
                                    value > 0 ? "#122E50" : "transparent",
                                })}>
                                <div className="person-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={17}
                                    height={17}
                                    color={"#122E50"}
                                    fill={"none"}>
                                    <path
                                      d="M6.08938 14.9992C5.71097 14.1486 5.5 13.2023 5.5 12.2051C5.5 8.50154 8.41015 5.49921 12 5.49921C15.5899 5.49921 18.5 8.50154 18.5 12.2051C18.5 13.2023 18.289 14.1486 17.9106 14.9992"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    />
                                    <path
                                      d="M12 1.99921V2.99921"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M22 11.9992H21"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M3 11.9992H2"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.0704 4.92792L18.3633 5.63503"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.6368 5.636L4.92969 4.92889"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M14.517 19.3056C15.5274 18.9788 15.9326 18.054 16.0466 17.1238C16.0806 16.8459 15.852 16.6154 15.572 16.6154L8.47685 16.6156C8.18725 16.6156 7.95467 16.8614 7.98925 17.1489C8.1009 18.0773 8.3827 18.7555 9.45345 19.3056M14.517 19.3056C14.517 19.3056 9.62971 19.3056 9.45345 19.3056M14.517 19.3056C14.3955 21.2506 13.8338 22.0209 12.0068 21.9993C10.0526 22.0354 9.60303 21.0833 9.45345 19.3056"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <h6>Opportunity</h6>
                                </div>
                              </CircularProgressbarWithChildren>
                            )}
                          </ChangingProgressProvider>
                        </span>
                      </a4>
                    </div>
                  </div>
                }>
                <TreeNode
                  label={
                    <div className="node child">
                      <div
                        className="dote"></div>
                      <div className="border-image-container"></div>
                      <div className="icon">
                        <a5
                          onClick={() => setPlacement(true)}
                          className="a1-flow">
                          <span className="topics-flowchart">
                            <ChangingProgressProvider value={progress8}>
                              {(value) => (
                                <CircularProgressbarWithChildren
                                  value={value}
                                  circleRatio={0.75}
                                  styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#C8D1D8",
                                    pathColor:
                                      value > 0 ? "#122E50" : "transparent",
                                  })}>
                                  <div className="person-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={17}
                                      height={17}
                                      color={"#122E50"}
                                      fill={"none"}>
                                      <path
                                        d="M11.0065 21.0001H9.60546C6.02021 21.0001 4.22759 21.0001 3.11379 19.8652C2 18.7302 2 16.9035 2 13.2501C2 9.59674 2 7.77004 3.11379 6.63508C4.22759 5.50012 6.02021 5.50012 9.60546 5.50012H13.4082C16.9934 5.50012 18.7861 5.50012 19.8999 6.63508C20.7568 7.50831 20.9544 8.79102 21 11.0001"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M20.0167 20.0233L21.9998 22M21.0528 17.5265C21.0528 15.5789 19.4739 14 17.5263 14C15.5786 14 13.9998 15.5789 13.9998 17.5265C13.9998 19.4742 15.5786 21.0531 17.5263 21.0531C19.4739 21.0531 21.0528 19.4742 21.0528 17.5265Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                    <h6>Placement</h6>
                                  </div>
                                </CircularProgressbarWithChildren>
                              )}
                            </ChangingProgressProvider>
                          </span>
                        </a5>
                      </div>
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="node child">
                      <div
                        className="dote
  "></div>
                      <div className="border-image-container"></div>
                      <div className="icon">
                        <a6
                          onClick={() => setConsultancy(true)}
                          className="a1-flow">
                          <span className="topics-flowchart">
                            <ChangingProgressProvider value={progress9}>
                              {(value) => (
                                <CircularProgressbarWithChildren
                                  value={value}
                                  circleRatio={0.75}
                                  styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#C8D1D8",
                                    pathColor:
                                      value > 0 ? "#122E50" : "transparent",
                                  })}>
                                  <div className="person-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={17}
                                      height={17}
                                      color={"#122E50"}
                                      fill={"none"}>
                                      <path
                                        d="M6.5 9H5.5M10.5 9H9.5M6.5 6H5.5M10.5 6H9.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M18.5 15H17.5M18.5 11H17.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M14 8V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H14ZM14 8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.02485 13.9545C8.02485 15.0583 7.12945 15.953 6.02491 15.953C4.92038 15.953 4.02497 15.0583 4.02497 13.9545C4.02497 12.8508 4.92038 11.9561 6.02491 11.9561C7.12945 11.9561 8.02485 12.8508 8.02485 13.9545Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M2.06982 20.2101C3.12817 18.582 4.80886 17.9718 6.02491 17.973C7.24097 17.9743 8.8724 18.582 9.93075 20.2101C9.99917 20.3154 10.018 20.445 9.95628 20.5544C9.70877 20.993 8.94028 21.8633 8.38522 21.9223C7.74746 21.9901 6.07914 21.9996 6.0262 21.9999C5.97322 21.9996 4.2534 21.9901 3.61535 21.9223C3.06029 21.8633 2.2918 20.993 2.04429 20.5544C1.98254 20.445 2.00139 20.3154 2.06982 20.2101Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                    <h6>Consultancy</h6>
                                  </div>
                                </CircularProgressbarWithChildren>
                              )}
                            </ChangingProgressProvider>
                          </span>
                        </a6>
                      </div>
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="node child">
                      <div
                        className="dote
    "></div>
                      <div className="border-image-container"></div>
                      <div className="icon">
                        <a7
                          onClick={() => setInternship(true)}
                          className="a1-flow">
                          <span className="topics-flowchart">
                            <ChangingProgressProvider value={progress10}>
                              {(value) => (
                                <CircularProgressbarWithChildren
                                  value={value}
                                  circleRatio={0.75}
                                  styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#C8D1D8",
                                    pathColor:
                                      value > 0 ? "#122E50" : "transparent",
                                  })}>
                                  <div className="person-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={17}
                                      height={17}
                                      color={"#122E50"}
                                      fill={"none"}>
                                      <path
                                        d="M11.0065 21.5H9.60546C6.02021 21.5 4.22759 21.5 3.11379 20.365C2 19.2301 2 17.4034 2 13.75C2 10.0966 2 8.26992 3.11379 7.13496C4.22759 6 6.02021 6 9.60546 6H13.4082C16.9934 6 18.7861 6 19.8999 7.13496C20.7568 8.00819 20.9544 9.2909 21 11.5V13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M19 18.5H16M16 21.5C14.3431 21.5 13 20.1569 13 18.5C13 16.8431 14.3431 15.5 16 15.5M19 21.5C20.6569 21.5 22 20.1569 22 18.5C22 16.8431 20.6569 15.5 19 15.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M15.9998 6L15.9004 5.69094C15.4054 4.15089 15.1579 3.38087 14.5686 2.94043C13.9794 2.5 13.1967 2.5 11.6313 2.5H11.3682C9.8028 2.5 9.02011 2.5 8.43087 2.94043C7.84162 3.38087 7.59411 4.15089 7.0991 5.69094L6.99976 6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                    <h6>Internship</h6>
                                  </div>
                                </CircularProgressbarWithChildren>
                              )}
                            </ChangingProgressProvider>
                          </span>
                        </a7>
                      </div>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>
            <TreeNode
              label={
                <div className="node child">
                  <div className="dote"></div>
                  <div className="border-image-container"></div>
                  <div className="icon">
                    <a8 onClick={() => setExpertise(true)} className="a1-flow">
                      <span className="topics-flowchart">
                        <ChangingProgressProvider value={progress4}>
                          {(value) => (
                            <CircularProgressbarWithChildren
                              value={value}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#C8D1D8",
                                pathColor:
                                  value > 0 ? "#122E50" : "transparent",
                              })}>
                              <div className="person-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width={17}
                                  height={17}
                                  color={"#122E50"}
                                  fill={"none"}>
                                  <path
                                    d="M17 9.5L12 3L7 9.5L12 21L17 9.5Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M17.5 4L22 9.5H17M17.5 4L17 9.5M17.5 4L12 3L6.5 4M17 9.5H7M6.5 4L2 9.5H7M6.5 4L7 9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M22 9.5L12 21L2 9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h6>Expertise</h6>
                              </div>
                            </CircularProgressbarWithChildren>
                          )}
                        </ChangingProgressProvider>
                      </span>
                    </a8>
                  </div>
                </div>
              }></TreeNode>
            <TreeNode
              label={
                <div className="node child">
                  <div className="dote"></div>
                  <div className="border-image-container"></div>
                  <div className="icon">
                    <a9 className="a1-flow">
                      <span className="topics-flowchart">
                        <ChangingProgressProvider value={progress}>
                          {(value) => (
                            <CircularProgressbarWithChildren
                              value={value}
                              circleRatio={0.75}
                              styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#C8D1D8",
                                pathColor:
                                  value > 0 ? "#122E50" : "transparent",
                              })}>
                              <div className="person-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width={17}
                                  height={17}
                                  color={"#122E50"}
                                  fill={"none"}>
                                  <path
                                    d="M13.5 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H13.5M10.5 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H10.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M9 12H15"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                <h6>Connections</h6>
                              </div>
                            </CircularProgressbarWithChildren>
                          )}
                        </ChangingProgressProvider>
                      </span>
                    </a9>
                  </div>
                </div>
              }>
              <TreeNode
                label={
                  <div className="node child">
                    <div
                      className="dote
"></div>
                    <div className="border-image-container"></div>
                    <div className="icon">
                      <a10 className="a1-flow">
                        <span className="topics-flowchart">
                          <ChangingProgressProvider value={progress}>
                            {(value) => (
                              <CircularProgressbarWithChildren
                                value={value}
                                circleRatio={0.75}
                                styles={buildStyles({
                                  rotation: 1 / 2 + 1 / 8,
                                  strokeLinecap: "butt",
                                  trailColor: "#C8D1D8",
                                  pathColor:
                                    value > 0 ? "#122E50" : "transparent",
                                })}>
                                <div className="person-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={17}
                                    height={17}
                                    color={"#122E50"}
                                    fill={"none"}>
                                    <path
                                      d="M2.5 16.9999L2.05801 14.5261C1.4248 8.63642 6.05622 3.49994 12 3.49994C17.9438 3.49994 22.5752 8.63642 21.942 14.5261L21.5 16.9999"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8.0157 10.4999C7.81291 7.295 9.59813 3.49994 12 3.49994"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16 10.4999C16.2028 7.295 14.4176 3.49994 12.0157 3.49994"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M12 2.99994V1.99994"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M2.5 17.0093C10.5 14.1427 13.5 14.5243 21.5 17.0093C21.2236 18.1308 21.0732 21.2995 19.851 21.8966C19.265 22.1829 18.4247 21.7988 17.821 21.6546C14.9252 20.9629 13.4773 20.617 12 20.617C10.5227 20.617 9.07482 20.9629 6.17904 21.6546C5.57535 21.7988 4.73502 22.1829 4.14904 21.8966C2.92684 21.2995 2.77642 18.1308 2.5 17.0093Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <h6>With BIT</h6>
                                </div>
                              </CircularProgressbarWithChildren>
                            )}
                          </ChangingProgressProvider>
                        </span>
                      </a10>
                    </div>
                  </div>
                }>
                <TreeNode
                  label={
                    <div className="node child">
                      <div
                        className="dote
"></div>
                      <div className="border-image-container"></div>
                      <div className="icon">
                        <a11
                          onClick={() => setAlumni(true)}
                          className="a1-flow">
                          <span className="topics-flowchart">
                            <ChangingProgressProvider value={progress5}>
                              {(value) => (
                                <CircularProgressbarWithChildren
                                  value={value}
                                  circleRatio={0.75}
                                  styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#C8D1D8",
                                    pathColor:
                                      value > 0 ? "#122E50" : "transparent",
                                  })}>
                                  <div className="person-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={17}
                                      height={17}
                                      color={"#122E50"}
                                      fill={"none"}>
                                      <path
                                        d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V16.3333C19 17.8847 19 18.6604 18.7877 19.2858C18.388 20.4633 17.4633 21.388 16.2858 21.7877C15.6604 22 14.8847 22 13.3333 22H10.6667C9.11529 22 8.3396 22 7.71424 21.7877C6.53668 21.388 5.61201 20.4633 5.21228 19.2858C5 18.6604 5 17.8847 5 16.3333V12Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M5 17C6.64996 15.17 9.17273 14 12 14C14.8273 14 17.35 15.17 19 17"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M11 10H13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M9 6V5C9 4.06812 9 3.60218 9.15224 3.23463C9.35523 2.74458 9.74458 2.35523 10.2346 2.15224C10.6022 2 11.0681 2 12 2C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5V6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M5 19H3.71429C2.76751 19 2 18.2325 2 17.2857L2 16C2 14.3431 3.34315 13 5 13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M19 19H20.2857C21.2325 19 22 18.2325 22 17.2857L22 16C22 14.3431 20.6569 13 19 13"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                    <h6>Alumni</h6>
                                  </div>
                                </CircularProgressbarWithChildren>
                              )}
                            </ChangingProgressProvider>
                          </span>
                        </a11>
                      </div>
                    </div>
                  }
                />
                <TreeNode
                  label={
                    <div className="node child">
                      <div
                        className="dote
  "></div>
                      <div className="border-image-container"></div>
                      <div className="icon">
                        <a12 className="a1-flow">
                          <span className="topics-flowchart">
                            <ChangingProgressProvider value={progress}>
                              {(value) => (
                                <CircularProgressbarWithChildren
                                  value={value}
                                  circleRatio={0.75}
                                  styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#C8D1D8",
                                    pathColor:
                                      value > 0 ? "#122E50" : "transparent",
                                  })}>
                                  <div className="person-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={17}
                                      height={17}
                                      color={"#122E50"}
                                      fill={"none"}>
                                      <path
                                        d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                      />
                                      <path
                                        d="M17 7H14M17 11H14"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                      />
                                    </svg>{" "}
                                    <h6>Interactions</h6>
                                  </div>
                                </CircularProgressbarWithChildren>
                              )}
                            </ChangingProgressProvider>
                          </span>
                        </a12>
                      </div>
                    </div>
                  }>
                  <TreeNode
                    label={
                      <div className="node child">
                        <div
                          className="dote
    "></div>
                        <div className="border-image-container"></div>
                        <div className="icon">
                          <a13
                            onClick={() => setOutcome(true)}
                            className="a1-flow">
                            <span className="topics-flowchart">
                              <ChangingProgressProvider value={progress6}>
                                {(value) => (
                                  <CircularProgressbarWithChildren
                                    value={value}
                                    circleRatio={0.75}
                                    styles={buildStyles({
                                      rotation: 1 / 2 + 1 / 8,
                                      strokeLinecap: "butt",
                                      trailColor: "#C8D1D8",
                                      pathColor:
                                        value > 0 ? "#122E50" : "transparent",
                                    })}>
                                    <div className="person-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={17}
                                        height={17}
                                        color={"#122E50"}
                                        fill={"none"}>
                                        <path
                                          d="M11.5 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                        />
                                        <path
                                          d="M13.6418 14.4418C14.8486 13.7108 15.9018 14.0054 16.5345 14.4747C16.794 14.6671 16.9237 14.7633 17 14.7633C17.0763 14.7633 17.206 14.6671 17.4655 14.4747C18.0982 14.0054 19.1514 13.7108 20.3582 14.4418C21.9419 15.4013 22.3002 18.5666 18.6472 21.237C17.9514 21.7457 17.6035 22 17 22C16.3965 22 16.0486 21.7457 15.3528 21.237C11.6998 18.5666 12.0581 15.4013 13.6418 14.4418Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                        />
                                        <path
                                          d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                        />
                                      </svg>{" "}
                                      <h6>Outcome</h6>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                )}
                              </ChangingProgressProvider>
                            </span>
                          </a13>
                        </div>
                      </div>
                    }
                  />
                  <TreeNode
                    label={
                      <div className="node child">
                        <div
                          className="dote
      "></div>
                        <div className="border-image-container"></div>
                        <div className="icon">
                          <a14
                            onClick={() => setIncidents(true)}
                            className="a1-flow">
                            <span className="topics-flowchart">
                              <ChangingProgressProvider value={progress7}>
                                {(value) => (
                                  <CircularProgressbarWithChildren
                                    value={value}
                                    circleRatio={0.75}
                                    styles={buildStyles({
                                      rotation: 1 / 2 + 1 / 8,
                                      strokeLinecap: "butt",
                                      trailColor: "#C8D1D8",
                                      pathColor:
                                        value > 0 ? "#122E50" : "transparent",
                                    })}>
                                    <div className="person-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={17}
                                        height={17}
                                        color={"#122E50"}
                                        fill={"none"}>
                                        <path
                                          d="M18 2V4M6 2V4"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M3 8H21"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M15 15L9 15M15 15C15 15.7002 13.0057 17.0085 12.5 17.5M15 15C15 14.2998 13.0057 12.9915 12.5 12.5"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <h6>Incidents</h6>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                )}
                              </ChangingProgressProvider>
                            </span>
                          </a14>
                        </div>
                      </div>
                    }
                  />
                </TreeNode>
              </TreeNode>
              <TreeNode
                label={
                  <div className="node child">
                    <div
                      className="dote
"></div>
                    <div className="border-image-container"></div>
                    <div className="icon">
                      <a15 onClick={() => setOthers(true)} className="a6-flow">
                        <span className="topics-flowchart">
                          <ChangingProgressProvider value={progress11}>
                            {(value) => (
                              <CircularProgressbarWithChildren
                                value={value}
                                circleRatio={0.75}
                                styles={buildStyles({
                                  rotation: 1 / 2 + 1 / 8,
                                  strokeLinecap: "butt",
                                  trailColor: "#C8D1D8",
                                  pathColor:
                                    value > 0 ? "#122E50" : "transparent",
                                })}>
                                <div className="person-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={17}
                                    height={17}
                                    color={"#122E50"}
                                    fill={"none"}>
                                    <path
                                      d="M20.3068 15.3312C16.7859 18.8521 11.1336 18.908 7.61276 15.3872C4.09192 11.8663 4.14799 6.21408 7.66883 2.69323M20.3068 15.3312C21.9837 13.6543 20.5139 9.46584 17.0241 5.97596C13.5342 2.48608 9.34571 1.01635 7.66883 2.69323M20.3068 15.3312C18.6299 17.0081 14.4414 15.5384 10.9516 12.0485M7.66883 2.69323C5.99196 4.37011 7.46169 8.55859 10.9516 12.0485M10.9516 12.0485L14 9"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M6.48804 15L4.75106 17.4884C3.3523 19.4923 2.65291 20.4942 3.17039 21.2471C3.68787 22 5.07589 22 7.85193 22H12.1481C14.9241 22 16.3121 22 16.8296 21.2471C17.301 20.5612 16.7625 19.6686 15.6053 18"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <h6>Others</h6>
                                </div>
                              </CircularProgressbarWithChildren>
                            )}
                          </ChangingProgressProvider>
                        </span>
                      </a15>
                    </div>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
      <form>
        <Dialog open={person} onClose={() => setPerson(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Personal Information
            </h3>
            <div className="1stline" style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Full Name"
                name="fullname"
                style={{ flexGrow: 1 }}
                value={personInfo.fullname}
                onChange={handleDetailsChange1}
              />
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <div
                  style={{
                    border: "1px",
                    borderRadius: "50px",
                    width: "40px",
                    height: "44px",
                  }}
                  onClick={handleClickOpen}>
                  <img className="profilepic" src={imagePreview || Profile} />
                </div>
              </div>
            </div>
            <div className="2ndline" style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Phone Number"
                name="phoneNumber"
                value={personInfo.phoneNumber}
                onChange={handleDetailsChange1}
              />
              {/* <Input placeholder="Secondary Number" /> */}
              <Input
                placeholder="Age"
                name="age"
                type="number"
                value={personInfo.age}
                onChange={handleDetailsChange1}
              />
            </div>
            <div
              className="3rdline"
              style={{ display: "flex", gap: "15px", flex: "2" }}>
              <Input
                placeholder="Email"
                name="email"
                style={{ flexGrow: 1 }}
                value={personInfo.email}
                onChange={handleDetailsChange1}
              />
              <Input
                placeholder="Linkedin Url"
                name="linkedinUrl"
                style={{ flexGrow: 1 }}
                value={personInfo.linkedinUrl}
                onChange={handleDetailsChange1}
              />
            </div>
            <div>
              <Box>
                <Textarea
                  placeholder="Address"
                  name="address"
                  minRows={2}
                  maxRows={4}
                  value={personInfo.address}
                  onChange={handleDetailsChange1}
                />
              </Box>
            </div>
            <div>
              <Box>
                <Textarea
                  placeholder="Short Description"
                  name="shortDescription"
                  minRows={2}
                  maxRows={4}
                  onChange={handleDetailsChange1}
                  value={personInfo.shortDescription}
                />
              </Box>
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setPerson(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handlePerson}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={company} onClose={() => setCompany(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Company
            </h3>
            <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Company Name"
                      onChange={handleDetailsChange3}
                      value={CompanyInfo.companyName}
                      name="companyName"
                    />
                    <Input
                      placeholder="Position"
                      onChange={handleDetailsChange3}
                      value={CompanyInfo.position}
                      name="position"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Experience"
                      onChange={handleDetailsChange3}
                      value={CompanyInfo.experience}
                      name="experience"
                    />
                    <Input
                      placeholder="Role"
                      onChange={handleDetailsChange3}
                      value={CompanyInfo.role}
                      name="role"
                    />
                  </div>
                  <div>
                    <Box>
                      <Textarea
                        placeholder="Company Address"
                        minRows={2}
                        maxRows={4}
                        onChange={handleDetailsChange3}
                        value={CompanyInfo.companyAddress}
                        name="companyAddress"
                      />
                    </Box>
                  </div>
                </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setCompany(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit3}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={alumni} onClose={() => setAlumni(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Alumni Details
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Name"
                onChange={handleDetailsChange5}
                value={Alumniinfo.name}
                name="name"
              />
              <Input
                placeholder="Batch"
                onChange={handleDetailsChange5}
                value={Alumniinfo.batch}
                name="batch"
              />
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Graduated Year"
                onChange={handleDetailsChange5}
                value={Alumniinfo.graduatedyear}
                name="graduatedyear"
              />
              <Input
                placeholder="Phone number"
                onChange={handleDetailsChange5}
                value={Alumniinfo.phonenumber}
                name="phonenumber"
              />
            </div>
            <div>
              <Box>
                <Textarea
                  placeholder="Company Address"
                  minRows={2}
                  maxRows={4}
                  onChange={handleDetailsChange5}
                  value={Alumniinfo.companyAddress}
                  name="companyAddress"
                />
              </Box>
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setAlumni(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit5}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={outcome} onClose={() => setOutcome(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Previous Interactions
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Event Name"
                onChange={handleDetailsChange6}
                value={Outcomeinfo.eventname}
                name="eventname"
              />
              <Input
                type="date"
                className="time"
                onChange={handleDetailsChange6}
                value={Outcomeinfo.date}
                name="date"
              />
            </div>
            <div>
              <Box>
                <Textarea
                  placeholder="Outcome Description"
                  minRows={2}
                  maxRows={4}
                  onChange={handleDetailsChange6}
                  value={Outcomeinfo.description}
                  name="description"
                />
              </Box>
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setOutcome(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit6}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={incidents} onClose={() => setIncidents(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Previous Interactions
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Event Name"
                onChange={handleDetailsChange7}
                value={Incidentsinfo.eventname}
                name="eventname"
              />
              <Input
                type="date"
                className="time"
                onChange={handleDetailsChange7}
                value={Incidentsinfo.date}
                name="date"
              />
            </div>
            <div>
              <Box>
                <Textarea
                  placeholder="Incident Description"
                  minRows={2}
                  maxRows={4}
                  onChange={handleDetailsChange7}
                  value={Incidentsinfo.description}
                  name="description"
                />
              </Box>
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setIncidents(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit7}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog
          open={previousExperience}
          onClose={() => setPreviousExperience(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Previous Interactions
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="yes"
                  onChange={(e) => setIfexperience(e.target.value)}
                />
                Yes, Have a previous Experience
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  onChange={(e) => setIfexperience(e.target.value)}
                />
                No previous Experience
              </label>
            </div>
            <div>
              {Ifexperience === "yes" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Company Name"
                      onChange={handleDetailsChange2}
                      value={PreviousExperienceinfo.companyName}
                      name="companyName"
                    />
                    <Input
                      placeholder="Position"
                      onChange={handleDetailsChange2}
                      value={PreviousExperienceinfo.position}
                      name="position"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Experience"
                      onChange={handleDetailsChange2}
                      value={PreviousExperienceinfo.experience}
                      name="experience"
                    />
                    <Input
                      placeholder="Role"
                      onChange={handleDetailsChange2}
                      value={PreviousExperienceinfo.role}
                      name="role"
                    />
                  </div>
                  <div>
                    <Box>
                      <Textarea
                        placeholder="Company Address"
                        minRows={2}
                        maxRows={4}
                        onChange={handleDetailsChange2}
                        value={PreviousExperienceinfo.companyAddress}
                        name="companyAddress"
                      />
                    </Box>
                  </div>
                </div>
              )}
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setPreviousExperience(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit2}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={placement} onClose={() => setPlacement(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Placement
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="yes"
                  onChange={(e) => setIfplacement(e.target.value)}
                />
                Yes, Have an Placement Opportunities
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  onChange={(e) => setIfplacement(e.target.value)}
                />
                No, Don't have an Placement Opportunities
              </label>
            </div>
            <div>
              {Ifplacement === "yes" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Role"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange8}
                      value={Placementinfo.role}
                      name="role"
                    />
                    <Input
                      placeholder="Domain"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange8}
                      value={Placementinfo.domain}
                      name="domain"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Skillset - Eg: Html,css,js"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange8}
                      value={Placementinfo.skillset}
                      name="skillset"
                    />
                    <Input
                      placeholder="Eligibility"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange8}
                      value={Placementinfo.eligibility}
                      name="eligibility"
                    />
                  </div>
                </div>
              )}
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setPlacement(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit8}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={consultancy} onClose={() => setConsultancy(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Consultancy
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="yes"
                  onChange={(e) => setIfconsultancy(e.target.value)}
                />
                Yes, Have an Project Opportunities
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  onChange={(e) => setIfconsultancy(e.target.value)}
                />
                No, Don't have an Project Opportunities
              </label>
            </div>
            <div>
              {Ifconsultancy === "yes" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Role"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange9}
                      value={Consultancyinfo.role}
                      name="role"
                    />
                    <Input
                      placeholder="Domain"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange9}
                      value={Consultancyinfo.domain}
                      name="domain"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Skillset - Eg: Html,css,js"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange9}
                      value={Consultancyinfo.skillset}
                      name="skillset"
                    />
                    <Input
                      placeholder="Eligibility"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange9}
                      value={Consultancyinfo.eligibility}
                      name="eligibility"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="ProjectType - Eg: Freelance, project, MiniProject"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange9}
                      value={Consultancyinfo.projecttype}
                      name="projecttype"
                    />
                  </div>
                </div>
              )}
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setConsultancy(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit9}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={internship} onClose={() => setInternship(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Internship
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="yes"
                  onChange={(e) => setIfinternship(e.target.value)}
                />
                Yes, Have an Internship Opportunities
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="no"
                  onChange={(e) => setIfinternship(e.target.value)}
                />
                No, Don't have an Internship Opportunities
              </label>
            </div>
            <div>
              {Ifinternship === "yes" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Role"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange10}
                      value={Internshipinfo.role}
                      name="role"
                    />
                    <Input
                      placeholder="Domain"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange10}
                      value={Internshipinfo.domain}
                      name="domain"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Skillset - Eg: Html,css,js"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange10}
                      value={Internshipinfo.skillset}
                      name="skillset"
                    />
                    <Input
                      placeholder="Eligibility"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange10}
                      value={Internshipinfo.eligibility}
                      name="eligibility"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="ProjectType - Eg: Freelance, project, MiniProject"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange10}
                      value={Internshipinfo.projecttype}
                      name="projecttype"
                    />
                  </div>
                </div>
              )}
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setInternship(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit10}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={expertise} onClose={() => setExpertise(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Expertise
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <Input
                placeholder="Domain"
                onChange={handleDetailsChange4}
                value={ExpertiseInfo.domain}
                name="domain"
              />
              <Input
                placeholder="Specialist Skills"
                onChange={handleDetailsChange4}
                value={ExpertiseInfo.specialistskills}
                name="specialistskills"
              />
            </div>
            <div>
              <Input
                placeholder="Skillset - Eg: Html,css,js"
                style={{ flexGrow: "1" }}
                onChange={handleDetailsChange4}
                value={ExpertiseInfo.skillset}
                name="skillset"
              />
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setExpertise(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit4}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>

        <Dialog open={others} onClose={() => setOthers(false)}>
          <div
            className="dialogue"
            style={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}>
            <h3
              style={{
                fontSize: "25px",
                fontFamily: "Open Sans, sans-serif",
              }}>
              Referred by
            </h3>
            <div style={{ display: "flex", gap: "15px" }}>
              {/* <Input
                placeholder="Name"
                onChange={(e) => setReference(e.target.value)}
                value={Reference}
              /> */}
              <div>
                <Input
                  placeholder="Name"
                  style={{ flexGrow: "1" }}
                  onChange={handleDetailsChange11}
                  value={OthersInfo.name}
                  name="Name"
                />
              </div>
            </div>
            <div id="buttonContainer-flowchart-person">
              <button
                onClick={() => setOthers(false)}
                color="primary"
                id="discard-flowchart-person">
                Discard
              </button>
              <button
                color="primary"
                id="save-flowchart-person"
                onClick={handleSubmit11}>
                Save changes
              </button>
            </div>
          </div>
        </Dialog>
      </form>
    </div>
  );
};

export default Flowchart;
