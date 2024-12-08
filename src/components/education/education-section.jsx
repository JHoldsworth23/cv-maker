/* eslint-disable react/prop-types */
import "../../styles/cv/cv-information-section.css";

export default function EducationSection(props) {
    const { startDate, endDate, location, school, study } = props;

    return (
        <>
            <div className="education-info">
                <p className="dates-info">
                    {startDate}
                    {startDate && endDate && <span> - </span>}
                    {endDate}
                </p>
                <p className="location-info">{location}</p>
            </div>
            <div>
                <p className="school-name">{school}</p>
                <p className="degree">{study}</p>
            </div>
        </>
    );
}