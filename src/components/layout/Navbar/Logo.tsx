import { APP_INFO } from "../../../models";

interface Props {
  onClick?: () => void;
}

/**
 * Logo for navbar.
 *
 * @constructor
 */
export const Logo = ({ onClick }: Props) => {
  return (
    <>
      <a className={`navbar-brand logo`} href={"#home"} onClick={onClick}>
        <img
          src={APP_INFO.application.logo}
          alt="Logo"
          width="50"
          height="40"
          className="d-inline-block align-text-top"
        />
        <span className={`navbar-brand-text`}>{APP_INFO.personal.name}</span>
      </a>
    </>
  );
};
