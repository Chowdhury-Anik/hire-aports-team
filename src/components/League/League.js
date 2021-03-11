import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './League.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    const { strSport, idTeam, strTeamBadge, strAlternate, strStadium } = props.league;



    const history = useHistory();
    const showDetails = idTeam => {
        const url = `/league/${idTeam}`;
        history.push(url);
    };


    return (
        <div className="col-md-4 col-lg-3 col-sm-12 league-card-body" >

            <Card className="league-card card" style={{ width: '18rem' }} >
                <Card.Img variant="top" className="thumbnail  logo" src={strTeamBadge} />
                < Card.Body >
                    <Card.Title>{strAlternate}</Card.Title>
                    <Card.Text> Sports type: {strSport}</Card.Text>
                    <Card.Text> Venue: {strStadium}</Card.Text>
                    <Button variant="primary" onClick={() => showDetails(idTeam)}

                    >
                        Explore The Team <FontAwesomeIcon icon={faArrowRight} /> </Button>
                </Card.Body >
            </Card >
        </div >
    );
};

export default League;