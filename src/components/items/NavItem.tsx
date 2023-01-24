import { useColorModeValue, Flex, Icon } from "@chakra-ui/react";

const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
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
            _hover={{
                bg: useColorModeValue("whiteAlpha.500", "gray.900"),
                color: useColorModeValue("whiteAlpha.900", "red.500")
            }}
            {...rest}
        >
            {icon && (
                <Icon
                    mx="2"
                    boxSize="4"
                    as={icon}
                    _groupHover={{
                        color: useColorModeValue("whiteAlpha.900", "red.500"),
                    }}
                />
            )}
            {children}
        </Flex>
    );
};

export default NavItem;