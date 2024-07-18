import { CountdownTileProps } from '@/types';

const CountdownTile: React.FC<CountdownTileProps> = ({ digitPair, timeUnit, isLightVariant }) => {
    return (
        <div className={`rounded-xl py-4 flex flex-col justify-center items-center w-[100px] ${isLightVariant ? 'bg-lightBlue/25' : 'bg-dark'}`}>
            <h1 className={isLightVariant ? 'text-accentBlue' : 'text-white '}>{digitPair}</h1>
            <p className="font-KumbhBold text-base">{timeUnit}</p>
        </div>
    );
};

export default CountdownTile;
