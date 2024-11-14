import FormInput from "../form-input";

export default function PersonalForm() {
    return (
        <div>
            <form>
                <h2>Personal Details</h2>
                <FormInput 
                  id="fullName"
                  type="text"
                  labelText="Full name"
                  placeholder="Enter your full name"
                  value=""
                />
                <FormInput 
                  id="email"
                  type="email"
                  labelText="Email"
                  placeholder="Enter your email address"
                  value=""
                />
                <FormInput 
                  id="phoneNo"
                  type="tel"
                  labelText="Phone number"
                  placeholder="Enter your phone number"
                  value=""
                />
                <FormInput 
                  id="address"
                  type="text"
                  labelText="Address"
                  placeholder="City, County or Country"
                  value=""
                />
            </form>
        </div>
    );
}