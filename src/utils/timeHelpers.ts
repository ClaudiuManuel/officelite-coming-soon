const parseTimeUnit = (timeUnit: number) => {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit.toString();
}

export const calculateTimeRemaining = (futureDate: Date) => {
    const now = new Date();
    const timeRemaining = futureDate.getTime() - now.getTime();

    return {
        days: parseTimeUnit(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))),
        hours: parseTimeUnit(Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)),
        minutes: parseTimeUnit(Math.floor((timeRemaining / (1000 * 60)) % 60)),
        seconds: parseTimeUnit(Math.floor((timeRemaining / 1000) % 60)),
    };
};