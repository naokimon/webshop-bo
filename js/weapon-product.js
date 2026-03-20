function getWeaponFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function loadWeapon() {
    const id = getWeaponFromURL();
    const weapon = weapons.find(w => w.id === id);

    if (!weapon) {
        document.querySelector(".product-page").innerHTML = `
            <div style="text-align:center; padding: 4rem; font-size: 1.6rem;">
                <p>Weapon not found.</p>
                <a href="../index.html">Return home</a>
            </div>
        `;
        return;
    }

    document.title = `The Velvet Room - ${weapon.name}`;
    document.getElementById("weapon-image").src = weapon.image;
    document.getElementById("weapon-indexImage").src = weapon.indexImage;
    document.getElementById("weapon-image").alt = weapon.name;
    document.getElementById("weapon-name").textContent = weapon.name;
    document.getElementById("weapon-type").textContent = `Equipment type: ${weapon.equipmentType}`;
    document.getElementById("weapon-description").textContent = weapon.description;
    document.getElementById("weapon-price").textContent = `Buy now for ${weapon.price}`;

    const statsList = document.getElementById("weapon-stats");
    statsList.innerHTML = "";
    for (const [stat, value] of Object.entries(weapon.stats)) {
        const li = document.createElement("li");
        li.textContent = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`;
        statsList.appendChild(li);
    }

    document.getElementById("weapon-price").addEventListener("click", (e) => {
        addToCart(weapon.id, e.currentTarget);
    });

    document.querySelector(".shopping-cartdesc").parentElement.href = "shoppingcart.html";
}

loadWeapon();