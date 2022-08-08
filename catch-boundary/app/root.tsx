import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        {/* All link exports on all routes will go here */}
        <Links />
      </head>
      <body>
        {/* Child routes go here */}
        <Outlet />
        <ScrollRestoration />
         {/* Manages scroll position for client-side transitions */}
        <Scripts />
        {/* Script tags go here */}
        <LiveReload />
      </body>
    </html>
  );
}
