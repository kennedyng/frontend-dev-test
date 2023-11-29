import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FallbackProps } from "react-error-boundary";
const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <Box textAlign="center" p={10} bg="red.100">
    <Heading size="lg" mb={4}>
      Something went wrong!
    </Heading>
    <Text mb={2}>
      We apologize for the inconvenience. Please try refreshing the page.
    </Text>
    <Button onClick={() => resetErrorBoundary()}>Try again</Button>
  </Box>
);

export default ErrorFallback;
