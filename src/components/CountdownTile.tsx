import { CountdownTileProps } from '@/types';
import { cn } from '../utils/tailwindUtilities';

const CountdownTile: React.FC<CountdownTileProps> = ({ title, subtitle }) => {
    return (
        <div className={cn('rounded-xl bg-dark p-4')}>
            <h1 className="text-white">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default CountdownTile;
