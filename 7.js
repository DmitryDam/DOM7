'use strict';

const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3,
    },
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36,
    },
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147,
    },
  },
];

let createCards = (arr)=>arr.reduce((acc, obj) => acc + createPostCard(obj), []);

function createPostCard({ img, title, text, stats }) {
  return `<div class="post">
  <img class="post__image" src=${img} alt="post image">
  <h2 class="post__title">${title}</h2>
  <p class="post__text">${text}</p>

  <ul class="actions post__actions">
    <li class="actions__item">
      <button class="actions__btn ">
        <span class="actions__icon actions__icon--like"></span>
        <span class="actions__count">${stats.likes}</span>
      </button>
    </li>
    <li class="actions__item">
      <button class="actions__btn">
        <span class="actions__icon actions__icon--dislike"></span>
        <span class="actions__count">${stats.dislikes}</span>
      </button>
    </li>
    <li class="actions__item">
      <button class="actions__btn">
         <span class="actions__icon actions__icon--fav"></span>
        <span class="actions__count">${stats.fav}</span>
      </button>
    </li>
  </ul>
</div>`;
}
const root = document.querySelector('.root');
root.insertAdjacentHTML('beforeend', createCards(posts));
// Удалить ниже
// <div class="post">
//   <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
//   <h2 class="post__title">Lorem ipsum dolor</h2>
//   <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>

//   <ul class="actions post__actions">
//     <li class="actions__item">
//       <button class="actions__btn ">
//         <span class="actions__icon actions__icon--like"></span>
//         <span class="actions__count">0</span>
//       </button>
//     </li>
//     <li class="actions__item">
//       <button class="actions__btn">
//         <span class="actions__icon actions__icon--dislike"></span>
//         <span class="actions__count">0</span>
//       </button>
//     </li>
//     <li class="actions__item">
//       <button class="actions__btn">
//          <span class="actions__icon actions__icon--fav"></span>
//         <span class="actions__count">0</span>
//       </button>
//     </li>
//   </ul>
// </div>