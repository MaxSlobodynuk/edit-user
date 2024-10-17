import css from "./EditUserForm.module.css";
import data from "../../data/users";
import { useState } from "react";

const EditUserForm = () => {
  const [users, setUsers] = useState(data);
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleUserChange = (event) => {
    const userId = Number(event.target.value);
    const user = users.find((item) => item.id === userId);
    setSelectedUser(user);
  };

  return (
    <section className={css.formContainer}>
      <h2 className={css.formTitle}>EDIT USER</h2>
      <form className={css.form}>
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
              defaultValue={selectedUser.name} // Відображаємо ім'я вибраного користувача
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="department" className={css.label}>
              Department
            </label>
            <select
              id="department"
              className={css.select}
              defaultValue={selectedUser.department.value}
            >
              <option value={selectedUser.department.value}>
                {selectedUser.department.name}
              </option>
            </select>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="country" className={css.label}>
              Country
            </label>
            <select
              id="country"
              className={css.select}
              defaultValue={selectedUser.country.value}
            >
              <option value={selectedUser.country.value}>
                {selectedUser.country.name}
              </option>
            </select>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="status" className={css.label}>
              Status
            </label>
            <select
              id="status"
              className={css.select}
              defaultValue={selectedUser.status.value}
            >
              <option value={selectedUser.status.value}>
                {selectedUser.status.name}
              </option>
            </select>
          </div>
        </div>
        <div className={css.buttonGroup}>
          <button
            type="button"
            className={`${css.button} ${css.secondaryButton}`}
          >
            Undo
          </button>
          <button type="submit" className={css.button}>
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditUserForm;
