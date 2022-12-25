import React from 'react';

export default function Education(){
    return (
      <div className="flex flex-col items-center mt-16">
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-lg">
        <h3 className="font-bold text-xl mb-2">Quinnipiac University</h3>
        <p className="mb-2">B.S. Data Science and B.A. Political Science</p>
        <p className="mb-2">May 2023</p>
        <p>
        Honors: Honors Program, Alpha Sigma Alpha Honor Society, Gamma Sigma Alpha Honor Society, Dean’s list: Fall 2019, Spring 2020, and Fall 2020
        </p>
        <p>Involvement: Beta Theta Pi – VP of Recruitment, Bobcat Project Management Club – VP of Finance, QTHON – Fundraising Committee Member</p>
      </div>
    </div>
    )
}