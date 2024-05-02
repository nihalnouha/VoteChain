// import video from "../assets/earth.mp4";
// import lessC from "../assets/moinsDeCout.png";
// import secur from "../assets/securite.png";
// import speed from "../assets/speed.png";
// import ether from "../assets/ether.png";
// import Image from "next/image";
// import ipfs from "../assets/ipfs.png";
// import block from "../assets/block.png";
// import Link from "next/link";
// import web2 from "../assets/web2.0.png";
// import pvp from "../assets/pvp.png";

// const Accueil = () => {
//   return (
//     <div >
//       <section className="home py-0 d-flex align-items-center" id="header">
//         <video autoPlay loop muted>
//           <source src={video}  type="video/mp4" />
//         </video>
//         <video autoPlay loop muted>
//           <source src="/../src/assets/earth.mp4" type="video/mp4" />
//         </video>

//         <div className="container  text text-light py-5" >
//           <h1 className="headline text">
//             Build <span className="text-info">trust </span>
//             into our Organization
//           </h1>
//           <p className="para  py-3">
//             The VoteChain platform is a leading Vote platform designed to bring
//             efficiency and security to your operations.
//           </p>

//           <div className="my-3">
//             <Link
//               className="btn bg-danger text-white btn1"
//               href={{ pathname: "/accueil" }}
//             >
//               Go Vote
//             </Link>
//           </div>
//         </div>
//         {/* <!-- end of container --> */}
//       </section>
//       {/*  end of home  */}
//       {/* web 2.0 vs web 3.0 */}
//       <section className="information">
//         <div className="container-fluid">
//           <div className="row text-light">
//             <div className="col-lg-4 text-center p-5">
//               <Image src={web2} alt="nn" width="200"></Image>
//               <h4 className="py-3">Web2.0</h4>
//               <p className="para-light">
//                 In Web 2.0, computers use HTTP in the form of unique web
//                 addresses to find information, which is stored at a fixed
//                 location, generally on a single server
//               </p>
//             </div>
//             <div className="col-lg-4 text-center p-5">
//               <Image src={pvp} alt="nn" width="100"></Image>
//               <h4 className="py-3">VS</h4>
//             </div>
//             <div className="col-lg-4 text-center p-5">
//               <Image src={block} alt="nn" width="200"></Image>
//               <h4 className="py-3">Web3.0</h4>
//               <p>
//                 Web 3.0 information will be found based on its content, and thus
//                 can be stored in multiple locations simultaneously. It becomes
//                 decentralized
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* end swction */}
//       {/* <!-- About --> */}
//       <section
//         id="about"
//         className="about d-flex align-items-center text-light py-5"
//       >
//         <div className="container">
//           <div className="row d-flex align-items-center">
//             <div className="col-lg-7" >
//               <p className="main-header-section">BLOCKCHAIN</p>
//               <h1>
//                 What is a blockchain? <br />
//               </h1>
//               <p className="py-2 para-light">
//                 A blockchain is a distributed database or ledger shared among a
//                 computer network's nodes. They are best known for their crucial
//                 role in cryptocurrency systems for maintaining a secure and
//                 decentralized record of transactions, but they are not limited
//                 to cryptocurrency uses. Blockchains can be used to make data in
//                 any industry immutable—the term used to describe the inability
//                 to be altered. Because there is no way to change a block, the
//                 only trust needed is at the point where a user or program enters
//                 data. This aspect reduces the need for trusted third parties,
//                 which are usually auditors or other humans that add costs and
//                 make mistakes. Since Bitcoin's introduction in 2009, blockchain
//                 uses have exploded via the creation of various cryptocurrencies,
//                 decentralized finance (DeFi) applications, non-fungible tokens
//                 (NFTs), and smart contracts.
//               </p>

//               <div className="my-3">
//                 <a
//                   className="btn bg-white btn2"
//                   href="https://www.investopedia.com/terms/b/blockchain.asp"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//             <div
//               className="col-lg-5 text-center py-4 py-sm-0"
//               data-aos="fade-down"
//             >
//               <Image className="img-fluid" src={block} alt="about"></Image>
//             </div>
//           </div>
//           {/* <!-- end of row --> */}
//         </div>
//         {/* <!-- end of container --> */}
//       </section>
//       {/* <!-- end of about --> */}

//       {/* <!-- Work --> */}
//       <section id="ourwork" className="work d-flex align-items-center py-5">
//         <div className="container text-light">
//           <div className="row">
//             <div
//               className="col-lg-6 d-flex align-items-center"
              
//             >
//               <Image className="img-fluid" src={ipfs} alt="about"></Image>
//             </div>
//             <div className="col-lg-5 d-flex align-items-center px-4 py-3">
//               <div className="row">
//                 <div className="text-center text-lg-start py-4 pt-lg-0">
//                   <p className="main-header-section">IPFS</p>
//                   <h2 className="py-2"> What is ipfs?</h2>
//                   <p className="para-light">
//                     IPFS is a modular suite of protocols for organizing and
//                     transferring data, designed from the ground up with the
//                     principles of content addressing and peer-to-peer
//                     networking. Because IPFS is open-source, there are multiple
//                     implementations of IPFS. While IPFS has more than one use
//                     case, its main use case is for publishing data (files,
//                     directories, websites, etc.) in a decentralised fashion.
//                   </p>
//                 </div>
//                 {/* <!-- end of container --> */}
//               </div>
//               {/* <!-- end of row --> */}
//             </div>
//             {/* <!-- end of col-lg-5 --> */}
//           </div>
//           {/* <!-- end of row --> */}
//         </div>
//         {/* <!-- end of container --> */}
//       </section>
//       {/* <!-- end of work --> */}
//       {/* <!-- Information --> */}
//       <section className="information">
//         <div className="container-fluid">
//           <div className="row text-light">
//             <div className="col-lg-4 text-center p-5">
//               <Image src={lessC} alt="nn" width="150"></Image>
//               <h4 className="py-3">Less Cost</h4>
//               <p className="para-light">
//                 with VoteChain voting cost only{" "}
//                 <span className="text-warning"> 0.01 &dollar; 😮</span>
//                 so you can upload without caring about the Operation cost
//               </p>
//             </div>
//             <div className="col-lg-4 text-center p-5">
//               <Image src={speed} alt="nn" width="150"></Image>
//               <h4 className="py-3">Fast Process</h4>
//               <p className="para-light">
//                 Voting takes just{" "}
//                 <span className="text-warning"> 1 Second 😳 </span>
//               </p>
//             </div>
//             <div className="col-lg-4 text-center p-5">
//               <Image src={secur} alt="nn" width="150"></Image>
//               <h4 className="py-3">Secure</h4>
//               <p className="para-light">
//                 100% Secure & Transparent all operations With Blockchain
//                 Technology 🔒
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div />
//       {/* <!-- end of information --> */}
//     </div>
//   );
// };
// export default Accueil;
import video from "../assets/earth.mp4";
import lessC from "../assets/moinsDeCout.png";
import secur from "../assets/securite.png";
import speed from "../assets/speed.png";
import ether from "../assets/ether.png";
import Image from "next/image";
import ipfs from "../assets/ipfs.png";
import block from "../assets/block.png";
import Link from "next/link";
import web2 from "../assets/web2.0.png";
import pvp from "../assets/pvp.png";

const Accueil = () => {
  return (
    <div >
      <section className="home py-0 d-flex align-items-center" id="header">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <video autoPlay loop muted>
          <source src="/../src/assets/earth.mp4" type="video/mp4" />
        </video>

        <div className="container  text text-light py-5" >
          <h1 className="headline text">
            Build <span className="text-info">trust </span>
            into our Organization
          </h1>
          <p className="para  py-3">
            The VoteChain platform is a leading Vote platform designed to bring
            efficiency and security to your operations.
          </p>

          <div className="my-3">
            <Link
              className="btn bg-danger text-white btn1"
              href={{ pathname: "/accueil" }}
            >
              Go Vote
            </Link>
          </div>
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/*  end of home  */}
      {/* web 2.0 vs web 3.0 */}
      <section className="information">
        <div className="container-fluid">
          <div className="row text-light">
            <div className="col-lg-4 text-center p-5">
              <Image src={web2} alt="nn" width="200"></Image>
              <h4 className="py-3">Web2.0</h4>
              <p className="para-light">
                In Web 2.0, computers use HTTP in the form of unique web
                addresses to find information, which is stored at a fixed
                location, generally on a single server
              </p>
            </div>
            <div className="col-lg-4 text-center p-5">
              <Image src={pvp} alt="nn" width="100"></Image>
              <h4 className="py-3">VS</h4>
            </div>
            <div className="col-lg-4 text-center p-5">
              <Image src={block} alt="nn" width="200"></Image>
              <h4 className="py-3">Web3.0</h4>
              <p>
                Web 3.0 information will be found based on its content, and thus
                can be stored in multiple locations simultaneously. It becomes
                decentralized
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end swction */}
      {/* <!-- About --> */}
      <section
        id="about"
        className="about d-flex align-items-center text-light py-5"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7" >
              <p className="main-header-section">BLOCKCHAIN</p>
              <h1>
                What is a blockchain? <br />
              </h1>
              <p className="py-2 para-light">
                A blockchain is a distributed database or ledger shared among a
                computer network's nodes. They are best known for their crucial
                role in cryptocurrency systems for maintaining a secure and
                decentralized record of transactions, but they are not limited
                to cryptocurrency uses. Blockchains can be used to make data in
                any industry immutable—the term used to describe the inability
                to be altered. Because there is no way to change a block, the
                only trust needed is at the point where a user or program enters
                data. This aspect reduces the need for trusted third parties,
                which are usually auditors or other humans that add costs and
                make mistakes. Since Bitcoin's introduction in 2009, blockchain
                uses have exploded via the creation of various cryptocurrencies,
                decentralized finance (DeFi) applications, non-fungible tokens
                (NFTs), and smart contracts.
              </p>

              <div className="my-3">
                <a
                  className="btn bg-white btn2"
                  href="https://www.investopedia.com/terms/b/blockchain.asp"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-lg-5 text-center py-4 py-sm-0"
              data-aos="fade-down"
            >
              <Image className="img-fluid" src={block} alt="about"></Image>
            </div>
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of about --> */}

      {/* <!-- Work --> */}
     
      
      <section id="ourwork" className="work d-flex align-items-center py-5">
        <div className="container text-light">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center"
              
            >
              <Image className="img-fluid" src={ipfs} alt="about"></Image>
            </div>
            <div className="col-lg-5 d-flex align-items-center px-4 py-3">
              <div className="row">
                <div className="text-center text-lg-start py-4 pt-lg-0">
                  <p className="main-header-section">IPFS</p>
                  <h2 className="py-2"> What is ipfs?</h2>
                  <p className="para-light">
                    IPFS is a modular suite of protocols for organizing and
                    transferring data, designed from the ground up with the
                    principles of content addressing and peer-to-peer
                    networking. Because IPFS is open-source, there are multiple
                    implementations of IPFS. While IPFS has more than one use
                    case, its main use case is for publishing data (files,
                    directories, websites, etc.) in a decentralised fashion.
                  </p>
                </div>
                {/* <!-- end of container --> */}
              </div>
              {/* <!-- end of row --> */}
            </div>
            {/* <!-- end of col-lg-5 --> */}
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of work --> */}
      {/* <!-- Information --> */}
      <section
        id="about"
        className="about d-flex align-items-center text-light py-5"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7" >
              <p className="main-header-section">ETHEREUM</p>
              <h1>
                What is a Ethereum? <br />
              </h1>
              <p className="py-2 para-light">
              Ethereum is a network, made up of many communities, and a set of tools which enable people to transact and communicate without being controlled by a central authority. There is no need to hand over all your personal details to use Ethereum - you keep control of your own data and what is being shared. Ethereum has its own cryptocurrency, Ether, which is used to pay for certain activities on the Ethereum network.
                  
              </p>

             
            </div>
            <div
              className="col-lg-5 text-center py-4 py-sm-0"
              data-aos="fade-down"
            >
              <Image className="img-fluid" src={ether} alt="about"></Image>
            </div>
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      <section className="information">
        <div className="container-fluid">
          <div className="row text-light">
            <div className="col-lg-4 text-center p-5">
              <Image src={lessC} alt="nn" width="150"></Image>
              <h4 className="py-3">Less Cost</h4>
              <p className="para-light">
                with VoteChain voting cost only{" "}
                <span className="text-warning"> 0.01 &dollar; 😮</span>
                so you can upload without caring about the Operation cost
              </p>
            </div>
            <div className="col-lg-4 text-center p-5">
              <Image src={speed} alt="nn" width="150"></Image>
              <h4 className="py-3">Fast Process</h4>
              <p className="para-light">
                Voting takes just{" "}
                <span className="text-warning"> 1 Second 😳 </span>
              </p>
            </div>
            <div className="col-lg-4 text-center p-5">
              <Image src={secur} alt="nn" width="150"></Image>
              <h4 className="py-3">Secure</h4>
              <p className="para-light">
                100% Secure & Transparent all operations With Blockchain
                Technology 🔒
              </p>
            </div>
          </div>
        </div>
      </section>
      <div />
      {/* <!-- end of information --> */}
    </div>
  );
};
export default Accueil;