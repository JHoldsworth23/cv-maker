/* eslint-disable react/prop-types */
import FormInput from "../form-input";
import Buttons from "../buttons";
import "../../styles/form/form.css";

export default function EducationForm(props) {
    const { id, school, study, startDate, endDate, location } = props.form;
    const { onChange, save, remove } = props;

    return (
        <form 
          className="education-form section-form"
          id={id}
          data-section-name="education"
        >
            <FormInput 
              id="school-name"
              labelText="School"
              placeholder="Enter university / college"
              value={school}
              onChange={onChange}
              data-info="school"
            />
            <FormInput 
              id="study"
              labelText="Study"
              placeholder="Enter degree / field of study"
              value={study}
              onChange={onChange}
              data-info="study"
            />
            <div className="dates">
                <FormInput
                  id="start-date"
                  labelText="Start Date"
                  placeholder="(MM/YYYY)"
                  value={startDate}
                  onChange={onChange}
                  data-info="startDate"
                />
                <FormInput
                  id="end-date"
                  labelText="End Date"
                  placeholder="(MM/YYYY or Present)"
                  value={endDate}
                  onChange={onChange}
                  data-info="endDate"
                />
            </div>
            <FormInput 
              id="location"
              labelText="Location"
              placeholder="Enter location"
              value={location}
              onChange={onChange}
              data-info="location"
              optional
            />
            <Buttons save={save} remove={remove} />
        </form>
    );
}