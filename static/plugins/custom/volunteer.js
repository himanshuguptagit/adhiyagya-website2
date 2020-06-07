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

/*
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
    },];*/

    var volunteerData = 
        [
            {"Timestamp":"02/25/2020 23:56:38","Email Address":"piyusharora6505@gmail.com","Full Name":"Piyush Arora","What do you do?":"Pursuing MBA (Finance & Business Analytics) from UConn, USA","Write 2-3 sentences on why you joined Adhiyagya":{"":"I always wanted to help in the education field and I was introduced to Adhiyagya by a good friend. The first meeting with Kunjal di made an everlasting impact and I never left. Even after transitioning to different cities and countries, I still would do anything to help these kids out and work for Adhiyagya in any way possible."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"Every moment with Adhiyagya has been special. From celebrating birthdays and events to being called the favourite bhaiya by the kids, its been exceptional. Working with Kunjal di and the team of volunteers to secure a better future for these kids has been mesmerising."},"When did you join Adhiyagya?":"June, 2016","Please upload your picture":"https://drive.google.com/open?id=1Qz3ZBkZC8QfisCdJPTPHEU1MH0yhtOvM"},
            {"Timestamp":"02/26/2020 00:03:09","Email Address":"siddhikhanna@hotmail.com","Full Name":"Siddhi","What do you do?":"2nd year politicial science honours","Write 2-3 sentences on why you joined Adhiyagya":{"":"I always wanted to do something for poor children"},"Write in brief on your special moment from your Adhiyagya's journey":{"":"When the kids did very well in their test and we played a game as their reward"},"When did you join Adhiyagya?":"14 may 2019","Please upload your picture":"https://drive.google.com/open?id=1EhP3pgaoFx0MWx6kzJWQlPkvKCkYC68W"},
            {"Timestamp":"02/26/2020 00:05:09","Email Address":"surbhi9898gupta@gmail.com","Full Name":"Surbhi gupta","What do you do?":"1st year, masters in psychology, Lpu","Write 2-3 sentences on why you joined Adhiyagya":{"":"The greatest gift one can give to the society is the gift of knowledge. I joined adhiyagya as a leisure activity but soon it became one of my favourite places to go to. The team of volunteers and children here are so full of life and down to earth."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"Every moment spent here is special in its own ways. Either its students getting good marks in a test, or celebrating any festival/ birthday, participating in games and activities."},"When did you join Adhiyagya?":"April, 2020","Please upload your picture":"https://drive.google.com/open?id=1bZjBuf9MTr7eHPCdRQJdw3EmXdAwX-dY"},
            {"Timestamp":"02/26/2020 00:35:17","Email Address":"shreshtha11gupta@gmail.com","Full Name":"Shreshtha Gupta","What do you do?":"Market Research Associate at Aspiring Minds","Write 2-3 sentences on why you joined Adhiyagya":{"":"I always wanted to join an organisation where I know I am helping someone from the ground level, and Adhiyagya is that platform for me."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"Though there are many special moments, but one of my favourites is when children takes our scoldings seriously, it shows how much they respect us. Also the bond that we all volunteers and students have makes us a small but strong family that I will cherish forever."},"When did you join Adhiyagya?":"December 14, 2015","Please upload your picture":"https://drive.google.com/open?id=1gzMfMEh1nwbyTyTRaLH5ndffm74r-Zs6"},
            {"Timestamp":"02/26/2020 02:09:37","Email Address":"mjay4smriti@gmail.com","Full Name":"MRITYUNJAY SMRITI","What do you do?":"Working Professional","Write 2-3 sentences on why you joined Adhiyagya":{"":"To help in Contributing towards EWS Children welfare and Educational development"},"Write in brief on your special moment from your Adhiyagya's journey":{"":"I was deeply touched by their performance at our corporate office in Gurgaon in December 2018-Jan2019. I was in awe of their live cultural performance in Sarita Vihar Community Center during Dushehra Celebration in 2019. I clapped like never before or the way I rooted for Sachin Tendulkar in my Childhood days. Kudos to the organising committee and Hope to Contribute further"},"When did you join Adhiyagya?":"2019","Please upload your picture":"https://drive.google.com/open?id=1Hys7SrHqYl_vBU-IX7WKt-uWNQ5Wsci4"},
            {"Timestamp":"02/26/2020 06:10:10","Email Address":"raivikrant1@gmail.com","Full Name":"Vikrant Rai","What do you do?":"Project manager at Lattice Innovations, New Delhi","Write 2-3 sentences on why you joined Adhiyagya":{"":"First thing is I like to teach, specially to the kids as they help me become more imaginative at certain concepts. Secondly I think all of us should take some time out from our daily schedule to help our neighbooring communities to grow."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"In one of my class, I was helping the kids to understand the power of questioning each and everything while one is in learning phase, hence asking WHY untill you don't picture that concept!\nSo, I wrote it on the white board at top right location. In next class when I arrived the kids wrote the date and my name at top left (as they use to do) but this I saw at top right they wrote in caps 'WHY' as well and after that they keep writing in this way.\nI wasn't aware that this small topic can struck them for such a long period of time."},"When did you join Adhiyagya?":"Sep, 2019","Please upload your picture":"https://drive.google.com/open?id=1WN5NIDAEmzJIbnEyYd5hPLCBZiRSr5Ry"},
            {"Timestamp":"02/26/2020 06:20:26","Email Address":"manasanand2@gmail.com","Full Name":"Manas Anand","What do you do?":"1st year Biochemistry honours DU","Write 2-3 sentences on why you joined Adhiyagya":{"":"Adhiyagya to me has been a platform to not only let explore my social personality but also to return to the society in the best way I can, in the smallest of my capacities, that is, by the gift of imparting education."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"Despite having a very disturbed phase in my life, Adhiyagya has been a reason and a place I look forward to going each time with the same enthusiasm as the first day. The enthusiasm and intrigue this place has to offer and the joy you get when given so much appreciation from children and other fellow volunteers, has been my driving force that has let me a part of the Adhiyagya Family since 10 golden months."},"When did you join Adhiyagya?":"April 2019","Please upload your picture":"https://drive.google.com/open?id=1kET1PzKC6gnbPU4TYJ_1XNWOb_ttPR_f"},
            {"Timestamp":"02/26/2020 07:13:13","Email Address":"abhitoshrawat2003@gmail.com","Full Name":"Meenakshi Rawat","What do you do?":"Housewife","Write 2-3 sentences on why you joined Adhiyagya":{"":"In order to educate the needy so that they can stand up on their feet and be financially independent"},"Write in brief on your special moment from your Adhiyagya's journey":{"":"Really enjoyed the amount of love and respect received from the children on Teachers day"},"When did you join Adhiyagya?":"April,2019","Please upload your picture":"https://drive.google.com/open?id=1qFP7ubNiPw3QW_xLMvuSqGCmCaX2rmEL"},
            {"Timestamp":"02/26/2020 14:38:23","Email Address":"avanindra19.av@gmail.com","Full Name":"Avanindra Singh","What do you do?":"Working at tcs ( ASE)","Write 2-3 sentences on why you joined Adhiyagya":{"":"I joined Adhiyagya because I wanted to gain some experience of managing kids . One of the goals in my life is to start a school in my home town in Himachal Pradesh so after my graduation i decided to join Adhiyagya.\n"},"Write in brief on your special moment from your Adhiyagya's journey":{"":"It has been around 6 months since I joined Adhiyagya. The special moment that I had during my short yet wonderful journey was when my grandmother appreciated my work of teaching mathematics  to our students in Hindi ."},"When did you join Adhiyagya?":"July 2019","Please upload your picture":"https://drive.google.com/open?id=15iJGQPrWsgBiL-byk-VuynrMuKt13TrR"},
            {"Timestamp":"02/27/2020 21:16:32","Email Address":"aanchal.arora915@gmail.com","Full Name":"Aanchal Arora","What do you do?":"Academic writer","Write 2-3 sentences on why you joined Adhiyagya":{"":"It was a dream to be able to serve the society. Adhiyaga has helped me fulfill that dream."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"The love received from the children of Adhiyagya has made every moment special. The love that the children shower makes you feel that you belong to them. The most favourite times spend at Adhiyagya are the ones when we prepare for any events. Adhiyagya has become an extended family."},"When did you join Adhiyagya?":"August, 2016","Please upload your picture":"https://drive.google.com/open?id=1LVoSowy3iwTtk3G3Cj60C2aLAYANorMA"},
            {"Timestamp":"02/28/2020 14:10:25","Email Address":"tushaar.mehta.15@gmail.com","Full Name":"Tushaar Mehta","What do you do?":"Consultant with Cognizant Technology Solutions","Write 2-3 sentences on why you joined Adhiyagya":{"":"Our lives revolve revolve around ourselves and the people we are attached to. We toil and work hard to make our lives better. Adhiyagya gave me an opportunity to actually make a difference in the lives of the not so lucky ones. If a little effort of my can lighten someone's life, then why not do it. The satisfaction is divine."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"I was given a new batch of very young kids. I started to teach them phonics and after a month's efforts the kids started to understand sounds. Being a novice at teaching it made feel proud of myself that I could make them understand what I wanted to impart. \nBeing a part of this noble cause is intself is special. I cherish each and every moment I spend here."},"When did you join Adhiyagya?":"May 2019","Please upload your picture":"https://drive.google.com/open?id=1HrbgDwoSQshsEH95BfnJSTzoJp4ETJ3S"},
            {"Timestamp":"03/02/2020 12:42:27","Email Address":"sunanda.dastidar@gmail.com","Full Name":"Dr. Sunanda Ghosh Dastidar","What do you do?":"Visiting faculty at Jamia Hamdard","Write 2-3 sentences on why you joined Adhiyagya":{"":"Want to give back to society and enrich my own life by being of help to young children."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"The excitement of the children and their sincere efforts for putting up a fantastic program during 2019 Durga puja"},"When did you join Adhiyagya?":"2019 April","Please upload your picture":""},
            {"Timestamp":"04/05/2020 03:54:12","Email Address":"agarwal1985vivek@gmail.com","Full Name":"Vivek Agarwal","What do you do?":"Working as AVP - Strategic Quality in EXL SERVICES","Write 2-3 sentences on why you joined Adhiyagya":{"":"I joined Adhiyagya by chance through family friends but never been able to get away from it. The ethics of this organization is very well laid out and adhered to and creates so much of value for the society."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"It's very difficult to define one moment here. Every moment is so special, meeting kids, teaching them, playing with them and the list goes on and on. It gives you immense satisfaction when you see the transformation happening in kids through the continued effort of Adhiyagya."},"When did you join Adhiyagya?":"April, 2015","Please upload your picture":""},
            {"Timestamp":"04/05/2020 03:56:59","Email Address":"katiadisha@gmail.com","Full Name":"Disha Katia","What do you do?":"Home Maker","Write 2-3 sentences on why you joined Adhiyagya":{"":"To give back to the society!"},"Write in brief on your special moment from your Adhiyagya's journey":{"":"One of my stufents called and conversed with me in english- was a very proud moment- encouraging me to continue going!"},"When did you join Adhiyagya?":"August 2019","Please upload your picture":"https://drive.google.com/open?id=11nzSKTDdCtrhAgoTGg7Bz28wSQyEvZRW"},
            {"Timestamp":"04/05/2020 04:29:25","Email Address":"tanvipandita98@gmail.com","Full Name":"Tanvi Pandita","What do you do?":"Preparing for MBA","Write 2-3 sentences on why you joined Adhiyagya":{"":"I joined Adhiyagya out of my curiosity and hope to do something worthwile with my life, to connect more with people and get myself to learn more."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"It has to be the Annual Function of Adhiyagya where the kids started cheering and clapping for me when I was presented with a certificate. No doubt, it's one of the most overwhelming moments I have experienced because in the cheering crowd there were so many faces I didn't know personally, but I was moved with each and every cheer. These kids are the purest form of motivation and encouragement one can experience. They drive me to do better for them and myself."},"When did you join Adhiyagya?":"August, 2017","Please upload your picture":"https://drive.google.com/open?id=1O0rFx49zSSbKOGuaXFfWVK3POT_671s6"},
            {"Timestamp":"04/05/2020 04:35:29","Email Address":"amit.harit23@gmail.com","Full Name":"Amit Harit","What do you do?":"Pvt job, HDFC Ltd.","Write 2-3 sentences on why you joined Adhiyagya":{"":"Wanted to be a part of a small genuine organisation which focused more on delivery than quantity. In few classes I realised that this was exactly the place"},"Write in brief on your special moment from your Adhiyagya's journey":{"":"When our kids outlived our expectations in a talent hunt competition"},"When did you join Adhiyagya?":"Early 2015","Please upload your picture":"https://drive.google.com/open?id=1ibLn8dr_T3R4yrJLvX-slcsVzZc4B_Ac"},
            {"Timestamp":"04/06/2020 07:36:20","Email Address":"anantapishen@gmail.com","Full Name":"Ananta Pishen","What do you do?":"Pursuing B.Ed.","Write 2-3 sentences on why you joined Adhiyagya":{"":"A zeal to connect and grow and help others in the same process. To hone qualities such as patience and discipline and curiosity and enable the children to do so as well."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"There really is no one special moment. Every day is special. The whole process of being the teacher and the taught creates a space for both the kids and me to flower and open up to each other. My children are motivated, disciplined and curious-all of which enables me to teach them with a greater connect and passion. It is not just the details of the subject to be taught but also the approach that matters. Life is full of subtleties and if the kids are able to notice that,the learning process will become more effort less. Watching kids coming to the class with a smile and a  \"hello didi\" makes me feel very blessed. The kids do their homework and sometimes we chat about movies and songs. The whole process become a reverse psychology of sorts. While talking to them I am reminded of my student days and that usually the teacher that you connect best with is also the subject in which the kids put more effort."},"When did you join Adhiyagya?":"June, 2019","Please upload your picture":"https://drive.google.com/open?id=11ksptM_YMBtefGTEkL0p1PHoz2IeydhI"},
            {"Timestamp":"04/06/2020 12:49:35","Email Address":"dkumari1950@gmail.comq","Full Name":"Darshan kumari","What do you do?":"B.A....B.ED","Write 2-3 sentences on why you joined Adhiyagya":{"":"I wanted to do social service since very long.As soon as I came to know abt Adhyyagya, I attended 1 class & found the real place to make effords\nIt's a very honest & caring organisation. Its proud to be here &, worth spending time & energy on the students who really r in need of it."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"Adhyyagya celebrates all events of all religions. This way our children learn & respect the equality of all religions. All religions teach the same thing & they all should be respected.I really enjoyed special moments on the celebrations of all religions equally."},"When did you join Adhiyagya?":"Four years back","Please upload your picture":"https://drive.google.com/open?id=1mZn-KB6TDTKxMC9frqcwBDa3vBvXYdPy"},
            {"Timestamp":"04/08/2020 03:07:33","Email Address":"ritubohra1967@gmail.com","Full Name":"Ritu bohra","What do you do?":"Housewife","Write 2-3 sentences on why you joined Adhiyagya":{"":"I was searching for something more fruitful and which gave me a sense of fulfillment.i wanted to give back to the society even a bit in my own way."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"My journey has been wonderful .The warmth and meeting like-minded people brighten my heart and feeling of belonging.The passion and discipline of the children always surprises me and makes me feel I am where I should be.Adhiyagyas is special."},"When did you join Adhiyagya?":"More than a year","Please upload your picture":"https://drive.google.com/open?id=1TP07oVWbfCafHtDUoRLuLInkHyLFVdZX"},
            {"Timestamp":"04/16/2020 12:28:28","Email Address":"lomna10@gmail.com","Full Name":"Anmol Jain","What do you do?":"Businessman","Write 2-3 sentences on why you joined Adhiyagya":{"":"Be it on educational grounds or recreational activities, it is tremendously fun and enriching to interact and learn with kids. Joining Adhiyagya has given me the chance to contribute a little of my time and partake in such experiences."},"Write in brief on your special moment from your Adhiyagya's journey":{"":"There isn't just one single moment; but over every class seeing the kids take on what they are taught and progressing with such determination is always special."},"When did you join Adhiyagya?":"November 2019","Please upload your picture":"https://drive.google.com/open?id=1KPo3UGFmmy0uXia20eAbehYzEFyP_TvK"}
        ];

        if($('#volunteerList')){
            makeVolunteerEntries(volunteerData);
        }

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

//     <div class="date">
//     <span class="day">12</span>
//     <span class="month">Aug</span>
//     <span class="year">2016</span>
//   </div>

 var card = `
<div class="gridder-list mt-2" data-griddercontent="#gridder-content-${index}">
 <div class="example-1 card">
    <div class="wrapper">
        <div class="photo">
            <img src="${getVolunteerImageUrl(volunteer)}" alt="${volunteer['Full Name']}"/>
        </div>

      <div class="data">
        <div class="content">
          <span class="author">${volunteer["When did you join Adhiyagya?"]}</span>
          <h2 class="title">${volunteer['Full Name']}</h1>
          <p class="text">${volunteer['What do you do?']}</p>
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
        <img src="${getVolunteerImageUrl(volunteer)}" alt="${volunteer['Full Name']}" class="card-content-image" />
        </div>
        <div class="col-sm-8">
            <h2>${volunteer['Full Name']}</h2>
            <h5>${volunteer['What do you do?']}</h5>
            <p>${volunteer['Write 2-3 sentences on why you joined Adhiyagya'][""]}</p>
            <p>${volunteer[`Write in brief on your special moment from your Adhiyagya's journey`][""]}</p>
        </div>
    </div>
    </div>
`;
    return content
}

function getVolunteerImageUrl(volunteer){

    let image = volunteer['Please upload your picture'];
    if(image.search("drive.google")>=0){
        imageLink = image.replace("open","uc");
        imageLink += `&export=download`;
        // imageLink = `https://drive.google.com/uc?id=1LVoSowy3iwTtk3G3Cj60C2aLAYANorMA&export=download`;

    }else{
        imageLink = image;
        if(!imageLink){
            imageLink = "/adhiyagya-website2/images/members/default.jpg";
        }
    }

    return imageLink;
}