// import { useState } from 'react';
// import './flowchart.css';
// import { Dialog } from '@mui/material';
// import Box from "@mui/joy/Box";
// import Input from "@mui/joy/Input";
// import Textarea from "@mui/joy/Textarea";
// import Call from "../History/Call";
import { useState, useRef } from "react";
import "./flowchart.css";
import { Dialog } from "@mui/material";
import Box from "@mui/joy/Box";
import dayjs from "dayjs";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Profile from "../../Assets/bgprofile.png";

export default function Flowchart() {
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
  const [imagePath, setImagePath] = useState('');
  const [imagePreview, setImagePreview] = useState(Profile);

  const [Ifexperience, setIfexperience] = useState("");
  const [Ifplacement, setIfplacement] = useState("");
  const [Ifconsultancy, setIfconsultancy] = useState("");
  const [Ifinternship, setIfinternship] = useState("");
  const [Reference, setReference] = useState("");

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
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

  const [PersonInfo, setPersoninfo] = useState({
    fullname: "",
    // middleName: "",
    // lastName: "",
    phoneNumber: "",
    // secondaryNumber: "",
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

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersoninfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setPreviousExperienceinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setCompanyinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setExpertiseinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setAlumniinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setOutcomeinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setIncidentsinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setPlacementinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setConsultancyinfo((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setInternshipinfo((prevDetails) => ({
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
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData, // Send the FormData object as the request body
      });
  
      if (!response.ok) {
        const text = await response.text();
        console.error('Upload failed with status:', response.status);
        console.error('Response text:', text);
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setImagePreview(data.path);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  
    // Clear the file input after upload (optional)
    e.target.value = null;
    
        // PersonInfo,
        // PreviousExperienceinfo,
        // CompanyInfo,
        // ExpertiseInfo,
        // Alumniinfo,
        // Outcomeinfo,
        // Incidentsinfo,
        // Placementinfo,
        // Consultancyinfo,
        // Internshipinfo,
        // Ifexperience,
        // Ifplacement,
        // Ifconsultancy,
        // Ifinternship,
        // Reference
  };
  return (
    <>
      <div className="right">
        <div className="flowchart">
          <div>
            <div className="tree_cont">
              <div className="tree">
                <ul>
                  <li className="per">
                    <a onClick={() => setPerson(true)}>
                      <span>Person</span>
                    </a>
                    <ul>
                      <li className="pre">
                        <a onClick={() => setPreviousExperience(true)}>
                          <span>Previous Experience</span>
                        </a>
                      </li>
                      <li className="ord">
                        <a onClick={() => setCompany(true)}>
                          <span>Company</span>
                        </a>
                        <ul>
                          <li>
                            <a>
                              <span>Opportunity</span>
                            </a>
                            <ul>
                              <li>
                                <a onClick={() => setPlacement(true)}>
                                  <span>Placement</span>
                                </a>
                              </li>
                              <li>
                                <a onClick={() => setConsultancy(true)}>
                                  <span>Consultancy</span>
                                </a>
                              </li>
                              <li>
                                <a onClick={() => setInternship(true)}>
                                  <span>Internship</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a onClick={() => setExpertise(true)}>
                          <span>Expertise</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Connections</span>
                        </a>
                        <ul>
                          <li>
                            <a>
                              <span>With BIT</span>
                            </a>
                            <ul>
                              <li>
                                <a onClick={() => setAlumni(true)}>
                                  <span>Alumni</span>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span>Previous Interactions</span>
                                </a>
                                <ul>
                                  <li>
                                    <a onClick={() => setOutcome(true)}>
                                      <span>Outcome</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a onClick={() => setIncidents(true)}>
                                      <span>Incidents</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a onClick={() => setOthers(true)}>
                              <span>Others</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <form>
              <Dialog open={person} onClose={() => setPerson(false)}>
                <div
                  className="dialogue"
                  style={{
                    gap: "15px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Personal Information
                  </h3>
                  <div
                    className="1stline"
                    style={{ display: "flex", gap: "15px" }}
                  >
                    <Input
                      placeholder="Full Name"
                      name="fullname"
                      style={{ flexGrow: 1 }}
                      value={PersonInfo.fullname}
                      onChange={handleDetailsChange}
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
                          border: "1px solid black",
                          borderRadius: "50px",
                          width: "40px",
                          height: "40px",
                        }}
                        onClick={handleClick}
                      >
                        <img className="profilepic" src={imagePreview || Profile} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="2ndline"
                    style={{ display: "flex", gap: "15px" }}
                  >
                    <Input
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={PersonInfo.phoneNumber}
                      onChange={handleDetailsChange}
                    />
                    {/* <Input placeholder="Secondary Number" /> */}
                    <Input
                      placeholder="Age"
                      name="age"
                      type="number"
                      value={PersonInfo.age}
                      onChange={handleDetailsChange}
                    />
                  </div>
                  <div
                    className="3rdline"
                    style={{ display: "flex", gap: "15px", flex: "2" }}
                  >
                    <Input
                      placeholder="Email"
                      name="email"
                      style={{ flexGrow: 1 }}
                      value={PersonInfo.email}
                      onChange={handleDetailsChange}
                    />
                    <Input
                      placeholder="Linkedin Url"
                      name="linkedinUrl"
                      style={{ flexGrow: 1 }}
                      value={PersonInfo.linkedinUrl}
                      onChange={handleDetailsChange}
                    />
                  </div>
                  <div>
                    <Box>
                      <Textarea
                        placeholder="Address"
                        name="address"
                        minRows={2}
                        maxRows={4}
                        value={PersonInfo.address}
                        onChange={handleDetailsChange}
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
                        onChange={handleDetailsChange}
                        value={PersonInfo.shortDescription}
                      />
                    </Box>
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Company
                  </h3>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Company Name"
                      onChange={handleDetailsChange}
                      value={CompanyInfo.companyName}
                      name="companyName"
                    />
                    <Input
                      placeholder="Position"
                      onChange={handleDetailsChange}
                      value={CompanyInfo.position}
                      name="position"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Experience"
                      onChange={handleDetailsChange}
                      value={CompanyInfo.experience}
                      name="experience"
                    />
                    <Input
                      placeholder="Role"
                      onChange={handleDetailsChange}
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
                        onChange={handleDetailsChange}
                        value={CompanyInfo.companyAddress}
                        name="companyAddress"
                      />
                    </Box>
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Alumni Details
                  </h3>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Name"
                      onChange={handleDetailsChange}
                      value={Alumniinfo.name}
                      name="name"
                    />
                    <Input
                      placeholder="Batch"
                      onChange={handleDetailsChange}
                      value={Alumniinfo.batch}
                      name="batch"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Graduated Year"
                      onChange={handleDetailsChange}
                      value={Alumniinfo.graduatedyear}
                      name="graduatedyear"
                    />
                    <Input
                      placeholder="Phone number"
                      onChange={handleDetailsChange}
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
                        onChange={handleDetailsChange}
                        value={Alumniinfo.companyAddress}
                        name="companyAddress"
                      />
                    </Box>
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Previous Interactions
                  </h3>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Event Name"
                      onChange={handleDetailsChange}
                      value={Outcomeinfo.eventname}
                      name="eventname"
                    />
                    <Input
                      type="date"
                      className="time"
                      onChange={handleDetailsChange}
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
                        onChange={handleDetailsChange}
                        value={Outcomeinfo.description}
                      />
                    </Box>
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Previous Interactions
                  </h3>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Event Name"
                      onChange={handleDetailsChange}
                      value={Incidentsinfo.eventname}
                      name="eventname"
                    />
                    <Input
                      type="date"
                      className="time"
                      onChange={handleDetailsChange}
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
                        onChange={handleDetailsChange}
                        value={Incidentsinfo.description}
                        name="description"
                      />
                    </Box>
                  </div>
                </div>
              </Dialog>

              <Dialog
                open={previousExperience}
                onClose={() => setPreviousExperience(false)}
              >
                <div
                  className="dialogue"
                  style={{
                    gap: "15px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
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
                        }}
                      >
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Company Name"
                            onChange={handleDetailsChange}
                            value={PreviousExperienceinfo.companyName}
                            name="companyName"
                          />
                          <Input
                            placeholder="Position"
                            onChange={handleDetailsChange}
                            value={PreviousExperienceinfo.position}
                            name="position"
                          />
                        </div>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Experience"
                            onChange={handleDetailsChange}
                            value={PreviousExperienceinfo.experience}
                            name="experience"
                          />
                          <Input
                            placeholder="Role"
                            onChange={handleDetailsChange}
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
                              onChange={handleDetailsChange}
                              value={PreviousExperienceinfo.companyAddress}
                              name="companyAddress"
                            />
                          </Box>
                        </div>
                      </div>
                    )}
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
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
                        }}
                      >
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Role"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Placementinfo.role}
                            name="role"
                          />
                          <Input
                            placeholder="Domain"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Placementinfo.domain}
                            name="domain"
                          />
                        </div>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Skillset - Eg: Html,css,js"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Placementinfo.skillset}
                            name="skillset"
                          />
                          <Input
                            placeholder="Eligibility"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Placementinfo.eligibility}
                            name="eligibility"
                          />
                        </div>
                      </div>
                    )}
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
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
                        }}
                      >
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Role"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Consultancyinfo.role}
                            name="role"
                          />
                          <Input
                            placeholder="Domain"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Consultancyinfo.domain}
                            name="domain"
                          />
                        </div>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Skillset - Eg: Html,css,js"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Consultancyinfo.skillset}
                            name="skillset"
                          />
                          <Input
                            placeholder="Eligibility"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Consultancyinfo.eligibility}
                            name="eligibility"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="ProjectType - Eg: Freelance, project, MiniProject"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Consultancyinfo.projecttype}
                            name="projecttype"
                          />
                        </div>
                      </div>
                    )}
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
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
                        }}
                      >
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Role"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Internshipinfo.role}
                            name="role"
                          />
                          <Input
                            placeholder="Domain"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Internshipinfo.domain}
                            name="domain"
                          />
                        </div>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <Input
                            placeholder="Skillset - Eg: Html,css,js"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Internshipinfo.skillset}
                            name="skillset"
                          />
                          <Input
                            placeholder="Eligibility"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Internshipinfo.eligibility}
                            name="eligibility"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="ProjectType - Eg: Freelance, project, MiniProject"
                            style={{ flexGrow: "1" }}
                            onChange={handleDetailsChange}
                            value={Internshipinfo.projecttype}
                            name="projecttype"
                          />
                        </div>
                      </div>
                    )}
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Expertise
                  </h3>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Domain"
                      onChange={handleDetailsChange}
                      value={ExpertiseInfo.domain}
                      name="domain"
                    />
                    <Input
                      placeholder="Specialist Skills"
                      onChange={handleDetailsChange}
                      value={ExpertiseInfo.specialistskills}
                      name="specialistskills"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Skillset - Eg: Html,css,js"
                      style={{ flexGrow: "1" }}
                      onChange={handleDetailsChange}
                      value={ExpertiseInfo.skillset}
                      name="skillset"
                    />
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
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25px",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    Referred by
                  </h3>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input
                      placeholder="Name"
                      onChange={(e) => setReference(e.target.value)}
                      value={Reference}
                    />
                  </div>
                </div>
              </Dialog>

              <button onClick={handlesubmit}>Submit</button>
            </form>
          </div>
        </div>
        {/* <Call /> */}
      </div>
    </>
  );
}
