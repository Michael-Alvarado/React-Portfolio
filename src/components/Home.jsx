import newProfile from '../assets/images/newProfilePic.jpeg';

const Home = () => {
    return (
        <section id="home" className="xs:mx-auto md:flex md:justify-between md:items-center md:h-full gap-12 py-5 mt-6">
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <h1 className='text-6xl font-itim font-extrabold z-10 text-center text-emerald'>
                    Michael Alvarado
                </h1>
                <p className='mt-10 mb-7 font-itim text-md md:text-lg text-center text-picton-blue'>
                    Hi, I'm Michael Alvarado. I recently completed my Full Stack Software Engineering certification from The University of Texas at Austin. After seven years as a customer success
                    and renewals professional, I've decided to make a career change to software engineering. With my certification in hand and BS in Computer Science from Texas State, I'm well
                    equipped to tackle this new field. In addition to the gained technical skills, I have over five years of managerial experience, including two years of second line management
                    experience, making me a strong leader and team player. I'm excited to bring my skills and experience to a new role in software development. 
                </p>
                <p className='mb-7 font-itim text-md md:text-lg text-center text-picton-blue'>
                Please take a look at the links provided at the top to view my portfolio and learn more about my work history. If you have any questions, please don't hesitate to reach out to me. 
                </p>
            </div>
            <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                <img alt="profile" className="w-full max-w-[350px] md:max-w-[600px]" src={newProfile} />
            </div>
        </section>
    );
};

export default Home;