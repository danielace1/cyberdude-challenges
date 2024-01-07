const ipAddressPlaceholder = document.getElementById("ipAddress");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status === 200) {
      ipAddressPlaceholder.textContent = xhr.responseText;
    } else {
      ipAddressPlaceholder.innerHTML =
        "<div class='alert-danger'>COULDN'T GET YOUR IP. <a href='/Get-My-IP-Web-App/' class='retry-btn'>Retry</a></div>";
    }
  }
};
xhr.open("GET", "https://ipv4.icanhazip.com/");
xhr.send();
