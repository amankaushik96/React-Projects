import _ from "lodash";

const getType = i => {
  const values = {
    0: { text: "Programming", type: "PROG" },
    1: { text: "Gaming", type: "GAM" },
    2: { text: "Product Launch", type: "PRL" },
    3: { text: "Vines", type: "VNS" },
    4: { text: "Art and Craft", type: "ARF" }
  };
  return values[i];
};

const Keywords = [
  [
    "Programming",
    "C++",
    "Java",
    "JavaScript",
    "Python",
    "Swift",
    "C",
    "PHP",
    "Ruby",
    "C#",
    "Rust"
  ],
  [
    "Gaming",
    "League of Legends",
    "Overwatch",
    "Minecraft",
    "Counter",
    "Strike",
    "Global",
    "Offensive",
    "Grand",
    "Theft",
    "Auto",
    "Battlefield",
    "Dark Souls",
    "Player Unknown's Battlegrounds"
  ],
  [
    "Product",
    "New",
    "exciting",
    "features",
    "budget",
    "rating",
    "upcoming",
    "features",
    "launch",
    "date"
  ],
  ["Vines", "comedy", "new", "character"],
  ["Art", "Craft", "painting", "sand"]
];

export const getStreamingType = formValues => {
  let { description, title } = formValues;
  const titleArray = title.split(" ");
  const descriptionArray = description.split(" ");
  for (var i in Keywords) {
    var common = titleArray.filter(ele => Keywords[i].includes(ele));
    console.log(common.length);
    if (common.length >= 3) {
      const { type } = getType(i);
      return { ...formValues, type: type };
    }
  }
  return formValues;
};
