import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const UserFilters = ({
  selectedDepartments,
  setSelectedDepartments,
  country,
  setCountry,
  status,
  setStatus,
}) => {
  const handleSelectDepartment = (event) => {
    setSelectedDepartments(event.target.value);
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

      <Button variant="contained">Add User</Button>
    </Box>
  );
};

export default UserFilters;
