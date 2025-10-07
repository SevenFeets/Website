import { useEffect } from 'react';

function ParticlesBackground() {
    useEffect(() => {
        console.log('Particles.js available:', !!window.particlesJS);

        if (window.particlesJS) {
            try {
                window.particlesJS.load('particles-js', '/particles.json', function () {
                    console.log('particles.js config loaded');
                });
            } catch (error) {
                console.error('Error loading particles:', error);
            }
        } else {
            console.error('Particles.js not loaded');
        }
    }, []);

    return (
        <div
            id="particles-js"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundColor: '#0a0a00'
            }}
        />
    );
}

export default ParticlesBackground; 