import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Find the Perfect Piece for Your Home</h2>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
