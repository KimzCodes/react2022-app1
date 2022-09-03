import Container from "../index";
import styles from "./lightbox.module.css";

function Lightbox({ children, closeHandler }) {
  const closeLightbox = () => {
    closeHandler();
  };

  return (
    <>
      <div className={styles.lightBox} onClick={closeLightbox}></div>
      <Container
        sizeSmall
        customStyles={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: 5,
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button onClick={closeLightbox}>Close</button>
        {children}
      </Container>
    </>
  );
}

export default Lightbox;

<div className="lightbox">
  <div className="container"></div>
</div>;
