const loadCommentsBtnElement = document.getElementById("loadComments");
async function fetchCommentForPost(event) {
    const postId = loadCommentsBtnElement.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json();
    console.log(responseData);
}
loadCommentsBtnElement.addEventListener("click",fetchCommentForPost);