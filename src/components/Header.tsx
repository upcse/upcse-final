import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSET_PATHS } from '../lib/assets';

const Header = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('english');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement local search or connect to a different backend service
    setShowResults(false);
  };

  return (
    <header className="bg-[#FFFFF0] p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img 
              src={ASSET_PATHS.logos.main}
              alt="Uttar Pradesh Council for Sports & Education"
              className="h-16 cursor-pointer"
            />
          </Link>
          <img 
            src={ASSET_PATHS.logos.olympic}
            alt="U.P. Olympic association" 
            className="h-12" 
          />
          <img 
            src={ASSET_PATHS.logos.nehru}
            alt="Nehru Yuva Kendra Sangathan" 
            className="h-12" 
          />
          <img 
            src={ASSET_PATHS.logos.indian}
            alt="Indian Council for Sports & Education" 
            className="h-12" 
          />
          <img 
            src={ASSET_PATHS.logos.international}
            alt="International Council for Sports & Education" 
            className="h-12" 
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className={`relative ${isSearchExpanded ? 'w-64' : 'w-10'} transition-all duration-300`}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={isSearchExpanded ? "Search certificates..." : ""}
                className={`border rounded-full py-2 px-4 w-full ${isSearchExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </button>
            </form>

            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-50">
                {searchResults.map((result) => (
                  <div key={result.id} className="p-4 border-b hover:bg-gray-50">
                    <p className="font-semibold">{result.student_name}</p>
                    <p className="text-sm text-gray-600">
                      Certificate: {result.certificate_no} | {result.sport} - {result.event}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none border rounded-full py-2 px-4 pr-8 cursor-pointer"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>
            <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="mt-4 bg-gradient-to-r from-[#B67B5B] via-[#B6AEC1] to-[#407245] p-4 sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between text-white">
          <Link to="/" className="hover:bg-white/20 px-4 py-2 rounded">Home</Link>
          <Link to="/about" className="hover:bg-white/20 px-4 py-2 rounded">About Us</Link>
          <Link to="/gallery" className="hover:bg-white/20 px-4 py-2 rounded">Gallery</Link>
          <Link to="/student-records" className="hover:bg-white/20 px-4 py-2 rounded">Student Records</Link>
          <div className="relative group">
            <Link to="/district-secretaries" className="hover:bg-white/20 px-4 py-2 rounded">
              District Secretaries
            </Link>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Lucknow</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kanpur</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Varanasi</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Agra</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Prayagraj</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Gorakhpur</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Meerut</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Ghaziabad</a>
                <Link to="/district-secretaries" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">
                  View More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;