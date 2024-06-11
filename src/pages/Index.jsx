import { Container, VStack, Heading, Text, Box, Flex, Tag, Checkbox, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const Index = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", dueDate: "2023-04-15", category: "Shopping", priority: "High", completed: false },
    { id: 2, title: "Read a book", dueDate: "2023-04-20", category: "Leisure", priority: "Low", completed: false },
    // Placeholder tasks
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingTask, setEditingTask] = useState(null);

  const handleEditClick = (task) => {
    setEditingTask(task);
    onOpen();
  };

  const handleSaveClick = () => {
    setTasks(tasks.map(task => task.id === editingTask.id ? editingTask : task));
    onClose();
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">To-Do App</Heading>
        <Text>Welcome to your task manager. Organize your day effectively!</Text>
        <Flex direction="column" w="full">
          {tasks.map(task => (
            <Button key={task.id} variant="ghost" w="full" justifyContent="flex-start" onClick={() => handleEditClick(task)}>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
                <Flex justify="space-between" align="center">
                  <VStack align="flex-start">
                    <Heading as="h3" size="md">{task.title}</Heading>
                    <Text fontSize="sm">Due: {task.dueDate}</Text>
                    <Tag size="sm" colorScheme={task.priority === "High" ? "red" : "green"}>{task.category}</Tag>
                  </VStack>
                  <Checkbox size="lg" colorScheme="green" defaultChecked={task.completed} onClick={(e) => e.stopPropagation()} />
                </Flex>
              </Box>
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
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" value={editingTask?.title || ''} onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Due Date</FormLabel>
              <Input type="date" placeholder="Due Date" value={editingTask?.dueDate || ''} onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category" value={editingTask?.category || ''} onChange={(e) => setEditingTask({ ...editingTask, category: e.target.value })}>
                <option>Shopping</option>
                <option>Leisure</option>
                {/* Add more categories as needed */}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Priority</FormLabel>
              <Select placeholder="Select priority" value={editingTask?.priority || ''} onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value })}>
                <option>High</option>
                <option>Low</option>
                {/* Add more priorities as needed */}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveClick}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;