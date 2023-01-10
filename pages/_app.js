import '../styles/global.css'
import { Poppins } from '@next/font/google';
import Link from 'next/link';

const fnt = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

function MyApp({ Component, pageProps }) {
    return (
        <main id="main" className={fnt.className}>
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp;