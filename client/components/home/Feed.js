import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Uji",
    userName: "0x8CD390f697ffDc176f1B70D2F3BB3083675434fBD",
    avatar:
      "https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp",
    text: "good morning!",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Uji",
    userName: "0x8CD390f697ffDc176f1B70D2F3BB3083675434fBD",
    avatar:
      "https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp",
    text: "good morning!",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Uji",
    userName: "0x8CD390f697ffDc176f1B70D2F3BB3083675434fBD",
    avatar:
      "https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp",
    text: "good morning!",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Uji",
    userName: "0x8CD390f697ffDc176f1B70D2F3BB3083675434fBD",
    avatar:
      "https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp",
    text: "good morning!",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
];

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
