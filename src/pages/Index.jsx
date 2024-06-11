import { Container, VStack, Heading, Text, Box, Flex, Tag, Checkbox, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", dueDate: "2023-04-15", category: "Shopping", priority: "High", completed: false },
    { id: 2, title: "Read a book", dueDate: "2023-04-20", category: "Leisure", priority: "Low", completed: false },
    // Placeholder tasks
  ]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEditTask = (task) => {
    setSelectedTask(task);
    onOpen();
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">To-Do App</Heading>
        <Text>Welcome to your task manager. Organize your day effectively!</Text>
        <Flex direction="column" w="full">
          {tasks.map(task => (
            <Button variant="ghost" w="full" justifyContent="start" onClick={() => handleEditTask(task)} key={task.id}>
              <Flex justify="space-between" align="center">
                <VStack align="flex-start">
                  <Heading as="h3" size="md">{task.title}</Heading>
                  <Text fontSize="sm">Due: {task.dueDate}</Text>
                  <Tag size="sm" colorScheme={task.priority === "High" ? "red" : "green"}>{task.category}</Tag>
                </VStack>
                <Checkbox size="lg" colorScheme="green" defaultChecked={task.completed} onClick={(e) => e.stopPropagation()} />
              </Flex>
            </Button>
          ))}
        </Flex>
        <Button colorScheme="blue" size="md">Add New Task</Button>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form fields for editing the task will go here */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;