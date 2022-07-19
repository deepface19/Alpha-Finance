import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import { useTronLink } from '../contexts/tronlink';
import { useCallback } from "react";

type Props = {
  isOpen: any;
  onClose: any;
};

export default function AccountModal({ isOpen, onClose }: Props) {
  const { wallet, walletName} =
  useTronLink();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        background="gray.900"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
        {walletName}
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: "whiteAlpha.700",
          }}
        />
        <ModalBody pt={0} px={4}>
          <Box
            borderRadius="3xl"
            border="1px"
            borderStyle="solid"
            borderColor="gray.600"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="gray.400" fontSize="sm">
                Connected with TronLink
              </Text>
            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <Text
                color="white"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
              >
                 {wallet &&
                  `${wallet.slice(0, 6)}...${wallet.slice(
                    wallet.length - 4,
                    wallet.length
                  )}`}
              </Text>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Button 
                variant="link"
                color="gray.400"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                  textDecoration: "none",
                  color: "whiteAlpha.800",
                }}
                onClick={() => {
                  navigator.clipboard.writeText((wallet).toString());
                }
              }
              >
                <CopyIcon mr={1} />
                Copy Address
              </Button>
              <Link
                fontSize="sm"
                display="flex"
                alignItems="center"
                href={`https://tronscan.org/#/address/${wallet}`}
                isExternal
                color="gray.400"
                ml={6}
                _hover={{
                  color: "whiteAlpha.800",
                  textDecoration: "underline",
                }}
              >
                <ExternalLinkIcon mr={1} />
                View on Explorer
              </Link>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter
          justifyContent="end"
          background="gray.700"
          borderBottomLeftRadius="3xl"
          borderBottomRightRadius="3xl"
          p={6}
        >
          <Text
            color="white"
            textAlign="left"
            fontWeight="medium"
            fontSize="md"
          >
            Your transactions willl appear here...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
