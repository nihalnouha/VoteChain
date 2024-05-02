import React, { useState, useEffect, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import image from "../assets/creator.png"
//INTERNAL IMPORT
import { VotingContext } from "../context/Voter";
import style from "../styles/allowedVoter.module.css";
import images from "../assets/upload.png";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
const candidateRegistration = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [candidateForm, setCandidateForm ] = useState({
    name: "",
    address: "",
    age: "",
  });

  const router = useRouter();
  const { setCandidate,uploadToIPFSCandidate,candidateArray,getNewCandidate } = useContext(VotingContext);
  //-------Voters Image Drop
  const onDrop = useCallback(async (acceptedFil) => {
    const url = await uploadToIPFSCandidate(acceptedFil[0]);
    setFileUrl(url);
  });
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  useEffect(()=>{
    getNewCandidate();
  },[]);
 
  //-------jsx Part
  return (
    <div className={style.createVoter}>
      <div>
        {fileUrl && (
          <div className={style.voterInfo}>
            <img src={`https://gateway.pinata.cloud/ipfs/${fileUrl}`} alt="candidat Image" />
            <div className={style.voterInfo_paragraph}>
              <p>
                Name:  <span> {candidateForm.name}</span>
              </p>
              <p>
                Add: <span>{candidateForm.address.slice(0, 20)}</span>
              </p>
              <p>
                age:  <span>{candidateForm.age}</span>
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
             {candidateArray.map((el,i)=>(
              <div key={i+1} className={style.card_box}>
                <div className={style.image}>
                 <img src={`https://gateway.pinata.cloud/ipfs/${fileUrl}`}alt="Profile photo" />
                </div >

                <div className={style.card_info}>
                  <p>{el[1]} #{el[2].toNumber()}</p>
                  <p>{el[0]}</p>
                  <p>Address:{el[6].slice(0,10)}..</p>
                </div>
               </div>
            ))}
            </div>
          </div>
        )}
      </div>
      <div className={style.voter}>
        <div className={style.voter__container}>
          <h1>Create New Candidate</h1>
          <div className={style.voter__container__box}>
            <div className={style.voter__container__box__div}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={style.voter__container__box__div__info}>
                  <p>Upload File:JPG,PNG,GIF,WEBM Max 10MB</p>
                  <div className={style.voter__container__box__div__image}>
                    {/*n'oublie Partde inserer la photo*/}
                    

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
            placeholder="Candidate Name"
            handleClick={(e) =>
              setCandidateForm({ ...candidateForm, name: e.target.value })
            }
          />
          <Input
            inputType="text"
            title="Address"
            placeholder="Candidate Address"
            handleClick={(e) =>
              setCandidateForm({ ...candidateForm, address: e.target.value })
            }
          />
          <Input
            inputType="text"
            title="age"
            placeholder="Candidate age"
            handleClick={(e) =>
              setCandidateForm({ ...candidateForm, age: e.target.value })
            }
          />
          <div className={style.Button}>
            <Button btnName="Authorize Candidate" handleClick={() => setCandidate(candidateForm,fileUrl,router)} />
          </div>
        </div>
      </div>
      {/* /////////////////*/}
      <div className={style.createdVoter}>
        <div className={style.createdVoter__info}>
          <Image src={image} alt="user Profile"   width ={250}  height={250}/>
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

export default candidateRegistration;
