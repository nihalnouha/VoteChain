
import React, { useState, useEffect, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import image from "../assets/creator.png"
import ing from "../assets/image.jpg"
//INTERNAL IMPORT
import { VotingContext } from "../context/Voter";
import style from "../styles/allowedVoter.module.css";
import images from "../assets/upload.png";

import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
const allowedVoters = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: "",
    address: "",
    position: "",
  });

  const router = useRouter();
  const { uploadToIPFS,createVoter,voterArray,getAllVoterData } = useContext(VotingContext);
  //-------Voters Image Drop
  const onDrop = useCallback(async (acceptedFil) => {
    const url = await uploadToIPFS(acceptedFil[0]);
    setFileUrl(url);
  });
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  useEffect(()=>{
    getAllVoterData();
  },[])
 
  //-------jsx Part
  return (
    <div className={style.createVoter}>
      <div>
        {fileUrl && (
          <div className={style.voterInfo}>
            <img src={`https://gateway.pinata.cloud/ipfs/${fileUrl}`} alt="Voter Image" />
          
            <div className={style.voterInfo_paragraph}>
              <p>
                Name : <span>{formInput.name}</span>
              </p>
              <p>
                Add : <span>{formInput.address.slice(0, 20)}</span>
              </p>
              <p>
                Pos : <span>{formInput.position}</span>
              </p>
            </div>
          </div>
        )}
        {!fileUrl && (
          <div className={style.sideInfo}>
            <div className={style.sideInfo_box}>
              <h5> Create candidate For Voting</h5>
              <p>Blockchain voting organisation,provide ethereum ecosystem</p>
              <p className={style.sideInfo_para}>Contract Candidate List</p>
            </div>

            <div className={style.card}>
            {voterArray.map((el,i)=>(
              <div key={i+1} className={style.card_box}>
                <div className={style.image}>
                 <img src={el[4]}alt="Profile photo" />
                  
                </div >

                <div className={style.card_info}>
                  <p>{el[1]}</p>
                  <p>Address:{el[3].slice(0,10)}...</p>
                
                 {/* <p> Name</p>
                 <p>Address</p>
                 <p>Details</p> */}
                </div>
               </div>
            ))}
            </div>
          </div>
        )}
      </div>
      <div className={style.voter}>
        <div className={style.voter__container}>
          <h1>Create New Voter</h1>
          <div className={style.voter__container__box}>
            <div className={style.voter__container__box__div}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={style.voter__container__box__div__info}>
                  <p>Upload File:JPG,PNG,GIF,WEBM Max 10MB</p>
                  <div className={style.voter__container__box__div__image}>
                    {/*n'oublie Pas d' inserer la photo*/}
                    

                    <Image
                      src={images}
                       width={150}
                      height={150}
                      object-fit ="contain"
                      alt="File upload"
                    />
                  </div>
                  <p>Drag & Drop File</p>
                  <p>or Browse Media on you device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.input__container}>
          <Input
            inputType="text"
            title="Name"
            placeholder="Voter Name"
            handleClick={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
          <Input
            inputType="text"
            title="Address"
            placeholder="Voter Address"
            handleClick={(e) =>
              setFormInput({ ...formInput, address: e.target.value })
            }
          />
          <Input
            inputType="text"
            title="Position"
            placeholder="Voter Position"
            handleClick={(e) =>
              setFormInput({ ...formInput, position: e.target.value })
            }
          />
          <div className={style.Button}>
          <Button btnName="Authorized Voter" handleClick={() => createVoter(formInput, fileUrl, router)} />
          </div>
        </div>
      </div>
      {/* /////////////////*/}
      <div className={style.createdVoter}>
        <div className={style.createdVoter__info}>
          <Image src={image} alt="user Profile"  width ={250}  height={250}/>
          <p>Notice For User</p>
          <p>
            Organizer<span>0x939393..</span>
          </p>
          <p>
            only Organizer of the voting contract can create voter and candidate
            for voting election
          </p>
        </div>
      </div>
    </div>
  );
};

export default allowedVoters;
