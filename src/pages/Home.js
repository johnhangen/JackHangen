import React from 'react';


const Home = () => {
    return (
      <div className="flex flex-col items-center p-4">
      <div className="flex w-full md:w-1/2">
        <img src={require('./test.jpg')} alt="portfolio" className="rounded-full w-1/2" />
        <div className="w-1/2 pl-4">
          <h1 className="text-2xl font-bold mb-2">About me</h1>
          <p className="text-lg">
          Senior with 1+ years of internship experience in data science seeking spring internship and full‑time opportunity in data analytics and political science.
Excellent technical skills, interpersonal skills, attention to detail, and ability to perform at a high level in fast‑paced environments.
          </p>
        </div>
      </div>
    </div>
    );
}

export default Home
