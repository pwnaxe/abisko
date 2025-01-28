'use client';
import { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.expeditionlapland.com/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: formData
                })
            });

            if (response.ok) {
                alert(`Wiadomość została wysłana pomyślnie!`);
            } else {
                alert(`Wystąpił błąd podczas wysyłania wiadomości (Status ${response.status}). Spróbuj ponownie.`);
            }
        } catch (error) {
            alert(`Błąd połączenia. Spróbuj ponownie później.
Szczegóły błędu: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-screen w-full bg-[url('/img/contact.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-center">
            <div className="text-white mb-8">
                <h2 className='subtitle uppercase mb-2'>Masz pytania</h2>
                <h1 className="text-3xl mb-10">Skontaktuj się z nami</h1>
                <form className="grid grid-cols-2 gap-4 w-full" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Imię"
                        maxLength="40"
                        required
                        className="p-3 w-full border-2 rounded-2xl focus:outline-4 bg-transparent text-white placeholder-white"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        maxLength="25"
                        required
                        className="p-3 w-full border-2 rounded-2xl focus:outline-4 bg-transparent text-white placeholder-white"
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Temat"
                        maxLength="40"
                        required
                        className="p-3 w-full border-2 rounded-2xl focus:outline-4 bg-transparent text-white placeholder-white col-span-2"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Wiadomość"
                        maxLength="499"
                        required
                        className="p-3 w-full col-span-2 rounded-2xl border-2 focus:outline-4 h-32 bg-transparent text-white placeholder-white"
                    ></textarea>
                    <button
                        type="submit"
                        className={`bg-neutral-200 mx-auto text-black p-3 w-1/2 col-span-2 rounded-2xl hover:bg-neutral-300 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </button>
                </form>
            </div>
            <div className="flex justify-center gap-16 text-white">
                <div className="flex items-center gap-2">
                    <FiPhone size={24} />
                    <span>+48 690 690 690</span>
                </div>
                <div className="flex items-center gap-2">
                    <FiMail size={24} />
                    <span>contact@e-mail.com</span>
                </div>
            </div>
        </div>
    );
}
