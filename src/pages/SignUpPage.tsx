import officeliteLogo from '../assets/shared/logo.svg';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';
import SignUpForm from '@/components/SignUpForm';
import circlePattern from '@assets/sign-up/signup-circle-pattern.svg';
import ToastList from '@/components/ToastList';
import { SIGN_UP_PAGE } from '@/utils/constants';

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
                                <h1 className="leading-tight">{SIGN_UP_PAGE.TITLE}</h1>
                            </header>
                            <p className="mb-10 mt-6">
                                {SIGN_UP_PAGE.DESCRIPTION}
                            </p>
                            <Countdown isLightVariant/>
                        </div>
                    </section>
                    <SignUpForm />
                    <ToastList />
                </main>
            </div>
            <div className="absolute right-0 top-0 -z-20 h-screen w-[25%] overflow-hidden bg-veryDark">
                <img src={circlePattern} className="absolute h-screen w-full" />
            </div>
        </>
    );
};

export default SignUpPage;
