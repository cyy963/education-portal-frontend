import styles from "./Form.module.css";

export default function LoginForm(props) {
  return (
    <form className={styles.form} onSubmit={props.onSubmit} id={props.id}>
      <input
        type="email"
        className={styles.textbox}
        name="email"
        onChange={props.onChange}
        placeholder="Email Address"
      />

      {/* Password section */}
      <input
        type="password"
        className={styles.textbox}
        name="password"
        onChange={props.onChange}
        placeholder="Password"
      />
      <p className={styles.message}>{props.messageToRender}</p>

      {/* Submit button section */}
      <button className={styles.logInBtn} name="login" type="submit">
        LOG IN
      </button>
    </form>
  );
}
