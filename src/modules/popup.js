const popCont = document.querySelector('.pop-cont');

const displayPopup = (data, id) => {
  const index = data.findIndex((object) => {
    return object.id === parseInt(id);
  });
  popCont.innerHTML = `
  <img class="padd imge" src="${data[index].medium_cover_image}" alt="">
  <div class="article padd">
  <button type="button" class="close">X</button>
  <h1>${data[index].title}</h1>
  <p class="summary">${data[index].summary}</p>
  <h2>Comments()</h2>
  <ul class="comment-list">
  <li>Comment 1</li>
  <li>Comment 2</li>
  </ul>
  <div class="add-comment">
  <h3>Add a comment</h3>
  <input class="name" type="text" placeholder="Your Name">
  <textarea class="comment-area" type="text" placeholder="Your Comment"></textarea>
  <button>Comment</button>
  </div>
  </div>
  `;
  popCont.classList.remove('hide');
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    popCont.classList.add('hide');
  });
};

export default displayPopup;