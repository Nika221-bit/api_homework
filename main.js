
fetch('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll', {
   method: 'GET'
})
.then((response) => response.json())
.then((data) => {
   const roomsContainer = document.getElementById("rooms");

   data.forEach((hotel) => {
       const card = document.createElement("div");
       card.className = "hotelrooms";

       const image = hotel.featuredImage;
       
       const prices = hotel.rooms.map(room => room.pricePerNight);
       const minPrice = Math.min(...prices);
       const maxPrice = Math.max(...prices);

       card.innerHTML = `
           <img src="${image}" alt="${hotel.name}" style="width: 100%; height: 200px; object-fit: cover;">
           <h2>${hotel.name}</h2>
           <p class="price"><strong>ფასი: ${minPrice} - ${maxPrice} $</strong></p>
           <p><strong>მისამართი:</strong> ${hotel.address}</p>
           <p><strong>ქალაქი:</strong> ${hotel.city}</p>
           <p><strong>ოთახების რაოდენობა:</strong> ${hotel.rooms.length}</p>
       `;
       roomsContainer.appendChild(card);
   });
})
.catch((error) => {
   console.error("მონაცემების წამოღებისას შეცდომა:", error);
});

// fetch('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
// .then((response) => response.json())
// .then((data) => {
//    const roomsContainer = document.getElementById("rooms");
//    data.forEach((hotel) => {
//        const card = document.createElement("div");
//        card.className = "hotelrooms";
//        const firstRoom = hotel.rooms && hotel.rooms.length > 0 ? hotel.rooms[0] : null;
//        const price = `${hotel.rooms.pricePerNight}`
//        const image = hotel.featuredImage;
       
//        card.innerHTML = `
//            <img src="${image}" alt="${hotel.name}" style="width: 100%; height: 200px; object-fit: cover;">
//            <h2>${hotel.name}</h2>
//            <p class="price"><strong>ფასი: ${hotel.rooms.pricePerNight} $</strong></p>
//            <p><strong>მისამართი:</strong> ${hotel.address}</p>
//            <p><strong>ქალაქი:</strong> ${hotel.city}</p>
//            <p><strong>ოთახების რაოდენობა:</strong> ${hotel.rooms ? hotel.rooms.length : 0}</p>
           
           
//        `;
//        roomsContainer.appendChild(card);
//    })
// });
