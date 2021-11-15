//card
const detailsCard = (name, button) => {
    return {
      name,
      button,
      showDetails(){
      return `<div class="row">

  <div class="col-9">
        <h4>${this.name}</h4>
        <textarea type="text" id="inputStatus" placeholder="King Kong Is Cool"></textarea>
  <div class="d-flex">
  <button class="ml-auto" onclick="addToFunc(); eraseText()" type="button">${this.button}</button>
  </div>
  </div>
  </div>
  <div class="row">
  <div class="col-12">
  <div id="addTask">
  </div>
  </div>
  </div>
  `
    }
  };
  };
  
  let detailsUpdate = detailsCard("User", "Update Status");
  
  document.querySelector("aside.card").innerHTML = detailsUpdate.showDetails();
  
  const addToFunc = () =>{
     // gets value from main text area
      let userName = detailsUpdate.name;
      let input = document.getElementById('inputStatus').value;
       // creates element for the value of input
      let title = document.createElement("h6");
      let status = document.createElement("p");
      let reply = document.createElement("ul");
      let deleteButton = document.createElement("li");
      let like = document.createElement("li");
      let replyList = document.createElement("li");
      like.innerHTML = "Like";
      replyList.innerHTML = "Add Comment";
      title.innerHTML = userName;
    //creates a node for the original input
      let textnode = document.createTextNode(input);
      status.appendChild(textnode);
      status.prepend(title);
      status.appendChild(reply);
      reply.appendChild(like);
      reply.appendChild(replyList);
      reply.appendChild(deleteButton);
      document.getElementById('addTask').appendChild(status);
      status.classList.add("statusBox");
      like.classList.add("like");
      replyList.classList.add("reply");
      //userName.classList.add("title");
    
      //creates a container for the remove button
      let statusBox = document.createElement("div");
      //creates a button to delete status
      let removeTask = document.createElement('input');
      // adds type of which it is a button
      removeTask.setAttribute('type', 'button');
      removeTask.classList.add("removeButton");
      // sets the buttons value 
      removeTask.setAttribute("value", "delete");
      // sets the button next to the status text
      deleteButton.appendChild(removeTask);
      //sets the button to remove status
      removeTask.addEventListener('click', function() {
          status.parentNode.removeChild(status);
      }, false);
      like.addEventListener('click', function() {
          this.classList.add("likeClicked");
      }, false);
    
    //For reply 
      replyList.addEventListener('click', function() {
         this.classList.add("likeClicked");
         let add = document.getElementById('addTask');
         let text = document.createElement("textarea");
         let replied = document.createElement("p");
         let inp = document.createElement("input");
         inp.setAttribute('type', 'button');
         inp.setAttribute("value", "reply");
         inp.setAttribute("class","removeButton");
         text.setAttribute("id","pushReply");
         text.setAttribute("placeholder", "Reply to this comment");
         add.appendChild(text);
         add.appendChild(inp);
         add.appendChild(replied);
         inp.addEventListener('click', function(){
           let replyInput =     document.getElementById('pushReply').value;
           let replyNode = document.createTextNode(replyInput);
           replied.appendChild(replyNode);
           if(replyInput === ""){
           replied.classList.remove("statusBox");
           text.parentNode.removeChild(text);
           this.parentNode.removeChild(this);
           }else{
           let replyName = document.createElement("h6");
           let deleteComment = document.createElement("p");
           deleteComment.innerHTML = "Delete";
           deleteComment.classList.add("deleteComment");
           replyName.innerHTML = `${userName} says:`;
           replied.prepend(replyName);
           replied.prepend(deleteComment);
           replied.classList.add("statusBox");
           text.parentNode.removeChild(text);
           this.parentNode.removeChild(this);
             deleteComment.addEventListener('click', function() {
              replied.parentNode.removeChild(replied);
             }, false);
           }
         }, false);
      }, false);
    
  };
  
  
  const eraseText = () => {
    //erases placeholder text in textarea
      document.getElementById("inputStatus").value = "";
  };