import { add, get } from './addGetComm.js';

const popCont = document.querySelector('.pop-cont');

const displayCom = async (list) => {
  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = '';
  const arr = await list;
  arr.forEach((item) => {
    commentList.innerHTML += `<li>${item.username}: ${item.comment} - ${item.creation_date}</li>`;
  });
};

const length = async (list) => {
  const arr = await list;
  return arr.length;
};

const displayPopup = async (data, id) => {
  const arr = data[0];
  const index = arr.findIndex((object) => object.id === parseInt(id, 10));
  popCont.innerHTML = `
  <img class="padd imge" src="${arr[index].medium_cover_image}" alt="">
  <div class="article padd">
  <button type="button" class="close">X</button>
  <h1>${arr[index].title}</h1>
  <p class="summary">${arr[index].summary}</p>
  <h2 class="comm-length">Comments(${await length(get(id))})</h2>
  <ul class="comment-list">
  </ul>
  <div class="add-comment">
  <h3>Add a comment</h3>
  <input class="name" type="text" placeholder="Your Name" required>
  <textarea class="comment-area" type="text" placeholder="Your Comment" required></textarea>
  <button id=${id} type="button" class = "commBtn">Comment</button>
  </div>
  </div>
  `;
  popCont.classList.remove('hide');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popCont.classList.add('hide');
  });

  const name = document.querySelector('.name');
  const commArea = document.querySelector('.comment-area');
  const commBtn = document.querySelector('.commBtn');

  commBtn.addEventListener('click', async () => {
    if (name.value !== '' && commArea.value !== '') {
      await add(id, name.value, commArea.value);
      displayCom(get(id));
      document.querySelector('.comm-length').textContent = `Comments(${await length(get(id))})`;
      commArea.value = '';
      name.value = '';
    }
  });
  displayCom(get(id));
};

export { displayPopup, length };