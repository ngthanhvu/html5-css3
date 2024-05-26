// khai báo class

class Account {
     constructor(username, email, phone, gender, dateofbirth, password) {
          this.username = username;
          this.email = email;
          this.phone = phone;
          this.dateofbirth = dateofbirth;
          this.gender = gender;
          this.password = password;
     }
}

let danhsachUser = [];

document.getElementById("register-btn").addEventListener("click", (event) => {
     event.preventDefault();

     const username = document.getElementById("username").value.trim();
     const password = document.getElementById("password").value.trim(); // Corrected this line
     const dateofbirth = document.getElementById("dateofbirth").value.trim();
     const email = document.getElementById("email").value.trim();
     const phone = document.getElementById("phone").value.trim();
     const nam = document.getElementById("check-male");
     const nu = document.getElementById("check-female");
     const noanswer = document.getElementById("check-other");

     let gender;
     if (nam.checked) {
          gender = "male";
     } else if (nu.checked) {
          gender = "female";
     } else if (noanswer.checked) {
          gender = "prefer not to say";
     }

     if (username === "" || password === "") {
          Swal.fire({
               title: "Thất bại",
               text: "Vui lòng điền đầy đủ thông tin",
               icon: "error",
          });
          return;
     }

     danhsachUser = JSON.parse(localStorage.getItem("user")) || [];

     let newuser = new Account(username, email, phone, gender, dateofbirth, password);
     danhsachUser.push(newuser);
     localStorage.setItem("user", JSON.stringify(danhsachUser));

     Swal.fire({
          title: "Thành công!",
          text: "Đăng ký thành công",
          icon: "success",
     });
});
