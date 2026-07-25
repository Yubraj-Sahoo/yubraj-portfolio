import logo from "../../assets/images/logo.png";

export const Logo = () => {
    return (
        <a
            href="#"
            className="navbar-brand d-flex align-items-center gap-2 nav-brand"
        >
            <img
                src={logo}
                alt="Yubraj Sahoo Logo"
                width="48"
                height="48"
                className="rounded-circle"
            />

            <span className="fw-bold fs-4 text-white">
                Yubraj Sahoo
            </span>
        </a>
    );
};