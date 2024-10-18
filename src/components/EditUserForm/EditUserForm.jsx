import { nanoid } from "nanoid";
import { useFormik } from "formik";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import css from "./EditUserForm.module.css";
import data from "../../data/users";
import departments from "../../data/departments";
import statuses from "../../data/statuses";
import countries from "../../data/countries";
import { useState } from "react";

const EditUserForm = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    return savedUsers && savedUsers.length > 0 ? savedUsers : data;
  });

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [isModified, setIsModified] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: selectedUser.id,
      fullName: selectedUser.name,
      department: selectedUser.department.value,
      country: selectedUser.country.value,
      status: selectedUser.status.value,
    },
    onSubmit: (values) => {
      const updatedUser = {
        id: values.userId,
        name: values.fullName,
        department: departments.find((dep) => dep.value === values.department),
        country: countries.find((country) => country.value === values.country),
        status: statuses.find((status) => status.value === values.status),
      };

      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );

      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast("Ти змінив користувача!!!");
      setIsModified(false);
    },
  });

  const handleUserChange = (event) => {
    const userId = Number(event.target.value);
    const user = users.find((item) => item.id === userId);
    setSelectedUser(user);
    formik.setValues({
      userId: user.id,
      fullName: user.name,
      department: user.department.value,
      country: user.country.value,
      status: user.status.value,
    });
    setIsModified(false);
  };

  const handleInputChange = (event) => {
    formik.handleChange(event);
    setIsModified(true);
  };

  return (
    <section className={css.formContainer}>
      <h2 className={css.formTitle}>EDIT USER</h2>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor="user" className={css.label}>
            User
          </label>
          <select id="user" className={css.select} onChange={handleUserChange}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <h3 className={css.sectionTitle}>User Information</h3>
        <div className={css.formGrid}>
          <div className={css.formGroup}>
            <label htmlFor="fullName" className={css.label}>
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className={css.input}
              onChange={handleInputChange}
              value={formik.values.fullName}
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="department" className={css.label}>
              Department
            </label>
            <select
              id="department"
              className={css.select}
              onChange={handleInputChange}
              value={formik.values.department}
            >
              {departments.map((department) => (
                <option key={nanoid()} value={department.value}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="country" className={css.label}>
              Country
            </label>
            <select
              id="country"
              className={css.select}
              onChange={handleInputChange}
              value={formik.values.country}
            >
              {countries.map((country) => (
                <option key={nanoid()} value={country.value}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="status" className={css.label}>
              Status
            </label>
            <select
              id="status"
              className={css.select}
              onChange={handleInputChange}
              value={formik.values.status}
            >
              {statuses.map((status) => (
                <option key={nanoid()} value={status.value}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={css.buttonGroup}>
          {isModified && (
            <button
              type="button"
              className={`${css.button} ${css.secondaryButton}`}
              onClick={() => {
                formik.resetForm();
                setIsModified(false);
              }}
            >
              Undo
            </button>
          )}
          <button type="submit" className={css.button} disabled={!isModified}>
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default EditUserForm;
