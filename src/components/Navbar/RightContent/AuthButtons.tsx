import React from "react";
import { Button } from "@chakra-ui/react";

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        width={{ base: "70px", md: "110px" }}
        display={{ base: "none", sm: "flex" }}
        mr={2}
        // onClick={() => {}}
      >
        Login
      </Button>
      <Button
        height="28px"
        width={{ base: "70px", md: "110px" }}
        display={{ base: "none", sm: "flex" }}
        mr={2}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
