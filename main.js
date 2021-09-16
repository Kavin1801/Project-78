var images = ["","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Lv8UAIdcUhRsMb5q-YiHNcf_oJpMHwdeaw&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53bqnFzlC_0TVQyzYPfrbGv8rwIX1hNrILg&usqp=CAU",
                     "https://upload.wikimedia.org/wikipedia/id/9/96/Molly_Weasley.jpg",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1y35fQBXmReAfcacQDsslNs4OhtAG6kiyA&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpKB-ftiPS-2ALj3oIVbaWqE4kc0hhJZiw4C1gszr5ciLKVLPVFtiyI8I-sKcufxxc3k&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQAlPT44_OyzVw0JnEnfGZN2YczcoeZFZCg&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzmVfsV0oBXKO8pHLh1TDYLuC0vmiNvZZsA&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1G4czNZcOEbiE_ug7Xxawryi9WPeRthEF8w&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7PElavT1LXwQnUsJpEFkb3hx674rNlqbJQ&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHK9rebSbEW4cf8Kf5EQ1XncpBqhUmRXH27A&usqp=CAU"]
var names = ["", "","Arthur Weasley","Molly Weasley","Bill Weasley", "Charlie Weasley", "Percy Weasley", "Fred Weasley", "Goerge Weasley", "Ronald Weasley", "Ginerva Weasley"];

var i = 0;
function update(){
    i++;
    var number_of_family_members_in_array = 10;
    if(i > number_of_family_members_in_array){
        i=0;
    }
    var updated_images = images[i];
    var updated_names = names[i];
    document.getElementById("picture_of_member").src = updated_images;
    document.getElementById("name_of_member").innerHTML = updated_names;    
}