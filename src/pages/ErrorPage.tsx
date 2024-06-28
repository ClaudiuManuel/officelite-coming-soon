import { Link } from 'react-router-dom';
import officeliteLogo from '../assets/shared/logo.svg';
import circlePattern from '@assets/sign-up/signup-circle-pattern.svg';

const ErrorPage = () => {
    return (
        <>
            <div className="mx-auto max-w-[1340px]">
                <header>
                    <img src={officeliteLogo} alt="officelite logo" className="mb-[102px] mt-[81px]" />
                </header>
                <main className="flex justify-between">
                    <section className="flex items-center justify-between">
                        <div className="flex flex-col justify-between pb-16 text-left">
                            <header>
                                <h1 className="leading-tight">Oops! 404</h1>
                                <p className="mb-10 mt-6">Page not found. Please go back.</p>
                            </header>
                            <Link to={'/'}>
                                <button className=" h-[56px] w-[171px] bg-accentBlue text-white hover:bg-lightBlue">
                                    Go back
                                </button>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>

            <div className="absolute right-0 top-0 -z-20 h-screen w-[25%] overflow-hidden bg-veryDark">
                <img src={circlePattern} className="absolute h-screen w-full" />
            </div>
        </>
    );
};

export default ErrorPage;
