import React, { useState, useEffect, useContext } from "react";
//INternal import
import VoterCard from "@/components/VoterCard/VoterCard";
import style from "../styles/voterList.module.css";
import { VotingContext } from "../context/Voter";

const voterList = () => {
  const { getAllVoterData, voterArray } = useContext(VotingContext);
  useEffect(() => {
    getAllVoterData();
  }, []);
  return (
    <div className={style.voterList}>
      <div className={style.ba}>
        <div class="allowedVoter_createdVoter__info__RC_F0">
          <img
            className={style.i}
            src="https://amethyst-good-scallop-352.mypinata.cloud/ipfs/QmY72isiwW4aw2sx6dAFsZuGGAKbYcgoNNY2p2RjWwzXQN?_gl=1*1jvdo7q*_ga*Mjg4MTEzNDQ0LjE2ODM1ODI1OTE.*_ga_5RMPXG14TE*MTY4ODQyMDQ5OS4zOC4wLjE2ODg0MjA0OTkuNjAuMC4w"
          />
          <div className={style.il}>
            <br />
            Nom:<span>imad</span>
            <br />
            address:<span>0x5F836df23ecc0fB1B7</span>
            <br />
            <span className={style.bts}> position:professeur</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default voterList;
