import { useState } from 'react';
import arrow from '@assets/sign-up/arrow.svg';
import tick from '../assets/sign-up/tick.svg';
import { cn } from '../utils/tailwindUtilities';

const Dropdown = ({ options, selectedOptionIndex, setSelectedOptionIndex }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <span
                onClick={() => setIsOpen(!isOpen)}
                className="mb-6 flex  h-[45px] w-[360px] cursor-pointer flex-row items-baseline justify-between border-b border-b-lightGray/25 pl-3 pr-6 font-KumbhBold text-dark"
            >
                <span>
                    {options[selectedOptionIndex].name}{' '}
                    <span className="ml-2 text-lightGray">{options[selectedOptionIndex].tier}</span>
                </span>
                <img src={arrow} />
            </span>

            {isOpen && (
                <div className="relative">
                    <div className="absolute -top-4 left-0 z-50 flex w-full flex-col rounded-lg border border-gray-700 border-opacity-20 bg-white py-2 pl-8 pr-8 shadow">
                        <ul>
                            {options.map((option, index) => (
                                <li
                                    onClick={() => {
                                        setSelectedOptionIndex(index);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        'flex cursor-pointer flex-row items-baseline justify-between  py-4 pr-3 font-KumbhBold text-dark',
                                        {
                                            'border-b border-b-lightGray/25': index !== options.length - 1,
                                        }
                                    )}
                                >
                                    <span>
                                        {option.name}
                                        <span className="ml-2 text-lightGray"> {option.tier} </span>
                                    </span>
                                    {index === selectedOptionIndex && <img src={tick} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dropdown;
