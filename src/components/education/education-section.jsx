/* eslint-disable react/prop-types */
export default function EducationSection(props) {
    return (
        <>
            <div>
                <p>{props.location}</p>
            </div>
            <div>
                <p>{props.school}</p>
                <p>{props.study}</p>
            </div>
        </>
    );
}