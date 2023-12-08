import { Footer } from "../marginals/Footer";
import { Header } from "../marginals/Header";

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header />
            {children}
            <Footer />
        </main>
    );
};
