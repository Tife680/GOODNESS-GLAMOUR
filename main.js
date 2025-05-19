
function sendToWhatsApp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const selectedOption = document.getElementById("inquiryType").value;

    const fullMessage = `*New Business Inquiry*%0A` +
                        `*Type:* ${selectedOption}%0A` +
                        `*Name:* ${firstName} ${lastName}%0A` +
                        `*Email:* ${email}%0A` +
                        `*Message:* ${message}`;

    const phoneNumber = "+2348089360606"; // Replace with your WhatsApp number without +
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");
}
