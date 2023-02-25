import Link from "next/link";
const InstaPost = () => {
    return (
        <div className="bg-Neutral-white py-10">
            <div className="grid justify-center justify-items-center py-10 uppercase font-medium">
                <h2 className="text-Neutral-primary text-2xl">
                    <Link href="/newpage" target="_blank">
                        @ FOLLOW
                    </Link>
                    <span className="pl-2 text-Neutral-black">US ON</span>
                </h2>
                <p className="text-base py-2">INSTAGRAM</p>
            </div>
            <div class="grid grid-cols-6 gap-0 h-fit">
                <div className="flex items-center justify-center bg-[url('/assets/men2.jpg')] bg-no-repeat h-[333px] bg-cover brightness-100 hover:brightness-50 active:brightness-125 focus:outline-none focus:ring focus:brightness-150"></div>
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_04_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover brightness-100 hover:brightness-50 active:brightness-125 focus:outline-none focus:ring focus:brightness-150"></div>
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_05_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover brightness-100 hover:brightness-50 active:brightness-125 focus:outline-none focus:ring focus:brightness-150"></div>
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_07_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover brightness-100 hover:brightness-50 active:brightness-125 focus:outline-none focus:ring focus:brightness-150"></div>
                <div className="flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_03_868x.jpg?v=1614290467')] bg-no-repeat h-[333px] bg-cover brightness-100 hover:brightness-50 active:brightness-125 focus:outline-none focus:ring focus:brightness-150"></div>
                <div className="flex items-center justify-center bg-[url('/assets/women2.jpg')] bg-no-repeat bg-no-repeat h-[333px] bg-cover brightness-100 hover:brightness-50 active:brightness-125 focus:outline-none focus:ring focus:brightness-150"></div>
            </div>
        </div>
    );
};

export default InstaPost;
