import { useState } from "react";
import validator from "validator";
import { useForm } from "react-hook-form";


const UserForm = ({ onSubmit, user = {} }) => {
    const [userData, setUserData] = useState(user);
    const [errors, setErrors] = useState({});

    const { name, profession, phone, email } = userData;

    const validateData = () => {
        let errors = {};

        if (!name) {
            errors.name = "Name is required";
        }

        if (!profession) {
            errors.name = "Profession id required"
        }

        if (!validator.isPhone(phone)) {
            errors.phone = "Enter a valid phone"
        }

        if (!validator.isEmail(email)) {
            errors.email = "Enter a valid email"
        }

        return errors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

const handleSubmit = () => {
    const errors = validateData();
    if (Object.keys(errors).length) {
        setErrors(errors);
        //if there are errors, dont submit
        return;
    }

    setErrors({});
    console.log(userData);
    onsubmit(userData);
};

return (
    <div>
        <div>
            <p>Name</p>
            <input name="name" value={name} onChange={handleChange} />
            <div style={{ color: "red" }}>{errors.name}</div>
        </div>

        <div>
            <p>Profession</p>
            <input name="profession" value={profession} onChange={handleChange} />
            <div style={{ color: "red" }}>{errors.profession}</div>
        </div>

        <div>
            <p>Phone</p>
            <input name="phone" value={phone} onChange={handleChange} />
            <div style={{ color: "red" }}>{errors.phone}</div>
        </div>

        <div>
            <p>Email</p>
            <input name="email" value={email} onChange={handleChange} />
            <div style={{ color: "red" }}>{errors.email}</div>
        </div>

        <div style={{ marginTop: "12px" }}>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
);
};

export default UserForm;