import "/styles/global.css"
import styles from "/styles/main.module.css"
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import { Children } from "react";

const fnt = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

function MainLayout({ children }) {
    return (
        <html className={fnt.className} lang="en">
            {/* <Head>
                <title>Home</title>
            </Head> */}
            <body>
                <nav>
                    <Link href="/">Home</Link>
                </nav>
                {children}
            </body>
        </html>
    )
}

export default MainLayout