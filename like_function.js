// get all tags that have "like-button" in there class and save it to likes var
const likes = document.querySelectorAll(".like-button");

// foreach to apply it for every element of likes
likes.forEach(like => {

    // this activate when preform 'click' action on div
    like.addEventListener("click", (event) => {

        // call it to check the statue of the div
        event.target.classList.toggle("dislike");
        event.target.classList.toggle("like");

        // if click div, check and change its statue
        if (event.target.classList.contains("like")) {

            // print to the console
            console.log("like");

            // add class to the div => <div class="like-button ++like++">
            like.classList.add("like");

            // remove class from the div => <div class="like-button --dislike-- ">
            like.classList.remove("dislike");
        }

        // the reverse process
        else {
            console.log("dislike");
            like.classList.add("dislike");
            like.classList.remove("like");
        }
    })
})