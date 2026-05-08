import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ResponsiveGrid.module.css';

function ResponsiveGrid({ items, renderItem, gridClassName, staggerContainer, fadeInUp }) {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const scrollLeft = containerRef.current.scrollLeft;
        const itemWidth = containerRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(newIndex);
    };

    if (isMobile) {
        return (
            <div className={styles.sliderWrapper}>
                <div 
                    className={styles.sliderContainer} 
                    ref={containerRef} 
                    onScroll={handleScroll}
                >
                    {items.map((item, i) => (
                        <div key={i} className={styles.sliderItem}>
                            {renderItem(item, i)}
                        </div>
                    ))}
                </div>
                <div className={styles.sliderDots}>
                    {items.map((_, i) => (
                        <div 
                            key={i} 
                            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => {
                                if(containerRef.current) {
                                    containerRef.current.scrollTo({ 
                                        left: i * containerRef.current.clientWidth, 
                                        behavior: 'smooth' 
                                    });
                                }
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // Desktop: render framer-motion grid
    return (
        <motion.div 
            className={gridClassName}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {items.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                    {renderItem(item, i)}
                </motion.div>
            ))}
        </motion.div>
    );
}

export default ResponsiveGrid;
