import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import { ChangeEvent, useContext, useState } from 'react';
import { BUTTON_TEXTS, pricingOptions } from '@/utils/constants';
import { ToastContext } from './ToastProvider';
import { FormErrors, FormData, DropdownMarker, FormField } from '@/types';

const initialState: FormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
};

const formFields: Array<FormField | DropdownMarker> = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'Name',
    },
    {
        label: 'Email address',
        name: 'email',
        type: 'text',
        placeholder: 'Email address',
    },
    {
        name: 'dropdown',
    },
    {
        label: 'Phone number',
        name: 'phone',
        type: 'string',
        placeholder: 'Phone number',
    },
    {
        label: 'Company',
        name: 'company',
        type: 'text',
        placeholder: 'Company',
    },
];

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
        const phoneRegex = /^\d+$/;

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
        } else {
            addToast({ variant: 'error', message: 'Form has errors' });
        }
    };

    return (
        <section className="mb-14 flex h-fit w-fit items-center justify-center rounded-xl bg-white px-11 py-10 shadow-2xl">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                {formFields.map((field) => {
                    if (field.name === 'dropdown') {
                        return (
                            <Dropdown
                                options={dropdownOptions}
                                selectedOptionIndex={selectedOptionIndex}
                                setSelectedOptionIndex={setSelectedOptionIndex}
                            />
                        );
                    } else {
                        const typeAssertedField = field as FormField;
                        return (
                            <Input
                                type={typeAssertedField.type}
                                name={typeAssertedField.name}
                                placeholder={typeAssertedField.placeholder}
                                label={typeAssertedField.label}
                                value={formData[typeAssertedField.name]}
                                onChange={handleInputOnChange}
                                invalid={formErrors[typeAssertedField.name]}
                            />
                        );
                    }
                })}
                <button type="submit" className=" h-[56px] bg-accentBlue text-white hover:bg-lightBlue">
                    {BUTTON_TEXTS.GET_ON_THE_LIST}
                </button>
            </form>
        </section>
    );
};

export default SignUpForm;
