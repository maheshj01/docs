import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Navbar from '../components/Navbar';
import styles from './index.module.css';
import '../components/Posts/posts.module.css';
import Layout from '@theme/Layout';
import BlogList from '../components/Posts';

function HomepageHeader() {
  return (
    // Add a docs-only header
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Docs</h1>
        <p className="hero__subtitle">Under Construction</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="./docs/navbar_router">
            Navbar Router
          </a>
          {/* space */}
          <div style={{ width: '10px', height: '10px' }}></div>
          <a
            className="button button--secondary button--lg"
            href="https://twitter.com/maheshmnj">
            Twitter
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const allPosts = siteConfig.customFields.allPosts;
  console.log("allPosts", allPosts.length);
  return <>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  </>
}


export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="button button--secondary button--sm  ">
      {props.children}
    </button>
  );
}

export function Footer() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('footer', styles.footer)}>
    </div>
  );
}

export function PageLayout(props) {
  return (
    <div className="App">
      <Navbar
        title={props.title}
      />
      {props.children}
      <Footer />
    </div>
  )
}