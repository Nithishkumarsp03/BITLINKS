import React, { useState, useRef } from "react";
import "./Addaccount.css";
import { Dialog } from "@mui/material";
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Profile from "../../Assets/Profile.png";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const ChangingProgressProvider = ({ value, children }) => {
  return children(value);
};

function ShowAddAccount() {
  const [person_1, setPerson_1] = useState(false);
  const [progress_1, setProgress_1] = useState(0);
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState(Profile);

  const [personInfo_1, setPersonInfo_1] = useState({
    fullname_1: "",
    phoneNumber: "",
    age: "",
    email: "",
    linkedinUrl: "",
    address: "",
    shortDescription: "",
  });

  const handleDetailsChange_1 = (e) => {
    const { name, value } = e.target;
    setPersonInfo_1((prevDetails_1) => ({
      ...prevDetails_1,
      [name]: value,
    }));
  };

  const calculateProgress_1 = () => {
    const totalFields = Object.keys(personInfo_1).length + 1;
    const filledFields =
      Object.values(personInfo_1).filter((value) => value !== "").length +
      (file ? 1 : 0);
    const progressValue_1 = (filledFields / totalFields) * 100;
    setProgress_1(progressValue_1);
  };

  const handleSubmit_1 = () => {
    setPerson_1(false);
    calculateProgress_1();
  };

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

  const handleSubmit = async (e) => {
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
        body: formData,
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

  return (
    <div className="add-account-main">
      <div className="addaccount">
        <div className="inputs_page">
          <div>
            <h1 className="addacc">Add Account</h1>
            <p className="period2req">
              <h6 className="period2">.</h6>
              <span className="req">Required to save as client.</span>
            </p>
          </div>
          <div className="buttonContainer2">
            <button color="primary" className="addconnection-discard">
              Discard
            </button>
            <button
              color="primary"
              className="addconnection-save"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
        <div className="add-connection-inputs">
          <a1
            onClick={() => setPerson_1(true)}
            className="addconnections-a1-flow"
          >
            <span className="addconnection-topics-flowchart">
              <ChangingProgressProvider value={progress_1}>
                {(value) => (
                  <CircularProgressbarWithChildren
                    backgroundPadding={50}
                    value={value}
                    circleRatio={0.75}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: "butt",
                      trailColor: "#C8D1D8",
                      pathColor: value > 0 ? "#122E50" : "transparent",
                    })}
                  >
                    <div
                      className="addconnection-person-icon"
                      style={{ textAlign: "center" }}
                    >
                      <svg
                        className="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={18}
                        height={27}
                        color={"#122E50"}
                        fill={"none"}
                        style={{ display: "block", margin: "0 auto" }}
                      >
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
                      <h6 style={{ margin: 0, color: "#122E50" }}>Person</h6>
                    </div>
                  </CircularProgressbarWithChildren>
                )}
              </ChangingProgressProvider>
            </span>
          </a1>
        </div>
      </div>
      <Dialog open={person_1} onClose={() => setPerson_1(false)}>
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
          <div className="1stline" style={{ display: "flex", gap: "15px" }}>
            <Input
              placeholder="Full Name"
              name="fullname_1"
              style={{ flexGrow: 1 }}
              value={personInfo_1.fullname_1}
              onChange={handleDetailsChange_1}
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
                onClick={handleClickOpen}
              >
                <img
                  className="addconnection-profilepic"
                  src={imagePreview || Profile}
                />
              </div>
            </div>
          </div>
          <div className="2ndline" style={{ display: "flex", gap: "15px" }}>
            <Input
              placeholder="Phone Number"
              name="phoneNumber"
              value={personInfo_1.phoneNumber}
              onChange={handleDetailsChange_1}
            />
            <Input
              placeholder="Age"
              name="age"
              type="number"
              value={personInfo_1.age}
              onChange={handleDetailsChange_1}
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
              value={personInfo_1.email}
              onChange={handleDetailsChange_1}
            />
            <Input
              placeholder="Linkedin Url"
              name="linkedinUrl"
              style={{ flexGrow: 1 }}
              value={personInfo_1.linkedinUrl}
              onChange={handleDetailsChange_1}
            />
          </div>
          <div>
            <Box>
              <Textarea
                placeholder="Address"
                name="address"
                minRows={2}
                maxRows={4}
                value={personInfo_1.address}
                onChange={handleDetailsChange_1}
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
                onChange={handleDetailsChange_1}
                value={personInfo_1.shortDescription}
              />
            </Box>
          </div>
          <div id="buttonContainer-flowchart-person">
            <button
              onClick={() => setPerson_1(false)}
              color="primary"
              id="discard-flowchart-person"
            >
              Discard
            </button>
            <button
              color="primary"
              id="save-flowchart-person"
              onClick={handleSubmit_1}
            >
              Save changes
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ShowAddAccount;
