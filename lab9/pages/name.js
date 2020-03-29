import Head from "next/head";
import Link from "next/link";
import NameSearch from "../components/NameSearch";
import styles from "../components/Styles.module.css";

const Name = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Name Search</title>
      </Head>
      <div>
        <h2 className={styles.header2}>Search by Name</h2>
          <p className={styles.paragraph}>Click
            <Link href="/index">
            <a className={styles.otherLink}> here </a>
            </Link>
          to go back.
          </p>
          <div className={styles.nameSearch}>
            <NameSearch/>
            <h5 className={styles.header5}>Reporting Area</h5>
          </div>
        <div id="reportingArea" className={styles.paragraph}></div>
      </div>
    </div>
  );
}

export default Name;
