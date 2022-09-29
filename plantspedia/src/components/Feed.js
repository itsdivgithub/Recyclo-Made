import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { authenticate, getFeeds } from "../../lib/feed";
// import { checkLock, purchaseKey } from "../../lib/locks";

const articles = [
  {
    title: "The meaning of Afghanistan",
    id: "1",
    subtitle: `"The thing it is doing is by no means the thing we want to have done."`,
    paid: true,
  },
  {
    title: "For the times they are a-changing",
    id: "2",
    subtitle: `"And admit that the waters around you have grown."`,
  },
  {
    title: "As breathing and consciousness return",
    id: "3",
    subtitle: `"The big things are useful, but hard. The small things are easy, but useless."`,
  },
  {
    title: "Rise of the neutral company",
    id: "4",
    subtitle: `"Politics is the exercise of collective power against human opposition."`,
    paid: true,
  },
  {
    title: "The meaning of Afghanistan",
    id: "5",
    subtitle: `"The thing it is doing is by no means the thing we want to have done."`,
    paid: true,
  },
  {
    title: "For the times they are a-changing",
    id: "6",
    subtitle: `"And admit that the waters around you have grown."`,
  },
];

export default function Feed({}) {
  const router = useRouter()
  const [feed, setFeed] = useState([]);

  const refreshFeed = async () => {
    const feed = await getFeeds();
    setFeed(feed);
  };

  useEffect(() => {
    const inner = async () => {
      if (!window.did) {
        await authenticate();
      }

      refreshFeed();
    };

    const timer = setInterval(refreshFeed, 5000);
    inner();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-24">
      <div className="text-black font-bold text-3xl flex justify-center items-center pt-2 pb-4">
        PlantsPedia</div>
      <div className="border-b pb-4 grid grid-cols-3 gap-4">
        {feed.map((article, idx) => {
          return (
              <>
                  <Link href={"/read/" + article.id} key={idx}>
                      <div className="border-[#7CBD1E] cursor-pointer border-2 rounded-2xl bg-green-50 hover:bg-[#BCEB3C]">
                          <div className="py-3 pl-3 mb-4   transition-colors duration-100 ease-in-out transform rounded-md">
                              <div className="pl-3 text-left">
                                  <p className="text-2xl font-bold pb-2">{article.title}</p>
                                  <p className="text-lg text-gray-500">{article.subtitle}</p>
                              </div>
                          </div>
                      </div>
                  </Link>
              </>
          )
        })}
      </div>
    </div>
  );
}
