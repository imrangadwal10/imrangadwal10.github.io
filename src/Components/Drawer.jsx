import {Text,Drawer,DrawerContent,DrawerOverlay,DrawerBody,DrawerCloseButton,DrawerHeader} from "@chakra-ui/react"
import React from "react";
import {useContext} from "react"
import {context} from "../Context/AuthContext"
function DrawerComp({btnRef,handleAbout,handleProjects}) {

    const {onClose,isOpen} = useContext(context)
    return (
      <>
        <Drawer 
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={"white"} />
            <DrawerHeader color={"white"} bgColor={"black"}>Hello</DrawerHeader>
            <DrawerBody color={"white"} backgroundColor={"black"} fontSize={25} textAlign={"center"}>
              <Text  onClick={()=>{
               handleAbout()
                onClose()
              }}>About Me</Text>
              <Text>Skills</Text>
              <Text onClick={()=>{
               handleProjects()
                onClose()
              }}>Project</Text>
              <Text>Resume</Text>
              <Text>Contact</Text>    
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerComp