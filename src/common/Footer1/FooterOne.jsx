import React from "react";
import styles from "./FooterOne.module.css"

function FooterOne() {
    return (
        <footer className={styles.footerOne}>
            <div className={styles.container}>
                <div className={styles.row}>

                    {/* coompany section */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.title}>COMPANY</h4>
                        <ul className={styles.labels}>
                            <li className={styles.list}>About Us</li>
                            <li className={styles.list}>Careers</li>
                            <li className={styles.list}>Partners</li>
                        </ul>
                    </div>

                    {/* courses section */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.title}>COURSES</h4>
                        <ul className={styles.labels}>
                            <li className={styles.list}>Register</li>
                            <li className={styles.list}>Login</li>
                            <li className={styles.list}>Projects</li>
                            <li className={styles.list}>Teachers</li>
                            <li className={styles.list}>Parents</li>
                            <li className={styles.list}>Resources</li>
                        </ul>
                    </div>

                    {/* support section */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.title}>SUPPORT</h4>
                        <ul className={styles.labels}>
                            <li className={styles.list}>FAQs</li>
                            <li className={styles.list}>Helpdesk</li>
                            <li className={styles.list}>Contact Us</li>
                        </ul>
                    </div>

                    {/* legal section */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.title}>LEGAL</h4>
                        <ul className={styles.labels}>
                            <li className={styles.list}>Terms & Conditions</li>
                            <li className={styles.list}>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* paragraph section */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.title}>LevelUp Works</h4>
                        <ul className={styles.labels}>
                            <li>LevelUp Works is an Auckland-based enterprise
                                dedicated to developing game-based learning
                                software to help teachers in response to the
                                New Zealand Digital Technologies & Hangarau
                                Matihiko.
                            </li>
                            <br />
                            <li>alan@levelupworks.com</li>
                            <br />
                            <li>021 668 185</li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default FooterOne