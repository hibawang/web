import React from 'react';
import { FaBirthdayCake, FaPhone, FaEnvelope, FaLinkedin, FaPython, FaDatabase, FaCloud, FaNetworkWired, FaBriefcase, FaLanguage, FaUsers } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-8 shadow-md">
            <div className="container mx-auto flex flex-col items-center justify-center">
            <img src={require("./WhatsApp Image 2024-05-07 at 22.59.08.jpeg")} alt="Photo de Hiba Lemghari" className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4" />


                <h1 className="text-3xl font-semibold">LEMGHARI Hiba</h1>
                <div className="flex items-center text-sm mt-2">
                    <p className="flex items-center mr-4 text-white"><FaBirthdayCake className="mr-1" /> 21 ans</p>
                    <p className="flex items-center mr-4 text-white"><FaPhone className="mr-1" /> 064785855555</p>
                    <p className="flex items-center mr-4 text-white"><FaEnvelope className="mr-1" /> <a href="mailto:hibalemghari0@gmail.com" className="text-white hover:underline">hibalemghari0@gmail.com</a></p>
                    <p className="flex items-center text-white"><FaLinkedin className="mr-1" /> <a href="https://www.linkedin.com/in/hiba-lemghari-613261248" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">LEMGHARI HIBA</a></p>
                </div>
            </div>
        </header>
    );
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-800 pb-2 mb-4">{children}</h2>
    );
}

const SectionContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mb-6">{children}</div>
    );
}

const ListItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className="flex items-center mb-2">
            <i className="fas fa-check text-blue-400 mr-2"></i>
            {children}
        </li>
    );
}

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center py-4 rounded-b-lg shadow-md">
            <p>Édité par : Lemghari Hiba</p>
            <p>Dernière mise à jour : <span id="dateMiseAJour">{new Date().toLocaleDateString('fr-FR')}</span></p>
            <p>&copy; 2024</p>
        </footer>
    );
}

const Cv = () => {
    return (
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
            <Header />
            <main className="p-8">
                <SectionContent>
                    <SectionHeading>Étudiante Ingénieure en Réseaux et Télécoms</SectionHeading>
                </SectionContent>
                
                <SectionContent>
                    <SectionHeading>Objectif Professionnel</SectionHeading>
                    <p>Étudiante ingénieure en Réseaux et Télécoms à l’École Mohammadia d’Ingénieurs. Je suis à la recherche d’un stage ingénieur de 6 à 8 semaines. J’aimerais apporter ma passion, mes connaissances, ma rigueur, et un œil neuf sur le domaine professionnel.</p>
                </SectionContent>

                <SectionContent>
                    <SectionHeading>Formation et Diplômes</SectionHeading>
                    <ul className="list-disc list-inside">
                        <ListItem>Baccalauréat sciences mathématiques A, Option Française au Groupe Scolaire Misbah (2019-2020)</ListItem>
                        <ListItem>Classes Préparatoires aux Grandes Écoles, Lycée Mohamed V - Casablanca, filière Mathématiques-Physique (2020-2022)</ListItem>
                        <ListItem>Première année en Génie Électrique à l’École Mohammadia d’Ingénieurs (2022-2023)</ListItem>
                        <ListItem>Deuxième année en Génie Électrique - Option Réseaux et Télécommunications à l’École Mohammadia d’Ingénieurs (2023-2024)</ListItem>
                    </ul>
                </SectionContent>

                <SectionContent>
                    <SectionHeading>Expériences Professionnelles</SectionHeading>
                    <ul className="list-disc list-inside">
                        <ListItem><FaBriefcase className="text-blue-400 mr-2" />Stage d'observation à MARSA MAROC (2023)</ListItem>
                    </ul>
                </SectionContent>

                <SectionContent>
                    <SectionHeading>Compétences Techniques</SectionHeading>
                    <ul className="list-disc list-inside">
                        <ListItem><FaPython className="text-blue-400 mr-2" />Python, C++, Matlab</ListItem>
                        <ListItem><FaCloud className="text-blue-400 mr-2" />Cloud computing et virtualisation</ListItem>
                        <ListItem><FaDatabase className="text-blue-400 mr-2" />Bases de données SQL et NoSQL</ListItem>
                        <ListItem><FaNetworkWired className="text-blue-400 mr-2" />Réseaux informatiques : Switching et routage</ListItem>
                    </ul>
                </SectionContent>

                <SectionContent>
                    <SectionHeading>Compétences Linguistiques</SectionHeading>
                    <ul className="list-disc list-inside">
                        <ListItem><FaLanguage className="text-blue-400 mr-2" />Français : Bilingue</ListItem>
                        <ListItem><FaLanguage className="text-blue-400 mr-2" />Arabe : Bilingue</ListItem>
                        <ListItem><FaLanguage className="text-blue-400 mr-2" />Anglais : Bon niveau</ListItem>
                    </ul>
                </SectionContent>

                <SectionContent>
                    <SectionHeading>Expériences Associatives</SectionHeading>
                    <ul className="list-disc list-inside">
                        <ListItem><FaUsers className="text-blue-400 mr-2" />Membre du club sportif EMISPORT de l’École Mohammadia d’Ingénieurs (2022 - 2024)</ListItem>
                    </ul>
                </SectionContent>
            </main>
            <Footer />
        </div>
    );
}

export default Cv;

