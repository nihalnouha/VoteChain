import '@/styles/globals.css';
import "../components/footer/style.css"

//Internat import
import {VotingProvider} from '../context/Voter';
 import NavBar from '../components/NavBar/NavBar';
 import Footer from "../components/footer/Footer";



  export const MyApp=({Component,pageProps})=>(
    <div>
     
        <title>VoteChain</title>
     
      
   <VotingProvider>
    
 <div>
     <NavBar/>
  
   
     
      <div>
     <Component {...pageProps} />
    </div>
   <Footer/>
</div>

  </VotingProvider>
 </div>
 
);
export default MyApp;
