const itemsection = document.getElementById("items");
const itemNames = ["Bank Donna", "Bank Fido", "Bank Leon", "Bank Suzanne", "Bed Arthur", "Bed Johan", "Bed Patricia", "Eettafel Ellen", "Eettafel Martin", "Fauteuil Esther", "Fauteuil Ilse", "Fauteuil Karla", "Fauteuil Mara", "stoelen Folmer", "stoelen Jordy", "stoelen Maaike"];
const itemImages = ["bank_donna.jpg", "bank_fido.jpeg", "bank_leon.jpg", "bank_suzanne.webp", "bed_arthur.jpg", "bed_johan.webp", "bed_patricia.jpg", "eettafel_ellen.webp", "eettafel_martin.webp", "fauteuil_esther.jpg", "fauteuil_ilse.jpeg", "fauteuil_karla.webp", "fauteuil_mara.webp", "stoelen_folmer.jpg", "stoelen_jordy.jpg", "stoelen_maaike.jpg"];
const itemPrices = [497.96, 1286.90, 2081.67, 1798.73, 2075.64, 1016.50, 2709.61, 1618.05, 909.57, 1054.61, 732.27, 2838.62, 2829.70, 921.21, 1472.42, 1855.25];

function laadItemsIn(){
    for (let i = 0; i < itemNames.length; i++){
     
        const itemFrame = document.createElement("div");
        itemFrame.classList.add("itemFrame");
        itemFrame.style.backgroundColor = "white"
        itemFrame.style.padding = "5px"

     
        const image = document.createElement("img");
        image.src = "./media/images/" + itemImages[i];
        image.alt = itemNames[i];
        image.style.width = "100%";
        image.style.height = "auto";

     
        const name = document.createElement("h3");
        name.textContent = itemNames[i];

     
        const price = document.createElement("p");
        price.textContent = "€" + itemPrices[i].toFixed(2);

     
        itemFrame.append(image);
        itemFrame.append(name);
        itemFrame.append(price);

     
        itemsection.append(itemFrame);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    laadItemsIn();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    
    document.querySelectorAll(".itemFrame").forEach(el => {
        observer.observe(el);
    });

});

//maak img, h3 en p (img, name, price)
//zet goede waardes er in (img url, text, text)
//maak item frame en zet display grid
//zet elementen op de goede volgorde in de frame
//zet de frame in de itemSection
//en dat allemaal dan in een forloop for length itemNames