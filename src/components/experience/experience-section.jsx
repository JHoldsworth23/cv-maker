/* eslint-disable react/prop-types */
import "../../styles/cv/cv-information-section.css";

export default function ExperienceSection(props) {
    const { startDate, endDate, location, companyName, role, description } = props;

    return (
        <>
            <div className="experience-info">
                <p className="dates-info">
                    {startDate}
                    {startDate && endDate && <span> - </span>}
                    {endDate}
                </p>
                <p className="location-info">{location}</p>
            </div>
            <div>
                <p className="company-title">{companyName}</p>
                <p className="role">{role}</p>
                <p className="description">{description}</p>
            </div>
        </>
    );
}