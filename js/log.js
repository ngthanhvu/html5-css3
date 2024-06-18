// login 

document.getElementById("login-btn").addEventListener("click", (event) => {
     event.preventDefault();
     const username = document.getElementById("username").value.trim();
     const password = document.getElementById("password").value.trim();

     if (username === "" || password === "") {
          Swal.fire({
               title: "Thất bại",
               text: "Vui lòng điền đầy đủ thông tin",
               icon: "error",
          });
          return;
     }

     const users = JSON.parse(localStorage.getItem("user")) || [];
     const founduser = users.find((user) => user.username === username && user.password === password);
     if (founduser) {
          localStorage.setItem("login", true);
          Swal.fire({
               title: "Thành công!",
               text: "Đăng nhập thành công",
               icon: "success",
               timer: 1000,
          }).then(() => {
               location.assign("index.html");
          });
     } else {
          Swal.fire({
               title: "Thất bại!",
               text: "Email hoặc mật khẩu sai",
               icon: "error"
          });
     }
})