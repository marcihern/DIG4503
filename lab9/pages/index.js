import Head from "next/head";
import Link from "next/link";
import styles from "../components/Styles.module.css";

const Home = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Pokémon Search</title>
      </Head>
      <div>
        <h2 className={styles.header2}>Pokédex</h2>
        <p className={styles.paragraph}>Filter your search by name, ID, or type by clicking your preferred option below.</p>
        <div className={styles.container}>
          <Link href="/name">
            <a className={styles.link}>Name</a>
          </Link>
          <Link href="/id">
            <a className={styles.link}>ID</a>
          </Link>
          <Link href="/type">
            <a className={styles.link}>Type</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
