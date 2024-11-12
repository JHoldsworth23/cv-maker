export default function PersonalForm() {
    return (
        <div>
            <form>
                <h2>Personal Details</h2>
                <label>Full name</label>
                <input type="text" placeholder="Enter your full name" />
                <label>
                    Email <span>recommended</span>
                </label>
                <input type="text" placeholder="Enter your email address" />
                <label>
                    Phone number <span>recommended</span>
                    </label>
                <input type="text" placeholder="Enter your phone number" />
                <label>
                    Address <span>recommended</span>
                </label>
                <input type="text" placeholder="Enter your city, county" />
            </form>
        </div>
    );
}