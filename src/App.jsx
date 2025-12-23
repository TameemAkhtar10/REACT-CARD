import React from 'react'
import Card from './Components/Card.jsx'

const App = () => {
 const posts = [
  {
    id: 1,
    username: "Bushra Muskan",
    caption: "Product Designer who focuses on simplicity & usability",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    likes: "89.3K",
    posts: "1281",
    views: "345K",
  },
  {
    id: 2,
    username: "Noah Thompson",
    caption: "Creative UI Designer & Visual Thinker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    likes: "120K",
    posts: "980",
    views: "410K",
  },
  {
    id: 3,
    username: "Liam Carter",
    caption: "Minimal Design. Maximum Impact.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400",
    likes: "76K",
    posts: "650",
    views: "298K",
  },
  {
    id: 4,
    username: "Emma Wilson",
    caption: "Designing clean & usable experiences",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    likes: "102K",
    posts: "1430",
    views: "512K",
  },
  {
    id: 5,
    username: "Olivia Brown",
    caption: "Product designer with user-first mindset",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    likes: "210K",
    posts: "1890",
    views: "870K",
  },
  {
    id: 6,
    username: "Ava Johnson",
    caption: "UX Designer crafting meaningful flows",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400",
    likes: "98K",
    posts: "720",
    views: "330K",
  },
  {
    id: 7,
    username: "Ethan Miller",
    caption: "Designing digital experiences",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    likes: "65K",
    posts: "540",
    views: "210K",
  },
  {
    id: 8,
    username: "Sophia Davis",
    caption: "Clean UI. Clear UX.",
    image: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=400",
    likes: "134K",
    posts: "1100",
    views: "460K",
  },
  {
    id: 9,
    username: "James Anderson",
    caption: "Building human-centered products",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
    likes: "82K",
    posts: "690",
    views: "255K",
  },
  {
    id: 10,
    username: "Mia Martinez",
    caption: "Design with purpose",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    likes: "190K",
    posts: "1750",
    views: "800K",
  },
  {
    id: 11,
    username: "Daniel Lee",
    caption: "Product & Interaction Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    likes: "70K",
    posts: "610",
    views: "230K",
  },
  {
    id: 12,
    username: "Emily Clark",
    caption: "Designing intuitive user journeys",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    likes: "155K",
    posts: "1420",
    views: "590K",
  },
  {
    id: 13,
    username: "Michael Scott",
    caption: "Simple ideas. Strong visuals.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    likes: "92K",
    posts: "870",
    views: "340K",
  },
  {
    id: 14,
    username: "Isabella Moore",
    caption: "Designing delightful interfaces",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400",
    likes: "178K",
    posts: "1600",
    views: "720K",
  },
  {
    id: 15,
    username: "William Taylor",
    caption: "UX first, always",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400",
    likes: "60K",
    posts: "480",
    views: "190K",
  },
  {
    id: 16,
    username: "Charlotte White",
    caption: "Design systems & consistency",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400",
    likes: "143K",
    posts: "1320",
    views: "510K",
  },
  {
    id: 17,
    username: "Henry Walker",
    caption: "Designing for people",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    likes: "88K",
    posts: "710",
    views: "280K",
  },
  {
    id: 18,
    username: "Amelia Hall",
    caption: "Visual storytelling through UI",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    likes: "165K",
    posts: "1490",
    views: "640K",
  },
  {
    id: 19,
    username: "Lucas Young",
    caption: "Design that solves problems",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    likes: "74K",
    posts: "560",
    views: "215K",
  },
  {
    id: 20,
    username: "Harper King",
    caption: "User-focused product design",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    likes: "205K",
    posts: "1820",
    views: "900K",
  },
];



  return (
    <div className='p-10 flex gap-10 flex-wrap justify-center items-center flex-row  bg-[#F5F5F5] min-h-screen '>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}

export default App
