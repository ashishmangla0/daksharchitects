import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container"}>
        <div className="row">
          <div className="col-md-4">
            <p className={styles.footer_top_text_left}>
              We're here to shape thoughtful architecture -- one detail at a
              time.
            </p>
          </div>
          <div className="col-md-8">
            <p className={styles.footer_top_text}>
              Architecture with intention. Start here.
            </p>
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>1</p>
          </div>
          <div className="col-md-4">
            <p>2</p>
          </div>
          <div className="col-md-4">
            <p>3</p>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
