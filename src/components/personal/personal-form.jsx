/* eslint-disable react/prop-types */
import FormInput from "../form-input";
import "../../styles/personal-form.css";

export default function PersonalForm({
    fullName,
    email,
    phoneNo,
    address,
    onChange
}) {
    return (
        <form className="personal-form">
            <h2 className="form-heading">Personal Details</h2>
            <FormInput 
              id="fullName"
              labelText="Full name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={onChange}
              data-info="fullName"
            />
            <FormInput 
              id="email"
              type="email"
              labelText="Email"
              placeholder="Enter your email address"
              value={email}
              onChange={onChange}
              data-info="email"
              recommended
            />
            <FormInput 
              id="phoneNo"
              type="tel"
              labelText="Phone number"
              placeholder="Enter your phone number"
              value={phoneNo}
              onChange={onChange}
              data-info="phoneNo"
              recommended
            />
            <FormInput 
              id="address"
              labelText="Address"
              placeholder="City, County or Country"
              value={address}
              onChange={onChange}
              data-info="address"
              recommended
            />
        </form>
    );
}