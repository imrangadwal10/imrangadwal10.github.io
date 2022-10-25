import {Box,Text,Image,Link} from "@chakra-ui/react";

function Project3(){
    return (
                <Box margin={"auto"} mb="80px" w="80%" justifyContent="center" alignContent={"center"} className="project">
             <Box textAlign="center">
                    <Text color={"#FFB6C1"} fontSize={{base:"21px",md:"27px",lg:"38px"}} pt={30}>Pharmeasy - Clone</Text>
                </Box>
                <Box alignItems={"center"} justifyContent={"center"} display={{lg:"flex"}} textAlign="center" >
                   <Image ml={{lg:"30px"}} pt={10} m="auto" w="80%" src="https://i.ibb.co/2vgg92S/Pharmeasy.png"></Image>
                  <Box mt={50}>
                  <Text color={"#FFB6C1"} fontSize={{base:"18px",md:"23px",lg:"32px"}}>Description</Text>
                   <Text margin="auto" mb={10} w="80%" fontSize={{base:"12px",md:"16px",lg:"20px"}} mt={5}>PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth online. This is an individual project. Login and Signup functionality carousels and more. </Text>
                   <Box>
                      <Text color={"#FFB6C1"} fontSize={{base:"18px",md:"23px",lg:"32px"}} mb={10}>Tech Stacks</Text>
                      <Box fontSize={{base:"12px",md:"16px",lg:"20px"}} justifyContent={"space-evenly"} display={"flex"} gap="1">
                         <Text>React</Text>
                         <Text>Chakara-ui</Text>
                      </Box>
                   </Box>
                    <Box mt={"60px"} display={"flex"} justifyContent="space-around">
                        <Link target="_blank" href="https://github.com/imrangadwal10/beautiful-chicken-5218"><Image w={{base:"22px",md:"30px",lg:"40px"}} src="https://img.icons8.com/3d-fluency/2x/github.png"></Image></Link>
                        <Link target="_blank" href="https://6339597829322c32372056bd--cheerful-dolphin-b4de07.netlify.app/"><Image w={{base:"20px",md:"26px",lg:"30px"}} src="https://cdn.iconscout.com/icon/free/png-64/netlify-3628945-3030170.png"></Image></Link>
                    </Box>
                  </Box>   
                </Box>
             </Box>
    )
    
    
    }
    
    export default Project3