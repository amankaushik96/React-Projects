import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2463cef3c288a1ea442467cba69f895a79146caa4dcd3a681d2b38a4f2831d34"
  }
});
