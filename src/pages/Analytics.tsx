import React from "react";
import {
    Box,
    Flex,
    Grid,
    Icon,
    Progress,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { CardBody } from "../components/CardBody";
import { CardHeader } from "../components/CardHeader";
import { LineChart } from "../components/LineChart";
import { BarChart } from "../components/BarChart";
import { RadialBarChart } from "../components/RadiarBarCharts";
import { IconBox } from "../components/IconBox";
import { GrTransaction } from 'react-icons/gr';
import { FaFileContract } from 'react-icons/fa';
import { MdOutlineHowToVote } from 'react-icons/md';
import { GiLockedChest } from 'react-icons/gi';
import * as GradientProgress from "@delowar/react-circle-progressbar";
import { GradientCircleChart } from "../components/GradientCircleCharts";


const Analytics: React.FunctionComponent = () => {
    return (
        <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
            <Grid
                templateColumns={{ sm: "1fr", lg: "1.7fr 1.3fr" }}
                maxW={{ sm: "100%", md: "100%" }}
                gap='24px'
                mb='24px'>
                <Card
                    p='38px 0px 0px 0px' variant={""}
                    bg='linear-gradient(127.09deg, rgb(24,22,52) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                    borderRadius='20px'
                    h={"443px"}
                    w={"650px"}
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                >
                    <CardHeader mb='20px' ps='22px' variant={""}>
                        <Flex direction='column' alignSelf='flex-start'>
                            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                                Transactions Overview
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Box w='100%' minH={{ sm: "300px" }}>
                        <LineChart />
                    </Box>
                </Card>
                {/* Activity */}
                <Card p='16px' variant={""}
                    bgImage='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                    border='#E2E8F0'
                    borderRadius='20px'
                    h={"443px"}
                    w={"535px"}
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                >
                    <CardBody variant={""}>
                        <Flex direction='column' w='100%'>
                            <Box
                                bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                                borderRadius='20px'
                                display={{ sm: "flex", md: "block" }}
                                justify={{ sm: "center", md: "flex-start" }}
                                align={{ sm: "center", md: "flex-start" }}
                                minH={{ sm: "180px", md: "220px" }}
                                p={{ sm: "0px", md: "22px" }}>
                                <BarChart />
                            </Box>
                            <Flex
                                direction='column'
                                mt='24px'
                                mb='36px'
                                alignSelf='flex-start'>
                                <Text fontSize='lg' color='#fff' fontWeight='bold' mb='6px'>
                                    Activity
                                </Text>
                            </Flex>
                            <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                                <Flex direction='column'>
                                    <Flex alignItems='center'>
                                        <IconBox
                                            p={'box'}
                                            h={"30px"}
                                            w={"30px"}
                                            bg='brand.200'
                                            me='6px'>
                                            <GrTransaction />
                                        </IconBox>
                                        <Text fontSize='sm' color='gray.400'>
                                            Transfer
                                        </Text>
                                    </Flex>
                                    <Text
                                        fontSize={{ sm: "md", lg: "lg" }}
                                        color='#fff'
                                        fontWeight='bold'
                                        mb='6px'
                                        my='6px'>
                                        20
                                    </Text>
                                    <Progress
                                        colorScheme='brand'
                                        bg='#2D2E5F'
                                        borderRadius='30px'
                                        h='5px'
                                        value={20}
                                    />
                                </Flex>
                                <Flex direction='column'>
                                    <Flex alignItems='center'>
                                        <IconBox
                                            p={'box'}
                                            h={"30px"}
                                            w={"30px"}
                                            bg='brand.200'
                                            me='6px'>
                                            <GiLockedChest/>
                                        </IconBox>
                                        <Text fontSize='sm' color='gray.400'>
                                            Staking
                                        </Text>
                                    </Flex>
                                    <Text
                                        fontSize={{ sm: "md", lg: "lg" }}
                                        color='#fff'
                                        fontWeight='bold'
                                        mb='6px'
                                        my='6px'>
                                        1
                                    </Text>
                                    <Progress
                                        colorScheme='brand'
                                        bg='#2D2E5F'
                                        borderRadius='30px'
                                        h='5px'
                                        value={50}
                                    />
                                </Flex>
                                <Flex direction='column'>
                                    <Flex alignItems='center'>
                                        <IconBox
                                            p={'box'}
                                            h={"30px"}
                                            w={"30px"}
                                            bg='brand.200'
                                            me='6px'>
                                            <FaFileContract />
                                        </IconBox>
                                        <Text fontSize='sm' color='gray.400'>
                                            TSC
                                        </Text>
                                    </Flex>
                                    <Text
                                        fontSize={{ sm: "md", lg: "lg" }}
                                        color='#fff'
                                        fontWeight='bold'
                                        mb='6px'
                                        my='6px'>
                                        5
                                    </Text>
                                    <Progress
                                        colorScheme='brand'
                                        bg='#2D2E5F'
                                        borderRadius='30px'
                                        h='5px'
                                        value={70}
                                    />
                                </Flex>
                                <Flex direction='column'>
                                    <Flex alignItems='center'>
                                        <IconBox
                                            p={'box'}
                                            h={"30px"}
                                            w={"30px"}
                                            bg='brand.200'
                                            me='6px'>
                                            <MdOutlineHowToVote/>
                                        </IconBox>
                                        <Text fontSize='sm' color='gray.400'>
                                            Voting
                                        </Text>
                                    </Flex>
                                    <Text
                                        fontSize={{ sm: "md", lg: "lg" }}
                                        color='#fff'
                                        fontWeight='bold'
                                        mb='6px'
                                        my='6px'>
                                        1
                                    </Text>
                                    <Progress
                                        colorScheme='brand'
                                        bg='#2D2E5F'
                                        borderRadius='30px'
                                        h='5px'
                                        value={90}
                                    />
                                </Flex>
                            </SimpleGrid>
                        </Flex>
                    </CardBody>
                </Card>
            </Grid >
            <Grid
                templateColumns={{ sm: "1fr", lg: "1.7fr 1.3fr" }}
                maxW={{ sm: "100%", md: "100%" }}
                gap='24px'
                mb='24px'>
                {/* Security wallet */}
                <Card
                    gridArea={{ md: "2 / 1 / 3 / 2", "2xl": "auto" }} variant={""}
                    bgImage='linear-gradient(127.09deg, rgb(24,22,52) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                    borderRadius='20px'
                    h={"334px"}
                    w={"592px"}
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                >
                    <CardHeader variant={""}
                    >
                        <Flex direction='column'
                            mt='24px'
                            align='center'
                            justify='center'
                        >
                            <Text color='#ffffff' fontSize='lg' fontWeight='bold' mb='4px'>
                                Security Wallet
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Flex direction='column' justify='center' align='center'>
                        <Box w='100%' minH={{ sm: "300px" }}>
                            <RadialBarChart />
                        </Box>
                    </Flex>
                </Card>
                {/* Scoring */}
                <Card gridArea={{ md: "2 / 2 / 3 / 3", "2xl": "auto" }} variant={""}
                    bgImage='linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                    borderRadius='20px'
                    h={"334px"}
                    w={"592px"}
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                >
                    <CardHeader variant={""}
                    >
                        <Flex direction='column'
                            mt='24px'
                            align='center'
                            justify='center'
                        >
                            <Text color='#fff' fontSize='lg' fontWeight='bold'>
                                Scoring
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Flex direction='column' justify='center' align='center'>
                        <Box w='100%' minH={{ sm: "300px" }}>
                            <GradientCircleChart />
                        </Box>
                    </Flex>
                </Card>
            </Grid >
        </Flex >
    );
}
export default Analytics