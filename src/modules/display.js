const listContainer = document.querySelector('.movielist');
const data = [];

const displayData = (results) => {
  data.push(results);
  results.forEach((result) => {
    listContainer.innerHTML += `
    <li class="movieitem">
    <div>
      <img src="${result.medium_cover_image}" alt="">
      <div class="title">
        <h4>${result.title}</h4>
            <button class="LikeBtn" id="${result.id}">
                <i id="${result.id}" class="bi bi-heart"></i>
                <p class="likes">0</p>
                </button>

        </div>
    </div>
    <button class="commentBtn" id="${result.id}">Comments</button>
    </li>
    `;
  });
};

export default displayData;
export { data };