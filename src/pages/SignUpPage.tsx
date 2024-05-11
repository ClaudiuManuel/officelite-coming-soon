import officeliteLogo from '../assets/shared/logo.svg';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';
import SignUpForm from '@/components/SignUpForm';

const SignUpPage = () => {

    return (
        <>
            <div className="mx-auto max-w-[1340px]">
                <header>
                    <Link to={'/'}>
                        <img src={officeliteLogo} alt="officelite logo" className="mb-[102px] mt-[81px]" />
                    </Link>
                </header>
                <main className="flex justify-between">
                    <section className="flex w-[50%] items-center justify-between">
                        <div className="flex flex-col justify-between text-left">
                            <header>
                                <h1 className="leading-tight">Work smarter. Save time.</h1>
                            </header>
                            <p className="mb-10 mt-6">
                                Easily manage your projects. Get on the list and receive in-app perks available only to
                                early subscribers. We are moving into final development and getting ready for official
                                launch soon.
                            </p>
                            <Countdown />
                        </div>
                    </section>
                    <SignUpForm />
                </main>
            </div>
            {/* <div className="relative -z-20 -mt-[521px] h-[603px] bg-veryDark">
                <img src={footerPattern} className="absolute -left-[40%] -top-[99%] max-w-none" />
            </div> */}
        </>
    );
};

export default SignUpPage;
