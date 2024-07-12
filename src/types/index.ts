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

export type CountdownTileProps = {
    title: string;
    subtitle: string;
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

