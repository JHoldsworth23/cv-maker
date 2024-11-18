/* eslint-disable react/prop-types */
import FormInput from "../form-input";
import "../../styles/form.css";

export default function ExperienceForm({
    companyName,
    role,
    startDate,
    endDate,
    location,
    description,
    onChange
}) {
    return (
        <form className="experience-form">
            <h2 className="form-heading">Experience</h2>
            <FormInput 
              id="company-name"
              labelText="Company Name"
              placeholder="Enter company name"
              value={companyName}
              onChange={onChange}
              data-info="company"
            />
            <FormInput 
              id="role"
              labelText="Role Title"
              placeholder="Enter role title"
              value={role}
              onChange={onChange}
              data-info="role"
            />
            <div className="dates">
                <FormInput
                  id="start-date"
                  labelText="Start Date"
                  placeholder="Start Date (MM/YYYY)"
                  value={startDate}
                  onChange={onChange}
                  data-info="startDate"
                />
                <FormInput
                  id="end-date"
                  labelText="End Date"
                  placeholder="End Date (MM/YYYY or Present)"
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
            <FormInput 
              id="description"
            //   type="textarea"
              labelText="Description"
              placeholder="Enter description"
              value={description}
              onChange={onChange}
              data-info="description"
              optional
            />

            {/* ADD BUTTONS TO DELETE, SAVE AND CANCEL */}
        </form>
    );
}