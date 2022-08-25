import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      backgroundColor="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Search on platform"
        px="4"
        mr="4"
        _placeholder={{ color: "gray.400" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
