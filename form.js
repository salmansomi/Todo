
    let form = document.getElementById(form);
let input = document.getElementById(input);
let msg = document.getElementById(msg);
let posts = document.getElementById(posts);
form.addEventListener(submit, (e) => {
  e.preventDefault();
  console.log();

  formValidation();
});
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
  }
};
let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
};
    let createPost = () =>{
     data["text"] = input.value;
     console.log(data);
    };

    let editPost =() =>{
      data["text"] = input.value;
      console.log(data);
    }
 