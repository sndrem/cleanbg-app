import { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import indexSrc from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: indexSrc }];
};

const farger = [
  {
    navn: "Varm oransje",
    hex: "#F57917",
  },
  {
    navn: "Dus oransje",
    hex: "#FAB478",
  },
  {
    navn: "Rolig blå",
    hex: "#7DC6F5",
  },
];

function Hello() {
  return (
    <div className="intro-container">
      <h1 className="tittel">Velg en farge</h1>
      <ul className="farger">
        {farger.map((farge) => {
          return (
            <li key={farge.hex}>
              <Link
                className="farge"
                style={{ background: farge.hex }}
                to={`${encodeURIComponent(farge.hex)}`}
              >
                {farge.navn}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Index() {
  return (
    <div>
      <Hello />
      <Outlet />
    </div>
  );
}
