import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import { ChangeEvent, useContext, useState } from 'react';
import { pricingOptions } from '@/utils/constants';
import { ToastContext } from './ToastProvider';

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
};

type FormErrors = {
    [K in keyof FormData]: boolean;
};

const initialState: FormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
};

const SignUpForm = () => {
    const { addToast } = useContext(ToastContext);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const dropdownOptions = pricingOptions.map((option) => {
        return { name: `${option.pricingTier} Pack`, price: option.price };
    });

    const [formData, setFormData] = useState<FormData>(initialState);
    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: false,
        email: false,
        phone: false,
        company: false,
    });

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setFormData((previousValue) => ({
            ...previousValue,
            [name]: value,
        }));
        setFormErrors((previousValue) => ({
            ...previousValue,
            [name]: false,
        }));
    };

    const validateForm = (formData: FormData) => {
        const { name, email, phone, company } = formData;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegex = /^\d{10}$/;

        return {
            name: name.length === 0,
            email: !emailRegex.test(email),
            phone: !phoneRegex.test(phone),
            company: company.length === 0,
        };
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.values(errors).every((error) => !error)) {
            setFormData(initialState);
            addToast({ variant: 'success', message: 'Form submitted successfully' });
            console.log('Form submitted');
        } else {
            addToast({ variant: 'error', message: 'Form has errors' });
            console.log('Form has errors');
        }
    };

    return (
        <section className="mb-14 flex h-fit w-fit items-center justify-center rounded-xl bg-white px-11 py-10 shadow-2xl">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    label="Name"
                    value={formData.name}
                    onChange={handleInputOnChange}
                    invalid={formErrors.name}
                />
                <Input
                    type="text"
                    name="email"
                    placeholder="Email address"
                    label="Email address"
                    value={formData.email}
                    onChange={handleInputOnChange}
                    invalid={formErrors.email}
                />
                <Dropdown
                    options={dropdownOptions}
                    selectedOptionIndex={selectedOptionIndex}
                    setSelectedOptionIndex={setSelectedOptionIndex}
                />
                <Input
                    type="string"
                    name="phone"
                    placeholder="Phone number"
                    label="Phone number"
                    value={formData.phone}
                    onChange={handleInputOnChange}
                    invalid={formErrors.phone}
                />
                <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    label="Company"
                    value={formData.company}
                    onChange={handleInputOnChange}
                    invalid={formErrors.company}
                />
                <button type="submit" className=" h-[56px] bg-accentBlue text-white hover:bg-lightBlue">
                    Get on the list
                </button>
            </form>
        </section>
    );
};

export default SignUpForm;
