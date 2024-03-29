import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Navbar from '../components/Navbar';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import AnnouncementBar from "../components/common/announcement";
import { useLocation } from 'react-router-dom';

function HomepageHeader() {
  const cardData = [
    { title: 'navbar_router', link: '/navbar_router' },
    // { title: 'Package 2', link: '/package2' },
    // Add more cards as needed
  ];
  const coursesData = [
    { title: 'Git and Github', link: '/git-tutorial' },
    // { title: 'Package 2', link: '/package2' },
    // Add more cards as needed
  ];
  return (
    <div className="flex-col justify-start m-4">
      <div className="flex-col">
        <div className="flex">
          <p className="text-3xl font-bold text-center">Packages</p>
        </div>
        <CardGrid
          data={cardData}
        />
      </div>
      <div className="mt-6">
        <div className="flex">
          <p className="text-3xl font-bold text-center">Knowledge Base</p>
        </div>
        <CardGrid
          data={coursesData}
        />
      </div>
    </div>
  );
}
// New component for the grid of clickable cards
const CardGrid = ({ data }) => {

  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((card, index) => (
          <div key={index} className='bg-primary rounded-lg shadow-lg hover:scale-105 duration-1000'>
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
  const location = useLocation();
  const currentRouteName = location.pathname;
  return <>
    {/* {currentRouteName === '/git-tutorial' && ( */}
    <AnnouncementBar text="The Git & Github Guide is still in work, Please check back later." />
    {/* )} */}
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