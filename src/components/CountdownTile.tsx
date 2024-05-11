import { CountdownTileProps } from '@/types';

const CountdownTile: React.FC<CountdownTileProps> = ({ title, subtitle }) => {
    return (
        <div className={'rounded-xl bg-dark p-4'}>
            <h1 className="text-white">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default CountdownTile;
