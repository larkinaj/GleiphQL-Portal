import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GitHubButton from 'react-github-btn'


const Footer = () => {
  return (
    <footer className='h-1/2 screen flex flex-col items-center justify-end p-4'>
      <h2
        data-cy='footer-title'
        className='underline-offset-8 text-5xl font-extrabold mb-10'>
          Want to Contribute? 
      </h2>
      <p
        data-cy='footer-body'
        className='text-xl'>
          Join us and help developers secure and monitor their GraphQL endpoints.
      </p>
      <p className='flex flex-row justify-center desktop:p-10 desktop:m-10 my-5'>
        <a
          data-cy='github-btn'
          href='https://github.com/oslabs-beta/GleiphQL' 
          target='_blank' rel='noopener noreferrer' className='mr-4'>
          <FaGithub size={64} className='github-icon'/>
        </a>
        <a
          data-cy='linkedIn-btn'
          href='https://www.linkedin.com/company/gleiphql/' target='_blank' rel='noopener referrer' className='ml-4'>
          <FaLinkedin size={64} className='linkedin-icon'/>
        </a>
      </p>
      <p>Star us on Github!</p>
      <GitHubButton href='https://github.com/oslabs-beta/GleiphQL' data-size='large' data-show-count='true' aria-label='Star oslabs-beta/GleiphQL on GitHub'>Star</GitHubButton>
      <p className='flex justify-center items-center text-lg align-baseline mt-20 py-2 px-5 border-t-2 border-slate-300 w-full'>
        <small>Copyright © 2023 GleiphQL + OSLabs. Distributed under the ISC License - All rights reserved</small>
      </p>
    </footer>
  );
};

export default Footer;