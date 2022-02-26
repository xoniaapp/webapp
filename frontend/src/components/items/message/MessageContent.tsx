import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Message as MessageResponse } from '../../../lib/api/models';

interface MessageProps {
  message: MessageResponse;
}

export const MessageContent: React.FC<MessageProps> = ({ message: { attachment, text, createdAt, updatedAt } }) => {
  if (attachment) {
    const { filetype, url, filename } = attachment;
    if (filetype.startsWith('image/')) {
      return (
        <Box boxSize="sm" my={'2'} h={'full'}>
          <Image fit={'contain'} src={url} alt={''} borderRadius="md" />
        </Box>
      );
    } else if (filetype.startsWith('audio/')) {
      return (
        <Box my={'2'}>
          <audio controls>
            <source src={url} type={filetype} />
          </audio>
        </Box>
      );
    } else if (filetype.startsWith('video/')) {
      return (
        <Box>
          <video width="600px" height="600px" src={url}>
          </video>
        </Box>
      )
    } else if (filetype.startsWith('application/')) {
      return (
        <Box my={2}>
          <a href={url}>
           {filename}
          </a>
        </Box>
      )
    }
  }

  return (
    <Flex alignItems={'center'}>
      <Text>
        {/* @ts-ignore */}
        <ReactMarkdown
        linkTarget="_blank"
        //  @ts-ignore
        children={text}
        remarkPlugins={[remarkGfm]}
        />
        </Text>
      {/* Check if message was edited */}
      {createdAt !== updatedAt && (
        <Text fontSize={'10px'} ml={'1'} color={'labelGray'}>
          (edited)
        </Text>
      )}
    </Flex>
  );
};
