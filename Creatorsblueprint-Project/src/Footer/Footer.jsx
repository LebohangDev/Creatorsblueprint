import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";


function Footer({ theme }) {
    const navigate = useNavigate();

    return (
        <>

            <div className={styles.footerContainer}>
                <div className={styles.footerHeader}>
                    <div className={styles.logo}>
                        <img src={theme === 'dark' ? "Images/CB_Logos/CB_logo2.png" : "Images/CB_Logos/CB_logo.png"} alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className={styles.media}>
                        <h1>Media</h1>
                        <div className={styles.socialIcons}>
                            <i onClick={() => window.open("https://www.instagram.com/creatorsblueprint.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} className="ri-instagram-line"></i>
                            <i onClick={() => window.open("https://www.facebook.com/profile.php?id=61580392831846", "_blank")} className="ri-facebook-fill"></i>
                            <i onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")} className="ri-whatsapp-line"></i>
                        </div>
                    </div>
                    <div className={styles.additonalLinks}>
                        <p onClick={() => navigate('/privacy')}>Privacy</p>
                        <p onClick={() => navigate('/terms')}>Terms</p>
                        <p onClick={() => navigate('/faq')}>FAQ</p>

                    </div>
                </div>


                <div className={styles.copyright}>
                    <p><i className="ri-copyright-line"></i>2025 CreatorsBlueprint. All rights reserved. | www.creatorsblueprint.com</p>
                </div>
            </div>

        </>
    )
}

export default Footer