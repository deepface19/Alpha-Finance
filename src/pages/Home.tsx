import React, { useState, useEffect } from 'react';

import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    Grid,
    HStack,
    Stack,
    Text,
    VStack,
    Select,
    FormLabel,
    InputGroup,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Tooltip,
    Checkbox,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spacer,
} from "@chakra-ui/react";
import Alphabackground1 from "../assets/Alphabackground1.png";
import { Card } from "../components/Card";
import { CardBody } from "../components/CardBody";
import { useTronLink } from '../contexts/tronlink';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const Home: React.FunctionComponent = () => {
    const { walletName } = useTronLink();


    return (
        <Flex flexDirection='column' pt={{ base: "90px", md: "10px" }}>
            <Grid
                templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
                my='280px'
                mt='1px'
            >
                {/* Welcome Card */}
                <Card
                    p='0px'
                    gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
                    bgImage={Alphabackground1}
                    bgSize='cover'
                    h="220px"
                    w="1205px"
                    borderRadius="20px"
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                    variant={''}>

                    <CardBody w='100%' h='100%' variant={''}>
                        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%' h='100%'>
                            <Flex
                                flexDirection='column'
                                h='100%'
                                p='22px'
                                minW='60%'
                                lineHeight='1.6'>
                                <Text fontSize='lg' color='gray.300' fontWeight='bold'>
                                    Welcome,
                                </Text>
                                <Text fontSize='28px' color='#fff' fontWeight='bold' mb='18px'>
                                    {walletName}
                                </Text>
                                <Text
                                    fontSize='md'
                                    color='gray.300'
                                    fontWeight='normal'
                                    mb='auto'>
                                    Glad to see you! <br />
                                    Ask me anything.
                                </Text>
                                <Spacer />
                                <Flex align='center'>
                                </Flex>
                            </Flex>
                        </Flex>
                    </CardBody>
                </Card>
            </Grid>

            <Grid
                templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
                my='280px'
                mt='1px'
            >
                <Card
                    p='0px'
                    bg='#ffffff'
                    h="520px"
                    w="1205px"
                    borderRadius="20px"
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                    variant={''}>
                    <CardBody w='100%' h='100%' variant={''}>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </CardBody>

                </Card>
            </Grid>
        </Flex>
    )
}