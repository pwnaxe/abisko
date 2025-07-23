import { Nunito } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
})

export default function ConciergeePage() {
  return (
    <>
      <div className="h-[500px] relative flex items-end justify-center bg-[url(/img/concierge_top_banner.png)] bg-bottom bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent -z-0"></div>
        <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2 text-white">
          <p className="text-xl uppercase tracking-[0.2em] text-aquamarine-400 font-semibold">PODRÓŻ SZYTA NA MIARĘ</p>
          <h1 className="text-4xl font-semibold leading-tight">
            Szukasz gotowych
            <br />
            rozwiązań?
          </h1>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Tytuły obok siebie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Co możemy dla Ciebie zrobić?</h2>
            <h2 className="text-3xl font-bold text-gray-800">Jakieś dane</h2>
          </div>
          {/* Dwie kolumny */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lewa kolumna */}
            <div>
              <p className="text-gray-600 mb-6">
                Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed sed tellus.
                Cras eleifend est ac aliquet cursus. Phasellus nulla dolor, tristique vel fringilla sit amet, dictum sed
                arcu. Vivamus massa sapien.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Miejscowi</li>
                <li>Mamy wieloletnie doświadczenie</li>
                <li>Certyfikowani przewodnicy</li>
                <li>Sprawdzone firmy</li>
                <li>Unikalne kierunki</li>
              </ul>
              <p className="text-gray-600">
                Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed sed tellus.
                Cras eleifend est ac aliquet cursus.
              </p>
            </div>
            {/* Prawa kolumna */}
            <div>
              <p className="text-gray-600 mb-6">
                Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed sed tellus.
                Cras eleifend est ac aliquet cursus. Phasellus nulla dolor, tristique vel fringilla sit amet, dictum sed
                arcu. Vivamus massa sapien.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>420 zadowolonych klientów</li>
                <li>1578 zorganizowanych wycieczek</li>
                <li>21 miast, w których organizujemy wycieczki</li>
                <li>Coś o concierge, np. 11 usług</li>
                <li>Możliwa personalizacja (korzyści dla Ciebie)</li>
                <li>Dopasuj dla siebie i dla swojej rodziny wycieczkę</li>
              </ul>
              <p className="font-bold text-gray-600">Rozmawiamy po angielsku, polsku, fińsku, japońsku.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sekcja specjalizacji - jednolite szare tło */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-[1400px]">
          {/* Tytuł nad środkową kolumną */}
          <h2 className="text-3xl font-bold text-midnight-navy-950 text-center mb-12">Nasze specjalizacje</h2>
          {/* Trzy kolumny - pełne obrazki */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Kolumna 1 */}
            <div className="text-center">
              <div className="relative">
                <img
                  src="/img/1kol_cons.png"
                  alt="Wyjazdy szyte na miarę"
                  className="w-full h-[280px] object-cover rounded-3xl"
                />
              </div>
            </div>
            {/* Kolumna 2 */}
            <div className="text-center">
              <div className="relative">
                <img
                  src="/img/2kol_cons.png"
                  alt="Autorskie programy b2b"
                  className="w-full h-[280px] object-cover rounded-3xl"
                />
              </div>
            </div>
            {/* Kolumna 3 */}
            <div className="text-center">
              <div className="relative">
                <img
                  src="/img/3kol_cons.png"
                  alt="Concierge w Laponii"
                  className="w-full h-[280px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
          {/* Trzy kolumny - teksty */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kolumna 1 */}
            <div className="text-left">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Wyjazdy szyte na miarę</h3>
                <p className={`${nunito.className} text-[#00284D] text-base leading-relaxed`}>
                  Od rekomendacji do organizacji.
                  <br />
                  Pomagamy w każdym aspekcie podróży.
                  <br />
                  Tworzymy niezapomniane doświadczenia
                  <br />
                  dostosowane do Twoich potrzeb.
                </p>
              </div>
            </div>
            {/* Kolumna 2 */}
            <div className="text-left">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Autorskie programy b2b</h3>
                <p className={`${nunito.className} text-[#00284D] text-base leading-relaxed`}>
                  Organizujemy wyjazdy firmowe
                  <br />i incentive dla firm z całej Europy.
                  <br />
                  Budujemy zespoły przez wspólne
                  <br />
                  przygody w wyjątkowych miejscach.
                </p>
              </div>
            </div>
            {/* Kolumna 3 */}
            <div className="text-left">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Concierge w Laponii</h3>
                <p className={`${nunito.className} text-[#00284D] text-base leading-relaxed`}>
                  Jesteśmy na miejscu i pomagamy
                  <br />
                  podczas całego pobytu.
                  <br />
                  Zapewniamy wsparcie 24/7
                  <br />w języku polskim i angielskim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00284D] text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-12">
          <p className="text-lg font-medium md:ml-[-40px]">Skontaktuj się z nami, żebyśmy mogli Ci pomóc</p>
          <div className="flex flex-col items-start gap-1">
            <p className="flex items-center text-lg">
              <img src="/img/phone_icon_aqu.png" alt="Phone icon" className="w-5 h-5 mr-2" />
              <span className="text-white font-medium">+48 690 690 690</span>
            </p>
            <p className="flex items-center text-lg">
              <img src="/img/mail_icon_aqu.png" alt="Email icon" className="w-5 h-5 mr-2" />
              <span className="text-white font-medium">kontakt@malpa.pl</span>
            </p>
          </div>
          <button className="bg-[#009688] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#00796B] transition">
            Formularz kontaktowy
          </button>
        </div>
      </div>
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/img/why_us.png" alt="Dlaczego my?" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego my?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Phasellus vulputate maximus dolor eu porttitor. Duis ullamcorper molestie magna, id mattis lorem eleifend
              a. Donec sit amet quam magna. Nullam suscipit libero sit amet elit hendrerit scelerisque sed sed tellus.
              Cras eleifend est ac aliquet cursus.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Phasellus nulla dolor, tristique vel fringilla sit amet, dictum sed arcu. Vivamus massa sapien, imperdiet
              non erat sit amet, vehicula pharetra tortor. Morbi eu metus odio. Integer a nibh non enim lacinia
              vestibulum. Vivamus in aliquam mi. Curabitur sed urna at quam congue sollicitudin lectus.
            </p>
            <p className="text-gray-900 font-bold leading-relaxed">
              Donec blandit sodales augue vitae feugiat. In condimentum fermentum est, in gravida lacus laoreet vitae.
              Sed luctus, mauris in hendrerit mollis, orci orci vehicula nibh, sed auctor tortor dolor nec mauris.
              Maecenas vel facilisis.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Odwiedź z nami</h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
            {/* Swedish Lapland Card */}
            <div className="relative w-full max-w-[343px] h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/img/swedish_lapland3.png"
                alt="Swedish Lapland"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Swedish Lapland</h3>
                  <p className="text-white text-sm leading-relaxed">
                    Known for its mountains and forests, Swedish Lapland offers adventure tourism, including dog
                    sledding and skiing. The Ice Hotel and Abisko National Park are major attractions, alongside rich
                    Sámi cultural experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* Finnish Lapland Card */}
            <div className="relative w-full max-w-[343px] h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/img/finnish_lapland3.png"
                alt="Finnish Lapland"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Finnish Lapland</h3>
                  <p className="text-white text-sm leading-relaxed">
                    Finnish Lapland features flat fells and vast wilderness, renowned for Santa Claus Village and the
                    Northern Lights. Its focus is on reindeer herding, Sámi culture, and winter tourism, particularly in
                    Rovaniemi.
                  </p>
                </div>
              </div>
            </div>
            {/* Norwegian Lapland Card */}
            <div className="relative w-full max-w-[343px] h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/img/norwegian_lapland3.png"
                alt="Norwegian Lapland"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/95 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-3">Norwegian Lapland</h3>
                  <p className="text-white text-sm leading-relaxed">
                    Norwegian Lapland, with its fjords and coastal landscapes, offers whale watching and Arctic cruises.
                    It blends wilderness and fishing villages, providing a more maritime experience compared to Finnish
                    and Swedish Lapland.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50">
        {/* Górny obrazek */}
        <div className="w-full">
          <img src="/img/conc_banner_bot.png" alt="Scenic view" className="w-full object-cover" />
        </div>
        {/* Sekcja recenzji */}
        <div className="w-full py-20 bg-gray-50 flex justify-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              {
                name: "Monika, Szwajcaria",
                text: "Nic dodać, nic ująć - fajnie było! Dzięki Sylwii i Łukaszowi nie byliśmy zagubieni, spędziliśmy miło czas i z pewnością wrócimy prędko!",
                image: "/img/rev_photo1.png",
              },
              {
                name: "Jacek, Anglia",
                text: "Nic dodać, nic ująć - fajnie było! Dzięki Sylwii i Łukaszowi nie byliśmy zagubieni, spędziliśmy miło czas i z pewnością wrócimy prędko!",
                image: "/img/rev_photo2.png",
              },
              {
                name: "Natalia, Polska",
                text: "Nic dodać, nic ująć - fajnie było! Dzięki Sylwii i Łukaszowi nie byliśmy zagubieni, spędziliśmy miło czas i z pewnością wrócimy prędko!",
                image: "/img/rev_photo3.png",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-[40px] shadow-md shadow-gray-400 p-6 w-80 text-center relative flex flex-col items-center"
              >
                {/* Zdjęcie użytkownika */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Treść recenzji */}
                <div className="mt-14">
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                  <p className="text-gray-900 font-bold mt-4">{testimonial.name}</p>
                  {/* Gwiazdki */}
                  <div className="flex justify-center mt-3 text-aquamarine-600 text-4xl">{"★★★★★"}</div>
                </div>
                {/* Cudzysłów */}
                <div
                  className="absolute"
                  style={{
                    bottom: "-20px",
                    right: "35px",
                  }}
                >
                  <img src="/img/quote_card.png" alt="Quote" className="w-[45px] h-[38px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl gap-12 px-6">
          {/* Obrazek */}
          <div className="w-full md:w-1/2">
            <img
              src="/img/conc_finland_bot.png"
              alt="Finland contact"
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </div>
          {/* Tekst i kontakt */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skontaktuj się z nami, żebyśmy mogli Ci pomóc</h2>
            <div className="mb-6">
              <p className="flex items-center text-xl text-gray-700">
                <img src="/img/phone_icon.png" alt="Phone icon" className="w-6 h-6 mr-3" />
                <span className="text-aquamarine-400 font-medium">+48 690 690 690</span>
              </p>
              <p className="flex items-center text-xl text-gray-700 mt-2">
                <img src="/img/email_icon.png" alt="Email icon" className="w-6 h-6 mr-3" />
                <span className="text-aquamarine-400 font-medium">kontakt@malpa.pl</span>
              </p>
            </div>
            <button className="bg-[#00284D] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#001F3D] transition shadow-md">
              Formularz kontaktowy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
