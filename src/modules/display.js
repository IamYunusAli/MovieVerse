const listContainer = document.querySelector('.movielist');
let arr;

const displayData = (results) => {
  arr = results;
  results.forEach((result) => {
    listContainer.innerHTML += `
    <li class="movieitem">
    <div>
      <img src="${result.medium_cover_image}" alt="">
      <div class="title">
        <h4>${result.title}</h4>
            <button class="LikeBtn" id="${result.id}">
                <i id="${result.id}" class="bi bi-heart"></i>
                <p>Likes</p>
                </button>

        </div>
    </div>
    <button class="commentBtn" id="${result.id}">Comments</button>
    </li>
    `;
  });
};
const data = arr;
export default displayData;
export { data };