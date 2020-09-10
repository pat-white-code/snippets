db.movieDetails.updateMany({
  rated: null
}, {
  $unset: {
    rated:""
  }
})

let filter = {title: "House, M.D., Season Four: New Beginnings"};

let doc = db.movieDetails.updateOne(filter);

doc.poster = "https://www.imdb.com/title/tt1329164/mediaviewer/rm2619416576";

doc.genres.push("TV Series")


let id = ObjectId("5f590a9e29ccfb5322414c7d");
let filter = {_id: id}
db.movieDetails.deleteOne({_id})

// show all movies that are not PG13 or PG

filter = {rated: {$nin: ["PG-13", "PG"]}}

filter = {viewerRating: {$type: "int"}}

