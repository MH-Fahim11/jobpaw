import { Col, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";


const jobs = [
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
    {
        title: "Mid-level Frontend developer",
        description: "we are seeking for a ....."
    },
]

const FeaturedJobs = () => {
    return (
        <div style={{ backgroundColor: "#030873", color: "white", padding: "30px", marginTop: "80px" }}>
            <div className='container mt-5'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h1>Featured Job</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam voluptate fuga?</p>
                    </div>
                    <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        View all listing<FaArrowRight />
                    </span>
                </div>
                <div className=" mt-3" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap :"10px"}}>
                    {
                        jobs?.map((job, index) => {
                            return (
                                <div style={{ backgroundColor: "#2A2FA0", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)", padding: "25px" }} key={index}>
                                    <h2 style={{ fontSize: "24px" }}>{job.title}</h2>
                                    <p>{job?.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;