import {APP_INFO} from "../../data/app.ts";

/**
 * Logo for navbar.
 *
 * @constructor
 */
export const Logo = () => {
    return (
        <>
            <a className={`navbar-brand logo`} href="#">
                <img src={APP_INFO.logo} alt="Logo" width="50" height="40"
                     className="d-inline-block align-text-top"/>
                <span className={`navbar-brand-text`}>
                    {APP_INFO.name}
                </span>
            </a>
        </>
    );
};
