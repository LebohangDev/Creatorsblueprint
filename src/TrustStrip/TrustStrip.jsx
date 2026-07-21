import styles from './TrustStrip.module.css';

const trustPoints = [
    { icon: 'ri-map-pin-2-fill', text: 'Built for GCC creators' },
    { icon: 'ri-shield-check-fill', text: 'Secure payments through Stripe' },
    { icon: 'ri-flashlight-fill', text: 'Launch in minutes' },
    { icon: 'ri-close-circle-fill', text: 'Cancel anytime' },
    { icon: 'ri-code-s-slash-line', text: 'No coding required' }
];

export default function TrustStrip() {
    return (
        <section className={styles.trustStripSection}>
            <div className={styles.trustStripContainer}>
                {trustPoints.map((point, idx) => (
                    <div key={idx} className={styles.trustItem}>
                        <i className={point.icon}></i>
                        <span>{point.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
