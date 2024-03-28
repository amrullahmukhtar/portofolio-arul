import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";


function PageAbout() {
  return (
    <>
      <Box bg={"green"} w={"200px"} className="text- red-500">
        Hello
      </Box>
      <Box 
      display={"flex"} 
      justifyContent={"space-between"}>
  <Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
      </Box>
    </>
  );
}
export default PageAbout;
