import React, { useEffect, useState } from 'react';
import { Link as RLink, useHistory, useParams } from 'react-router-dom';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { joinGuild } from '../lib/api/handler/guilds';

interface InviteRouter {
  link: string;
}

export const Invite: React.FC = () => {
  const { link } = useParams<InviteRouter>();
  const [errors, setErrors] = useState<string | null>(null);
  const history = useHistory();

  useEffect(() => {
    const handleJoin = async () => {
      try {
        const { data } = await joinGuild({ link });
        if (data) {
          history.replace(`/channels/${data.id}/${data.default_channel_id}`);
        }
      } catch (err) {
        /* @ts-ignore */
        const status = err?.response?.status;
        /* @ts-ignore */
        if (status === 400 || status === 404) {
          /* @ts-ignore */
          setErrors(err?.response?.data?.message);
        }
        /* @ts-ignore */
        if (err?.response?.data?.errors) {
          setErrors('An error occurred. Please try again later');
        }
      }
    };
    handleJoin();
  }, [link, history]);

  return (
    <Flex minHeight="100vh" align={'center'} justify={'center'} h={'full'}>
      <Box textAlign={'center'}>
        <Flex mb="4" justify="center">
          <Image src="https://cdn.services.xoniaapp.com/assets/logo.png" w="80px" />
        </Flex>
        <Text>Fetching server info. Please wait.</Text>
        <Text>You will be automatically redirected.</Text>
        {errors && (
          <Box>
            <Text my={'2'} textColor={'menuRed'}>
              {errors}
            </Text>
            <Text>
              Click{' '}
              <Link as={RLink} to="/channels/me" color="highlight.standard">
                here
              </Link>{' '}
              to return.
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
