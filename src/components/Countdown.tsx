import CountdownTile from './CountdownTile';

const Countdown = () => {
    return (
        <div className={'flex flex-col gap-4'}>
            <h3 className="text-left">
                Coming <span className="text-accentBlue">4 NOV 2020</span>
            </h3>
            <div className={'flex gap-4'}>
                <CountdownTile title={'47'} subtitle={'days'} />
                <CountdownTile title={'07'} subtitle={'hours'} />
                <CountdownTile title={'56'} subtitle={'min'} />
                <CountdownTile title={'14'} subtitle={'sec'} />
            </div>
        </div>
    );
};

export default Countdown;
