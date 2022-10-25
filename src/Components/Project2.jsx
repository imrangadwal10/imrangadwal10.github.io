import {Box,Text,Image,Link} from "@chakra-ui/react";

function Project2(){
    return (
                <Box margin={"auto"} mb="80px" w="80%" justifyContent="center" alignContent={"center"} className="project">
             <Box textAlign="center">
                    <Text color={"#FFB6C1"} fontSize={{base:"21px",md:"27px",lg:"38px"}} pt={30}>Google Digital Garage - Clone</Text>
                </Box>
                <Box alignItems={"center"} justifyContent={"center"} display={{lg:"flex"}} textAlign="center" >
                   <Image ml={{lg:"30px"}} pt={10} m="auto" w="80%" src="https://i.ibb.co/68G2wsS/google-digital.png"></Image>
                  <Box mt={50}>
                  <Text color={"#FFB6C1"} fontSize={{base:"18px",md:"23px",lg:"32px"}}>Description</Text>
                   <Text margin="auto" mb={10} w="80%" fontSize={{base:"12px",md:"16px",lg:"20px"}} mt={5}>Google Digital Garage was created by Google in 2015 as a nonprofit program designed to help
people improve their digital skills. It offers free training, courses and certifications via an online
learning platform</Text>
                   <Box>
                      <Text color={"#FFB6C1"} fontSize={{base:"18px",md:"23px",lg:"32px"}} mb={10}>Tech Stacks</Text>
                      <Box fontSize={{base:"12px",md:"16px",lg:"20px"}} justifyContent={"space-evenly"} display={"flex"} gap="1">
                         <Text>HTML</Text>
                         <Text>CSS</Text>
                         <Text>JavaScript</Text>
                      </Box>
                   </Box>
                    <Box mt={"60px"} display={"flex"} justifyContent="space-around">
                        <Link target="_blank" href="https://github.com/imrangadwal10/zonked-instrument-5361"><Image w={{base:"22px",md:"30px",lg:"40px"}} src="https://img.icons8.com/3d-fluency/2x/github.png"></Image></Link>
                        <Link target="_blank" href="https://lively-smakager-758bbc.netlify.app/"><Image w={{base:"20px",md:"26px",lg:"30px"}} src="https://cdn.iconscout.com/icon/free/png-64/netlify-3628945-3030170.png"></Image></Link>
                    </Box>
                  </Box>   
                </Box>
             </Box>
    )
    
    
    }
    
    export default Project2