/* eslint-disable react/prop-types */
import FormInput from "../form-input";

export default function PersonalForm({
    fullName,
    email,
    phoneNo,
    address,
    onChange
}) {
    return (
        <div>
            <form>
                <h2>Personal Details</h2>
                <FormInput 
                  id="fullName"
                  type="text"
                  labelText="Full name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={onChange}
                />
                <FormInput 
                  id="email"
                  type="email"
                  labelText="Email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={onChange}
                />
                <FormInput 
                  id="phoneNo"
                  type="tel"
                  labelText="Phone number"
                  placeholder="Enter your phone number"
                  value={phoneNo}
                  onChange={onChange}
                />
                <FormInput 
                  id="address"
                  type="text"
                  labelText="Address"
                  placeholder="City, County or Country"
                  value={address}
                  onChange={onChange}
                />
            </form>
        </div>
    );
}