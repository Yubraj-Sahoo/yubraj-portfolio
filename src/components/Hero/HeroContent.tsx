import type {AppInfo} from "../../types/app.ts";

interface Props {
    item: AppInfo
}

export const HeroContent = ({item}: Props) => {
    return (
        <>
            <p>
                Hi, I'm
            </p>
            <h1>
                {item.name}
            </h1>
            <h3>
                {item.role}
            </h3>
            <span>
                {item.experience}
            </span>
            <p >
                {item.tagline}
            </p>
        </>
    );
};
