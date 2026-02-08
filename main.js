fetch('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll', {
   method: 'GET'
})
.then((response) => response.json())
.then((data) => {
   const roomsContainer = document.getElementById("rooms");
   const totalRooms = data.length;
   data.forEach((room) => {
       const card = document.createElement("div");
       card.className = "roomcard";

       const image = room.images && room.images.length > 0 ? room.images[0].source : "";

       card.innerHTML = `
           <img src="${image}" alt="${room.name}" style="width: 100%; height: 200px; object-fit: cover;">
           <h2>${room.name}</h2>
           <p><strong>ფასი:</strong> ${room.pricePerNight} $</p>
           <p><strong>სტუმრების მაქსიმუმი:</strong> ${room.maximumGuests}</p>
           <p><strong>ხელმისაწვდომია?:</strong> ${room.available ? "დიახ" : "არა"}</p>
           <p><strong>Room ID:</strong> ${room.id}</p>
       `;

       roomsContainer.appendChild(card);
   });

   const countInfo = document.createElement("p");
   countInfo.innerHTML = `<strong>ოთახების რაოდენობა: ${totalRooms}</strong>`;
   roomsContainer.appendChild(countInfo);
})
.catch((error) => {
   console.error("შეცდომა:", error);
});




// თავიდან გამოვიტანე სასტუმროები ისე როგორც თქვენ გააკეთედ მაგრამ ფასი ვერ გამომქომნდა
// (შემდეგ მივხვდი რო სასტუმროს კი არა ოთახს ექნება ფასი და ახლიდან დავიწყე ეს კოდი კი დამრჩა როგორც ბონუს დავალება)

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
