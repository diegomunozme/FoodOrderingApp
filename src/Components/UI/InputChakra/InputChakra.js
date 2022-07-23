import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import React from "react";

const InputChakra = () => {
  <InputGroup>
    <InputLeftElement
      pointerEvents="none"
      children={<PhoneIcon color="gray.300" />}
    />
    <Input type="tel" placeholder="Phone number" />
  </InputGroup>;
};
export default InputChakra;
