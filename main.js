import './style.css'
import { Post } from './Post';
const btnSubmit = document.querySelector('[data-js="btnSubmit"]');

const textArea = document.querySelector('[data-js="textArea"]');

const vectorPosts = [];

const postList = document.querySelector('[data-js="postList"]');


btnSubmit.addEventListener("click",(e)=>{
  e.preventDefault()
  const post = new Post(textArea.value); 
  vectorPosts.push(post) 
  createPost(post);
  textArea.value=""
})

/*function vectorSort(a,b){
  if(a.getLikes() < b.getLikes())
    return -1
    if(a.getLikes() > b.getLikes())
    return 1
   return 0 
}*/

function createPost(post){
  const postView = document.createElement("post")
  postView.innerText = post.getText();
  const list = createList(post);
  postView.appendChild(list)
  postList.appendChild(postView)  
  
}

function createList(post){
  const btnLike = document.createElement("button");
  const btnDislike = document.createElement("button");
  const viewLikes = document.createElement("button");
  const viewDislikes = document.createElement("button");
  const list = document.createElement("div");

  btnLike.innerHTML = "&#128151"
  btnDislike.innerHTML = "&#128078"
  viewLikes.innerText = "0"
  viewDislikes.innerText = "0"

  list.appendChild(btnLike);
  list.appendChild(viewLikes);
  list.appendChild(btnDislike);
  list.appendChild(viewDislikes);

  list.style.display = "flex";
  
  btnLike.addEventListener("click",()=>{
    post.addLikes()
    viewLikes.innerText = post.getLikes();
    console.log(vectorPosts)
  })
  
  btnDislike.addEventListener("click",()=>{
    post.addDislike()
    viewDislikes.innerText = post.getDislikes();
    console.log(vectorPosts)
  })

  return list
}

