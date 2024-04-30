import { useState } from 'react';
import { Box, Button, Flex, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addNote = () => {
    if (input.trim() === '') {
      toast({
        title: 'Cannot add empty note.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput('');
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <Flex direction="column" align="center" p={5}>
      <Box w="full" maxW="500px">
        <Input
          placeholder="Type your note here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          mb={2}
        />
        <Button onClick={addNote} colorScheme="blue" w="full">Add Note</Button>
      </Box>
      <VStack spacing={4} align="stretch" mt={5}>
        {notes.map((note, index) => (
          <Flex key={index} justify="space-between" align="center" p={3} boxShadow="md">
            <Text>{note}</Text>
            <Button onClick={() => deleteNote(index)} colorScheme="red">
              <FaTrash />
            </Button>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

export default Index;