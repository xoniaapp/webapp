import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { Link as RLink, useHistory } from 'react-router-dom';
import { InputField } from '../components/common/InputField';
import { toErrorMap } from '../lib/utils/toErrorMap';
import { userStore } from '../lib/stores/userStore';
import { RegisterSchema } from '../lib/utils/validation/auth.schema';
import { register } from '../lib/api/handler/auth';

export const Register = () => {
  const history = useHistory();
  const setUser = userStore((state) => state.setUser);

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box px={4} width="full" maxWidth="500px" textAlign="center">
        <Flex mb="4" justify="center">
          <Image src="https://cdn.services.xoniaapp.com/assets/logo.png" w="80px" />
        </Flex>
        <Box p={4} borderRadius={4} background="brandGray.light">
          <Box textAlign="center">
            <Heading fontSize="24px">Welcome!</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Formik
              initialValues={{ email: '', username: '', password: '' }}
              validationSchema={RegisterSchema}
              onSubmit={async (values, { setErrors }) => {
                try {
                  const { data } = await register(values);
                  if (data) {
                    setUser(data);
                    history.push('/channels/me');
                  }
                } catch (err) {
                  /* @ts-ignore */
                  if (err?.response?.data?.errors) {
                    /* @ts-ignore */
                    const errors = err?.response?.data?.errors;
                    setErrors(toErrorMap(errors));
                  }
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField label="Email" name="email" autoComplete="email" type="email" />

                  <InputField label="username" name="username" />

                  <InputField label="password" name="password" autoComplete="password" type="password" />

                  <Button
                    background="highlight.standard"
                    color="white"
                    width="full"
                    mt={4}
                    type="submit"
                    isLoading={isSubmitting}
                    _hover={{ bg: 'highlight.hover' }}
                    _active={{ bg: 'highlight.active' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    Register
                  </Button>
                  <Text mt="4">
                    Already have an account?{' '}
                    <Link as={RLink} to="/login" textColor="highlight.standard">
                      Sign In
                    </Link>
                  </Text>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
