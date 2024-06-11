import { Container, VStack, Heading, Text, Box, Flex, Tag, Checkbox, Stack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading>To-Do App</Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center" w="full">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Flex justify="space-between" align="center">
              <Heading fontSize="xl">Task Name</Heading>
              <Checkbox size="lg" colorScheme="green" />
            </Flex>
            <Text mt={4}>Due Date: 2023-04-15</Text>
            <Flex mt={2} align="center">
              <Text mr={2}>Category:</Text>
              <Tag size="sm" variant="solid" colorScheme="blue">Work</Tag>
            </Flex>
            <Flex mt={2} align="center">
              <Text mr={2}>Priority:</Text>
              <Tag size="sm" variant="solid" colorScheme="red">High</Tag>
            </Flex>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Flex justify="space-between" align="center">
              <Heading fontSize="xl">Another Task</Heading>
              <Checkbox size="lg" colorScheme="green" />
            </Flex>
            <Text mt={4}>Due Date: 2023-04-20</Text>
            <Flex mt={2} align="center">
              <Text mr={2}>Category:</Text>
              <Tag size="sm" variant="solid" colorScheme="purple">Personal</Tag>
            </Flex>
            <Flex mt={2} align="center">
              <Text mr={2}>Priority:</Text>
              <Tag size="sm" variant="solid" colorScheme="orange">Medium</Tag>
            </Flex>
          </Box>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;