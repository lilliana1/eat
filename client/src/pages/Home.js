import React from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
    return (
        <div>
            <SearchBar/>
            <p className="description">
            appetite is a real time restaurant finder that will show you the ones that are open at the specific time you are looking
            </p>
        </div>
        
    );

}
export default Home; 