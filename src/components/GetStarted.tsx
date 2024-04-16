import Image from 'next/image';
import get_started from './assets/get_started.png'
import { Button } from 'react-bootstrap';

const GetStarted = () => {
    return (
        <div className='mt-5'>
            <h1 style={{ color: "#140B37", textAlign: "center", fontWeight: "bold" }}>Its Simple to get started</h1>
            <p style={{ width: "500px", margin: "auto" }} className='text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi soluta, natus fugiat dolores suscipit hic expedita
            </p>
            <div style={{backgroundColor: "whitesmoke"}}>
                <div className='container' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", padding: "100px 50px", borderRadius: "20px" }}>
                    <Image width={650} src={get_started} alt="get started static image" />
                    <div style={{ fontSize: "21px" }}>
                        <p style={{ fontSize: "21px" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia vitae architecto eum nihil, id a modi exercitationem provident iusto illo quisquam. Soluta nihil porro alias, ut qui inventore tempore blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut minus modi.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, at.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore reprehenderit ad corrupti.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className='container '
                style={{
                    backgroundColor: "#1C84E5",
                    color: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "50px",
                    borderRadius: "10px",
                    marginTop: "-100px"
                }}>
                <div>
                    <h2 style={{ fontSize: "50px", marginBottom: "20px" }}>
                        Help company <br /> and employees <br /> grow
                    </h2>
                    <Button className="rounded-pill border-0" style={{
                        padding: "12px 30px", backgroundColor: "white", color: "#140B37", fontWeight: "bold"
                    }}>Browse job now</Button>
                </div>
                <div style={{ display: "flex", gap: "40px", textAlign: "center" }}>
                    <div>
                        <span style={{ fontSize: "28px", fontWeight: "bolder" }}>250k+</span>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <span style={{ fontSize: "28px", fontWeight: "bolder" }}>680+</span>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <span style={{ fontSize: "28px", fontWeight: "bolder" }}>17k+</span>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <span style={{ fontSize: "28px", fontWeight: "bolder" }}>125k+</span>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;