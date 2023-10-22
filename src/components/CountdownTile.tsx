import { cn } from '../utils/tailwindUtilities';

const CountdownTile = ({ title, subtitle }) => {
    return (
        <div className={cn('bg-dark rounded-xl p-4')}>
            <h1 className="text-white">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default CountdownTile;
