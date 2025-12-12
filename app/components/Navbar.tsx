import { NavLink, useLocation } from "react-router";

const ROUTES = [
  { path: "/", name: "Home", icon: HomeIcon },
  { path: "/resume", name: "Resume", icon: FileIcon },
  { path: "/contact", name: "Contact", icon: ContactIcon },
];

export function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-bg-wrapper">
          <div className="navbar-bg-bubbles">
            {ROUTES.map((route, index) => (
              <div
                key={index}
                className={`navbar-bg-bubble ${
                  location.pathname === route.path ? "active" : ""
                }`}
              />
            ))}
          </div>
          <div className="navbar-bg-base" />
        </div>

        <div className="navbar-bubbles">
          {ROUTES.map((route, index) => (
            <div
              key={index}
              className={`navbar-bubble ${
                location.pathname === route.path ? "active" : ""
              }`}
            >
              <route.icon />
            </div>
          ))}
        </div>

        <div className="navbar-menu">
          {ROUTES.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className={`navbar-menu-item`}
              viewTransition
            >
              <route.icon />
            </NavLink>
          ))}
        </div>
      </nav>

      {/* SVG Filter for gooey effect - tuned for smooth, elegant animation */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}
