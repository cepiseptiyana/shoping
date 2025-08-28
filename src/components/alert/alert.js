import Swal from "sweetalert2";

const alertLogin = (title, text, icon) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: "Oke",
    timer: 3000,
    confirmButtonText: "OK",
  });
};

export default alertLogin;
