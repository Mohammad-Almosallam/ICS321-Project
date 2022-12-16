import React, { useState, useEffect } from "react";
import HelpBar from "../components/HelpBar";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import MainHeader from "../components/MainHeader";
import ReactPackages from "../components/ReactPackages";
import ReportUsers from "../components/ReportUsers";
import { getAllPackages } from "../auth/packageService";
import { getAllUsers } from "../auth/authService";

function Report() {
  useEffect(() => {
    renderAllPackages();
    renderAllUsers();
  }, []);
  const [userPackages, setUserPackages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [isOpenUsers, setOpenUser] = useState(false);

  async function renderAllPackages() {
    const packages = await getAllPackages();
    setUserPackages(packages.data);
  }
  async function renderAllUsers() {
    const users = await getAllUsers();
    setAllUsers(users.data);
  }

  console.log(allUsers);

  return (
    <Flex h={"100vh"} w={"100%"}>
      <HelpBar />
      <Flex flexDir={"column"} w={"100%"} m={"1.2rem 3rem 0rem 1.8rem "}>
        <MainHeader text={"Report 📝 "} />
        <Box>
          <Text fontSize={"2rem"} fontWeight={"700"}>
            All packages
          </Text>
          <Box>
            <ReactPackages isOpen={isOpen} allData={userPackages} />
            <Button
              mb={"2"}
              width={"100%"}
              onClick={() => {
                setOpen((isOpen) => !isOpen);
              }}
            >
              {isOpen ? "Hide report" : "Show report"}
            </Button>
          </Box>
        </Box>
        <Box>
          <Text fontSize={"2rem"} fontWeight={"700"}>
            All Users
          </Text>
          <Box>
            <ReportUsers isOpen={isOpenUsers} allData={allUsers} />
            <Button
              mb={"2"}
              width={"100%"}
              onClick={() => {
                setOpenUser((isOpenUsers) => !isOpenUsers);
              }}
            >
              {isOpenUsers ? "Hide report" : "Show report"}
            </Button>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Report;
