import { cn } from '../utils/tailwindUtilities';
import circlesPatternCard from '../assets/home/bg-pattern-pricing.svg';
import { Link } from 'react-router-dom';

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
                'relative z-10 flex w-[350px] flex-col items-center justify-between overflow-hidden rounded-xl bg-white px-14 py-10 shadow-2xl',
                {
                    'bg-accentBlue': isAccentVariant,
                }
            )}
        >
            {isAccentVariant && <img src={circlesPatternCard} className="absolute -top-[76%] -z-10 max-w-none"></img>}
            <header className="text-center">
                <h2 className={headerTextColors}>{pricingTier}</h2>
                <h1 className={`${headerTextColors} mb-4 mt-10 leading-none`}>{title}</h1>
                <p className={headerTextColors}>{subtitle}</p>
            </header>
            <div className="mb-8 mt-14 flex flex-col gap-4">
                <p className={textBodyForAccent}>{firstBodySentence}</p>
                <p className={textBodyForAccent}> {secondBodySentence}</p>
                <p className={textBodyForAccent}>{thirdBodySentence}</p>
            </div>
            <Link to="/signup">
                <button
                    className={cn(
                        'h-[56px] w-[171px] bg-accentBlue bg-opacity-20 text-accentBlue/100 text-opacity-100 hover:bg-opacity-25',
                        {
                            'bg-white bg-opacity-100 hover:bg-opacity-100 hover:text-lightBlue': isAccentVariant,
                        }
                    )}
                >
                    Try for Free
                </button>
            </Link>
        </div>
    );
};

export default PricingCard;
