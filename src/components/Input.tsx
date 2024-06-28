import { ChangeEvent } from 'react';
import errorInputIcon from '../assets/sign-up/icon-cross.svg';
import { cn } from '@/utils/tailwindUtilities';

export type InputProps = {
    label: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    invalid: boolean;
};

const Input: React.FC<InputProps> = ({ label, name, type, placeholder, value, onChange, invalid }) => {
    return (
        <div className="relative">
            <label hidden htmlFor="phone">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className={cn(
                    'peer mb-6 h-[45px] w-[360px] border-b border-b-lightGray/25 pl-4 text-dark placeholder:text-lightGray placeholder:text-opacity-50 ',
                    { 'border-b-accentRed text-accentRed': invalid }
                )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {invalid && <img src={errorInputIcon} alt="error" className="absolute right-5 top-3" />}
        </div>
    );
};

export default Input;
