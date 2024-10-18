import { nanoid } from "nanoid";
import { useFormik } from "formik";
import css from "./AddUserForm.module.css";

const AddUserForm = ({ departments, statuses, countries }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      department: "",
      country: "",
      status: "",
    },
    
    onSubmit: (values) => {
      const newUser = {
        id: nanoid(),
        name: values.fullName,
        department: departments.find((dep) => dep.value === values.department),
        country: countries.find((country) => country.value === values.country),
        status: statuses.find((status) => status.value === values.status),
      };

      const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...savedUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      formik.resetForm();
    },
  });

  return (
    <div className={css.formContainer}>
      <h2 className={css.formTitle}>ADD USER</h2>
      <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              value={formik.values.department}
            >
              <option value="">Select department</option>
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
              onChange={formik.handleChange}
              value={formik.values.country}
            >
              <option value="">Select country</option>
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
              onChange={formik.handleChange}
              value={formik.values.status}
            >
              <option value="">Select status</option>
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
            onClick={formik.resetForm}
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
