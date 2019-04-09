dataSetVersion = "2019-04-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Yuta",
    img: "3Jhrsto.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Sunwoo",
    img: "Esbwfzd.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Taeho",
    img: "dnJNWm3.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Wooyoung",
    img: "aO1letO.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Suzy",
    img: "i5vfZii.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Rena",
    img: "3KTA7LN.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Sehun",
    img: "Slxvi07.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Sejeong",
    img: "ysJla3g.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mina 02",
    img: "x19REP8.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Key",
    img: "NljNz4P.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Luhan",
    img: "1zJ9Ytp.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mina 01",
    img: "eutOYu5.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lee Know",
    img: "Isk8a3o.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kino",
    img: "nSsxeu6.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jiwoo",
    img: "OVYcfTy.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yeji",
    img: "LiGKPrw.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Bona",
    img: "VA35o86.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jennie",
    img: "nQugpmG.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kang Daniel",
    img: "eFvhbD3.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Dahyun",
    img: "hGiqIzw.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Wonwoo",
    img: "89QdmVi.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Joy",
    img: "EOOnk5u.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Chen",
    img: "6U4lhpi.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jaemin",
    img: "YXkNTjL.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jackson",
    img: "a5TcqVM.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jiyoon",
    img: "U5kd6b7.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Taeyeon",
    img: "TNc2jzr.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Sungjae",
    img: "CZBH9wY.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Seunghee",
    img: "L9IAipD.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kihyun",
    img: "OFB7sxA.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Miyeon",
    img: "8wAZwYe.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Victoria",
    img: "zO67ljq.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jun",
    img: "2n8v9TT.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hani",
    img: "pfKEVRD.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yves",
    img: "zsfktJY.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Rowoon",
    img: "IN3QWhT.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yanan",
    img: "W8LjXkj.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Moonbin",
    img: "iUGJQqf.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hongbin",
    img: "B9tvn8D.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
