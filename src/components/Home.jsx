import newProfile from '../assets/images/newProfilePic.jpeg';

const Home = () => {
    return (
        <section id="home" className="xs:mx-auto md:flex md:justify-between md:items-center md:h-full gap-12 py-5 mt-6">
            <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                <img alt="profile" className="w-full max-w-[350px] md:max-w-[600px]" src={newProfile} />
            </div>
            <div className='z-30 basis-2/5 mt-12 md:mt-32'>
                <h1 className='text-6xl font-itim font-extrabold z-10 text-center text-emerald'>
                    Michael Alvarado
                </h1>
                <p className='mt-10 mb-7 font-itim tex-xl text-center text-picton-blue'>
                    Hi, I'm Michael Alvarado. I recently completed my Full Stack Web Development certification from The University of Texas at Austin. 
                </p>
            </div>
        </section>
    );
};

export default Home;