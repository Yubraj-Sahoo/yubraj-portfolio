import {ABOUT_CONTENT, APP_INFO} from '../../../data';
import {Button} from '../../../components/ui';

export const Content = () => {
    return (
        <div>
            <p className="section__eyebrow">{ABOUT_CONTENT.eyebrow}</p>
            <h2 className="section__title">{ABOUT_CONTENT.title}</h2>
            <span className="section__title-line" aria-hidden="true"/>

            <div className="about-section__copy">
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                    <p key={paragraph} className={index === ABOUT_CONTENT.paragraphs.length - 1 ? 'mb-0' : undefined}>
                        {paragraph}
                    </p>
                ))}
            </div>

            {
                APP_INFO.config.enableExperience && (
                    <Button href={ABOUT_CONTENT.ctaHref} size="md" radius="circle-1" className="about-section__button">
                        {ABOUT_CONTENT.ctaLabel}
                    </Button>
                )
            }

        </div>
    );
};
