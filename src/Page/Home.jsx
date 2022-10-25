import {Box,Text, WrapItem,Image} from "@chakra-ui/react";
import { useRef } from "react";
import Navbar from "../Components/Navbar";
import Project1 from "../Components/Project1";
import Project2 from "../Components/Project2";
import Project3 from "../Components/Project3";
import Skills from "../Components/Skills";
import "./style.css"
function Home(){
   const aboutsec = useRef(null);
   const projectsec = useRef(null);

   const handleAbout = () => 
      window.scrollTo({
         top:aboutsec.current.offsetTop,
         behavior:"smooth",
      })

      const handleProjects = () => 
      window.scrollTo({
         top:projectsec.current.offsetTop,
         behavior:"smooth",
      })

   return (
      <Box pb={"1%"} color={"white"} backgroundImage={"radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)"} fontFamily={"Helvetica"}  fontSize={20}>
        <Box pt={3}   >
        <Navbar handleAbout={handleAbout} handleProjects={handleProjects}/>
      </Box>
         <Box display={{lg:"flex"}} maxW={"80%"} m={"auto"} mt={"180px"}>
         <Box>
         <Text  fontSize={{base:"20px",md:"30px",lg:"50px"}}>Hello 👋</Text>
         <Text fontSize={{base:"20px",md:"30px",lg:"50px"}}>I'm Imran an Aspiring Full Stack Web Developer.</Text>
         </Box>
         <Image w={{base:"200px",md:"200px",lg:"500px"}} margin={"auto"} mt={{base:"70px",md:"70px",lg:"0px"}} borderRadius="50%" name='Imran' src='https://avatars.githubusercontent.com/u/107936528?v=4' />
         </Box>
         <Box>
            <Box ref={aboutsec} pt={20} mt={30} textAlign={"center"}>
               <Text color={"#FFB6C1"} textDecoration={"underline"} fontSize={{base:"30px",md:"45px",lg:"60px"}}>About Me</Text>
               <WrapItem mt={10}>
                  
               </WrapItem>
            </Box>
         </Box>
         <Box m={"auto"} w={"80%"} mt={10}>
            <Text fontSize={{base:"20px",md:"30px",lg:"50px"}} textAlign={"center"}>
            My name's Imran. I'm an enthusiastic full-stack web-developer with hands-on experience.
           in creating websites with MERN Stack.
            
             I'm an eager learner of new technologies. I'm excited to join a tech company as an accountable
            a capable employee.
            </Text>
         </Box>
        <Box pt={"25px"} ref={projectsec} >
        <Box mb={"60px"} textAlign="center">
             <Text color={"#FFB6C1"} mt={20} textDecoration={"underline"} fontSize={{base:"30px",md:"45px",lg:"60px"}}>Projects</Text>
         </Box>
        <Box>
            <Project1/>
            <Project2/>
            <Project3/>
        </Box>
        </Box>
         <Box mb={"60px"} textAlign="center">
            <Skills/>
         </Box>
      </Box>
      
    
   )
}

export default Home;