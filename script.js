
const movies = [
  { title: "Interstellar", image: "https://via.placeholder.com/150", desc: "우주의 신비" },
  { title: "Inception", image: "https://via.placeholder.com/150", desc: "꿈과 현실의 경계" },
  { title: "Parasite", image: "https://via.placeholder.com/150", desc: "빈부 격차의 이야기" }
];

const anime = [
  { title: "Your Name", image: "https://via.placeholder.com/150", desc: "운명의 사랑 이야기" },
  { title: "Attack on Titan", image: "https://via.placeholder.com/150", desc: "거인의 세계" },
  { title: "One Piece", image: "https://via.placeholder.com/150", desc: "해적왕의 여정" }
];

const books = [
  { title: "1984", image: "https://via.placeholder.com/150", desc: "디스토피아 소설" },
  { title: "The Little Prince", image: "https://via.placeholder.com/150", desc: "어린 왕자의 여행" },
  { title: "Demian", image: "https://via.placeholder.com/150", desc: "자아를 찾아서" }
];

function createCard({ title, image, desc }) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${image}" alt="${title}">
    <h3>${title}</h3>
    <p>${desc}</p>
  `;
  return card;
}

function renderSection(sectionName, data) {
  const section = document.querySelector(`.media-section[data-type="${sectionName}"] .horizontal-scroll`);
  data.forEach(item => {
    section.appendChild(createCard(item));
  });
}

// 섹션별 카드 생성
renderSection("movie", movies);
renderSection("anime", anime);
renderSection("book", books);

// 다크 모드 토글
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
