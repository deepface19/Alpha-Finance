import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    Grid,
    VStack,
    Select,
    FormLabel,
    Input,
    Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import { useTronLink } from '../contexts/tronlink';

import { Card } from "../components/Card";
import { CardHeader } from "../components/CardHeader";
export const ProtectTransaction: React.FunctionComponent = () => {
    const { wallet } = useTronLink();
    const [tokenType, setTokenType] = useState('')
    const [recipientData, setRecipientData] = useState('')
    const [amount, setAmount] = useState('')
    const [NoteData, setNoteData] = useState('')
   

    return (
        <Flex flexDirection='column' pt={{ base: "90px", md: "10px" }}>
            <Grid
                templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
                my='26px'
                gap='18px'>
                <Card
                    p='0px'
                    gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
                    variant={""}
                    bg='#011627'
                    borderRadius='10px'
                    h={"350px"}
                    w={"550px"}
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                >
                    <Tabs isFitted variant='enclosed' size='lg'>
                        <CardHeader
                            variant={""}
                            borderRadius='10px 10px 0px 0px'
                            bg='#011627'
                            h={'53px'}
                        >
                            <TabList mb='10em' color='white'>
                                <Tab _selected={{ color: "blue.300", bg: 'blue.800' }}>Deposit</Tab>
                                <Tab _selected={{ color: "blue.300", bg: 'blue.800' }}>Withdraw</Tab>
                            </TabList>
                        </CardHeader>
                        <TabPanels>
                            <TabPanel>
                                <Box
                                    display={{ sm: "flex", md: "block" }}
                                    justify={{ sm: "center", md: "flex-start" }}
                                    align={{ sm: "center", md: "flex-start" }}
                                    minH={{ sm: "320px", md: "320px" }}
                                    p={{ sm: "0px", md: "22px" }}>
                                    <VStack
                                        spacing={5}
                                        align='stretch'
                                    >
                                        <FormControl as='fieldset'>
                                            <FormLabel htmlFor='token' color={'white'}>Token</FormLabel>
                                            <Select
                                                color='blue.300'
                                                value={tokenType}
                                                onChange={e => setTokenType(e.target.value)}
                                            >
                                                <option value='trx'>TRX</option>
                                                <option value='usdc'>USDC</option>
                                                <option value='usdt'>USDT</option>
                                                <option value='usdd'>USDD</option>
                                                <option value='tusd'>TUSD</option>
                                                <option value='usdJ'>USDJ</option>
                                            </Select>
                                        </FormControl>
                                        <FormControl>

                                            <FormLabel htmlFor='amount' color={'white'}>Amount</FormLabel>
                                            <Input
                                                color={'white'}
                                                value={amount}
                                                onChange={e => setAmount(e.target.value)}
                                                type='tel'
                                            />
                                        </FormControl>

                                        <Button
                                            bg="blue.800"
                                            color="blue.300"
                                            fontSize="lg"
                                            fontWeight="medium"
                                            borderRadius="xl"
                                            border="1px solid transparent"
                                            _hover={{
                                                borderColor: "blue.700",
                                                color: "blue.400",
                                            }}
                                            _active={{
                                                backgroundColor: "rgb(69,88,248)",
                                                borderColor: "rgb(69,88,248)",
                                            }}
                                        >
                                            Deposit
                                        </Button>
                                    </VStack>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box
                                    display={{ sm: "flex", md: "block" }}
                                    justify={{ sm: "center", md: "flex-start" }}
                                    align={{ sm: "center", md: "flex-start" }}
                                    minH={{ sm: "320px", md: "320px" }}
                                    p={{ sm: "0px", md: "22px" }}>
                                    <VStack
                                        spacing={5}
                                        align='stretch'
                                    >
                                        <FormControl>
                                            <FormLabel htmlFor='note' color={'white'}>Note</FormLabel>
                                            <Input
                                                color={'white'}
                                                value={NoteData}
                                                onChange={e => setNoteData(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor='recipient address' color={'white'}>Recipient Address</FormLabel>
                                            <Input
                                                color={'white'}
                                                value={recipientData}
                                                onChange={e => setRecipientData(e.target.value)}
                                            />
                                        </FormControl>
                                        <Button
                                            bg="blue.800"
                                            color="blue.300"
                                            fontSize="lg"
                                            fontWeight="medium"
                                            borderRadius="xl"
                                            border="1px solid transparent"
                                            _hover={{
                                                borderColor: "blue.700",
                                                color: "blue.400",
                                            }}
                                            _active={{
                                                backgroundColor: "rgb(69,88,248)",
                                                borderColor: "rgb(69,88,248)",
                                            }}
                                        >
                                            Withdraw
                                        </Button>
                                    </VStack>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Card>
            </Grid>
        </Flex >

    )
}