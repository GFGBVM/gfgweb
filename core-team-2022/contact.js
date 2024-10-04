(function () {
  emailjs.init("IoFrdQf_rUg4urIs3");
})();

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_pf8l7ck", "template_a9vxwdr", params)
    .then(function (res) {
      alert("Message Sent Successfully !");
    });
}
