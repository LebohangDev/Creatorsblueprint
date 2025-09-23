import styles from "./Nav.module.css";


function Nav({active, setActive}){

    return(

        <>

        <div className={styles.NavContainer}>
            <div className={styles.navLogo}>
                <img src="Images/CB_Logos/CB_logo2.png" alt="" />
            </div>

            <div className={styles.navLinks}>
                <div className={styles.link1}>
                    <p onClick={ (e) => {e.preventDefault(); setActive('Home')}}>WHY US?</p>
                        
                </div>
                <div className={styles.link2}>
                    <p onClick={ (e) => {e.preventDefault(); setActive('Home')}}>WHAT WE DO</p>
                        
                </div>

                <div className={styles.FAQ}>
                    <p onClick={ (e) => {e.preventDefault(); setActive('FAQ')}}>FAQ</p>

                </div>

                 <div className={styles.FAQ}>
                    <button onClick={ (e) => {e.preventDefault(); setActive('Testimonial')}}>TESTIMONIALS</button>

                </div>            

            </div>

        </div>



        </>
    )

}

export default Nav