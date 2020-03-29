import Head from "next/head";
import Link from "next/link";
import TypeSearch from "../components/TypeSearch";
import styles from "../components/Styles.module.css";

const Type = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Type Search</title>
      </Head>
      <div>
        <h2 className={styles.header2}>Search by Type</h2>
          <p className={styles.paragraph}>Click
            <Link href="/index">
            <a className={styles.otherLink}> here </a>
            </Link>
          to go back.
          </p>
          <div className={styles.nameSearch}>
            <TypeSearch/>
            <h5 className={styles.header5}>Reporting Area</h5>
          </div>
        <div id="reportingArea" className={styles.paragraph}></div>
      </div>
    </div>
  );
}

export default Type;
