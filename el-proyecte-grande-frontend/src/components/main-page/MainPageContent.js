import SearchBar from './SearchBar'

function MainPageContent() {
    return (
    <>
        
        <div className="content-container main-page-banner">
        <SearchBar />
            <div className="left-column">
               <h1>In need of an expert?</h1>
               <h4>We help you to find a perfect one to your needs.</h4>
               {/* <button id="gradient-button">Help Me</button> */}
                
            </div>
            <div className="right-column">
                <img src="/banner.png" alt="banner"></img>
            </div>
            
        </div>
        
        </>

        

)
}

export default MainPageContent;
