import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">SITE WEB DE LEMGHARI HIBA</h1>
            <h2 className="text-xl text-gray-700 mb-8">
                HEY, je suis LEMGHARI Hiba, étudiante à l'EMI. J'ai pu créer ce site en suivant les étapes de la vidéo ci-dessous.
            </h2>
            <div className="aspect-w-16 aspect-h-9 my-8"> {/* Ajoutez la classe my-8 pour définir des marges en haut et en bas */}
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/yHoI0n2VxMU?si=d_Ct-vP5yaiIjcGd"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
            </div>
        </div>
    );
}

export default Home;
