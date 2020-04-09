$(function() {

  // Call Gridder
  $('.gridder').gridderExpander({
      scroll: true,
      scrollOffset: 30,
      scrollTo: "panel",                  // panel or listitem
      animationSpeed: 400,
      animationEasing: "easeInOutExpo",
      showNav: true,                      // Show Navigation
      nextText: "Next",                   // Next button text
      prevText: "Previous",               // Previous button text
      closeText: "Close",                 // Close button text
      onStart: function(){
          //Gridder Inititialized
      },
      onContent: function(){
          //Gridder Content Loaded
      },
      onClosed: function(){
          //Gridder Closed
      }
  });


  var volunteerData = [{
      "name": "Johnny Bravo",
      "subtitle": "Doing Cartoons",
      "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      "decsription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "JohnnyBravo.jpg"
  },{
      "name": "Johnny Bravo",
      "subtitle": "Doing Cartoons",
      "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      "decsription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "JohnnyBravo.jpg"
  },{
      "name": "Johnny Bravo",
      "subtitle": "Doing Cartoons",
      "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      "decsription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "JohnnyBravo.jpg"
  },{
      "name": "Johnny Bravo",
      "subtitle": "Doing Cartoons",
      "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      "decsription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "JohnnyBravo.jpg"
  },{
      "name": "Johnny Bravo",
      "subtitle": "Doing Cartoons",
      "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      "decsription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "JohnnyBravo.jpg"
  },{
      "name": "Johnny Bravo",
      "subtitle": "Doing Cartoons",
      "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      "decsription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "JohnnyBravo.jpg"
  },];

  makeVolunteerEntries(volunteerData);

});


function makeVolunteerEntries(volunteers){

  var volunteerThumbnails = "";
  var volunteerContents = "";

  for(var i=0; i<volunteers.length; i++){

      volunteerThumbnails += VolunteerListCard(volunteers[i],i);
      volunteerContents += VolunteerContent(volunteers[i],i);
  }

  $('#volunteerList').html(volunteerThumbnails);
  $('#volunteerContent').html(volunteerContents);

}

//reference: https://codepen.io/choogoor/pen/YWBxAg/
function VolunteerListCard(volunteer,index){
var card = `
<div class="gridder-list" data-griddercontent="#gridder-content-${index}">
<div class="example-1 card">
  <div class="wrapper">
      <div class="photo">
          <img src="images/volunteers/${volunteer.image}" alt="${volunteer.name}"/>
      </div>
    <div class="date">
      <span class="day">12</span>
      <span class="month">Aug</span>
      <span class="year">2016</span>
    </div>
    <div class="data">
      <div class="content">
        <span class="author">${volunteer.subtitle}</span>
        <h2 class="title">${volunteer.name}</h1>
        <p class="text">${volunteer.shortDescription}</p>
        <label for="show-menu" class="menu-button"><span></span></label>
      </div>
    </div>
  </div>
</div>
</div>
`;

return card;

}

function VolunteerContent(volunteer, index){
  var content = `
  <div id="gridder-content-${index}" class="gridder-content">
  <div class="row">
      <div class="col-sm-4">
      <img src="images/volunteers/${volunteer.image}" alt="${volunteer.name}" class="img-fluid" />
      </div>
      <div class="col-sm-8">
          <h2>${volunteer.name}</h2>
          <h5>${volunteer.subtitle}</h5>
          <p>${volunteer.decsription}</p>
      </div>
  </div>
  </div>
`;
  return content
}