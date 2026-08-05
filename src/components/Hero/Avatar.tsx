import type {AppInfo} from "../../types";

interface Props {
    item: AppInfo;
}

export const Avatar = ({item}: Props) => {
    return (
        <section className="avatar-container">
            <img
                src={item.avatar}
                alt="Avatar"
                className="avatar-image"
            />
        </section>
    );
};