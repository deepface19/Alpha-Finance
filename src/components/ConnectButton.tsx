import { Button, Box, Text } from "@chakra-ui/react";
import { useTronLink } from '../contexts/tronlink';
import { formatBalance} from '../utils/formatting';

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const { wallet, trxBalance, connectToWallet } =
    useTronLink();


  return wallet ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
        {formatBalance(trxBalance)} TRX
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
        {wallet &&
                  `${wallet.slice(0, 6)}...${wallet.slice(
                    wallet.length - 4,
                    wallet.length
                  )}`}        
        </Text>
      </Button>
    </Box>
      ) : (
    <Button
    onClick={() => connectToWallet()}
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
        Connect to a wallet
      </Button>
  );
}