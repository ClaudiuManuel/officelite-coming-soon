import officeliteLogo from '../assets/shared/logo.svg';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

const SignUpPage = () => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

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
                    <section className="mb-14 flex h-fit w-fit items-center justify-center rounded-xl px-11 py-10 shadow-2xl">
                        <form className="flex flex-col">
                            <Input type="text" name="name" placeholder="Name" label="Name" />
                            <Input type="text" name="email" placeholder="Email address" label="Email address" />
                            <Dropdown
                                options={[
                                    { name: 'Basic Pack', tier: 'Free' },
                                    { name: 'Pro Pack', tier: 'Free' },
                                    { name: 'Ultimate Pack', tier: 'Free' },
                                ]}
                                selectedOptionIndex={selectedOptionIndex}
                                setSelectedOptionIndex={setSelectedOptionIndex}
                            />
                            <Input type="number" name="phone" placeholder="Phone number" label="Phone number" />
                            <Input type="text" name="company" placeholder="Company" label="Company" />
                            <button type="submit" className=" h-[56px] bg-accentBlue text-white hover:bg-lightBlue">
                                Get on the list
                            </button>
                        </form>
                    </section>
                </main>
            </div>
            {/* <div className="relative -z-20 -mt-[521px] h-[603px] bg-veryDark">
                <img src={footerPattern} className="absolute -left-[40%] -top-[99%] max-w-none" />
            </div> */}
        </>
    );
};

export default SignUpPage;
