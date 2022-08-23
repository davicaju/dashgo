import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Davi Cajucaru</Text>
        <Text color="gray.300" fontSize="small">
          devcaju@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Davi Cajucaru"
        src="https://github.com/davicaju.png"
      />
    </Flex>
  );
}
