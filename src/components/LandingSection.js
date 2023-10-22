import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey! I'm Dylan";
const bio1 = "A developer and an engineer in process...";
const bio2 = "";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size={"xl"} src={"../images/me2.jpg"} />
      <p> {greeting} </p>
      <Heading as={"h2"} size={"lg"}> {bio1} </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
