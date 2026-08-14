import Link from "next/link";
import Button from "../button";
import styles from "./footer.module.scss";
import SocialLinks from "../sociallinks";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <div className="row">
          <div className={`col-md-4`}>
            <p className={styles.footer_top_text_left}>
              We're here to shape thoughtful architecture -- one detail at a
              time.
            </p>
          </div>
          <div className={`col-md-8 ${styles.footer_top_col_right}`}>
            <p className={styles.footer_top_text}>
              Architecture with intention. Start here.
            </p>

            <Button>Start a Conversation</Button>
          </div>
        </div>
        <div className="row">
          <div className={`col-md-4 ${styles.footer_col}`}>
            <div>
            <strong>
              Thoughtful architecture, shaped by stillness.
              </strong>  
            
            <p>
              we design spaces with presence grounded, intentional, and
              timeless.
            </p>
            </div>
            
            <SocialLinks
              classes={{
                root: styles.footer_socialList,
                item: styles.footer_socialItem,
                link: styles.footer_socialLink,
              }}
            />
          </div>
          <div className="col-md-4">
            <ul className={styles.footer_toplinklist}>
              <li className={styles.footer_toplinkitem}>
                <Link href={"/"} className={styles.footer_toplink}>
                  Home
                </Link>
              </li>
              <li className={styles.footer_toplinkitem}>
                <Link href={"/"} className={styles.footer_toplink}>
                  Featured Projects <sup>30</sup>
                </Link>
              </li>
              <li className={styles.footer_toplinkitem}>
                <Link href={"/"} className={styles.footer_toplink}>
                  What We Do
                </Link>
              </li>
              <li className={styles.footer_toplinkitem}>
                <Link href={"/"} className={styles.footer_toplink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className={styles.footer_title}>Our Address</div>
            <div>
              <address className={styles.footer_address}>
                123 Main Street, Anytown, USA
              </address>
            </div>
          </div>
          <div className={`col-12 ${styles.footer_copyright} d-flex`}>
            <p className={` ${styles.footer_copyrightText} m-0`}>
              &copy; {new Date().getFullYear()} Daksh Architects. All rights
              reserved.
            </p>
            <div className={`d-flex gap-3 ${styles.footer_copyrightLinks}`}>
              <Link
                href={"/privacy-policy"}
                className={styles.footer_copyrightLink}
              >
                Terms & Conditions
              </Link>
              <Link
                href={"/terms-of-service"}
                className={styles.footer_copyrightLink}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image src="/footerbottom.png" alt="footer-bg" width={1920} height={1080} className={styles.footer_bg} />
    </footer>
  );
};

export default Footer;
