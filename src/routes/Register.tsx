import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Input,
  Text,
  Image,
  Flex,
  FormErrorMessage,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

const Register = () => {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
    >
      <Container
        maxW="lg"
        py={{ base: "10", md: "12" }}
        px={{ base: "0", sm: "4" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Flex mb="4" justify="center">
              <Image src={`/logo.png`} w="60px" />
            </Flex>
          </Stack>

          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading fontSize={"2xl"}>Let's create a new account!</Heading>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel
                    htmlFor="email"
                    fontSize="12px"
                    textTransform="uppercase"
                  >
                    USERNAME
                  </FormLabel>
                  <Input
                    focusBorderColor="red.500"
                    id="username"
                    type="username"
                    placeholder="Enter your username."
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="email"
                    fontSize="12px"
                    textTransform="uppercase"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    focusBorderColor="red.500"
                    id="email"
                    type="email"
                    placeholder="Enter your email."
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    htmlFor="password"
                    fontSize="12px"
                    textTransform="uppercase"
                  >
                    PASSWORD
                  </FormLabel>
                  <Input
                    focusBorderColor="red.500"
                    id="password"
                    type="password"
                    placeholder="Enter your password."
                  />
                  <FormErrorMessage>Test</FormErrorMessage>
                </FormControl>
              </Stack>
              <Button
                background="red.600"
                color="white"
                width="full"
                mt={4}
                type="submit"
                _hover={{ bg: "red.800" }}
                _active={{ bg: "red.800" }}
                _focus={{ boxShadow: "none" }}
              >
                Register
              </Button>
              <Text mt={4}>
                Already have an account?{" "}
                <Link
                  as={RLink}
                  to="/login"
                  textColor="red.500"
                  _focus={{ outline: "none" }}
                >
                  Log in
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Register;
