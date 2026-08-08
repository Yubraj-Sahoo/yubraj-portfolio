import type { AppInfo } from '../../types';

interface Props {
  item: AppInfo;
}

export const HeroContent = ({ item }: Props) => {
  return (
    <>
      <p className={`text-secondary`}>{item.application.greetings}</p>
      <h1 className={`hero-name`}>{item.personal.name}</h1>
      <br />
      <h4 className={`hero-role`}>{item.professional.role}</h4>
      <br />
      <span className={`bg-info-subtle p-1 rounded-2 text-primary fw-bold`}>
        {item.professional.experience}
      </span>
      <p className={`hero-tagline mt-3`}>{item.content.tagline}</p>
    </>
  );
};