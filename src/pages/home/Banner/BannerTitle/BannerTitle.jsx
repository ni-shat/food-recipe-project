import Container from "../../../../components/Container";



const BannerTitle = () => {
    return (
        <Container>
            <div className="mt-6 md:mt-20  md:space-y-5">
                <h4 className="text-white text-xl md:text-5xl font-extrabold">Satisfy Your Cravings!</h4> <br className="md:block hidden" />
                <div className="md:w-[70%] mt-2 leading-3 md:leading-7">
                    <span className="text-base md:text-3xl font-extrabold text-[#ED8B1F]">Testeva </span> 
                    <span className="text-xs md:text-base"> a website that celebrates the joys of cooking and eating, sharing stories, recipes, and experiences to bring people together. 
                    <span className="hidden md:inline">Unlocking the Secrets to delicious, indulgent, flavorful dishes, with recipes that are perfect for any mood or occasion.</span> </span> 
                    
                </div>
            </div>
            
        </Container>
    );
};

export default BannerTitle;