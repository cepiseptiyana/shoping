import Swal from "sweetalert2";

import { useEffect } from "react";

const AlertLogin = ({ alert, icon }) => {
  useEffect(() => {
    Swal.fire({
      title: "Selamat Datang!",
      text: alert,
      icon: icon,
      confirmButtonText: "Oke",
      timer: 3000,
      confirmButtonText: "OK",
    });
  }, []);
};

export default AlertLogin;
