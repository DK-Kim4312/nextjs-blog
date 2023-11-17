import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Passionate Developer, Student, and Explorer interested in Web development, Backend solutions, and AI</p>
        <p>
          Skills: JavaScript, TypeScript, HTML, CSS, Java, C, Python, React.js, Node.js, MySQL, MongoDB
        </p>
        <p>
          Professional Experiences:
          Intern Developer at Onion Communications, Database Manager at Daeho International
        </p>
        <p>
          Connect with me on <a href="https://www.linkedin.com/in/dk-kim4312" target="_blank" rel="noopener noreferrer">LinkedIn</a> and check out my work on <a href="https://github.com/DK-Kim4312" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}