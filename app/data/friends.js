// creating an empty friends array
// array will be populated with a friends object from data handled in
// survey.html and post request in apiRoutes.js
// adding a few base friends for beginning based on tpb characters
var friendsArray = [
	{
    name: "Danuta",
  	photo: "https://cdn.pixabay.com/photo/2014/06/04/16/58/cigar-362183__340.jpg",
  	scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	},
	
	{
    name: "Janice",
  	photo: "https://cdn.pixabay.com/photo/2020/06/04/15/37/portrait-5259282__340.jpg",
  	scores:[3, 3, 2, 4, 1, 5, 3, 1, 5, 3]
	}, 
	
	{
    name: "Bennie",
  	photo: "https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973__340.jpg",
  	scores:[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	}, 

	{
    name: "Adela",
  	photo: "https://cdn.pixabay.com/photo/2020/03/04/08/38/model-4900868__340.jpg",
  	scores:[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
	}, 

	{
    name: "Elenora",
  	photo: "https://cdn.pixabay.com/photo/2018/04/27/21/54/woman-3355953__340.jpg",
  	scores:[4, 4, 4, 4, 1, 2, 3, 1, 2, 3]
	}, 

	{
    name: "",
  	photo: "https://cdn.pixabay.com/photo/2016/03/17/11/48/portrait-1262805__340.jpg",
  	scores: [1, 5, 1, 5, 1, 5, 1, 1, 1, 5]
	}
];

// exporting for accessibility in apiRoutes.js file for get request on api/friends
module.exports = friendsArray;