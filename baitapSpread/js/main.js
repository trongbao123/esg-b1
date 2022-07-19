let changeheading = ()=>{
    document.getElementsByClassName("heading");
} 
for (let i = 0; i < changeheading.length; i++) {
    let text = getHeading[i].innerText;
    let heading = [...text];
    console.log(heading)
}