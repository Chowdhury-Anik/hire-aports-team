
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faMapMarkerAlt, faFlag, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Male from '../images/male.png';
import Female from '../images/female.png';




const LeagueDetails = () => {
    const { idTeam } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]));
    }, [idTeam]);

    const { strStadium, strStadiumThumb, strCountry, strTeamFanart1, strTeamFanart2, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strWebsite } = details;


    return (
        <div className="container">
            <div>
                <img style={{ height: "300px", width: "100%" }} src={strStadiumThumb} alt="" />
                <Header logo={details.strTeamBadge}></Header>
            </div>

            <div className="body-area">
                <div className="club-information  justify-content-between">
                    <div className="club-text-area">
                        <h3>{details.strLeague}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} />
                          Founded:  {strStadium}, {details.intFormedYear}</p>

                        <p><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />  Sports Type: {strSport}</p>

                        <p><FontAwesomeIcon icon={faMars} />  Gender: {strGender}</p>

                    </div>
                    <div className="playerImage">
                        {
                            details.strGender === 'Male' ? <img className='playerImage' src={Male} alt="" /> : <img className='playerImage' src={Female} alt="" />
                        }

                    </div>
                </div>
                <div className='description'>
                    <p>{strDescriptionEN}</p>

                </div>
                <div className='footer-area justify-content-center'>
                    <a className='socialIcon' style={{ backgroundColor: '#00A2F3' }} href={'https://' + strTwitter} target='blank'><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className='socialIcon' style={{ backgroundColor: '#14A0F9' }} href={'https://' + strFacebook} target='blank'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='socialIcon' style={{ backgroundColor: '#FF0000' }} href={'https://' + strWebsite} target='blank'><FontAwesomeIcon icon={faYoutube} /></a>

                </div>
            </div>


        </div>

    );
};

export default LeagueDetails;