import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const hex = params?.hex || "#F27818";
  return redirect(encodeURIComponent(hex));
};

export default function Index() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
