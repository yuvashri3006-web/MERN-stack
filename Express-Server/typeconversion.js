let express=require("express")

let app = express()
const ChennaiStreetFood = [
    {
      id: 1,
      name: "Sundal",
      type: "Snack",
      mainIngredients: ["Chickpeas", "Coconut", "Mustard Seeds", "Curry Leaves"],
      placeOfOrigin: "Chennai, Tamil Nadu, India",
      famousAreas: ["Marina Beach", "Besant Nagar Beach"],
      priceRangeINR: "20-40",
      vegetarian: true,
      popularRating: 4.5
    },
    {
      id: 2,
      name: "Kothu Parotta",
      type: "Main Course",
      mainIngredients: ["Parotta", "Egg", "Chicken", "Salna", "Onion"],
      placeOfOrigin: "Tamil Nadu, India",
      famousAreas: ["Parrys Corner", "T. Nagar"],
      priceRangeINR: "80-150",
      vegetarian: false,
      popularRating: 4.8
    },
    {
      id: 3,
      name: "Aththo",
      type: "Evening Snack",
      mainIngredients: ["Noodles", "Cabbage", "Carrot", "Lemon", "Spices"],
      placeOfOrigin: "Burma Bazaar, Chennai",
      famousAreas: ["Burma Bazaar"],
      priceRangeINR: "50-100",
      vegetarian: true,
      popularRating: 4.6
    },
    {
      id: 4,
      name: "Kalakki",
      type: "Snack",
      mainIngredients: ["Egg", "Pepper", "Salt", "Oil"],
      placeOfOrigin: "Chennai, Tamil Nadu, India",
      famousAreas: ["T. Nagar", "Velachery"],
      priceRangeINR: "30-60",
      vegetarian: false,
      popularRating: 4.4
    },
    {
      id: 5,
      name: "Pani Puri",
      type: "Chaat",
      mainIngredients: ["Puri", "Tamarind Water", "Potato", "Chickpeas"],
      placeOfOrigin: "India",
      famousAreas: ["Sowcarpet", "Anna Nagar"],
      priceRangeINR: "30-70",
      vegetarian: true,
      popularRating: 4.3
    },
    {
      id: "sf101",
      name: "Mini Tiffin Combo",
      type: "Breakfast",
      mainIngredients: ["Idli", "Vada", "Pongal", "Sambar", "Chutney"],
      placeOfOrigin: "Chennai, Tamil Nadu, India",
      famousAreas: ["Mylapore", "Triplicane"],
      priceRangeINR: "60-120",
      vegetarian: true,
      popularRating: 4.7
    }
  ]
;

app.get("/",(req,res)=>{
    res.send(ChennaiStreetFood);
})
app.listen(3000,()=>{
    console.log("server started at port 3000");
})