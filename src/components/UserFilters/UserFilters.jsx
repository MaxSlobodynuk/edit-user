import React, { useState } from "react";
import css from "./UserFilters.module.css";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import AddUserForm from "../AddUserForm/AddUserForm";

const UserFilters = ({
  selectedDepartments,
  setSelectedDepartments,
  country,
  setCountry,
  status,
  setStatus,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectDepartment = (event) => {
    setSelectedDepartments(event.target.value);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Department</InputLabel>
        <Select
          multiple
          value={selectedDepartments}
          onChange={handleSelectDepartment}
        >
          <MenuItem value="Digital marketing">Digital marketing</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <MenuItem value="Ukraine">Ukraine</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleClickOpen}>
        Add User
      </Button>

      {isOpen && (
        <div className={css.modalOverlay} onClick={handleBackdropClick}>
          <AddUserForm />
        </div>
      )}
    </Box>
  );
};

export default UserFilters;
