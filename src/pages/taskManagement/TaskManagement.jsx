import { Text } from "@chakra-ui/react";
import React from "react";
import Skeleton from "../../components/ui/skeleton/Skeleton";
import TaskCard from "../../components/taskManagement/TaskCard";
import SubNavBar from "../../components/ui/subNavBar/SubNavBar";
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

// import { useParams, useSearchParams } from 'react-router-dom'

const linkItems = [
  { name: "All Docs", icon: FaFile, search: "?status=all" },
  { name: "Favourites", icon: FaStar, search: "?status=favorite" },
  { name: "Trash", icon: FaTrash, search: "?status=trash" },
];
const TaskManagement = () => {
  //     const params = useParams()
  //     const [searchParams] = useSearchParams()
  return (
    <>
      <Skeleton isBack={false} title="Task Management" isSearch={true} buttonText = "Add Task">
        <SubNavBar
          linkItems={linkItems}
          rightAction={true}
          target={"taskManager"}/>
        <TaskCard></TaskCard>
      </Skeleton>
    </>
  );
};

export default TaskManagement;
