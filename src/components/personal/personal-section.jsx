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
                {phoneNo && <p>{phoneNo}</p>}
                {email && <p>{email}</p>}
                {address && <p>{address}</p>}
            </div>
        </div>
    );
}