import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SearchBar from './Searchbar';
import Card from './Card';
import DashboardPage from '../pages/DashboardPage';


const MainPage = () => {
  const [services, setServices] = useState([
    { title: 'Service 1', description: 'Description 1' },
    { title: 'Service 2', description: 'Description 2' },
    { title: 'Service 3', description: 'Description 3' },
  ]);


  const [filteredServices, setFilteredServices] = useState(services);


  const handleSearch = (query) => {
    const filtered = services.filter((service) =>
      service.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };


  useEffect(() => {
    // Fetch services from an API and set the state
    // setServices(fetchedServices);
    // setFilteredServices(fetchedServices);
  }, []);


  return (
    <div className="flex">
      <DashboardPage/>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredServices.map((service, index) => (
            <Card key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default MainPage;




