import css from "./EditUserForm.module.css";

const EditUserForm = () => {
  return (
    <section className={css.formContainer}>
      <h2 className={css.formTitle}>EDIT USER</h2>
      <form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="user" className={css.label}>
            User
          </label>
          <select id="user" className={css.select}>
            <option>Oleg Schevchenko</option>
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
              defaultValue="Oleg Schevchenko"
            />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="department" className={css.label}>
              Department
            </label>
            <select id="department" className={css.select}>
              <option>Digital Marketing</option>
            </select>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="country" className={css.label}>
              Country
            </label>
            <select id="country" className={css.select}>
              <option>United States</option>
            </select>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="status" className={css.label}>
              Status
            </label>
            <select id="status" className={css.select}>
              <option>Active</option>
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
