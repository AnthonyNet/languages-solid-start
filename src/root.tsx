// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import Navbar from "./components/navbar/Navbar";
import "./root.css";

const styles = {
  nav: 'flex justify-center items-center w-full  min-h-[100px] shadow-xl z-[400] px-4',
  nav__div: 'navDetails w-full h-full flex items-start  relative text-xl ',
  aside: 'logo sm:w-1/3 ',
  article: 'justify-around items-start w-full h-full hidden md:flex',
  nav__ul: 'flex flex-col border-solid border-t-4 border-sky-400 navDetails',

}

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
      
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
             <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
