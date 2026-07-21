import { useEffect } from 'react';

export default function InstagramEmbed({ url, className }) {
    useEffect(() => {
        // Load the Instagram embed script if not already loaded
        if (window.instgrm) {
            window.instgrm.Embeds.process();
            return;
        }
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
            if (window.instgrm) window.instgrm.Embeds.process();
        };
        document.body.appendChild(script);
    }, [url]);

    return (
        <div className={className} style={{ width: '100%', overflow: 'hidden', borderRadius: '18px' }}>
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#fff',
                    border: 0,
                    borderRadius: '3px',
                    margin: '0',
                    maxWidth: '100%',
                    minWidth: '0',
                    padding: 0,
                    width: '100%',
                }}
            />
        </div>
    );
}
