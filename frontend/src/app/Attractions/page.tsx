"use client"

import type React from "react"

import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { ChevronDown } from "lucide-react"
import Navbar from "../components/Navbar"
import AttractionCard from "../components/AttractionCard"

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState([
    // Row 1
    {
      id: 1,
      title: "Tytuł poradnika/bloga",
      rating: 4.8,
      location: "Abisko, Szwecja",
      duration: "4 godziny",
      price: "1500 zł",
      image: "/img/zorza_top.png",
      itemId: "aurora-safari-1",
      categoryId: "aurora",
      host: "expedition-lapland.com",
    },
    {
      id: 2,
      title: "Fjords Sightseeing and Photography Tour (Autumn/Winter)",
      rating: 4.9,
      location: "Kiruna, Szwecja",
      duration: "6 godzin",
      price: "1200 zł",
      image: "/img/swedish_lapl2.png",
      itemId: "dog-sledding-1",
      categoryId: "adventure",
      host: "expedition-lapland.com",
    },
    {
      id: 3,
      title: "Ice Fishing",
      rating: 4.7,
      location: "Jukkasjärvi, Szwecja",
      duration: "1 noc",
      price: "1300 zł",
      image: "/img/norwegian_lapland.png",
      itemId: "ice-hotel-1",
      categoryId: "accommodation",
      host: "expedition-lapland.com",
    },
    // Row 2
    {
      id: 4,
      title: "Ice Fishing",
      rating: 4.6,
      location: "Sami Village, Szwecja",
      duration: "3 godziny",
      price: "900 zł",
      image: "/img/concierge_top_banner.png",
      itemId: "reindeer-tour-1",
      categoryId: "culture",
      host: "expedition-lapland.com",
    },
    {
      id: 5,
      title: "Fjords Sightseeing and Photography Tour (Autumn/Winter)",
      rating: 4.8,
      location: "Abisko National Park",
      duration: "5 godzin",
      price: "1050 zł",
      image: "/img/2kol_cons.png",
      itemId: "snowmobile-1",
      categoryId: "adventure",
      host: "expedition-lapland.com",
    },
    {
      id: 6,
      title: "Fjords Sightseeing and Photography Tour (Autumn/Winter)",
      rating: 4.5,
      location: "Tornedalen, Szwecja",
      duration: "2 godziny",
      price: "1000 zł",
      image: "/img/zorza_top.png",
      itemId: "ice-swimming-1",
      categoryId: "wellness",
      host: "expedition-lapland.com",
    },
    // Row 3
    {
      id: 7,
      title: "Ice Fishing",
      rating: 4.9,
      location: "Lofoty, Norwegia",
      duration: "8 godzin",
      price: "1000 zł",
      image: "/img/norwegian_lapland.png",
      itemId: "photography-1",
      categoryId: "photography",
      host: "expedition-lapland.com",
    },
    {
      id: 8,
      title: "Ice Fishing",
      rating: 4.3,
      location: "Tornedalen, Szwecja",
      duration: "5 godzin",
      price: "1000 zł",
      image: "/img/swedish_lapl2.png",
      itemId: "ice-fishing-1",
      categoryId: "fishing",
      host: "expedition-lapland.com",
    },
    // Row 4
    {
      id: 10,
      title: "Fjords Sightseeing and Photography Tour (Autumn/Winter)",
      rating: 4.6,
      location: "Jokkmokk, Szwecja",
      duration: "4 godziny",
      price: "1000 zł",
      image: "/img/concierge_top_banner.png",
      itemId: "sami-culture-1",
      categoryId: "culture",
      host: "expedition-lapland.com",
    },
    {
      id: 11,
      title: "Fjords Sightseeing and Photography Tour (Autumn/Winter)",
      rating: 4.8,
      location: "Kiruna, Szwecja",
      duration: "6 godzin",
      price: "1000 zł",
      image: "/img/2kol_cons.png",
      itemId: "snowmobile-2",
      categoryId: "adventure",
      host: "expedition-lapland.com",
    },
  ])

  // Tall card data
  const tallCard = {
    id: 9,
    title: "Tytuł poradnika/bloga",
    rating: 4.9,
    location: "Abisko, Szwecja",
    duration: "Cała noc",
    price: "1899 SEK",
    image: "/img/zorza_top.png",
    itemId: "aurora-photo-1",
    categoryId: "photography",
    host: "expedition-lapland.com",
    isLarge: true,
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    data: "",
    cena: "",
    iloscOsob: "",
    wiekDzieci: "",
    poziomAktywnosci: "",
    rodzajAtrakcji: "",
    sortuj: "",
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      data: "",
      cena: "",
      iloscOsob: "",
      wiekDzieci: "",
      poziomAktywnosci: "",
      rodzajAtrakcji: "",
      sortuj: "",
    })
  }

  return (
    <>
      {/* Hero Section - Reduced height */}
      <div
        className="h-[60vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/attractions_top_banner.png')" }}
      >
        {/* Header */}
        <Navbar />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-teal-400 text-sm md:text-base font-semibold mb-3 tracking-widest uppercase">
            Odkryj Laponię
          </p>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Znajdź atrakcje dla siebie i bliskich
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Światła na niebie"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-14 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 outline-none focus:bg-white transition-all duration-300 text-base"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              >
                <CiSearch size={24} className="text-gray-600" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Filter Section - Updated to match reference design */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            {/* Data Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
              <span>Data</span>
              <ChevronDown size={16} />
            </button>

            {/* Cena Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
              <span>Cena</span>
              <ChevronDown size={16} />
            </button>

            {/* Ilość osób Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
              <span>Ilość osób</span>
              <ChevronDown size={16} />
            </button>

            {/* Wiek dzieci Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
              <span>Wiek dzieci</span>
              <ChevronDown size={16} />
            </button>

            {/* Poziom aktywności Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
              <span>Poziom aktywności</span>
              <div className="flex items-center gap-1">
                <img src="/img/info_icon.png" alt="Info" className="w-3.5 h-3.5" />
                <ChevronDown size={16} />
              </div>
            </button>

            {/* Rodzaj atrakcji Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
              <span>Rodzaj atrakcji</span>
              <ChevronDown size={16} />
            </button>

            {/* Clear Filters Button */}
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
            >
              Wyczyść filtry
            </button>

            {/* Sortuj Filter - positioned on the right */}
            <div className="ml-auto">
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-slate-900 rounded-full text-sm font-medium text-slate-900 hover:border-slate-700 transition-colors">
                <span>Sortuj</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Desktop Layout - 3 columns x 4 rows with tall card in bottom right */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:grid-rows-4">
            {/* Row 1 - First card is special guide card */}
            <div className="lg:col-start-1 lg:row-start-1">
              {/* Special Guide Card */}
              <div
                className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat cursor-pointer group"
                style={{ backgroundImage: "url('/img/tlo_guide.png')" }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3">Tytuł poradnika/bloga</h3>
                  <p className="text-sm text-white/90 mb-4 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est efficitur, interdum mauris
                    sit, laoreet leo. Praesent cursus odio et sagittis pretium.
                  </p>
                  <button className="px-6 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    Czytaj więcej
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-start-2 lg:row-start-1">
              <AttractionCard
                title={attractions[1].title}
                rating={attractions[1].rating}
                location={attractions[1].location}
                duration={attractions[1].duration}
                price={attractions[1].price}
                image={attractions[1].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[1].id}`}
                itemId={attractions[1].itemId}
                categoryId={attractions[1].categoryId}
                host={attractions[1].host}
              />
            </div>
            <div className="lg:col-start-3 lg:row-start-1">
              <AttractionCard
                title={attractions[2].title}
                rating={attractions[2].rating}
                location={attractions[2].location}
                duration={attractions[2].duration}
                price={attractions[2].price}
                image={attractions[2].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[2].id}`}
                itemId={attractions[2].itemId}
                categoryId={attractions[2].categoryId}
                host={attractions[2].host}
              />
            </div>

            {/* Row 2 - 3 regular cards */}
            <div className="lg:col-start-1 lg:row-start-2">
              <AttractionCard
                title={attractions[3].title}
                rating={attractions[3].rating}
                location={attractions[3].location}
                duration={attractions[3].duration}
                price={attractions[3].price}
                image={attractions[3].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[3].id}`}
                itemId={attractions[3].itemId}
                categoryId={attractions[3].categoryId}
                host={attractions[3].host}
              />
            </div>
            <div className="lg:col-start-2 lg:row-start-2">
              <AttractionCard
                title={attractions[4].title}
                rating={attractions[4].rating}
                location={attractions[4].location}
                duration={attractions[4].duration}
                price={attractions[4].price}
                image={attractions[4].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[4].id}`}
                itemId={attractions[4].itemId}
                categoryId={attractions[4].categoryId}
                host={attractions[4].host}
              />
            </div>
            <div className="lg:col-start-3 lg:row-start-2">
              <AttractionCard
                title={attractions[5].title}
                rating={attractions[5].rating}
                location={attractions[5].location}
                duration={attractions[5].duration}
                price={attractions[5].price}
                image={attractions[5].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[5].id}`}
                itemId={attractions[5].itemId}
                categoryId={attractions[5].categoryId}
                host={attractions[5].host}
              />
            </div>

            {/* Row 3 - 3 regular cards */}
            <div className="lg:col-start-1 lg:row-start-3">
              <AttractionCard
                title={attractions[6].title}
                rating={attractions[6].rating}
                location={attractions[6].location}
                duration={attractions[6].duration}
                price={attractions[6].price}
                image={attractions[6].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[6].id}`}
                itemId={attractions[6].itemId}
                categoryId={attractions[6].categoryId}
                host={attractions[6].host}
              />
            </div>
            <div className="lg:col-start-2 lg:row-start-3">
              <AttractionCard
                title={attractions[7].title}
                rating={attractions[7].rating}
                location={attractions[7].location}
                duration={attractions[7].duration}
                price={attractions[7].price}
                image={attractions[7].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[7].id}`}
                itemId={attractions[7].itemId}
                categoryId={attractions[7].categoryId}
                host={attractions[7].host}
              />
            </div>
            <div className="lg:col-start-3 lg:row-start-3">
              <AttractionCard
                title={attractions[8].title}
                rating={attractions[8].rating}
                location={attractions[8].location}
                duration={attractions[8].duration}
                price={attractions[8].price}
                image={attractions[8].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[8].id}`}
                itemId={attractions[8].itemId}
                categoryId={attractions[8].categoryId}
                host={attractions[8].host}
              />
            </div>

            {/* Row 4 - 2 regular cards + tall card in right corner */}
            <div className="lg:col-start-1 lg:row-start-4">
              <AttractionCard
                title={attractions[9].title}
                rating={attractions[9].rating}
                location={attractions[9].location}
                duration={attractions[9].duration}
                price={attractions[9].price}
                image={attractions[9].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[9].id}`}
                itemId={attractions[9].itemId}
                categoryId={attractions[9].categoryId}
                host={attractions[9].host}
              />
            </div>
            <div className="lg:col-start-2 lg:row-start-4">
              <AttractionCard
                title={attractions[9].title}
                rating={attractions[9].rating}
                location={attractions[9].location}
                duration={attractions[9].duration}
                price={attractions[9].price}
                image={attractions[9].image}
                starIcon="/img/Star1.png"
                widgetId={`CHECKFRONT_WIDGET_${attractions[9].id}`}
                itemId={attractions[9].itemId}
                categoryId={attractions[9].categoryId}
                host={attractions[9].host}
              />
            </div>
            {/* Tall card spanning rows 3-4 in right column */}
            <div className="lg:col-start-3 lg:row-start-3 lg:row-span-2">
              <div
                className="relative h-full min-h-[600px] rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat cursor-pointer group"
                style={{ backgroundImage: "url('/img/aurora2.png')" }}
              >
                {/* Gradient overlay - stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Content positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4 leading-tight">{tallCard.title}</h3>
                  <p className="text-sm text-white/90 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est efficitur, interdum mauris
                    sit, laoreet leo. Praesent cursus odio et sagittis pretium.
                  </p>
                  <button className="px-8 py-3 border-2 border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
                    Czytaj więcej
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Regular grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8">
            {/* Special Guide Card for mobile */}
            <div
              className="relative h-80 rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat cursor-pointer"
              style={{ backgroundImage: "url('/img/tlo_guide.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">Tytuł poradnika/bloga</h3>
                <p className="text-sm text-white/90 mb-3 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est efficitur.
                </p>
                <button className="px-4 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
                  Czytaj więcej
                </button>
              </div>
            </div>

            {/* Tall Guide Card for mobile */}
            <div
              className="relative h-96 rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat cursor-pointer"
              style={{ backgroundImage: "url('/img/aurora2.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-3 leading-tight">{tallCard.title}</h3>
                <p className="text-sm text-white/90 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est efficitur, interdum mauris
                  sit, laoreet leo.
                </p>
                <button className="px-6 py-2.5 border-2 border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
                  Czytaj więcej
                </button>
              </div>
            </div>

            {attractions.slice(1).map((attraction: any) => (
              <AttractionCard
                key={attraction.id}
                title={attraction.title}
                rating={attraction.rating}
                location={attraction.location}
                duration={attraction.duration}
                price={attraction.price}
                image={attraction.image}
                starIcon="/img/Star1.png"
                isLarge={attraction.isLarge}
                widgetId={`CHECKFRONT_WIDGET_${attraction.id}`}
                itemId={attraction.itemId}
                categoryId={attraction.categoryId}
                host={attraction.host}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
