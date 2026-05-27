import styles from './Testimonials.module.css';
import {AnimatePresence, motion} from 'framer-motion';


function Testimonials(){

    const reviews = [

        {
            img: "Images/Reviews_IMG/img1.jpg",
            name: "Hajira Khan",
            social: "@hajirakhaaan",
            description:

            "Working with CreatorsBlueprint was a game-changer. They built a system that turned my casual followers into a real, predictable income stream. My first digital product sold out faster than I ever imagined!",
            rating: 5
        },
        {
            img: "Images/Reviews_IMG/img2.jpg",
            name: "Abu Baker",
            social: "@imnotabu",
            description:

            "I always knew my content had value, but I had no idea how to monetize it effectively. The team didn't just build me a website; they gave me a full-fledged business. The strategy calls are invaluable.",
            rating: 5
        },
        {
            img: "Images/Reviews_IMG/img3.jpg",
            name: "Lizo Kryptonian",
            social: "@lizokryptonian",
            description:

            "The professionalism is next level. From the website design to the payment setup, everything was seamless. I'm finally free from relying on brand deals and have a scalable income source I actually own.",
            rating: 5
        }
    ];

    return(
        <>
        <div className={styles.testiContainer}>
            <div className={styles.title}>
                <h1>What Our <span>Creators</span> Say</h1>
                <p>Real stories from creators who transformed their income</p>
            </div>

            <div className={styles.reviewsContainer}>
                
                {reviews.map((r, index) =>(

                    <motion.div
                    key={index}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    viewport={{ amount: 0.1, once: false }}
                    transition={{ delay: index * 0.1,}}
                    className={styles.review}
                    >
                        <div className={styles.content}>
                            <div className={styles.reviewHeader}>
                                <div className={styles.reviewIMG}>
                                    <div className={styles.imgContent}>
                                        <img src={r.img} alt="" />

                                    </div>
                                    
                                </div>
                                <div className={styles.userName}>
                                    <h1>{r.name}</h1>
                                </div>
                                <div className={styles.socialHandle}>
                                    <p>{r.social}</p>
                                </div>


                            </div>
                            <div className={styles.reviewContent}>
                                <p>"{r.description}"</p>
                                <div className={styles.ratingContainer}>
                                    {Array.from({length: r.rating}).map((_, i)=>(
                                       
                                        
                                        
                                        <i className="ri-star-fill" key={i}></i>
                                    ))}
                                </div>
                            </div>

                        </div>






                    </motion.div>
                    
                        
                        
                        

                    
                ))}
            </div>
        </div>

        </>
    )

}

export default Testimonials