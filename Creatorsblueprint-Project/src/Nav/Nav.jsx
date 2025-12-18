import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";


function Nav({ menuActive, setMenuActive, theme }) {

    const [lang, setLang] = useState('Hello');
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();


    const Languages = [
        "Welcome",        // English
        "أهلا وسهلا",     // Arabic (Ahlan wa sahlan)
        "Bienvenido",     // Spanish
        "Bienvenue",      // French
        "환영합니다",       // Korean (Hwanyeonghamnida)
        "Welkom"          // Afrikaans
    ];


    const changeLanguage = (() => {

        Languages.forEach((lang, index) => {

            if (currentIndex === index) {
                setCurrentIndex(c => (c + 1) % Languages.length)


                setLang(lang)


            }

        })



    })


    useEffect(() => {

        const interval = setInterval(() => {
            changeLanguage()



        }, 4000)
        // to prevent memory leaks
        return () => clearInterval(interval);

    }, [currentIndex])


    // Variants for open and closed states
    const menuVariants = {
        closed: { opacity: 0, x: 60, transition: { duration: 0.2 } },
        open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    };
    // logic to scroll to speciic section on home section 
    const handleScrollTo = (id) => {
        if (location.pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 500);
        }
    };





    return (

        <>

            <div className={styles.NavContainer}>
                <div className={styles.navLogo}>
                    <img src={theme === 'dark' ? "Images/CB_Logos/CB_logo2.png" : "Images/CB_Logos/CB_logo.png"} onClick={(e) => { e.preventDefault(); navigate('/'); }} alt="" />
                </div>

                <div className={styles.navLinks}>
                    <div className={styles.link1}>
                        <p onClick={(e) => { e.preventDefault(); handleScrollTo('Why_us'); }}>WHY US?</p>

                    </div>
                    <div className={styles.link2}>
                        <p onClick={(e) => { e.preventDefault(); handleScrollTo('what'); }}>WHAT WE DO</p>

                    </div>
                    <div className={styles.product}>
                        <p onClick={(e) => { e.preventDefault(); navigate('/product'); }}>Product</p>

                    </div>

                    <div className={styles.FAQ}>
                        <p onClick={(e) => { e.preventDefault(); navigate('/faq'); }}>FAQ</p>

                    </div>

                    <div className={styles.button}>
                        <button onClick={(e) => { e.preventDefault(); navigate('/testimonials'); }}>TESTIMONIALS</button>

                    </div>

                </div>

            </div>
            <div className={styles.hamburgerContainer}>
                <div className={styles.navLogo}>
                    <img src={theme === 'dark' ? "Images/CB_Logos/CB_logo2.png" : "Images/CB_Logos/CB_logo.png"} onClick={(e) => { e.preventDefault(); navigate('/'); }} alt="" />
                </div>
                <i className="ri-menu-line" onClick={(e) => { e.preventDefault(); setMenuActive(true) }}></i>


                <AnimatePresence mode="wait">
                    <motion.div
                        key={menuActive}
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={menuActive === true ? styles.hamburgerMenuActive : styles.hamburgerMenuClosed}
                    >
                        <div className={styles.menuHeader}>
                            <div className={styles.title}>
                                {/*handles the mounting and unmounting of the animation */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        //it ensures that every new 'langauge' is treated as a seperate component allowing ti to trigger the exit/enter animation
                                        key={lang}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}>
                                        <p>{lang}</p>



                                    </motion.div>


                                </AnimatePresence>
                                <div className={styles.logo}>
                                    <img src={theme === 'dark' ? "Images/CB_Logos/CB_logo2.png" : "Images/CB_Logos/CB_logo.png"} alt="" />
                                </div>

                            </div>




                            <div className={styles.close}>

                                <i className="ri-close-line" onClick={(e) => { e.preventDefault(); setMenuActive(false) }}></i>


                            </div>
                        </div>

                        <div className={styles.navLinks}>
                            <div className={styles.link1}>
                                <p onClick={(e) => { e.preventDefault(); setMenuActive(false); handleScrollTo('Why_us'); }}>WHY US?</p>

                            </div>
                            <div className={styles.link2}>
                                <p onClick={(e) => { e.preventDefault(); setMenuActive(false); handleScrollTo('what'); }}>WHAT WE DO</p>

                            </div>
                            <div className={styles.product}>
                                <p onClick={(e) => { e.preventDefault(); setMenuActive(false); navigate('/product'); }}>Product</p>

                            </div>

                            <div className={styles.FAQ}>
                                <p onClick={(e) => { e.preventDefault(); setMenuActive(false); navigate('/faq'); }}>FAQ</p>

                            </div>

                            <div className={styles.button}>
                                <button onClick={(e) => { e.preventDefault(); navigate('/testimonials'); }}>TESTIMONIALS</button>

                            </div>

                        </div>


                        <div className={styles.menuFooter}>
                            <div className={styles.footerHeader}>

                                <div className={styles.media}>
                                    <h1>Media</h1>
                                    <div className={styles.socialIcons}>
                                        <i onClick={() => window.open("https://www.instagram.com/creatorsblueprint.io?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} className="ri-instagram-line"></i>
                                        <i onClick={() => window.open("https://www.facebook.com/profile.php?id=61580392831846", "_blank")} className="ri-facebook-fill"></i>
                                        <i onClick={() => window.open("https://wa.link/creatorsblueprint", "_blank")} className="ri-whatsapp-line"></i>
                                    </div>
                                </div>
                                <div className={styles.additonalLinks}>
                                    <p onClick={(e) => { e.preventDefault(); handleNavigation('/privacy'); }}>Privacy</p>
                                    <p onClick={(e) => { e.preventDefault(); handleNavigation('/terms'); }}>Terms</p>
                                    <p onClick={(e) => { e.preventDefault(); handleNavigation('/faq'); }}>FAQ</p>

                                </div>
                            </div>

                        </div>




                    </motion.div>


                </AnimatePresence>



            </div>





        </>
    )

}

export default Nav