import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wesle Leal</Text>
          <Text color="gray.300" fontSize="small">
            wesle.profissional@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Wesle Leal"
        src="https://github.com/wesledev.png"
      />
    </Flex>
  );
}
