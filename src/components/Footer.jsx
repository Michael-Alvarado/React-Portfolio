import * as Unicons from '@iconscout/react-unicons';

const Footer = () => {
    return (
        <footer className="w-full justify-center text-center bg-night pt-4 pb-4">
            <p className="font-itim text-picton-blue text-2xl">
            © 2023 by Michael Alvarado
            </p>
            <br />
            <div className="md:flex justify-center gap-8 text-center text-3xl" style={{display: 'inline-flex'}}>
                <a className="hover:text-light-rose text-picton-blue hover:scale-110 transition duration-500 p-2" href="https://github.com/Michael-Alvarado/" target='_blank' rel='noreferrer'>
                    <Unicons.UilGithub size='45' />
                </a>
                <a className="hover:text-light-rose text-picton-blue hover:scale-110 transition duration-500 p-2" href="https://www.linkedin.com/in/alvaradomichael/" target='_blank' rel='noreferrer'>
                    <Unicons.UilLinkedin size='45' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;