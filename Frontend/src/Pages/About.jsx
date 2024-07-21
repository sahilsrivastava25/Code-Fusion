import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={"2rem 4rem"}>
      <Heading as="h3" size="lg" mb={4}>
        About CodeFusion
      </Heading>

      <Box bg="gray.100" p={6} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Our Story:
        </Heading>
        <Text>
        CodeFusion is an innovative platform inspired by CodePen, designed for seamless code editing and sharing. It supports HTML, CSS, and JavaScript, providing a collaborative environment for web development. Additionally, CodeFusion offers robust features for practicing and solving Data Structures and Algorithms (DSA) questions, making it an essential tool for both developers and learners.
        </Text>
      </Box>

      
      <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Our Mission:
        </Heading>
        <Text>
          At CodeFusion, we're on a mission to democratize coding by providing a
          platform where collaboration, learning, and creativity thrive. We
          believe that coding is not just about writing lines of code but about
          building connections, sharing knowledge, and fostering innovation.
        </Text>
      </Box>

      <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Why CodeFusion?
        </Heading>
        <Text>
          CodeFusion isn't just another coding platform; it's a community-driven
          ecosystem designed to empower coders of all levels. Whether you're a
          seasoned developer looking for new challenges or a beginner eager to
          learn, CodeFusion offers the tools and resources you need to succeed.
        </Text>
        <Text>
          Join us as we revolutionize the way coders work, learn, and
          collaborate. Welcome to the future of coding—welcome to CodeFusion.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
