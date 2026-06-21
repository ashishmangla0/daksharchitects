import Link from "next/link";
import Button from "../button";
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

            <Button>Start a Conversation</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            Thoughtful architecture, shaped by stillness.
            <p>
              we design spaces with presence grounded, intentional, and timeless.
            </p>
            <ul>
              <li>
                <a>

                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <li>
                <Link href={"/"}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className={styles.footer_title}>
              Our Address
            </div>
            <div>
              <address className={styles.footer_address}>
              123 Main Street, Anytown, USA  
            </address>
            
            </div>
            
          </div>
          <div className={`col-12 ${styles.footer_copyright} d-flex`}>
            <p>&copy; {new Date().getFullYear()} Daksh Architects. All rights reserved.</p>
            <div>
              <Link href={"/privacy-policy"}>Terms & Conditions</Link>
              <Link href={"/terms-of-service"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
