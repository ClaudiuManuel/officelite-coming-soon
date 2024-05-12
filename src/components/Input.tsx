import { ChangeEvent } from 'react';
import errorInputIcon from '../assets/sign-up/icon-cross.svg';

export type InputProps = {
    label: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    value: string | number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ label, name, type, placeholder, value, onChange }) => {
    return (
        <div className="relative">
            <label hidden htmlFor="phone">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className="peer mb-6 h-[45px] w-[360px] border-b border-b-lightGray/25 pl-4 text-dark placeholder:text-lightGray placeholder:text-opacity-50 invalid:border-b-accentRed invalid:text-accentRed"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <img src={errorInputIcon} alt="error" className="invisible absolute right-5 top-3 peer-invalid:visible" />
        </div>
    );
};

export default Input;
