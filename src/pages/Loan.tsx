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
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Card } from "../components/Card";
import { CardHeader } from "../components/CardHeader";
export const Loan: React.FunctionComponent = () => {
    const [tokenType, setTokenType] = useState('')
    const [recipientData, setRecipientData] = useState('')
    const [amountBorrow, setAmountBorrow] = useState('')
    const [amountCollateral, setAmountCollateral] = useState('')
    const [date, setDate] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                    borderRadius='20px'
                    h={"480px"}
                    w={"550px"}
                    shadow='2px 8px 10px 4px rgba(0, 0, 0, 0.3)'
                >
                    <CardHeader
                        variant={""}
                        borderRadius='20px 20px 0px 0px'
                        bg='#385170'
                        h={'55px'}
                    >
                        <Flex direction='column'
                            align='center'
                            justify='center'
                        >
                            <Text fontSize='34px' color='#ffffff' fontWeight='bold' mt='5px'>
                                Loan
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Box
                        display={{ sm: "flex", md: "block" }}
                        justify={{ sm: "center", md: "flex-start" }}
                        align={{ sm: "center", md: "flex-start" }}
                        minH={{ sm: "220px", md: "220px" }}
                        p={{ sm: "0px", md: "22px" }}>
                        <VStack
                            spacing={5}
                            align='stretch'
                        >
                            <FormControl as='fieldset'>
                                <FormLabel as='legend' color={'white'}>I want to borrow</FormLabel>
                                <Stack spacing={1}>
                                    <InputGroup>
                                        <Input
                                            color={'white'}
                                            value={amountBorrow}
                                            onChange={e => setAmountBorrow(e.target.value)}
                                        />
                                        <Select
                                            size='md'
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
                                    </InputGroup>
                                </Stack>
                            </FormControl>
                            <FormControl as='fieldset'>
                                <FormLabel as='legend' color={'white'}>Collateral Amount</FormLabel>
                                <InputGroup>
                                    <Input
                                        color={'white'}
                                        value={amountCollateral}
                                        onChange={e => setAmountCollateral(e.target.value)}
                                    />
                                    <Select
                                        size='md'
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
                                </InputGroup>
                                <HStack spacing='15px'
                                    mt={2}
                                >
                                    <Text fontSize='sm' color='yellow'>LTV=65%</Text>
                                    <Alert
                                        status='success'
                                        h='20px'
                                        fontSize={'13px'}
                                        borderRadius='5px'
                                        fontStyle={'bold'}
                                        alignItems='center'
                                        gap='2'
                                    >
                                        <AlertIcon />
                                        <AlertTitle fontSize='md'>
                                            Staking |
                                        </AlertTitle>
                                        <AlertDescription maxWidth='sm'>
                                            Your Collateral will be staked to reduce interest rate.
                                        </AlertDescription>
                                        <Tooltip label='The collateral assets you use for borrowing will be deposited in a specific crypto wallet to support the operation of the blockchain network, and you will receive corresponding rewards to reduce interest rates.' fontSize='sm'>
                                            <InfoOutlineIcon />
                                        </Tooltip>
                                    </Alert>
                                </HStack>
                            </FormControl>
                            <FormControl as='fieldset'>
                                <HStack spacing='5px'
                                    mt={1}
                                    color='white'
                                >
                                    <Text fontSize='md'>Loan Term </Text>
                                    <Tooltip label='Interest is calculated based on the actual borrowing hours and can be repaid in advance. Interest is charged 3 times hourly after the expiration time. Positions overdue more than 72 hours are automatically closed for repayment.' fontSize='sm'>
                                        <InfoOutlineIcon />
                                    </Tooltip>
                                </HStack>
                                <Flex direction='row' alignItems='center' gap='2'>
                                    <ButtonGroup gap='2'>
                                        <Button h='40px' w='94px' bg='#385170' size='md'>7 Days</Button>
                                        <Button h='40px' w='94px' bg='#385170' size='md'>14 Days</Button>
                                        <Button h='40px' w='94px' bg='#385170' size='md'>30 Days</Button>
                                        <Button h='40px' w='94px' bg='#385170' size='md'>90 Days</Button>
                                        <Button h='40px' w='94px' bg='#385170' size='md'>180 Days</Button>
                                    </ButtonGroup>
                                </Flex>
                            </FormControl>
                            <HStack spacing='5px'
                                mt={1}
                                color='white'
                            >
                                <Checkbox colorScheme='green'>I have read and agree to</Checkbox>
                                <button onClick={onOpen} color='yellow'>
                                    <Text fontSize='sm' color='yellow'>Alpha Finance Loan Service Agreement
                                    </Text>
                                </button>
                                <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Alpha Finance Loan Service Agreement</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Text fontWeight='bold' mb='1rem'>
                                            </Text>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>

                            </HStack>
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
                                Confirm
                            </Button>
                        </VStack>
                    </Box>


                </Card>
            </Grid>
        </Flex >

    )
}