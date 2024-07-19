import { useEffect, useMemo, useState } from 'react';
import CountdownTile from './CountdownTile';
import { TimeRemaining } from '@/types';
import { calculateTimeRemaining } from '@/utils/timeHelpers';

const Countdown = ({ isLightVariant = false }: { isLightVariant?: boolean }) => {
    const futureDate = useMemo(() => {
        const dateFromStorage = window.localStorage.getItem('deadline');
        
        if (dateFromStorage) {
            return new Date(dateFromStorage);
        } else {
            // Add 21 days to the current date. Just for showcase purposes.
            const newDate = new Date();
            newDate.setDate(newDate.getDate() + 21);
            window.localStorage.setItem('deadline', newDate.toISOString());

            return newDate;
        }
    }, []);

    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(futureDate));

    useEffect(() => {
        const eachSecondInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(futureDate));
        }, 1000);

        return () => clearInterval(eachSecondInterval);
    }, [futureDate]);

    return (
        <div className={'flex flex-col gap-4'}>
            <h3 className="text-left">
                Coming <span className="text-accentBlue">4 NOV 2020</span>
            </h3>
            <div className={'flex gap-4'}>
                {Object.keys(timeRemaining).map((timeUnit, index) => {
                    const stronglyTypedTimeUnit = timeUnit as keyof TimeRemaining;
                    return (
                        <CountdownTile
                            key={index}
                            digitPair={timeRemaining[stronglyTypedTimeUnit].toString()}
                            timeUnit={stronglyTypedTimeUnit}
                            isLightVariant={isLightVariant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Countdown;
