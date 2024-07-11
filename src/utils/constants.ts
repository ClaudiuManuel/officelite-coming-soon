import { Option } from '@/types';

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

export const NOT_FOUND_PAGE = {
    TITLE: 'Oops! 404',
    DESCRIPTION: 'Page not found. Please go back.',
};

export const HOME_PAGE = {
    TITLE: 'A simple solution to complex tasks is coming soon',
    DESCRIPTION:
        'Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.',
};

export const SIGN_UP_PAGE = {
    TITLE: 'Work smarter. Save time.',
    DESCRIPTION:
        'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.',
};

export const BUTTON_TEXTS = {
    GET_ON_THE_LIST: 'Get on the list',
    GET_STARTED: 'Get Started',
    TRY_FOR_FREE: 'Try for Free',
    GO_BACK: 'Go Back',
};
