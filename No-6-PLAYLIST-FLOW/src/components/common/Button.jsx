import styles from "./Button.module.scss";

function Button({
  children,
  variant = "danger",
  size = "large",
  onClick,
  disabled = false,
  type = "button",
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
