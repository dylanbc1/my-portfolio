import {Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack bg={"white"} color={"black"} borderRadius={'lg'}
                spacing={2}>
                <Image src={imageSrc} borderRadius={'lg'}/>
            <VStack p={4}>
                <Heading size={"md"} textAlign={"left"}> {title} </Heading>
                <Text> {description} </Text>
                <HStack textAlign={"left"}>
                    <p>See more</p>
                    <FontAwesomeIcon icon={faArrowRight} size={"1x"}></FontAwesomeIcon>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Card;
