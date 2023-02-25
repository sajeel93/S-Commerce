const TrendingCategories = () => {
    return (
        <div className="bg-Neutral-white py-10">
            <div class="max-w-container m-auto grid grid-cols-3 gap-8 h-fit">
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_04_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover">
                    <button className="bg-Neutral-white text-Neutral-black hover:bg-Neutral-primary hover:text-Neutral-white button-xl">
                        Sale
                    </button>
                </div>
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_05_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover">
                    <button className="bg-Neutral-white text-Neutral-black hover:bg-Neutral-primary hover:text-Neutral-white button-xl">
                        Sale
                    </button>
                </div>
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_07_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover">
                    <button className="bg-Neutral-white text-Neutral-black hover:bg-Neutral-primary hover:text-Neutral-white button-xl">
                        Sale
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCategories;
