import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="text-6xl font-bold mb-4">Contact Me</h2>
      <div className="flex w-5/6 md:w-3/4 lg:w-2/3">
        <div className="w-1/2 p-4 border border-gray-300 rounded-lg">
          <h3 className="font-bold text-2xl mb-2">Ways to Contact Me</h3>
          <ul>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/in/jack-hangen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/johnhangen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li className="mb-2">
              <a href="mailto:jthangen@gmail.com" className="text-blue-500 hover:underline">
                Email
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 p-4 border border-gray-300 rounded-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;


