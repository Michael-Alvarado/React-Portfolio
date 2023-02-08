import * as Unicons from '@iconscout/react-unicons';
import resume from '../assets/docs/Michael Alvarado Resume.png';
import pdf from '../assets/docs/Michael Alvarado Resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="mt-20 pb-10" >
            <h2 className="font-itim text-center text-picton-blue font-semibold text-4xl p-4">
                My Resume
            </h2>
            <div className="justify-items-center gap-8 text-center">
                <img className="p-4 justify-items-center flex-initial" src={resume} alt='resume' style={{display: 'block', margin: '0 auto'}} />
                <a href={pdf} rel='noreferrer' target='_blank'>
                    <button className='rounded-sm bg-picton-blue mt-4 py-3 px-9 text-lg font-semibold text-charcoal hover:text-magnolia hover:bg-emerald transition duration-500' style={{display: 'inline-flex'}}>
                        Download Resume <Unicons.UilFileDownload />
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Resume;