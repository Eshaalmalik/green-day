import React from 'react';
import { profileTeam } from '../../GDItems';

const TeamCard = () => {
  return (
    <>
      <h1 className="heading">OUR TEAMS</h1>
      <div className="team-cards">
        {profileTeam.map((pitem, index) => {
          return (
            <div className="team-card-container" key={`team-${index}`}>
              <div className="team-card">
                <img src={pitem.profile_img} alt="" />
                <div className="card-content">
                  <h3>{pitem.profile_title}</h3>
                  <p>{pitem.profile_post}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamCard;
