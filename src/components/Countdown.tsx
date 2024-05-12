import CountdownTile from './CountdownTile';

const Countdown = ({ isLightVariant = false }: { isLightVariant?: boolean }) => {
    return (
        <div className={'flex flex-col gap-4'}>
            <h3 className="text-left">
                Coming <span className="text-accentBlue">4 NOV 2020</span>
            </h3>
            <div className={'flex gap-4'}>
                <CountdownTile title={'47'} subtitle={'days'} isLightVariant={isLightVariant} />
                <CountdownTile title={'07'} subtitle={'hours'} isLightVariant={isLightVariant} />
                <CountdownTile title={'56'} subtitle={'min'} isLightVariant={isLightVariant} />
                <CountdownTile title={'14'} subtitle={'sec'} isLightVariant={isLightVariant} />
            </div>
        </div>
    );
};

export default Countdown;
