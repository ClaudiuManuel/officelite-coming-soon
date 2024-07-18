import { ChangeEvent } from 'react';

export type Option = {
    subtitle: string;
    price: string;
    pricingTier: string;
    firstBodySentence: string;
    secondBodySentence: string;
    thirdBodySentence: string;
    isAccentVariant: boolean;
};

export type DropDownOption = {
    name: string;
    price: string;
};

export type DropdownProps = {
    options: DropDownOption[];
    selectedOptionIndex: number;
    setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
};


export type TimeRemaining = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

export type CountdownTileProps = {
    digitPair: string;
    timeUnit: keyof TimeRemaining;
    isLightVariant: boolean;
};

export type ToastContextType = {
    toasts: Toast[];
    setToasts: (toasts: Toast[]) => void;
    dismissToast: (id: string) => void;
    addToast: (toast: BaseToast) => void;
};

export type Toast = {
    variant: 'success' | 'error';
    id: string;
    message: string;
    fadingOut: boolean;
};

export type BaseToast = Omit<Toast, 'id' | 'fadingOut'>;

export type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
};

export type FormErrors = {
    [K in keyof FormData]: boolean;
};

export type FormField = {
    label: string;
    name: keyof FormData;
    type: string;
    placeholder: string;
};

export type DropdownMarker = { name: string };

export type InputProps = {
    label: string;
    name: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    invalid: boolean;
};
