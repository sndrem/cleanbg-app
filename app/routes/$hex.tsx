import type { LinksFunction } from "@remix-run/node";
import SelectColor from "~/components/selectColor";
import styleUrl from "~/styles/hex.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styleUrl }];
};

export default function HexRouting() {
  return (
    <div className="fullscreen flex">
      <SelectColor />
    </div>
  );
}
