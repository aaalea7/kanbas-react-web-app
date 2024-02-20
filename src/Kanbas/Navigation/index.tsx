import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaQuestionCircle, FaUsers, FaDesktop } from "react-icons/fa";
import neu from "../../images/neu.png";

function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
        { label: "Courses",   icon: <FaBook className="fs-2" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
        { label: "History",  icon: <FaClock className="fs-2" /> },
        { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
        { label: "Commons",  icon: <FaUsers className="fs-2" /> },
        { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> }
    ];

    const { pathname } = useLocation();
    
    return (
        <ul className="wd-kanbas-navigation">
            <div className="log-container">
                <img src={neu} alt="NEU Logo" className="school-logo" />
            </div>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                <Link to={`/Kanbas/${link.label}`}> {link.icon} <br />{link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;

