import Head from 'next/head';

import styles from '../styles/ComingSoon.module.css';

const ComingSoon = () =>{
    return(
        <div className={styles.container}>
            <Head>
                <title>Coming Soon!</title>
                <meta name="description" content="ByteVault coming soon!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default ComingSoon;