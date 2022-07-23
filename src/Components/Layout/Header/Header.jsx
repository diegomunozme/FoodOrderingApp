import React from "react";
import classes from "./Header.module.css";
import ConnectToBChain from "./ConnectToBChain";
import RewardsButton from "./Categories/CategoriesButton";
import InputChakra from "../../UI/InputChakra/InputChakra";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const Header = () => {
  return (
    <div>
      <container className={classes.container}>
        <navbar className={classes.header}>
          <left className={classes.left}>
            <h3 className={classes.title}>Hashback LLC</h3>
            <InputGroup className={classes.searchBar} size="lg" >
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
                />
              <Input htmlSize={3} type="search" placeholder="Search" borderRadius="16px" />
            </InputGroup>
          </left>
          <right className={classes.right}>
            <RewardsButton />
            <RewardsButton />
            <RewardsButton />
            <ConnectToBChain />
          </right>
        </navbar>
      </container>
    </div>
  );
};

export default Header;
