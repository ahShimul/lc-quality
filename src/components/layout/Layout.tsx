import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { StickyCallBar } from "./StickyCallBar";

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
            <StickyCallBar />
        </>
    );
}
