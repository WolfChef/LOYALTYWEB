// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var images = document.getElementsByClassName("zoomable");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var descriptionText = document.getElementById("description");
var modalButton = document.getElementById("modalButton");

// Service details object to hold descriptions and links
const serviceDetails = {
    "Web Development": {
        description: "We specialize in creating custom websites tailored to your needs.",
        link: "web-development.html"
    },
    "Graphic Design": {
        description: "Our graphic design services enhance your brand's visual appeal.",
        link: "graphic-design.html"
    },
    "SEO Optimization": {
        description: "Optimize your website to rank higher on search engines and increase visibility.",
        link: "seo-optimization.html"
    },
    "Content Creation": {
        description: "Craft compelling content that resonates with your audience.",
        link: "content-creation.html"
    }
};

// Loop through all images
for (let img of images) {
    img.onclick = function() {
        modal.style.display = "block"; // Show the modal
        modalImg.src = this.src; // Set the source of the modal image
        captionText.innerHTML = this.alt; // Set the caption from the image's alt attribute
        
        // Get the service name from the heading next to the image
        const serviceName = this.nextElementSibling.innerText;
        console.log("Service Name:", serviceName); // Debugging output

        // Set the description and button link based on the service
        descriptionText.innerHTML = serviceDetails[serviceName].description; // Set description
        modalButton.href = serviceDetails[serviceName].link; // Set button link

        // Debugging output to verify values
        console.log("Description:", serviceDetails[serviceName].description);
        console.log("Link:", serviceDetails[serviceName].link);
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
