import Image from "next/image";
import styles from "./navbar.module.css";
import productLogo from "@/../public/images/productLogo.svg";
import menuCloseIcon from "@/../public/images/navbar/menuCloseIcon.svg";
import menuOpenIcon from "@/../public/images/navbar/menuOpenIcon.svg";

export default function Navbar() {
  return(
    <>
      <nav className={`${styles.navWrap} d-flex justify-content-center`}>
        <div className={`${styles.nav} d-flex align-items-center justify-content-between`}>
          <Image className={styles.navProductLogo} src={productLogo} alt="shai health logo"  />
          <div className={`${styles.navTabList} d-flex align-items-center`}>
            <a href="/" className={styles.navTab}>Home</a>
            <a href="/" className={styles.navTab}>Our Services</a>
            <a href="/" className={styles.navTab}>Blogs & More</a>
            <a href="/about-us" className={styles.navTab}>About Us</a>
            <a href="/contact-us" className={styles.navTab}>Contact Us</a>
          </div>
          <a className={styles.navBtnLink} href="/contact-us">
            <button className={`${styles.navBtn} d-flex align-items-center`}>
              Book a Call
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white"  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </a>
          <Image className={styles.menuOpenIcon} src={menuOpenIcon} alt="menuOpenIcon"  />
        </div>
      </nav>
    </>
  )
}