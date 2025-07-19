"use client"

import type React from "react"

import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import Navbar from "../components/Navbar"

export default function PoradnikiPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  return (
    <>
      {/* Hero Section */}
      <div className="h-[70vh] relative flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800">
        {/* Header */}
        <Navbar />

        {/* Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-teal-400 text-sm md:text-base font-semibold mb-3 tracking-widest uppercase">
            Oczami Podróżników
          </p>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Przeżyj z nami podróż do Laponii
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Szukaj na stronie"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-16 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-teal-400 transition-all duration-300 text-base shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <CiSearch size={24} className="text-gray-600" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Categories and Content Section */}
      <div className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Categories Bar */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-gray-700 font-medium mr-4">Wybierz kategorię:</span>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium hover:bg-purple-600 transition-colors">
                Ubiór
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                Transport
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                Jedzenie
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                Finanse
              </button>
              <button className="px-4 py-2 bg-cyan-400 text-white rounded-full text-sm font-medium hover:bg-cyan-500 transition-colors">
                Zakwaterowanie
              </button>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition-colors">
                Bezpieczeństwo
              </button>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-medium hover:bg-teal-600 transition-colors">
                Zorza polarna
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors">
                Karawaning
              </button>
            </div>
          </div>

          {/* First Tutorial Card - Image takes more than half width */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section - Takes about 60% width */}
              <div className="lg:w-3/5">
                <img
                  src="/img/1_poradnik_card.png"
                  alt="Tutorial image"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>

              {/* Content Section - Takes about 40% width */}
              <div className="lg:w-2/5 p-8">
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">Zima</span>
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">Ubiór</span>
                  <span className="text-gray-500 text-sm ml-2">Data publikacji</span>
                </div>

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                  Tytuł poradnika lub bloga który ma więcej niż jedną linijkę, posiada nawet trzy linijki.
                </h2>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis augue. Ut et ligula non lectus
                  ornare laoreet vitae id neque. Fusce ac rutrum risus. Quisque mi mauris, consectetur a semper non,
                  feugiat quis velit. Ut maximus nisl id tristique lobortis. Curabitur dui velit, ornare a tellus eu,
                  elementum congue nisl. Vestibulum a orci sed risus tristique porta non sit amet risus. Suspendisse
                  viverra turpis gravida lectus dapibus pulvinar. Fusce a lectus ut lectus aliquet rutrum. Aenean eu
                  risus eget ante bibendum lacinia et vitae massa. Sed lacinia arcu id nisl luctus pretium. Curabitur
                  rutrum, est eu accumsan tempus, augue diam condimentum ipsum, eget euismod tortor ipsum bibendum
                  nulla. Donec commodo dapibus quam et consectetur. Donec id elit id metus ornare malesuada a facilisis
                  erat. Fusce vitae lorem quis dui consequat gravida in non orci. Praesent at molestie nulla, ac viverra
                  orci.
                </p>

                {/* Read More Link */}
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                    Czytaj więcej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Tutorial Card - Image takes only 1/4 width */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section - Takes about 25% width */}
              <div className="lg:w-1/4">
                <img src="/img/2_poradnik_card.png" alt="Tutorial image" className="w-full h-48 lg:h-64 object-cover" />
              </div>

              {/* Content Section - Takes about 75% width */}
              <div className="lg:w-3/4 p-6">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">Jedzenie</span>
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">Ubiór</span>
                  <span className="text-gray-500 text-sm ml-2">Data publikacji</span>
                </div>

                {/* Title */}
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  Tytuł poradnika lub bloga który ma więcej niż jedną linijkę, posiada dwie linijki.
                </h2>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis est efficitur, cursus odio et
                  sagittis pretium. Mauris ac purus quis est dictum sodales. Phasellus convallis eu est et tempus.
                  Vestibulum sed tellus venenatis est molestie. Duis interdum velit non commodo eleifend. Suspendisse a
                  cursus...
                </p>

                {/* Read More Link */}
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                    Czytaj więcej
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
