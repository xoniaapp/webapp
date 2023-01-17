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
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

const Reset = () => {
  return (
    <Flex
      bg={useColorModeValue("whiteAlpha.600", "blackAlpha.700")}
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
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading fontSize={"2xl"}>🔒 Forgot password</Heading>
            </Stack>
          </Stack>

          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
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
                Reset password
              </Button>
              <Text mt={4}>
                <Link
                  as={RLink}
                  to="/register"
                  textColor="red.500"
                  _focus={{ outline: "none" }}
                >
                  Go back login
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Reset;
