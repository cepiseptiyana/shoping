import Swal from "sweetalert2";

import { useEffect } from "react";

const AlertLogin = ({ alert }) => {
  useEffect(() => {
    Swal.fire({
      title: "Selamat Datang!",
      text: alert,
      icon: "success",
      confirmButtonText: "Oke",
      timer: 3000,
    });
  }, []);
};

export default AlertLogin;
