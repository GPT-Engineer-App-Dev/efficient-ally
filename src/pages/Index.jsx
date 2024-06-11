import { Container, VStack, Heading, Text, Box, Flex, Tag, Checkbox, Button, Modal, FormControl, FormLabel, Input, Select, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", dueDate: "2023-04-15", category: "Shopping", priority: "High", completed: false },
    { id: 2, title: "Read a book", dueDate: "2023-04-20", category: "Leisure", priority: "Low", completed: false },
    // Placeholder tasks
  ]);

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveTask = () => {
    setTasks(tasks.map(task => task.id === selectedTask.id ? selectedTask : task));
    setIsEditModalOpen(false);
  };

  const handleTaskChange = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">To-Do App</Heading>
        <Text>Welcome to your task manager. Organize your day effectively!</Text>
        <Flex direction="column" w="full">
          {/* Modal for editing tasks */}
          <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Task</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input name="title" value={selectedTask?.title || ''} onChange={handleTaskChange} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Due Date</FormLabel>
                  <Input type="date" name="dueDate" value={selectedTask?.dueDate || ''} onChange={handleTaskChange} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <Select name="category" value={selectedTask?.category || ''} onChange={handleTaskChange}>
                    <option value="Shopping">Shopping</option>
                    <option value="Leisure">Leisure</option>
                    {/* Add other categories as needed */}
                  </Select>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Priority</FormLabel>
                  <Select name="priority" value={selectedTask?.priority || ''} onChange={handleTaskChange}>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    {/* Add other priorities as needed */}
                  </Select>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSaveTask}>
                  Save
                </Button>
                <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {tasks.map(task => (
            <Box key={task.id} p={4} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
              <Flex justify="space-between" align="center">
                <VStack align="flex-start">
                  <Heading as="h3" size="md">{task.title}</Heading>
                  <Button size="sm" onClick={() => handleEditClick(task)}>Edit</Button>
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