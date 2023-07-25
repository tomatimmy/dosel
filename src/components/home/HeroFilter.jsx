import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Encuentra la propiedad de tus sueños</h2>
                <p className="fz18 color-white">
                    Tenemos la más amplia variedad de Propiedades en Costa Rica
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
