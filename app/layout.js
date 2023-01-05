import "/styles/global.css"
import styles from "/styles/main.module.css"

function MainLayout({children})
{
    return (
        <html lang="en">
            <head/>
            <body>
                <div className={styles.main_header}>
                    <article>
                        
                    </article>
                </div>
                <main>
                    <article>
                        {children}
                    </article>
                </main>
            </body>
        </html>
    )
}

export default MainLayout