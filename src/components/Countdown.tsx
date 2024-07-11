import CountdownTile from './CountdownTile';

const Countdown = ({ isLightVariant = false }: { isLightVariant?: boolean }) => {
    return (
        <div className={'flex flex-col gap-4'}>
            <h3 className="text-left">
                Coming <span className="text-accentBlue">4 NOV 2020</span>
            </h3>
            <div className={'flex gap-4'}>
                {[...Array(3).keys()].map((_, index) => {
                    return <CountdownTile key={index} title={'00'} subtitle={'days'} isLightVariant={isLightVariant} />;
                })}
            </div>
        </div>
    );
};

export default Countdown;
