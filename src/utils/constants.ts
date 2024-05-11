import { Option } from "@/types";

export const pricingOptions: Option[] = [
    {
        price: 'Free',
        subtitle: 'Up to 5 users for free',
        pricingTier: 'Basic',
        firstBodySentence: 'Basic document collaboration',
        secondBodySentence: '2 GB storage',
        thirdBodySentence: 'Great security and support',
        isAccentVariant: false,
    },
    {
        price: '$9.99',
        subtitle: 'Per user, billed monthly',
        pricingTier: 'Pro',
        firstBodySentence: 'All essential integrations',
        secondBodySentence: '50 GB storage',
        thirdBodySentence: 'More control and insights',
        isAccentVariant: true,
    },
    {
        price: '$19.99',
        subtitle: 'Per user, billed monthly',
        pricingTier: 'Ultimate',
        firstBodySentence: 'Robust work management',
        secondBodySentence: '100 GB storage',
        thirdBodySentence: 'VIP support',
        isAccentVariant: false,
    },
];
