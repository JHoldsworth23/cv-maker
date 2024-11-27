/* eslint-disable react/prop-types */
import "../../styles/cv-personal-section.css";

export default function PersonalSection(props) {
    const { fullName, phoneNo, email, address } = props.information;

    return (
        <div className="personal-section">
            <div className="name">
                <h2>{fullName}</h2>
            </div>
            <div className="contact-details">
                {email && <div className="detail"><i className="fa-solid fa-envelope"></i><p>{email}</p></div>}
                {phoneNo && <div className="detail"><i className="fa-solid fa-phone"></i><p>{phoneNo}</p></div>}
                {address && <div className="detail"><i className="fa-solid fa-location-dot"></i><p>{address}</p></div>}
            </div>
        </div>
    );
}