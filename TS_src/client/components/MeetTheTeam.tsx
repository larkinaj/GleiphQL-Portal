import ProfileCard from './ProfileCard';
import { Element } from 'react-scroll';
import { ProfileCardProps } from '../../types';
import { Slide, Fade } from 'react-awesome-reveal';
import JDong from '../../images/JDong.png'
import ALarkin from '../../images/ALarkin.jpg';
import KPhan from '../../images/KPhan.jpg';
import YYoon from '../../images/YYoon.jpg';


const profileCards: ProfileCardProps[] = [
  {
    imageSrc: JDong,
    memberName: 'Jiecheng Dong',
    githubLink: 'https://github.com/jiedong111',
    linkedinLink: 'https://www.linkedin.com/in/jiecheng-dong-1522b8248/',
    memberBio: `A part-time artist whose drawings rival that of Leonardo da Vinci.
    With an eloquent vocabulary that flows like an ocean, 
    this engineer's linguistic prowess and artistic depth will undoubtedly leave you awe-inspired!`
  },
  {
    imageSrc: ALarkin,
    memberName: 'Andrew Larkin',
    githubLink: 'https://github.com/larkinaj',
    linkedinLink: 'https://www.linkedin.com/in/andrew-larkin-71395940/',
    memberBio: `Meet our Bolivian hot shot, the technical support maestro with an army of skills! With 6 years of service under his belt,
    he's a full-stack mogul who can fix any glitch and conquer any coding challenge with a smile that could charm even the toughest bugs!`
  },
  {
    imageSrc: KPhan,
    memberName: 'Kevin Phan',
    githubLink: 'https://github.com/KP824',
    linkedinLink: 'https://www.linkedin.com/in/kp824/',
    memberBio: `Presenting our "Rave-Hiker Extraordinaire"! By day, they are a full-stack problem-solving virtuoso.
    But when the sun sets, they transform into the life of the party, embracing their love for  electronic dance music.
    So whether they're coding or dancing under the neon lights, they're sure to leave you impressed and inspired!`
  }, 
  {
    imageSrc: YYoon,
    memberName: 'Yeong Sil Yoon',
    githubLink: 'https://github.com/wendyys96',
    linkedinLink: 'https://www.linkedin.com/in/yeong-sil-yoon/',
    memberBio: `Introducing the unstoppable force of tech and tunes!
    🎤🔧 Our 24/7 hustler doubles as a Kpop idol, spreading smiles and beats worldwide. 
    But don't be fooled by the dazzling stage presence—this fierce full-stack engineer has an affinity for backend problem-solving skills that'll leave even the toughest bugs shaking in their virtual boots!`
  }
];

const MeetTheTeam = () => {

  return (
    <>
      <Element name='meet-team'>
        <section id='meet-team' className='meetTheTeam-bg min-h-screen flex flex-col justify-center items-center p-10'>
          <Slide>
            <h2 className='text-5xl font-extrabold'><u>Meet the Team</u></h2>
          </Slide>
          <Fade delay={1e3} cascade damping={1e-1}>
            <div className='flex flex-wrap justify-center'>
              {
                profileCards.map((profile : ProfileCardProps) => {
                  const { imageSrc, memberName, githubLink, linkedinLink, memberBio } = profile;
                  return <ProfileCard
                  key = {memberName}
                  imageSrc = {imageSrc}
                  memberName = {memberName}
                  githubLink = {githubLink}
                  linkedinLink = {linkedinLink}
                  memberBio = {memberBio}
                  />
                })
              }
            </div>
          </Fade>
        </section>
      </Element>
    </>
  );
};

export default MeetTheTeam;