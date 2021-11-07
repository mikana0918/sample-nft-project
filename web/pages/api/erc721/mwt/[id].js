const metadata = {
  1: {
    attributes: [
    ],
    description: "miracle niki lv.1",
    image: "https://pbs.twimg.com/media/DpHjOjeX4AAhr9S.jpg",
    name: "miracle niki lv.1",
  },
  2: {
    attributes: [
    ],
    description: "miracle niki lv.2",
    image: "https://pbs.twimg.com/media/Eu5Z7e7XIAE-IeP.jpg",
    name: "miracle niki lv.2",
  },
  3: {
    attributes: [
    ],
    description: "miracle niki lv.3",
    image: "https://cdn-ak.f.st-hatena.com/images/fotolife/k/kdtk/20190405/20190405104336.jpg",
    name: "miracle niki lv.3",
  },
  4: {
    attributes: [
    ],
    description: "miracle niki lv.4",
    image: "https://pbs.twimg.com/media/ECyLSHLW4AEXIzI.jpg",
    name: "miracle niki lv.4",
  },
};

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}