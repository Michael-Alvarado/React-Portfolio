import { Image } from '@vechaiui/react';

const Home = () => {
    return (
        <div className="flex flex-wrap w-full p-4 space-x-4">
            <Image
                alt="bruce wayne"
                htmlWidth={100}
                htmlHeight={50}
                className="object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />
        </div>
    )
}



export default Home;