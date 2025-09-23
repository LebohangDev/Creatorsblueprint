
import styles from "./Footer.module.css";


function Footer(){
    return(
        <>

        <div className={styles.footerContainer}>
            <div className={styles.footerHeader}>
                <div className={styles.logo}>
                    <img src="Images/CB_Logos/CB_logo2.png" alt="" />
                </div>
                <div className={styles.media}>
                    <h1>Media</h1>
                    <div className={styles.socialIcons}>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-whatsapp-line"></i>
                    </div>
                </div>
                <div className={styles.additonalLinks}>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>FAQ</p>

                </div>
            </div>

          
            <div className={styles.copyright}>
                <p><i class="ri-copyright-line"></i>2025 CreatorsBlueprint. All rights reserved. | www.creatorsblueprint.com</p>
            </div>
        </div>
        
        </>
    )
}

export default Footer