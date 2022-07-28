import React from 'react';
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function AddUser (props) {
    const [formData, setFormData] = React.useState({username: '', age: ''});
    const [isFormValid, setIsFormValid] = React.useState(false);
    const onFormDataChange = (event) => {
        const {name, value} = event.target;
        setFormData((previous) => ({...previous, [name]: value}));
        validateFormData();
    }
    const validateFormData = () => {
       setIsFormValid(() => formData.username && formData.age);
    }
    const onSubmitForm = (event) => {
        event.preventDefault();
        const newUser = {
            id: Math.random() * 10,
            ...formData,
            age: +formData.age
        }
        props.onAddUser(newUser);
        setFormData(() => ({username: '', age: ''}));
    }
    return (
        <div className="mb-5">
            <Card>
            <form onSubmit={onSubmitForm}>
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 text-lg">Username</label>
                        <input type="text" className="form-input rounded-md border-gray-300 shadow-sm w-full" id="username"
                        name="username" value={formData.username} onChange={onFormDataChange}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="age" className="block mb-2 text-lg">Age</label>
                        <input type="number" className="form-input rounded-md border-gray-300 shadow-sm w-full" id="age"
                        name="age" value={formData.age} onChange={onFormDataChange}/>
                    </div>
                    <div>
                        <Button type="submit" className="bg-purple-800 text-white" disabled={!isFormValid}>Add User</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}