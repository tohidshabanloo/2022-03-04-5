const submitBtn = document.querySelector(".button");
const name = document.querySelector(".name");
submitBtn.addEventListener("click", function(){
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((json) => {
            const {title, }= json.result[0].name;
            name.

        })
        .catch((e) => console.log(e));
});

