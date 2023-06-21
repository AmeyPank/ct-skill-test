import React, { useEffect, useState } from 'react';
import "./Home.css"
import Logo from "../../img/Logo.png"; // Assuming the correct import path for the Logo image

import ClimbMan1 from "../../img/climb-man1.png";
import ClimbMan from "../../img/climb-man.png";
import Tab1 from "../../img/tab1.png";
import Tab2 from "../../img/tab2.png";

import { Tab, Tabs } from '@mui/material';

const Home = () => {


    const [selectedTab, setSelectedTab] = useState(0);

    const handleChangeTab = (index) => {
        setSelectedTab(index);
    };





    return (
        <>
            <div className='los-container'>
                <section className='header'>
                    <header>
                        <nav className='nav-bar'>
                            <div className='logo'>
                                <a href="#home" >
                                    <img src={Logo} alt="Logo" />
                                </a>
                            </div>
                            <div className='links' >
                                <a href="#history">01.History</a>
                                <a href="#team">02.Team</a>
                            </div>
                        </nav>
                    </header>
                </section>


                <div className='text-component'>
                    <h1>
                        <p>
                            <span id='los'>
                                LOSANGELES
                            </span>
                            <span id='mount'>
                                <span style={{ marginLeft: '-10px' }}>M</span>
                                <span style={{ marginLeft: '7px' }}>O</span>
                                <span style={{ marginLeft: '7px' }}>U</span>
                                <span style={{ marginLeft: '7px' }}>N</span>
                                <span style={{ marginLeft: '7px' }}>T</span>
                                <span style={{ marginLeft: '7px' }}>A</span>
                                <span style={{ marginLeft: '7px' }}>I</span>
                                <span style={{ marginLeft: '7px' }}>N</span>
                                <span style={{ marginLeft: '4px' }}>S</span>
                            </span>



                        </p>

                    </h1>
                </div>
            </div>
            <section className='middle'>
                <div className='footer'>
                    <nav className='nav-bar'>
                        <div className='logo'>
                            <a href="#home">
                                <img src={Logo} alt="Logo" />
                            </a>
                            <h1>
                                LOSANGELES
                                <span>
                                    MOUNTAINS
                                </span>
                            </h1>
                        </div>
                        <div className='link'>
                            <a href="#history" >01.History</a>
                            <a href="#team" >02.Team</a>
                        </div>
                    </nav>
                </div>
            </section>
            <div className='history-container' id='history'>
                <section className='history'>
                    <div className='text-container'>
                        <h1 className='number'>
                            01.<div className='text' id='hist'>History</div>
                        </h1>
                        <p className='history-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin in ante viverra, rutrum erat rutrum, consectetur mi.
                            Proin at maximus est. Nullam purus ex, iaculis sed erat sed,
                            blandit tincidunt quam. Cras scelerisque id quam sed dignissim
                            Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam.
                            Vivamus suscipit dignissim tortor nec congue. </p>

                    </div>
                    <div className="carousel">
                        <img src={ClimbMan} alt="imah" width="15%" style={{ marginRight: '10px' }} />
                        <img src={ClimbMan1} alt="imah" width="15%" style={{ marginRight: '10px' }} />
                        <img src={ClimbMan} alt="imah" width="15%" style={{ marginRight: '10px' }} />
                        <img src={ClimbMan1} alt="imah" width="15%" />
                    </div>

                </section>
            </div>
            <div className='team-container' id='team'>
                <section className='team'>
                    <div className='text-container'>
                        <h1 className='number'>
                            02.<div className='text' id='climb'>Climb</div>
                            <p className='history-para1'>Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
                                gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
                        </h1>
                    </div>
                </section>
                <section className='mountain' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: selectedTab === 0 ? 'url(path-to-image-1)' : 'url(path-to-image-2)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    // add any other background styling as needed
                }}>
                    <Tabs
                        style={{

                            fontSize: "20px",
                            backgroundColor: "#414f6b",
                            fontWeight: 700,
                            fontFamily: "Oswald, sans-serif"
                        }}
                        value={selectedTab}
                        onChange={(event, index) => handleChangeTab(index)}
                    >
                        <Tab id='tab1' style={{
                            marginLeft: "100px"
                        }} label="MOUNTAIN 1" />
                        <Tab id='tab2' label="MOUNTAIN 2" />
                    </Tabs>
                    <div className='schedule-container'>
                        <h1 style={{
                            fontSize: '32px',
                            color: '#414f6b',
                            fontWeight: 700,
                            fontFamily: "Oswald"
                        }}>
                            SCHEDULE
                        </h1>
                        <div className='venue'>
                            <div className='dates'>
                                <p>25 Nov 2016</p>
                                <p>28 Nov 2016</p>
                                <p>18 Dec 2016</p>
                                <p>7 Jan 2017</p>
                            </div>

                            <div className='place'>
                                <p>Vestibulum viverra</p>
                                <p>Vestibulum viverra</p>
                                <p>Vestibulum viverra</p>
                                <p>Vestibulum viverra</p>
                            </div>
                        </div>

                    </div>
                    <div className="carousel1">
                        {selectedTab === 0 && <img className='mountainBgImage' src={Tab1} alt="Mountain 1" />}
                        {selectedTab === 1 && <img className='mountainBgImage' src={Tab2} alt="Mountain 2" />}
                    </div>

                    {/* <div>
                        <h1 id='mountain1'>MOUNTAIN 1</h1>
                    </div>
                    <div>
                        <h1 id='mountain2'>MOUNTAIN 2</h1>
                    </div> */}


                </section >

            </div >
            <div className='footer-container'></div>
            <footer className='relative'>
                <div className='foot'>
                    <nav className='nav-bar'>
                        <div className='logo'>
                            <a href="#home" >
                                <img src={Logo} alt="Logo" />
                            </a>
                            <h1>
                                LOSANGELES
                                <span>
                                    MOUNTAINS
                                </span>
                            </h1>
                        </div>
                        <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                    </nav>
                </div>
            </footer>
        </>


    );
};

export default Home;
