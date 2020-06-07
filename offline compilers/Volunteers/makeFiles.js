var fs = require('fs');

var volunteersFileData = fs.readFileSync("volunteers.json", 'utf8');
var volunteers = JSON.parse(volunteersFileData);
console.log(volunteers);


(volunteers).forEach(volunteer => {
    
    let fileData = makeVolunteerFileData(volunteer)

    console.log(fileData);

    let fileName = volunteer['Full Name'].replace(/ /g,"-")
    
    fs.writeFileSync(`C:/hugo/sites/adhiyagya/content/english/members/${fileName}.md`, fileData);
    // fs.writeFileSync(`./volunteer_files/${fileName}.md`, fileData);

});




function makeVolunteerFileData(volunteer){

    let data;
    let imageLink;
    let image = volunteer['Please upload your picture'];
    if(image.search("drive.google")>=0){
        imageLink = image.replace("open","uc");
        imageLink += `&export=download`;
        // imageLink = `https://drive.google.com/uc?id=1LVoSowy3iwTtk3G3Cj60C2aLAYANorMA&export=download`;

    }else{
        imageLink = image;
        if(!imageLink){
            imageLink = "images/members/default.jpg";
        }
    }

    data = `
    ---
title: "${volunteer['Full Name']}"
# page title background image
#bg_image: "${imageLink}"
# meta description
description : "${volunteer['What do you do?']}"
email: "${volunteer['Email Address']}"
Joined: "${volunteer['When did you join Adhiyagya?']}"
# portrait
image: "${imageLink}"
---

${volunteer['Write 2-3 sentences on why you joined Adhiyagya'][""]}

### Special Moment
${volunteer["Write in brief on your special moment from your Adhiyagya's journey"][""]}

`;

    return data;

}


