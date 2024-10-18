import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UserTable = ({
  users,
  selectedDepartments,
  country,
  status,
  handleDeleteUser,
}) => {
  const filteredUsers = users.filter((user) => {
    const matchDepartment =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(user.department.value);
    const matchCountry = !country || user.country.value === country;
    const matchStatus = !status || user.status.value === status;

    return matchDepartment && matchCountry && matchStatus;
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.department.name}</TableCell>
              <TableCell>{user.country.name}</TableCell>
              <TableCell>{user.status.name}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDeleteUser(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
