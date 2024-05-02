import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
//internal import
import { VotingContext } from "../context/Voter";
import style from "../styles/index.module.css";
import Card from "../components/Card/Card";
import image from "../assets/image.jpg";
const index = () => {
  // votingTitle
  const {
    getNewCandidate,
    candidateArray,
    giveVote,
    currentAccount,
    checkIfWalletIsConnected,
    candidateLength,
    voterLength,
  } = useContext(VotingContext);
  useEffect(() => {
    checkIfWalletIsConnected();
  });
  return (
    <div className={style.home}>
      {currentAccount && (
        <div className={style.winner}>
          <div className={style.winner_info}>
            <div className={style.nihal}>
              <div className={style.candidate_list}>
                <p>
                  No Candidate:<span className={style.C}>1</span>
                </p>
              </div>
            </div>
            <p className={style.imad}>
              <img
                className={style.ima}
                src="https://gateway.pinata.cloud/ipfs/QmWg3FsAdFyJG7AocRXQF1Ddp2VhSRMVfL1hBCPPMPAg7y"
                alt="candidat Image"
              />
              <br />
              Name: <span> test</span>
              <br />
              Add: <span>0x5F836df23ecc0fB1B7</span>
              <br />
              age: <span>20</span>
              <br />
              nombre de vote: <span>0</span>
            </p>
            <div className={style.nihalv}>
              <div className={style.candidate_list}>
                <p>
                  No Voter:<span className={style.C}>0</span>
                </p>
              </div>
            </div>
            <a className={style.bt} class="btn bg-danger text-white btn1">
              Go Vote
            </a>
          </div>
          <div className={style.winner_message}>
            <small>
              <Countdown date={Date.now() + 100000} />
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
