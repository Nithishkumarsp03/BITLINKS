import React, { useState } from 'react'
import { useEffect } from 'react'
import Round from '../../Assets/icons.svg'
import Networks from '../../Assets/Networks.svg'
import Add from '../../Assets/add.svg'
import info from '../../Assets/Information.svg'
import Rank4 from '../../Assets/Rank-1.svg'
import Rank3 from '../../Assets/Rank-2.svg'
import Rank2 from '../../Assets/Rank-3.svg'
import Rank1 from '../../Assets/Rank-4.svg'
import PieAnimation from '../../COMPONENTS/Piechart'
import { Dialog } from '@mui/material'
import MainFlow from '../Flows/MainFlow/Flows'
import Cookies from "js-cookie";
import '../Home/Home.css'

export default function Default() {

    const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#00000"} fill={"none"} {...props}>
          <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
      const Popup = () => (
        <div style={{
          position: 'absolute',
          top: '270px',  // Adjust based on where you want the popup to appear
          right: '480px',
          width: '200px',
          padding: '10px',
          backgroundColor: '#fff',
        //   border: "1px solid black",
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          zIndex: 1000
        }}>
          <div style={{display: "flex", justifyContent: "center", gap: "10px", padding: "5px", cursor: "pointer"}}>
            <p>Sort by:</p>
            <img src={Rank4} alt="" width="20px"/>
            <p>Rank 4</p>
          </div>
          <hr color='#dfdfdf'/>
          <div style={{display: "flex", justifyContent: "center", gap: "10px", padding: "5px", cursor: "pointer"}}>
            <p>Sort by:</p>
            <img src={Rank3} alt="" width="20px"/>
            <p>Rank 3</p>
          </div>
          <hr color='#dfdfdf'/>
          <div style={{display: "flex", justifyContent: "center", gap: "10px", padding: "5px", cursor: "pointer"}}>
            <p>Sort by:</p>
            <img src={Rank2} alt="" width="20px"/>
            <p>Rank 2</p>
          </div>
          <hr color='#dfdfdf'/>
          <div style={{display: "flex", justifyContent: "center", gap: "10px", padding: "5px", cursor: "pointer"}}>
            <p>Sort by:</p>
            <img src={Rank1} alt="" width="20px"/>
            <p>Rank 1</p>
          </div>
        </div>
      );
      

    const userProfile = Cookies.get("userProfile");
    const parsedProfile = userProfile ? JSON.parse(userProfile) : null;
    const email = parsedProfile?.email;
    const [userNetworks, setuserNetworks] = useState([]);
    const [Connections, setConnections] = useState(true);
    const [networks, setNetworks] = useState(false);
    const [graph, setGraph] = useState(false);
    const [filter, setFilter] = useState(false);
    const [add, setAdd] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [view, setView] = useState(false);
    const [personalInfo, setPersonalInfo] = useState(null);
    const [personalInfos, setPersonalInfos] = useState([]);
    const [error, setError] = useState(null);
    const [selectedPersonId, setSelectedPersonId] = useState(null);


    const handleConnections = () => {
        setConnections(true);
        setNetworks(false)
        setFilter(false);
        setView(false);
    }

    const handleNetworks = () => {
        setConnections(false);
        setNetworks(true);
        setFilter(false);
        setView(false);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleCheck = async () => {
        // console.log("Input value: ", inputValue);
        try {
          const response = await fetch('http://localhost:8000/api/check-connection', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: inputValue })
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
      
          if (data.message === 'found') {
            setErrorMessage('Connection already exists');
            setIsButtonDisabled(true);
          } else if (inputValue.trim() === '') {
            setErrorMessage('Name cannot be empty');
            setIsButtonDisabled(true);
          } else if (data.message === 'notfound'){
            setErrorMessage(`${inputValue} is Available`);
            setIsButtonDisabled(false);
          }
          else {
            setIsButtonDisabled(false);
          }
        } catch (error) {
          console.error('Error checking connection:', error);
          setErrorMessage(`${inputValue} is Available`);
        }
      };

      useEffect(() => {
        const fetchuserNetworks = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/userNetworks');
            const data = await response.json();
            setuserNetworks(data);
          } catch (error) {
            console.error('Error fetching user connections:', error);
          }
        };
      
        fetchuserNetworks();
      }, []);

      useEffect(() => {
        const fetchPersonalInfo = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/userConnections', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }), // Send email as JSON
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setPersonalInfos(data); // Expect an array of results
          } catch (error) {
            setError(error.message);
          }
        };
    
        if (email) {
          fetchPersonalInfo();
        }
      }, [email]);
    
      if (error) {
        return <p>Error: {error}</p>;
      }
    
      if (personalInfos.length === 0) {
        return <p>No connections found.</p>;
      }
    
      const handleContinue = () => {
        if (!isButtonDisabled) {
          console.log('Connection added:', inputValue);
          setAdd(false);
        }
      };

    const handleGraph = () => {
        setGraph(!graph);
    }

    const handleFilter = () => {
        setFilter(!filter);
    }

    const handleCard = (id) => {
        setSelectedPersonId(id)
        console.log('PersonId:',selectedPersonId);
        setView(!view)
    }

  return (
    <div className="contents-body">
            <div className="left-handside">
                <div className="navigation">
                    <div className='buttons' onClick={handleConnections}>
                        <img src={Round} alt="" />
                        <p style={{fontSize: "16px", fontWeight: "600"}}>My Connections</p>
                    </div>
                    <div className='buttons' onClick={handleNetworks}>
                        <img src={Networks} alt="" />
                        <p style={{fontSize: "16px", fontWeight: "600"}}>Networks</p>
                    </div>
                    <div className='add-new' onClick={()=> setAdd(true)}>
                        <img src={Add} alt="" />
                        <p style={{fontSize: "16px", fontWeight: "600"}}>Add Connections</p>
                    </div>
                </div>

                {
                    graph? (
                        <div>
                            <br />
                            <PieAnimation />
                        </div>
                    ):
                    (
                        <div className="ranks">
                            <div className="rank1">
                                <div>
                                    <img src={Rank4} alt="" />
                                    <p style={{color: "#64696C"}}>Rank 4</p>
                                </div>
                                <p>430 Networks</p>
                            </div>
                            <div className="rank2">
                                <div>
                                    <img src={Rank3} alt="" />
                                    <p style={{color: "#ED8F03"}}>Rank 3</p>
                                </div>
                                <p>430 Networks</p>
                            </div>
                            <div className="rank3">
                                <div>
                                    <img src={Rank2} alt="" />
                                    <p style={{color: "#0E7C3A"}}>Rank 2</p>
                                </div>
                                <p>430 Networks</p>
                            </div>
                            <div className="rank4">
                                <div>
                                    <img src={Rank1} alt="" />
                                    <p style={{color: "#6D2ED1"}}>Rank 1</p>
                                </div>
                                <p>430 Networks</p>
                            </div>
                        </div>
                    )
                }
                
                <div className='graph' onClick={handleGraph}>
                    <div className='graph-contents'>
                        {
                            graph? (
                                <pre><p style={{fontSize: "19px", fontWeight: "600"}}>Ranking Details </p></pre>
                            ):
                            (
                                <p>Network Analysis</p>
                            )
                        }
                        <img src={info} alt="" />
                    </div>
                </div>
            </div>
            <div className={`middle ${view? 'show': ''}`}> 
                {
                    Connections ?
                     (
                        <div style={{width: "100%", overflow: "hidden", marginLeft: "-10px"}}>
                            <div className="search">
                                <p style={{fontSize: "16px", fontWeight: "600"}}>Connections</p>
                                <div style={{display: "flex"}}>
                                    <input type="text" placeholder="Search Connections" />
                                    <FilterIcon style={{marginTop: "7px"}} onClick={handleFilter}/>    
                                </div>
                            </div>
                            <div className='horizontal-scroll'>
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
                            {personalInfos.map((connection) => (
                                <div key={connection.person_id} >
                                <div className='card' onClick={()=> handleCard(connection.person_id)}>
                                    <div className='profile-2'>
                                    <img src={`http://localhost:8000${connection.profile}`} alt="Profile" />
                                    </div>
                                    <div style={{ marginRight: '10px', marginTop: '10px', marginLeft: '10px' }}>
                                    <p className='card-name'>{connection.fullname}</p>
                                    <p style={{ color: '#245C9F', fontSize: '12px', fontWeight: '500', textDecoration: 'underline', cursor: 'pointer' }}>
                                        {view ? 'Hide Details' : 'View Details'}
                                    </p>
                                    </div>
                                    {!view ? (
                                    <div style={{ display: 'flex' }}>
                                        <hr className="custom-hr" color='#2867B2' />
                                        <p style={{ maxWidth: "250px", marginLeft: "18px", fontSize: '13px', marginTop: '10px', width: '100%' }}>
                                        {connection.shortdescription}
                                        </p>
                                        <div style={{ marginLeft: '30px', marginTop: '3%' }}>
                                        <div className='card-number'>
                                            <i className="fa-solid fa-phone"></i>
                                            <p>{connection.phonenumber}</p>
                                        </div>
                                        <div className='card-mail'>
                                            <i className="fa-solid fa-envelope"></i>
                                            <p>{connection.email}</p>
                                        </div>
                                        </div>
                                    </div>
                                    ) : ('')}
                                </div>
                                </div>
                            ))}
                            {filter && <Popup />}
                        </div>
                     ):
                     (
                        <div style={{width: "100%", overflow: "hidden", marginLeft: "-10px"}}>
                            <div className="search">
                                <p style={{fontSize: "16px", fontWeight: "600"}}>Networks</p>
                                <div style={{display: "flex"}}>
                                    <input type="text" placeholder="Search Networks" />
                                    <FilterIcon style={{marginTop: "7px"}} onClick={handleFilter}/>
                                </div>
                            </div>
                            <div className='horizontal-scroll'>
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
                            {userNetworks.map(connection => (
                                <div key={connection.person_id} >
                                    <div className='card' onClick={()=> handleCard(connection.person_id)}>
                                    <div className='profile-2'>
                                        <img src={`http://localhost:8000${connection.profile}`} alt="" />
                                    </div>
                                    <div style={{ marginRight: '10px', marginTop: '10px', marginLeft: '10px' }}>
                                        <p className='card-name'>{connection.fullname}</p>
                                        <p style={{ color: '#245C9F', fontSize: '12px', fontWeight: '500', textDecoration: 'underline' }}>View Connections</p>
                                    </div>
                                    {!view ? (
                                        <div style={{ display: 'flex' }}>
                                        <hr className="custom-hr" color='#2867B2' />
                                        <p style={{ maxWidth: "250px", marginLeft: "18px", fontSize: '13px', marginTop: '10px' }}>{connection.shortdescription}</p>
                                        <div style={{ marginLeft: '30px', marginTop: '3%' }}>
                                            <div className='card-number'>
                                            <i className="fa-solid fa-phone"></i>
                                            <p>{connection.phonenumber}</p>
                                            </div>
                                            <div className='card-mail'>
                                            <i className="fa-solid fa-envelope"></i>
                                            <p>{connection.email}</p>
                                            </div>
                                        </div>
                                        </div>
                                    ) : ('')}
                                    </div>
                                </div>
                                ))}
                            {filter && <Popup />}
                        </div>
                     )
                }
            </div>
            <div className={`right-handside ${view ? "show" : ""}`}>
                {
                    Connections ?
                    (
                        !view ?
                        (
                        <div style={{backgroundColor: "white", padding: "10px", height: "420px", width: "100%", overflow: "hidden"}}>
                            <div style={{display: "flex", width: "100%", gap: "10px"}}>
                                <p style={{fontSize: "19px", fontWeight: "600"}}>My Schedule</p>
                                <div className='notify'>15</div>
                                <img src={info} alt="" style={{display: "flex", justifyContent: "flex-end",marginLeft: "170px"}}/>
                            </div>
                            <br />
                            <div style={{display: "flex", gap: "20px", marginBottom: "22px", paddingLeft: "15px"}}>
                                <div className='profile-1'></div>
                                <div>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <p style={{fontWeight: "600"}}>frenfgrenfgnregn</p>
                                        <p style={{fontWeight: "600", color: "#2867B2"}}>@10:30</p>
                                    </div>
                                    <p>UI/UX DESIGNER</p>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <button className='completed'>Mark as Complete</button>
                                        <div className='call'>
                                            <a href="tel:8903342911">Call</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{display: "flex", gap: "20px", marginBottom: "22px", paddingLeft: "15px"}}>
                                <div className='profile-1'></div>
                                <div>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <p style={{fontWeight: "600"}}>frenfgrenfgnregn</p>
                                        <p style={{fontWeight: "600", color: "#2867B2"}}>@10:30</p>
                                    </div>
                                    <p>UI/UX DESIGNER</p>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <button className='completed'>Mark as Complete</button>
                                        <div className='call'>
                                            <a href="tel:8903342911">Call</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{display: "flex", gap: "20px", paddingLeft: "15px", marginBottom: "22px"}}>
                                <div className='profile-1'></div>
                                <div>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <p style={{fontWeight: "600"}}>frenfgrenfgnregn</p>
                                        <p style={{fontWeight: "600", color: "#2867B2"}}>@10:30</p>
                                    </div>
                                    <p>UI/UX DESIGNER</p>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <button className='completed'>Mark as Complete</button>
                                        <div className='call'>
                                            <a href="tel:8903342911">Call</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ):(<MainFlow/>)
                )
                : (
                    !view ?(
                        <div style={{backgroundColor: "white", padding: "10px", height: "450px" ,width: "100%" }}>
                            <div style={{display: "flex"}}>
                                <p style={{fontSize: "19px", fontWeight: "600"}}>Scheduled Networks</p>
                                <img src={info} alt="" style={{display: "flex", justifyContent: "flex-end",marginLeft: "150px"}}/>
                            </div>
                            <br />
                            <div style={{display: "flex", gap: "20px", paddingLeft: "15px", marginBottom: "17px"}}>
                                <div className='profile-1'></div>
                                <div>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <p style={{fontWeight: "600"}}>frenfgrenfgnregn</p>
                                    </div>
                                    <p style={{maxWidth: "300px"}}>UI/UX DESIGNER wfiuenfie nwiefiewrn ewfniwe owei</p>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <button className='completed'>View person</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: "flex", gap: "20px", paddingLeft: "15px", marginBottom: "17px"}}>
                                <div className='profile-1'></div>
                                <div>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <p style={{fontWeight: "600"}}>frenfgrenfgnregn</p>
                                    </div>
                                    <p style={{maxWidth: "300px"}}>UI/UX DESIGNER wfiuenfie nwiefiewrn ewfniwe owei</p>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <button className='completed'>View person</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: "flex", gap: "20px", paddingLeft: "15px", marginBottom: "17px"}}>
                                <div className='profile-1'></div>
                                <div>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <p style={{fontWeight: "600"}}>frenfgrenfgnregn</p>
                                    </div>
                                    <p style={{maxWidth: "300px"}}>UI/UX DESIGNER wfiuenfie nwiefiewrn ewfniwe owei</p>
                                    <div style={{display: "flex", gap: "10px"}}>
                                        <button className='completed'>View person</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(<MainFlow/>))
                }
            </div>
            <Dialog id='popconnections' open={add} onClose={() => setAdd(false)}>
      <div>
        <button id='popaddconnections'>
          <i className="fa-solid fa-square-plus"></i> Add Connections
        </button>
        <h6 id='namephone'>
          <p id='period'>.</p>
          <p id='insidenamephone'>Name or Phone No</p>
        </h6>
        <input
          id='inputname'
          type='text'
          placeholder='Enter the name (Initial at the back)'
          autoComplete='off'
          value={inputValue}
          onChange={handleInputChange}
        />
        {errorMessage && <div id='errorMessage'>{errorMessage}</div>}
        <div id='buttonContainer'>
          <button onClick={handleCheck} id='check'>Check for Availability</button>
          <button onClick={() => setAdd(false)} color="primary" id='discard'>Discard</button>
          <button className="open" onClick={handleContinue} color="primary" id='continue' disabled={isButtonDisabled}>Continue</button>
        </div>
      </div>
    </Dialog>
    </div>
  )
}
