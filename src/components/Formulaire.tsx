import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    nom: string;
    prenom: string;
    age: string;
    email: string;
    titreCV: string;
    objectif: string;
    typeDiplome: string;
    contenuSectionEdu: string;
    contenuSectionExp: string;
    contenuSectionSkills: string;
    contenuSectionLang: string;
    image: File | null;
}

interface FormErrors {
    [key: string]: string;
}

 const Formulaire: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        nom: '',
        prenom: '',
        age: '',
        email: '',
        titreCV: '',
        objectif: '',
        typeDiplome: '',
        contenuSectionEdu: '',
        contenuSectionExp: '',
        contenuSectionSkills: '',
        contenuSectionLang: '',
        image: null,
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const validateField = (name: string, value: string) => {
        let error = '';
        const nameRegex = /^[A-Z]+$/;
        const firstNameRegex = /^[A-Z][a-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|fr)$/;
        const cvTitleRegex = /^[^\d\W]+$/;
        const objectiveRegex = /^[^\d\W]+$/;
        const sectionTitleRegex = /^[^\d\W]+$/;

        switch (name) {
            case 'nom':
                if (!nameRegex.test(value)) {
                    error = "Le nom doit être en majuscules et ne contenir aucun chiffre ou caractère spécial.";
                }
                break;
            case 'prenom':
                if (!firstNameRegex.test(value)) {
                    error = "Le prénom doit commencer par une majuscule et ne contenir aucun chiffre ou caractère spécial.";
                }
                break;
            case 'age':
                if (isNaN(Number(value)) || Number(value) < 18) {
                    error = "L'âge doit être un nombre supérieur ou égal à 18 ans.";
                }
                break;
            case 'email':
                if (!emailRegex.test(value)) {
                    error = "L'email doit être valide et se composer de caractère + '@' + caractère + '.com' ou '.fr'.";
                }
                break;
            case 'titreCV':
                if (!cvTitleRegex.test(value)) {
                    error = "Le titre du CV ne doit pas contenir de chiffres ou de caractères spéciaux.";
                }
                break;
            case 'objectif':
                if (!objectiveRegex.test(value)) {
                    error = "L'objectif professionnel ne doit pas contenir de chiffres ou de caractères spéciaux.";
                }
                break;
            case 'contenuSectionEdu':
                if (!sectionTitleRegex.test(value)) {
                    error = "Le titre de la section 'Éducation' ne doit pas contenir de chiffres ou de caractères spéciaux.";
                }
                break;
            case 'contenuSectionExp':
                if (!sectionTitleRegex.test(value)) {
                    error = "Le titre de la section 'Expérience Professionnelle' ne doit pas contenir de chiffres ou de caractères spéciaux.";
                }
                break;
            // Ajoutez des validations pour les autres sections ici si nécessaire
            default:
                break;
        }

        setFormErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files ? e.target.files[0] : null;
        setFormData({
            ...formData,
            image: imageFile,
        });
    };

    const handleTypeDiplomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const typeDiplomeValue = e.target.value;
        setFormData({
            ...formData,
            typeDiplome: typeDiplomeValue,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Réinitialiser les messages d'erreur
        const errors: FormErrors = {};

        // Valider tous les champs lors de la soumission
        Object.keys(formData).forEach(field => {
            const value = formData[field as keyof FormData];
            if (typeof value === 'string') {
                validateField(field, value);
            }
        });
        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">Formulaire de Création de CV</h1>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom :</label>
                        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                        {formErrors.nom && <p className="text-red-500">{formErrors.nom}</p>}
                    </div>
                    <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom :</label>
                        <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                        {formErrors.prenom && <p className="text-red-500">{formErrors.prenom}</p>}
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Âge :</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                        {formErrors.age && <p className="text-red-500">{formErrors.age}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="titreCV" className="block text-sm font-medium text-gray-700">Titre du CV :</label>
                        <input type="text" id="titreCV" name="titreCV" value={formData.titreCV} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                        {formErrors.titreCV && <p className="text-red-500">{formErrors.titreCV}</p>}
                    </div>
                    <div>
                        <label htmlFor="objectif" className="block text-sm font-medium text-gray-700">Objectif :</label>
                        <textarea id="objectif" name="objectif" value={formData.objectif} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        {formErrors.objectif && <p className="text-red-500">{formErrors.objectif}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Type de diplôme :</label>
                        <div className="mt-2">
                            <div>
                                <input
                                    type="radio"
                                    id="licence"
                                    name="typeDiplome"
                                    value="Licence"
                                    checked={formData.typeDiplome === "Licence"}
                                    onChange={handleTypeDiplomeChange}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="licence" className="ml-2 text-sm text-gray-700">Licence</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="master"
                                    name="typeDiplome"
                                    value="Master"
                                    checked={formData.typeDiplome === "Master"}
                                    onChange={handleTypeDiplomeChange}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="master" className="ml-2 text-sm text-gray-700">Master</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="doctorat"
                                    name="typeDiplome"
                                    value="Doctorat"
                                    checked={formData.typeDiplome === "Doctorat"}
                                    onChange={handleTypeDiplomeChange}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <label htmlFor="doctorat" className="ml-2 text-sm text-gray-700">Doctorat</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="contenuSectionEdu" className="block text-sm font-medium text-gray-700">Éducation :</label>
                        <textarea id="contenuSectionEdu" name="contenuSectionEdu" value={formData.contenuSectionEdu} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        {formErrors.contenuSectionEdu && <p className="text-red-500">{formErrors.contenuSectionEdu}</p>}
                    </div>
                    <div>
                        <label htmlFor="contenuSectionExp" className="block text-sm font-medium text-gray-700">Expérience Professionnelle :</label>
                        <textarea id="contenuSectionExp" name="contenuSectionExp" value={formData.contenuSectionExp} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        {formErrors.contenuSectionExp && <p className="text-red-500">{formErrors.contenuSectionExp}</p>}
                    </div>
                    <div>
                        <label htmlFor="contenuSectionSkills" className="block text-sm font-medium text-gray-700">Compétences :</label>
                        <textarea id="contenuSectionSkills" name="contenuSectionSkills" value={formData.contenuSectionSkills} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        {formErrors.contenuSectionSkills && <p className="text-red-500">{formErrors.contenuSectionSkills}</p>}
                    </div>
                    <div>
                        <label htmlFor="contenuSectionLang" className="block text-sm font-medium text-gray-700">Langues :</label>
                        <textarea id="contenuSectionLang" name="contenuSectionLang" value={formData.contenuSectionLang} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required></textarea>
                        {formErrors.contenuSectionLang && <p className="text-red-500">{formErrors.contenuSectionLang}</p>}
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Télécharger une image :</label>
                        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Formulaire;