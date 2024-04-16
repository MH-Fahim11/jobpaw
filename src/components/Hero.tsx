import Image from 'next/image';
import hero_banner from './assets/hero_banner.png'
import { Button } from 'react-bootstrap';
const Hero = () => {
    return (
        <div style={{ backgroundColor: '#E9E9EC', padding: '20' }} >
            <div className='container' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "100px" }}>
                <div>
                    <h1 className='display-2 ' style={{ color: '#140B37', fontWeight: 'bolder' }}>Vous voulez <br /> recruter  un <br /> professionnel <br /> qualifie</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptatem?</p>
                    <Button className="rounded-pill border-0" style={{padding: "12px 30px", backgroundColor: "lightgray", color: "#140B37", fontWeight: "bold"
                    }}>Sign Up</Button>
                </div>
                <Image width={800} height={800} src={hero_banner} alt="Hero Image" />
            </div>
        </div>
    );
};

export default Hero;