import { Link } from 'react-router-dom';
import officeliteLogo from '../assets/shared/logo.svg';

const ErrorPage = () => {
    return (
        <>
            <div className="mx-auto max-w-[1340px]">
                <header>
                    <img src={officeliteLogo} alt="officelite logo" className="mb-[102px] mt-[81px]" />
                </header>
                <main className="flex justify-between">
                    <section className="flex items-center justify-between">
                        <div className="flex w-[52%] flex-col justify-between pb-16 text-left">
                            <header>
                                <h1 className="leading-tight">.</h1>
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
        </>
    );
};

export default ErrorPage;
