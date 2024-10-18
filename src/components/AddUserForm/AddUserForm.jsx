import { nanoid } from 'nanoid'
import css from "./AddUserForm.module.css";

const AddUserForm = ({ departments, statuses, countries }) => {
  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>ADD USER</h2>
      <form>
        <div className={css.formGrid}>
          <div className={css.formGroup}>
            <label htmlFor="fullName" className={css.label}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              className={css.input}
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="department" className={css.label}>
              Department
            </label>
            <select id="department" className={css.select}>
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
            <select id="country" className={css.select}>
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
            <select id="status" className={css.select}>
              {statuses.map((status) => (
                <option key={nanoid()} value={status.value}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={css.buttonGroup}>
          <button
            type="button"
            className={`${css.button} ${css.secondaryButton}`}
          >
            Cancel
          </button>
          <button type="submit" className={css.button}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
