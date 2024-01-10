const postBtns = document.querySelectorAll(".post-btn");

postBtns.forEach((postBtn) => {
    const followCursor = document.createElement("div");
    followCursor.classList.add("follow-cursor");
    postBtn.appendChild(followCursor);

    postBtn.addEventListener("mousemove", (e) => {
        followCursor.style.left = `${e.pageX - postBtn.offsetLeft - 10}px`;
        followCursor.style.top = `${e.pageY - postBtn.offsetTop - 10}px`;
    });
});


const aBtns = document.querySelectorAll(".a-btn");

aBtns.forEach((aBtn) => {
    const followCursor = document.createElement("div");
    followCursor.classList.add("follow-cursor");
    aBtn.appendChild(followCursor);

    aBtn.addEventListener("mousemove", (e) => {
        followCursor.style.left = `${e.pageX - aBtn.offsetLeft - 10}px`;
        followCursor.style.top = `${e.pageY - aBtn.offsetTop - 10}px`;
    });
});