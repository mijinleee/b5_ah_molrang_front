const backend_base_url = "http://127.0.0.1:8000";
const front_base_url = "http://127.0.0.1:5500";

async function injectNavbar() {
    fetch("../navbar.html").then(response => {
        return response.text()
    })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })
    let navbarHtml = await fetch("../navbar.html")
    let data = await navbarHtml.text()
    document.querySelector("header").innerHTML = data;

    let nav_left1 = document.getElementById("nav-left1")
    nav_left1.style.display = "none"
    let nav_left2 = document.getElementById("nav-left2")
    nav_left2.style.display = "none"
    let nav_left3 = document.getElementById("nav-left3")
    nav_left3.style.display = "none"
    let nav_left4 = document.getElementById("nav-left4")
    nav_left4.style.display = "none"

    const payload = localStorage.getItem("payload")
    const payload_parse = JSON.parse(payload)

    if (payload) {
        console.log("is_admin", payload_parse.is_admin)

        // 어드민일 경우 글작성 버튼 보이게 하기
        if (payload_parse.is_admin) {
            nav_left1.style.display = "block"
        } else {
            nav_left1.style.display = "none"
        }

        nav_left2.style.display = "block"
        nav_left3.style.display = "block"
        nav_left4.style.display = "block"

        // const payload = localStorage.getItem("payload")
        // const payload_parse = JSON.parse(payload)
        console.log(payload_parse.username)

        const intro = document.getElementById("intro")

        intro.innerText = `${payload_parse.username} 님 안녕하세요!`


        let navbarRight = document.getElementById("nav-right")
        let newLi = document.createElement("li")
        newLi.setAttribute("class", 'nav-link active')

        newLi.innerText = "로그아웃"
        newLi.setAttribute("onClick", "handleLogout()")



        navbarRight.appendChild(newLi)

        let loginButton = document.getElementById("login-button")
        loginButton.style.display = "none"

        let signupButton = document.getElementById("signup-button")
        signupButton.style.display = "none"


    }
}

console.log("로딩되었습니다.")



function handleLogout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    location.replace(`${front_base_url}/index.html`)
    console.log(response)
}

function checkLogin() {
    const payload = localStorage.getItem("payload")
    if (payload) {
        window.location.replace(`${front_base_url}/index.html`)
    }
}


injectNavbar()