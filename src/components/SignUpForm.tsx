import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import { ChangeEvent, useState } from 'react';
import { pricingOptions } from '@/utils/constants';

const SignUpForm = () => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const dropdownOptions = pricingOptions.map((option) => {
        return { name: `${option.pricingTier} Pack`, price: option.price };
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    });

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setFormData((previousValue) => ({
            ...previousValue,
            [name]: value,
        }));
    };

    return (
        <section className="mb-14 flex h-fit w-fit items-center justify-center rounded-xl px-11 py-10 shadow-2xl">
            <form className="flex flex-col">
                <Input type="text" name="name" placeholder="Name" label="Name" value={formData.name} onChange={handleInputOnChange} />
                <Input type="text" name="email" placeholder="Email address" label="Email address"  value={formData.email} onChange={handleInputOnChange}/>
                <Dropdown
                    options={dropdownOptions}
                    selectedOptionIndex={selectedOptionIndex}
                    setSelectedOptionIndex={setSelectedOptionIndex}
                />
                <Input type="number" name="phone" placeholder="Phone number" label="Phone number" value={formData.phone} onChange={handleInputOnChange}/>
                <Input type="text" name="company" placeholder="Company" label="Company" value={formData.company} onChange={handleInputOnChange}/>
                <button type="submit" className=" h-[56px] bg-accentBlue text-white hover:bg-lightBlue">
                    Get on the list
                </button>
            </form>
        </section>
    );
};

export default SignUpForm;
