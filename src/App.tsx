import officeliteLogo from './assets/shared/logo.svg';
import illustrations from './assets/home/Group-15.svg';
import circlePattern from './assets/home/bg-pattern-header.svg';
import footerPattern from './assets/home/bg-pattern-footer.svg';
import './App.css';
import PricingCard from './components/PricingCard';
import Countdown from './components/Countdown';

const pricingOptions = [
    {
        title: 'Free',
        subtitle: 'Up to 5 users for free',
        pricingTier: 'Basic',
        firstBodySentence: 'Basic document collaboration',
        secondBodySentence: '2 GB storage',
        thirdBodySentence: 'Great security and support',
        isAccentVariant: false,
    },
    {
        title: '$9.99',
        subtitle: 'Per user, billed monthly',
        pricingTier: 'Pro',
        firstBodySentence: 'All essential integrations',
        secondBodySentence: '50 GB storage',
        thirdBodySentence: 'More control and insights',
        isAccentVariant: true,
    },
    {
        title: '$19.99',
        subtitle: 'Per user, billed monthly',
        pricingTier: 'Ultimate',
        firstBodySentence: 'Robust work management',
        secondBodySentence: '100 GB storage',
        thirdBodySentence: 'VIP support',
        isAccentVariant: false,
    },
];

function App() {
    return (
        <>
            <img src={circlePattern} className="absolute -right-[19%] -top-[24%] -z-10" />
            <div className="mx-auto max-w-[1340px]">
                <header>
                    <img src={officeliteLogo} alt="officelite logo" className="mb-[102px] mt-[81px]" />
                </header>
                <main>
                    <section className="flex items-center justify-between">
                        <div className="flex w-[52%] flex-col justify-between pb-16 text-left">
                            <header>
                                <h1 className="leading-tight">A simple solution to complex tasks is coming soon</h1>
                            </header>
                            <p className="my-6">
                                Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is
                                the new collaboration platform built with an intuitive interface to improve
                                productivity.
                            </p>
                            <button className=" bg-accentBlue h-[56px] w-[171px] text-white">Get Started</button>
                        </div>
                        <figure>
                            <img src={illustrations} alt="infographics" className="h-[640px] w-full" />
                        </figure>
                    </section>
                    <section>
                        <ul className="z-30 mb-[82px] mt-[140px] flex justify-between">
                            {pricingOptions.map((item) => {
                                return (
                                    <li>
                                        <PricingCard {...item} />
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                </main>
                <footer className="flex items-center justify-between">
                    <Countdown />
                    <button className=" bg-accentBlue h-[56px] w-[171px] text-white">Get Started</button>
                </footer>
            </div>
            <div className="bg-veryDark relative -z-20 -mt-[521px] h-[603px]">
                <img src={footerPattern} className="absolute -left-[40%] -top-[99%] max-w-none" />
            </div>
        </>
    );
}

export default App;
