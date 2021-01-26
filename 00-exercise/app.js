const form = document.querySelector('#tweetForm');

const userName = document.querySelector('#name');
const tweetWord = document.querySelector('#tweet');

document.getElementById("form-button").onclick = function() {
  document.getElementById("tweets").innerHTML = document.getElementById("tweet").value;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('name', userName.value);
  console.log('tweet', tweetWord.value);
});