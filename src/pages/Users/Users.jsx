import { Box } from "@mui/material";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import UserFilters from "../../components/UserFilters/UserFilters";
import UserTable from "../../components/UserTable/UserTable";
import UsersForm from "../../components/UsersForm/UsersForm";
import css from "./Users.module.css";
import { useState } from "react";

import data from "../../data/users";

const Users = () => {
  const [users, setUsers] = useState(data);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


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
        <UserTable users={users} handleDeleteUser={handleDeleteUser} />
      </Box>
    </div>
  );
};

export default Users;
