import { useColorModeValue, Box, Flex, Code } from "@chakra-ui/react";
import { FaFeatherAlt, FaRobot, FaLock } from "react-icons/fa";
import { AiFillAppstore, AiOutlineHome, AiFillNotification, AiFillEdit } from "react-icons/ai";

import NavItem from "../items/NavItem";

const Settings = [
    {
        name: "My Account",
        href: "",
        icon: AiOutlineHome,
    },
    {
        name: "Authorized Apps",
        href: "",
        icon: AiFillAppstore,
    },
    {
        name: "Security",
        href: "",
        icon: FaLock,
    },
    {
        name: "Appearance",
        href: "",
        icon: AiFillEdit,
    },
    {
        name: "Notifications",
        href: "",
        icon: AiFillNotification,
    }
]

const Developer = [
    {
        name: "Applications",
        href: "",
        icon: FaRobot,
    },
    {
        name: "Advanced",
        href: "",
        icon: FaFeatherAlt,
    }
]

const SidebarContent = (props: any) => (
    <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        border
        color="inherit"
        borderRightWidth="1px"
        w="60"
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
        {...props}
    >
        <Flex
            align="center"
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            color="inherit"
            role="group"
            fontWeight="semibold"
            transition=".15s ease"
        >
            User Settings
        </Flex>
        <Flex
            direction="column"
            as="nav"
        >
            {Settings.map((item: { name: string, href: string, icon: any }) => (
                <>
                    <NavItem key={item.href} icon={item.icon}>{item.name}</NavItem>
                </>
            ))}
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color="inherit"
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
            >
                Developer
            </Flex>
            {Developer.map((item: { name: string, href: string, icon: any }) => (
                <>
                    <NavItem key={item.href} icon={item.icon}>{item.name}</NavItem>
                </>
            ))}
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color="inherit"
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
            >
                <Code>dev@87at4a6</Code>
            </Flex>
        </Flex>
    </Box>
);

export default SidebarContent;