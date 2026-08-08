import {ABOUT_STATISTICS} from '../../data';
import {Card} from '../common/Card';

export const Statistics = () => {
    return (
        <div className="row row-cols-2 g-3">
            {ABOUT_STATISTICS.map(({icon: Icon, value, label}) => (
                <div className="col" key={label}>
                    <Card size="md" className="h-100">
                        <Icon className="about-statistic__icon" aria-hidden="true"/>
                        <strong className="about-statistic__value">{value}</strong>
                        <span className="about-statistic__label">{label}</span>
                    </Card>
                </div>
            ))}
        </div>
    );
};
