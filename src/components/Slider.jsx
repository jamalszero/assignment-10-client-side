
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/H2r00wd/1.jpg" className="w-full h-[25rem]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/gryb8P5/2.jpg" className="w-full h-[25rem]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/H2QY9dQ/3.jpg" className="w-full h-[25rem]" />
                </div>
                
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                
            </div>
        </div>
    );
};

export default Slider;