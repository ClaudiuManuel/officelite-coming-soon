import { useState } from 'react';
import arrow from '@assets/sign-up/arrow.svg';
import tick from '../assets/sign-up/tick.svg';
import { cn } from '../utils/tailwindUtilities';
import { DropdownProps } from '@/types';
import { motion } from 'framer-motion';

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOptionIndex, setSelectedOptionIndex }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mb-6 flex h-[45px]  w-[360px] cursor-pointer flex-row items-baseline justify-between rounded-none border-b border-b-lightGray/25 pl-3 pr-6 font-KumbhBold text-dark"
            >
                <span>
                    {options[selectedOptionIndex].name}{' '}
                    <span className="ml-2 text-lightGray">{options[selectedOptionIndex].price}</span>
                </span>
                <img
                    src={arrow}
                    className={cn('duration-400 transition-transform', {
                        'rotate-180': isOpen,
                    })}
                    alt='open indicator arrow'
                />
            </button>

            {isOpen && (
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute z-50 flex w-full flex-col rounded-lg border border-gray-700 border-opacity-20 bg-white py-2 pl-8 pr-8 shadow"
                    >
                        <ul>
                            {options.map(({ name, price }, index) => (
                                <li
                                    onClick={() => {
                                        setSelectedOptionIndex(index);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        'group flex cursor-pointer flex-row items-baseline  justify-between py-4 pr-3 font-KumbhBold text-dark hover:text-accentBlue',
                                        {
                                            'border-b border-b-lightGray/25': index !== options.length - 1,
                                        }
                                    )}
                                    key={name}
                                >
                                    <span>
                                        {name}
                                        <span className="ml-2 text-lightGray group-hover:text-accentBlue">{price}</span>
                                    </span>
                                    {index === selectedOptionIndex && <img alt='tick check' src={tick} />}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Dropdown;
