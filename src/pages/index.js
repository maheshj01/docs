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
    <header className={`${styles.heroBanner}`}>
      {/* <div className="coverimage">
        <img src="https://github.com/maheshmnj/blog/assets/31410839/610df08c-44ff-4358-b867-a3d781c4087e" alt="cover" />
      </div> */}
      <p style={{
        fontSize: '1.4rem',
      }}> Hello there! I'm Mahesh. Welcome to my personal blog. Here, I share my insights and reflections on life, career and code. Everything I have ever written on the web at one place.<br /> Feel free to explore and enjoy!</p>
      {/* <h2 className={styles.gradient}>Almost ready giving final touch come back soon!</h2> */}
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            window.open("https://maheshjamdade.com/", "_blank")
          }}>About Me</Button>
        <div style={{ width: 20 }}></div>
        <Button
          onClick={() => {
            window.open("https://twitter.com/maheshmnj", "_blank")
          }}
          className={styles.button}>Twitter</Button>
      </div>
    </header >
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
      <BlogList />
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