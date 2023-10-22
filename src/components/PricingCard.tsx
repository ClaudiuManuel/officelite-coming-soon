import { cn } from '../utils/tailwindUtilities';
import circlesPatternCard from '../assets/home/bg-pattern-pricing.svg';

const PricingCard = ({
    title,
    pricingTier,
    subtitle,
    firstBodySentence,
    secondBodySentence,
    thirdBodySentence,
    isAccentVariant,
}) => {
    const textBodyForAccent = cn('text-base', {
        'text-white/75': isAccentVariant,
    });
    const headerTextColors = isAccentVariant ? 'text-white' : 'text-dark';

    return (
        <div
            className={cn(
                'relative flex w-[350px] flex-col items-center justify-between rounded-xl bg-white px-14 py-10 shadow-2xl overflow-hidden z-10',
                {
                    'bg-accentBlue': isAccentVariant,
                }
            )}
        >
            {isAccentVariant && <img src={circlesPatternCard} className="absolute max-w-none -top-[76%] -z-10"></img>}
            <header>
                <h2 className={headerTextColors}>{pricingTier}</h2>
                <h1 className={`${headerTextColors} mb-4 mt-10 leading-none`}>{title}</h1>
                <p className={headerTextColors}>{subtitle}</p>
            </header>
            <div className="mb-8 mt-14 flex flex-col gap-4">
                <p className={textBodyForAccent}>{firstBodySentence}</p>
                <p className={textBodyForAccent}> {secondBodySentence}</p>
                <p className={textBodyForAccent}>{thirdBodySentence}</p>
            </div>
            <button
                className={cn('text-accentBlue/100 bg-accentBlue h-[56px] w-[171px] bg-opacity-20 text-opacity-100', {
                    'bg-white bg-opacity-100': isAccentVariant,
                })}
            >
                Try for Free
            </button>
        </div>
    );
};

export default PricingCard;
