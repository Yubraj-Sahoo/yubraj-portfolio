import type { AppInfo } from '../../types';

interface Props {
  item: AppInfo;
}

export const HeroContent = ({ item }: Props) => {
    return (
        <>
            <span className="hero-experience">{item.professional.experience}</span>
            <p className="hero-greeting">{item.application.greetings}</p>
            <h1 className="hero-name">{item.personal.name}</h1>
            <h4 className="hero-role">{item.professional.role}</h4>
            <p className="hero-tagline">{item.content.tagline}</p>
        </>
  );
};
