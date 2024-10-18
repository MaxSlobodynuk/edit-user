import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
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
import departments from "../../data/departments";
import statuses from "../../data/statuses";
import countries from "../../data/countries";

const UserFilters = ({
  selectedDepartments,
  setSelectedDepartments,
  country,
  setCountry,
  status,
  setStatus,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filtersDisabled, setFiltersDisabled] = useState(true); 

  useEffect(() => {
    if (selectedDepartments.length >= 3) {
      setFiltersDisabled(false); 
    } else {
      setFiltersDisabled(true); 
      setCountry("");
      setStatus("");
    }
  }, [selectedDepartments]);

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
          {departments.map((department) => (
            <MenuItem key={nanoid()} value={department.value}>
              {department.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={filtersDisabled}>
        <InputLabel>Country</InputLabel>
        <Select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map((country) => (
            <MenuItem key={nanoid()} value={country.value}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth disabled={filtersDisabled}>
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          {statuses.map((status) => (
            <MenuItem key={nanoid()} value={status.value}>
              {status.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleClickOpen}>
        Add User
      </Button>

      {isOpen && (
        <div className={css.modalOverlay} onClick={handleBackdropClick}>
          <AddUserForm
            departments={departments}
            statuses={statuses}
            countries={countries}
          />
        </div>
      )}
    </Box>
  );
};

export default UserFilters;
