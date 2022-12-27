import Head from "next/head";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Box,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Chakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  return (
    <div>
      <Head>
        <title>POC Cubsole</title>
        <meta name="description" content="POC Cubsole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={2}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Testing alert here!</AlertTitle>
          <AlertDescription>This is just a test</AlertDescription>
        </Alert>
      </Box>

      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra x Podium POC!
      </Text>

      <Box>
        <Button colorScheme="green" onClick={onOpen}  bgGradient="radial(gray.300, yellow.400, pink.200)">
          Open Me
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Open Me
              </AlertDialogHeader>

              <AlertDialogBody>This is opened!</AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="green" onClick={onClose} ml={3}>
                  Done
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>

      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Testing built in responsive
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Easily define margin and padding for different breakpoints
          </Link>
          <Text mt={2} color="gray.500">
            Yes it breaks
          </Text>
        </Box>
      </Box>
    </div>
  );
}
