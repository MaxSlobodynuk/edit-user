import { Box } from "@mui/material";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import UserFilters from "../../components/UserFilters/UserFilters";
import UserTable from "../../components/UserTable/UserTable";
import UsersForm from "../../components/UsersForm/UsersForm";
import css from "./Users.module.css";
import { useEffect, useState } from "react";

import data from "../../data/users";

const Users = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    return savedUsers && savedUsers.length > 0 ? savedUsers : data;
  });

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className={css.page}>
      <h1></h1>
      <Box sx={{ padding: "20px" }}>
        <UserFilters
          selectedDepartments={selectedDepartments}
          setSelectedDepartments={setSelectedDepartments}
          country={country}
          setCountry={setCountry}
          status={status}
          setStatus={setStatus}
        />
        <UserTable
          users={users}
          selectedDepartments={selectedDepartments}
          country={country}
          status={status}
          handleDeleteUser={handleDeleteUser}
        />
      </Box>
    </div>
  );
};

export default Users;
