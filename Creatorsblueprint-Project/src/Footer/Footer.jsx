
import styles from "./Footer.module.css";


function Footer({setActive}){
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
                        <i onClick={() => window.open("https://www.instagram.com/creatorsblueprint.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} class="ri-instagram-line"></i>
                        <i onClick={() => window.open("https://www.facebook.com/profile.php?id=61580392831846", "_blank")} class="ri-facebook-fill"></i>
                        <i onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")} class="ri-whatsapp-line"></i>
                    </div>
                </div>
                <div className={styles.additonalLinks}>
                    <p onClick={(e) =>{ e.preventDefault(); setActive('Privacy')}}>Privacy</p>
                    <p onClick={(e) =>{ e.preventDefault(); setActive('Terms')}}>Terms</p>
                    <p onClick={(e) =>{ e.preventDefault(); setActive('FAQ')}}>FAQ</p>

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