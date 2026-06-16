let container = document.getElementById("postsContainer");
let errorMsg = document.getElementById("errorMsg");

// USER
let user = localStorage.getItem("username");

if (document.getElementById("userWelcome") && user) {
    document.getElementById("userWelcome").innerText =
    "👤 Welcome " + user;
}

// ...AUTO LOAD
loadPosts();

function loadPosts() {

    container.innerHTML = "";
    errorMsg.innerText = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
    })
    .then(data => {

        data.slice(0, 10).forEach(post => {

            let div = document.createElement("div");
            div.classList.add("post");

            div.innerHTML = `
                <h3 onclick="toggleComments(this, ${post.id})">
                    📌 ${post.title}
                </h3>

                <p><b>Description:</b> ${post.body}</p>

                <button class="likeBtn" onclick="likePost(this)">
                    ❤️ Like
                </button>

                <div class="comments"></div>
            `;

            container.appendChild(div);
        });

    })
    .catch(() => {
        errorMsg.innerText = "⚠ Failed to load posts";
    });
}

// LIKE
function likePost(btn) {

    if (btn.classList.contains("liked")) {
        btn.classList.remove("liked");
        btn.innerText = "❤️ Like";
        btn.style.background = "#eee";
        btn.style.color = "black";
    } else {
        btn.classList.add("liked");
        btn.innerText = "❤️ Liked";
        btn.style.background = "red";
        btn.style.color = "white";
    }
}

// COMMENTS
function toggleComments(element, id) {

    let box = element.parentElement.querySelector(".comments");

    if (box.innerHTML !== "") {
        box.innerHTML = "";
        return;
    }

    box.innerHTML = "⏳ Loading comments...";

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(comments => {

        box.innerHTML = "<b>💬 Comments</b><br><br>";

        comments.slice(0, 3).forEach(c => {
            box.innerHTML += `
                <p>
                    <b>Name:</b> ${c.name}<br>
                    <b>Comment:</b> ${c.body}
                </p>
                <hr>
            `;
        });

    })
    .catch(() => {
        box.innerHTML = "❌ Failed to load comments";
    });
}

// THEME
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("themeBtn");

    btn.innerText = document.body.classList.contains("dark-mode")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";
}
