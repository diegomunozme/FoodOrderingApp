import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import classes from "./InputChakra.module.css"
const InputChakra = () => {
  return (
    <InputGroup className={classes.searchBar} size="lg">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        htmlSize={3}
        type="search"
        placeholder="Search"
        borderRadius="46px"
      />
    </InputGroup>
  );
};
export default InputChakra;
