import { Container, VStack, Heading, Text, Input, Button, HStack, Select, Checkbox } from '@chakra-ui/react';

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} w="full">
        <Heading>To-Do App</Heading>
        <VStack spacing={4} w="full" align="stretch">
          <Input placeholder="Add new task..." />
          <HStack>
            <Select placeholder="Category">
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </Select>
            <Select placeholder="Priority">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Select>
          </HStack>
          <Button colorScheme="blue">Add Task</Button>
        </VStack>
        <VStack spacing={4} w="full" align="stretch">
          <Text fontSize="xl" alignSelf="flex-start">Tasks:</Text>
          <VStack spacing={2} w="full">
            {/* Placeholder for tasks */}
            <HStack as="label" w="full" p={2} borderWidth="1px" borderRadius="md">
              <Checkbox />
              <Text flex="1">Task 1</Text>
              <Text>Due: 2023-04-01</Text>
              <Button size="sm" colorScheme="red">Delete</Button>
            </HStack>
            <HStack as="label" w="full" p={2} borderWidth="1px" borderRadius="md">
              <Checkbox />
              <Text flex="1">Task 2</Text>
              <Text>Due: 2023-04-02</Text>
              <Button size="sm" colorScheme="red">Delete</Button>
            </HStack>
            {/* End of placeholder for tasks */}
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;