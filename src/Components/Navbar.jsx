import React from "react";
import {useContext} from "react"
import {context} from "../Context/AuthContext"
import {Spacer,Box, Text, Flex, Heading, Hide,Show, Icon} from "@chakra-ui/react";
import DrawerComp from "./Drawer";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar({handleAbout,handleProjects}){
    const btnRef = React.useRef()
    const {onOpen} = useContext(context)
  

   return<>
     <Flex backgroundImage={"radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" maxW={{base:"full",md:"100%",lg:"full"}} zIndex={1} top={0} position={"fixed"}  h={"60px"}  color={'white'} alignItems='center' gap='2'>
       <Box p='2'>
        <Heading size='md'>Imran Gadwal</Heading>
      </Box>
   <Spacer w={1000}/>
      <Hide below='md'>
        <Box  mr={5} display={"flex"} gap='10'>
          <button  onClick={handleAbout} className='hover-underline-animation' >About Me</button>
          <button onClick={handleProjects} className='hover-underline-animation' >Project</button>
          <button className='hover-underline-animation' >Skills</button >
          <button  className='hover-underline-animation' >Resume</button >
          <button  className='hover-underline-animation' >Contact</button  >    
        </Box>
      </Hide>
      <Show below="md">
          <Text ref={btnRef} colorScheme='teal' onClick={onOpen}>
         <Icon as={AiOutlineMenu}/>
        </Text>
          </Show>
       <Box><DrawerComp btnRef={btnRef} handleProjects={handleProjects} handleAbout={handleAbout}/></Box>
      </Flex>
           
   </>
}

export default Navbar;