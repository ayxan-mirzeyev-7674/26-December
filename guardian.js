const URL = "https://content.guardianapis.com/search";
const API_KEY = "5813de0c-329f-48d1-a6f9-9ead314177d6";

const searchInput = document.getElementById("searchInput");

const getRows = (query) => {
  fetch(
    `${URL}?api-key=${API_KEY}${
      query?.length > 0 ? `&q=${encodeURIComponent(query)}` : ""
    }`
  )
    .then((res) => res.json())
    .then((data) => {
      showRows(data.response.results);
    });
};

const showRows = (data) => {
  document.getElementsByClassName("results")[0].innerHTML = "";
  data?.forEach((row) => {
    const newRow = document.createElement("p");
    var rowLink = document.createElement("a");
    var createAText = document.createTextNode(row.webTitle);
    rowLink.setAttribute("href", row.webUrl);
    rowLink.setAttribute("target", "blank");
    rowLink.appendChild(createAText);
    newRow.appendChild(rowLink);
    document.getElementsByClassName("results")[0].appendChild(newRow);
  });
};

searchInput.addEventListener("input", (e) => {
  getRows(e.target.value);
});

getRows();
