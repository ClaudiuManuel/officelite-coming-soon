import officeliteLogo from '../assets/shared/logo.svg';
import Countdown from '../components/Countdown';
import PricingCard from '../components/PricingCard';
import illustrations from '../assets/home/Group-15.svg';
import circlePattern from '../assets/home/bg-pattern-header.svg';
import footerPattern from '../assets/home/bg-pattern-footer.svg';
import { Link } from 'react-router-dom';
import { BUTTON_TEXTS, HOME_PAGE, pricingOptions } from '@/utils/constants';

const HomePage = () => {
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
                                <h1 className="w-10/12 leading-tight">{HOME_PAGE.TITLE}</h1>
                            </header>
                            <p className="my-6 w-[76%]">{HOME_PAGE.DESCRIPTION}</p>
                            <Link to="/signup">
                                <button className=" h-[56px] w-[171px] bg-accentBlue text-white hover:bg-lightBlue">
                                    {BUTTON_TEXTS.GET_STARTED}
                                </button>
                            </Link>
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
                    <Link to="/signup">
                        <button className=" h-[56px] w-[171px] bg-accentBlue text-white hover:bg-lightBlue">
                            {BUTTON_TEXTS.GET_STARTED}
                        </button>
                    </Link>
                </footer>
            </div>
            <div className="relative -z-20 -mt-[521px] h-[603px] overflow-hidden bg-veryDark">
                <img src={footerPattern} className="absolute -left-[40%] -top-[99%] max-w-none" />
            </div>
        </>
    );
};

export default HomePage;
