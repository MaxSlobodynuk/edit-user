import EditUserForm from "../../components/EditUserForm/EditUserForm";
import css from "./EditUser.module.css";

const EditUser = () => {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <EditUserForm />
      </main>
    </div>
  );
};

export default EditUser;
