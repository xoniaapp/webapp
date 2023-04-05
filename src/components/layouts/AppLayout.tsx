import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Badge,
    Tooltip,
    Wrap,
    Spacer,
    Avatar,
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Text,
    useColorModeValue,
    useDisclosure,
    Stack,
    Input,
    Divider,
    AvatarBadge
} from '@chakra-ui/react'

import SidebarContent from '../section/SidebarContent';

const badges = [
    {
        label: "Early Adopter",
        icon: "🦾",
    },
    {
        label: "Developer",
        icon: "🧑‍💻",
    }
    ,
    {
        label: "Moderation Team",
        icon: "📜",
    },
    {
        label: "Donator",
        icon: "💰",
    },
    {
        label: "Troller",
        icon: "🧌",
    }
];


const AppLayout = ({ children }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                onClick={() => onOpen()}
                key={"full"}
                m={4}
            >{`Settings`}</Button>

            <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody as={"div"} bg={useColorModeValue("whiteAlpha.500", "blackAlpha.700")}>
                        <Settings />
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Wrap>
                {badges.map(badge => (
                    <Tooltip label={badge.label} placement='top' px="2" bg={"blackAlpha.700"} color={"gray.50"}>
                        <Badge rounded="full" px="2" colorScheme="black">
                            {badge.icon}
                        </Badge>
                    </Tooltip>
                ))}
            </Wrap>
        </>
    )
}

const Settings = () => {
    const sidebar = useDisclosure();

    return (
        <Flex>
            <Box as="section" minH="100vh">
                <SidebarContent display={{ base: "none", md: "unset" }} />
                <Drawer
                    isOpen={sidebar.isOpen}
                    onClose={sidebar.onClose}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <SidebarContent w="full" borderRight="none" />
                    </DrawerContent>
                </Drawer>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Text
                        fontSize="2xl"
                        ml="3"
                        fontWeight="semibold"
                    >
                        My Account
                    </Text>
                    <Box as="main" p="4">
                        <Box>
                            <Stack spacing="6">
                                <Stack spacing={4}>
                                    <Tooltip placement='right' label="Change Avatar" aria-label="Change Avatar" bg={"blackAlpha.700"} color={"gray.50"}>
                                        <Avatar
                                            size="xl"
                                            _hover={{
                                                cursor: "pointer",
                                                opacity: 0.5,
                                            }}
                                            src="/logo.png">
                                            <AvatarBadge borderColor='red.500' bg='red' boxSize='0.20em' />
                                        </Avatar>
                                    </Tooltip>
                                    <Wrap>
                                        {badges.map(badge => (
                                            <Tooltip label={badge.label} placement='top' px="2" bg={"blackAlpha.700"} color={"gray.50"}>
                                                <Badge rounded="full" px="2" colorScheme="black">
                                                    {badge.icon}
                                                </Badge>
                                            </Tooltip>
                                        ))}
                                    </Wrap>
                                    <Divider />
                                    <FormControl>
                                        <FormLabel
                                            htmlFor="username"
                                            fontSize="12px"
                                            textTransform="uppercase"
                                        >
                                            USERNAME
                                        </FormLabel>
                                        <Input
                                            width={"512px"}
                                            id="USERNAME"
                                            type="text"
                                            placeholder="Enter your username."
                                            focusBorderColor="red.500"
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
                                            width={"512px"}
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email."
                                            focusBorderColor="red.500"
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
                                    </FormControl>
                                </Stack>
                                <Box mt={2}>
                                </Box>
                            </Stack>
                        </Box>
                        <Flex my={8} align="end">
                            <Spacer />
                            <Button
                                background="green.600"
                                color="white"
                                mt={4}
                                type="submit"
                                _hover={{ bg: "green.800" }}
                                _active={{ bg: "green.800" }}
                                _focus={{ boxShadow: "none" }}
                            >
                                Save
                            </Button>
                        </Flex>
                        <Divider />
                        <Spacer mt={4} />
                        <Text
                            fontSize="2xl"
                            fontWeight="semibold"
                        >
                            Account Removal
                        </Text>
                        <Text>
                            If you disable your account you can enable it at anytime after disabling it.
                        </Text>
                        <Flex my={8} align="end">
                            <Spacer />
                            <Button
                                background="red.600"
                                color="white"
                                mr={4}
                                type="submit"
                                _hover={{ bg: "red.800" }}
                                _active={{ bg: "red.800" }}
                                _focus={{ boxShadow: "none" }}
                            >
                                Delete Account
                            </Button>
                            <Button
                                colorScheme="red"
                                color={"white"}
                                variant="outline"
                                fontSize="14px"
                                _hover={{ bg: "red.500" }}

                            >
                                Disable Account
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default AppLayout;