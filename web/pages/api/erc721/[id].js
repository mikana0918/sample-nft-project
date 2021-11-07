const metadata = {
  1: {
    attributes: [
      {
        trait_type: "Shape",
        value: "Circle",
      },
      {
        trait_type: "Mood",
        value: "Sad",
      },
    ],
    description: "A sad circle.",
    image: "https://i.imgur.com/Qkw9N0A.jpeg",
    name: "Sad Circle",
  },
  2: {
    attributes: [
      {
        trait_type: "Shape",
        value: "Rectangle",
      },
      {
        trait_type: "Mood",
        value: "Angry",
      },
    ],
    description: "An angry rectangle.",
    image: "https://i.imgur.com/SMneO6k.jpeg",
    name: "Angry Rectangle",
  },
  3: {
    attributes: [
      {
        trait_type: "Shape",
        value: "Triangle",
      },
      {
        trait_type: "Mood",
        value: "Bored",
      },
    ],
    description: "An bored triangle.",
    // image: "https://i.imgur.com/hMVRFoJ.jpeg",
    image: "https://pbs.twimg.com/profile_images/1255543381347852288/LKtzr5w9_400x400.png",
    name: "Bored Triangle",
  },
  4: {
    attributes: [
      {
        trait_type: "Shape",
        value: "Triangle",
      },
      {
        trait_type: "Mood",
        value: "Bored",
      },
    ],
    description: "His Twitter Image",
    image: "https://pbs.twimg.com/profile_images/1255543381347852288/LKtzr5w9_400x400.png",
    name: "mikana0918",
  },
};

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}