import { HiOutlineMailOpen } from "react-icons/hi";
import { IoBusOutline } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { FaHatCowboySide } from "react-icons/fa";
import { GiScarecrow } from "react-icons/gi";
import { GiStatic } from "react-icons/gi";
import { MdMonitorHeart } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import { GiManualJuicer } from "react-icons/gi";
import { Col, Container, Row } from "react-bootstrap";



const category = [
    {
        icon: <HiOutlineMailOpen />,
        color: "#66D76E",
        title: "Publier offre d'omploi"
    },
    {
        icon: <IoBusOutline />,
        color: "#3636AD",
        title: "Publier offre d'omploi"
    },
    {
        icon: <SiReaddotcv />,
        color: "#66D76E",
        title: "Publier offre d'omploi"
    },
    {
        icon: <FaHatCowboySide />,
        color: "#50D0D8",
        title: "Publier offre d'omploi"
    },
    {
        icon: <GiScarecrow />,
        color: "#66D76E",
        title: "Publier offre d'omploi"
    },
    {
        icon: <MdMonitorHeart />,
        color: "#3636AD",
        title: "Publier offre d'omploi"
    },
    {
        icon: <BiBookOpen />,
        color: "#50D0D8",
        title: "Publier offre d'omploi"
    },
    {
        icon: <GiManualJuicer />,
        color: "#3636AD",
        title: "Publier offre d'omploi"
    },
    {
        icon: <GiStatic />,
        color: "#3636AD",
        title: "Publier offre d'omploi"
    },
]

const Categories = () => {
    return (
        <Container className="mt-5">
            <Row xs={1} md={3} className="g-4">
                {category.map((item, index) => (
                    <Col key={index}>
                        <div style={{
                            display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", gap: "5px", color: "#140B37", fontWeight: "bold"
                        }}>
                            <div style={{  backgroundColor: item?.color, width: "100px", height: "100px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" ,textAlign: "center", margin :"auto" }}>
                                <span className="d-block" style={{fontSize: "60px", color: "white", textAlign: "center"}} >{item.icon}</span>
                            </div>
                            <span style={{fontSize: "19px"}}>{item.title}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Categories;