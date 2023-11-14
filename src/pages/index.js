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
    < header className={clsx('hero hero--primary', styles.heroBanner)} >
      <div className="container">
        <h4 className="hero__title">Packages</h4>
        <p className="hero__title">Under Construction</p>
      </div>
    </header >

  );
}


// New component for the grid of clickable cards
const CardGrid = () => {
  // Replace this with your actual card data
  const cardData = [
    { title: 'navbar_router', link: '/docs/navbar_router' },
    // { title: 'Package 2', link: '/package2' },
    // Add more cards as needed
  ];

  return (
    <div className='bg-purple-100'>
      {cardData.map((card, index) => (
        <a key={index} href={card.link} className={styles.card}>
          <h2>{card.title}</h2>
        </a>
      ))}
    </div>
  );
};


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const allPosts = siteConfig.customFields.allPosts;
  console.log("allPosts", allPosts.length);
  return <>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div className={styles.gradientBackground}>
        <CardGrid />
      </div>
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