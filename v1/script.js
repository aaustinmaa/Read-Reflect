const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology & ai", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "self-improvement", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";
//createFactsList(initialFacts);

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://tmubiskyxbygnosjyuit.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtdWJpc2t5eGJ5Z25vc2p5dWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODczNTcsImV4cCI6MjA3Nzk2MzM1N30._bJEZsNsQ6kA9ka_Qrz-GYbgC-qjFuHFRq2QFex0--s",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtdWJpc2t5eGJ5Z25vc2p5dWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODczNTcsImV4cCI6MjA3Nzk2MzM1N30._bJEZsNsQ6kA9ka_Qrz-GYbgC-qjFuHFRq2QFex0--s",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  //   const filteredData = data.filter((fact) => fact.category === "society ");

  createFactsList(data);
}

//factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");
//factsList.insertAdjacentHTML("afterbegin", "<li>Mike</li>");

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
        <p>
        ${fact.text}
            React is being developed by Meta (formerly facebook)
            <a
                class="source"
                href="${fact.source}"
                target="blank"
                >(Sourse)</a>
        </p>
            <span class="tag" style="background-color: ${
              CATEGORIES.find((cat) => cat.name === fact.category).color
            }"
            >${fact.category}</span>
    </li>`
  );
  //console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Taggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 7, 89, 22, -3].filter((el) => el > 10));
console.log([7, 64, 7, 89, 22, -3].find((el) => el > 10));

/*
let votesInteresting = 8;
let votesMindblowing = 5;


votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

console.log(parseInt("24.566sdkl"));

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

//const age1 = calcFactAge(2015);
console.log(age1);
if (45 === 545) {
  alert("good good good");
} else {
}


const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year 
 needs to be less or equal ${new Date().getFullYear()}`;


console.log(calcFactAge2(2034));

// falsy values: 0, '', null, undefined
// truthy: everything else

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message = totalUpvotes > votesFalse ? "is true" : "is false";
// alert(message);

const text = "Lisbon is the capital of portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcFactAge(2015)}
 years old. It is probably ${
   totalUpvotes > votesFalse ? "correct" : "incorrect"
 }`;
console.log(str);


const fact = ["a", 12, true, 13];
console.log(fact);
console.log(fact[6]);
console.log(fact.length);


const [text, createdIn, isCorrect] = fact;
console.log(createdIn);
const newFact = [...fact, "society"];
console.log(newFact);


const factObj = {
  text: "aaust",
  category: "c",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact ${this.text} is from the category
     ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, createdIn } = factObj;

console.log(category);
console.log(createdIn);
console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allcategories = CATEGORIES.map((el) => el.name);
console.log(allcategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => calcFactAge2(el.createdIn));
console.log(factAges);
console.log(factAges.join(" & "));
*/
