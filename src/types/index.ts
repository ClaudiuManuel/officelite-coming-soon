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
}

export type DropdownProps = {
    options: DropDownOption[];
    selectedOptionIndex: number;
    setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type CountdownTileProps = {
    title: string;
    subtitle: string;
}