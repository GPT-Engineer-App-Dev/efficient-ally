import { Container, VStack, Heading, Text, Box, Flex, Tag, Checkbox, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", dueDate: "2023-04-15", category: "Shopping", priority: "High", completed: false },
    { id: 2, title: "Read a book", dueDate: "2023-04-20", category: "Leisure", priority: "Low", completed: false },
    // Placeholder tasks
  ]);

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">To-Do App</Heading>
        <Text>Welcome to your task manager. Organize your day effectively!</Text>
        <Flex direction="column" w="full">
          {tasks.map(task => (
            <Box key={task.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
              <Flex justify="space-between" align="center">
                <VStack align="flex-start">
                  <Heading as="h3" size="md">{task.title}</Heading>
                  <Text fontSize="sm">Due: {task.dueDate}</Text>
                  <Tag size="sm" colorScheme={task.priority === "High" ? "red" : "green"}>{task.category}</Tag>
                </VStack>
                <Checkbox size="lg" colorScheme="green" defaultChecked={task.completed} />
              </Flex>
            </Box>
          ))}
        </Flex>
        <Button colorScheme="blue" size="md">Add New Task</Button>
      </VStack>
    </Container>
  );
};

export default Index;