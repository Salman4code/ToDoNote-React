import Head from "next/head";
import Image from "next/image";
import React from "react";
import Login from "../components/login";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Encora Notes</title>
      </Head>
      {/* <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          G Notes
        </a>
      </nav>
      <div className="row">
        <div className="col-lg-4">Test</div>
        <div className="col-lg-6">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
      </div> */}
      <Login></Login>

      {/* </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
