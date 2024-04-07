import Link from 'next/link';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import Head from 'next/head';
import styles from 'styles/pages/Error.module.scss';

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>500 - Internal Error</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Section>
        <Container className={styles.center}>
          <h1>Internal Error</h1>
          <p className={styles.errorCode}>500</p>
          <p className={styles.errorMessage}>
            Uh oh, something went wrong. Please try refreshing the page or clearing site data. If the problem persists,
            reach out to let us know!
          </p>
          <p>
            <Link href="/">Go back home</Link>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
