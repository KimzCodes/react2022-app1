import styles from "./container.module.css";

const Container = ({ children, sizeSmall, customStyles }) => {
  const { fixed, large, small } = styles;

  return (
    <div
      className={`${fixed} ${!sizeSmall ? large : small}`}
      style={{ ...customStyles }}
    >
      {children}
    </div>
  );
};

export default Container;
