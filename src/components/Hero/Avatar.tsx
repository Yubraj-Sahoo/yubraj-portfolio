import type { AppInfo } from '../../types';

interface Props {
  item: AppInfo;
}

export const Avatar = ({ item }: Props) => {
  return (
    <section className="avatar-container" aria-label={`${item.personal.name} portrait`}>
      <div className="avatar-container__glow" aria-hidden="true"/>
      <span className="avatar-container__orbit avatar-container__orbit--top" aria-hidden="true"/>
      <span className="avatar-container__orbit avatar-container__orbit--bottom" aria-hidden="true"/>
      <div className="avatar-container__frame">
        <img src={item.personal.avatar} alt="Avatar" className="avatar-image" />
      </div>
    </section>
  );
};
