import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
    return (
        <Layout>
            <div className={utilStyles.center}>
                <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
                <p className={utilStyles.headingMd}>
                    Oops! The page you're looking for doesn't seem to exist.
                </p>
            </div>
        </Layout>
    );
}