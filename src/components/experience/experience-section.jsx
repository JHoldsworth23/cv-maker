/* eslint-disable react/prop-types */
export default function ExperienceSection(props) {
    return (
        <>
            <div>
                <p>{props.location}</p>
            </div>
            <div>
                <p>{props.companyName}</p>
                <p>{props.role}</p>
                <p>{props.description}</p>
            </div>
        </>
    );
}