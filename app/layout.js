import "/styles/global.css"
import Link from 'next/link';
import { Poppins } from '@next/font/google';
import Script from 'next/script';

const fnt = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

function MainLayout({ children }) {
    return (
        <html className={fnt.className} lang="en">
            {/* <Head>
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