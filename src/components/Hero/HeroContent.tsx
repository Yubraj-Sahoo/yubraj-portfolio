import type {AppInfo} from "../../types";

interface Props {
    item: AppInfo
}

export const HeroContent = ({item}: Props) => {
    return (
        <>
            <p className={`text-secondary`}>
                {item.greetings}
            </p>
            <h1 className={`hero-name`}>
                {item.name}
            </h1>
            <br/>
            <h4 className={`hero-role`}>
                {item.role}
            </h4>
            <br/>
            <span className={`bg-info-subtle p-1 rounded-2 text-primary fw-bold`}>
                {item.experience}
            </span>
            <p className={`hero-tagline mt-3`}>
                {item.tagline}
            </p>
        </>
    );
};
