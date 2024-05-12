import { CountdownTileProps } from '@/types';

const CountdownTile: React.FC<CountdownTileProps> = ({ title, subtitle, isLightVariant }) => {
    return (
        <div className={`rounded-xl p-4 ${isLightVariant ? 'bg-lightBlue/25' : 'bg-dark'}`}>
            <h1 className={isLightVariant ? 'text-accentBlue' : 'text-white '}>{title}</h1>
            <p className="font-KumbhBold">{subtitle}</p>
        </div>
    );
};

export default CountdownTile;
