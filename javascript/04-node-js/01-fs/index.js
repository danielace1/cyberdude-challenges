const fs = require("fs");

const touristPlaces = require("./data/touristPlaces.json");

fs.mkdir("touristPlaces", (e) => {
  console.log(e);
});

touristPlaces.map((place) => {
  const districtFolder = place.district.toLocaleLowerCase();
  fs.mkdir(`touristPlaces/${districtFolder}`, () => {
    place.places.forEach((touristSpot) => {
      fs.writeFile(
        `touristPlaces/${districtFolder}/${touristSpot.name}.txt`,
        touristSpot.desc,
        (err) => {
          console.log("File created Successfully", err);
        }
      );
    });
  });
});
