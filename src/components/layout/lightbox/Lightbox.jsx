import Container from "../index";
import styles from "./lightbox.module.css";

function Lightbox({ children, closeHandler }) {
  const closeLightbox = () => {
    closeHandler();
  };

  return (
    <div className={styles.lightBox} onClick={closeLightbox}>
      <Container sizeSmall customStyles={{ backgroundColor: "white" }}>
        <button onClick={closeLightbox}>Close</button>
        {children}
      </Container>
    </div>
  );
}

export default Lightbox;

<div className="lightbox">
  <div className="container"></div>
</div>;
