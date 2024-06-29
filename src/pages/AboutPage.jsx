import React from 'react';

export default function AboutPage() {
    return (
        <div className='about-page'>
            <div className="page-container-content">
                <div className='about-page__wrapper'>

                    <div className='about-page__title'>
                        <h2>About</h2>
                    </div>

                    <div className='about-page__text'>
                        <h4>Explore the World of Make Up with Us</h4>
                        <span>Welcome to our stylish and luxurious Make Up Catalog site!
                            We are your ultimate destination for all things makeup, offering a wide range of product categories.
                            Our extensive collection features top brands such as Clinique, Covergirl, Colourpop, L'Oreal, Maybelline, Revlon and many more.
                            Whether you're looking for a bold new lip color or a subtle eyeshadow palette, we have everything you need to create the perfect makeup look.
                        </span>
                        <span>At our Make Up Catalog site, we prioritize quality and diversity in our selection of products.
                            Whether you're searching for Hypoallergenic cosmetics, chemical-free options, or products that are cruelty-free and vegan, we have a wide range of makeup tags to help you find exactly what you're looking for.
                            From ogranic brands like Lotus Cosmetics and Rejuva Minerals to established names like Dior and NYX, we offer a diverse range of products that cater to all beauty preferences and values.
                        </span>
                        <span>
                            Whether you're a makeup enthusiast or a beauty beginner, we have everything you need to create stunning looks that reflect your unique style.
                            Explore our makeup categories, top brands, and makeup tags to find the perfect products for all your beauty needs.
                        </span>
                    </div>

                    <div className='about-page__photo'>
                        <img src='./assets/about.jpg' />
                    </div>

                    <div className='about-page__statistics'>
                        <h4>Numbers</h4>
                        <div className='about-page__card'>
                            Categories
                        </div>
                        <div className='about-page__card'>
                            Brands
                        </div>
                        <div className='about-page__card'>
                            Tags
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
