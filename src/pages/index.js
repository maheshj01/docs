import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Navbar from '../components/Navbar';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <div className="flex-col justify-start m-4">
      <div className="flex-col">
        <div className="flex">
          <p className="text-3xl font-bold text-center">Packages</p>
        </div>
        <CardGrid />
      </div>
      <div className="mt-6">
        <div className="flex">
          <p className="text-3xl font-bold text-center">Courses</p>
        </div>
      </div>
    </div>
  );
}
// New component for the grid of clickable cards
const CardGrid = () => {
  // Replace this with your actual card data
  const cardData = [
    { title: 'navbar_router', link: '/open-source/navbar_router' },
    // { title: 'Package 2', link: '/package2' },
    // Add more cards as needed
  ];

  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:scale-105 duration-1000'>
        {cardData.map((card, index) => (
          <div key={index} className='bg-primary rounded-lg shadow-lg'>
            <Link to={card.link}>
              <div className='flex h-36 justify-center items-center'>
                <p className='text-xl font-medium text-gray-900'>{card.title}</p>
              </div>
            </Link>
          </div>))}
      </div>
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