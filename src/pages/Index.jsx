import React, { useState } from "react";
import { Box, Heading, Container, Stack, Image, Text, Button, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";

// Mock Data for Participants
const participants = [
  { id: 1, name: "Alice", votes: 0, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmd8ZW58MHx8fHwxNzA5MTI4MTAyfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Bob", votes: 0, img: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nfGVufDB8fHx8MTcwOTEyODEwMnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Charlie", votes: 0, img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbWlsaW5nfGVufDB8fHx8MTcwOTEyODEwM3ww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [contestants, setContestants] = useState(participants);
  const toast = useToast();

  const handleVote = (id) => {
    setContestants(contestants.map((contestant) => (contestant.id === id ? { ...contestant, votes: contestant.votes + 1 } : contestant)));
    toast({
      title: "Vote recorded!",
      description: "Thank you for your vote.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6} textAlign="center">
        Voting Contest
      </Heading>

      <VStack spacing={8}>
        {contestants.map((contestant) => (
          <Box key={contestant.id} p={5} shadow="md" borderWidth="1px">
            <HStack align="center">
              <Image borderRadius="full" boxSize="100px" src={contestant.img} alt={`Portrait of ${contestant.name}`} />
              <Stack direction="column" spacing={2} flex={1}>
                <Text fontWeight="bold">{contestant.name}</Text>
                <Text>Votes: {contestant.votes}</Text>
                <Button leftIcon={<FaThumbsUp />} colorScheme="blue" onClick={() => handleVote(contestant.id)}>
                  Vote
                </Button>
              </Stack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
