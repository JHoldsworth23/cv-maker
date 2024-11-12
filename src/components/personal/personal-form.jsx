export default function PersonalForm() {
    return (
        <div>
            <form>
                <h2>Personal Details</h2>
                <label>Full name</label>
                <input type="text" placeholder="Enter your full name" />
                <label>Email</label>
                <input type="text" placeholder="Enter your email address" />
                <label>Phone number</label>
                <input type="text" placeholder="Enter your phone number" />
                <label>Address</label>
                <input type="text" placeholder="Enter your city, county" />
            </form>
        </div>
    );
}