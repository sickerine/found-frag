import "/styles/global.css"
import styles from "/styles/main.module.css"
import bg from "/images/top.png"
import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Children } from "react";

const inter = Inter();

function MainLayout({children})
{
    return (
        <html className={inter.className} lang="en">
            <Head>
                <title>Home</title>
            </Head>
            <body>
                <nav></nav>
                {children}
            </body>
        </html>
    )
}

export default MainLayout