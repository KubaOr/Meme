// rawElement is parent of upcoming images, created directly in html file
const rawElement = document.getElementById('imagesRow');
// Listener for button in form
const submitForm = addEventListener('submit', function (event) {
    // prevent submit from reloading page
    event.preventDefault();
    // call main function to create meme
    setImg(event);
});

let setImg = function getImg(e) {
    let colElement = document.createElement('div'); // main container for image and text
    styleContainer(colElement); // add some css for container
    let tempX = document.createElement('div');
    tempX.className = 'test'; // create container for Xmark icon
    tempX.id = "crossMark";
    styleXmark(tempX); // add some css for xMark icon
    let linkImg = e.target.getElementsByTagName('input').imageUrl.value; // variable to get link for image
    let tempImg = document.createElement('img'); // create img
    tempImg.src = linkImg; // set an src for img
    tempImg.style.width = '80%'; // style img
    tempImg.style.borderRadius = '3%'; // style img
    colElement.appendChild(tempImg); // add img node to main container
    colElement.appendChild(tempX); // add xMark icon to main container
    rawElement.appendChild(colElement); // add main container to parent container
    let topTxt = e.target.getElementsByTagName('input')[1].value; // varibale to get value from topText
    let tempDiv = document.createElement('div'); // create container for topText
    tempDiv.textContent = topTxt; // set text to topText container
    styleTopTextDiv(tempDiv); // add some css to topText container
    colElement.appendChild(tempDiv); // add topText container to main container
    let bottomTxt = e.target.getElementsByTagName('input')[2].value; // varibale to get value from bottomText
    let tempDiv2 = document.createElement('div'); // create container for bottomText
    tempDiv2.textContent = bottomTxt; // set text to bottomText container
    styleBottomTextDiv(tempDiv2); // add some css to bottomText container
    colElement.appendChild(tempDiv2); // add bottomText container to main container
    //////
    // event listener for mouse entering image block, changing some css
    colElement.addEventListener('mouseenter', function (e) {
        console.log(e.target.getElementsByTagName('div')[0]);
        e.target.style.cursor = 'pointer';
        e.target.style.opacity = '0.6';
        e.target.getElementsByTagName('div')[0].style.visibility='visible'
    });
    // event listener for mouse leaving image block, changing some css
    colElement.addEventListener('mouseleave', function (e) {
        e.target.style.cursor = 'context-menu';
        e.target.style.opacity = '1';
        e.target.getElementsByTagName('div')[0].style.visibility='hidden'
    });
    // event listener for click image block and removing entire container(main container)
    colElement.addEventListener('click', function (e) {
        e.target.parentElement.remove();
    });
    ///
    clearInput(e); // clear input values
    ///
}
// clear input values
function clearInput(e) {
    e.target.getElementsByTagName('input')[0].value = '';
    e.target.getElementsByTagName('input')[1].value = '';
    e.target.getElementsByTagName('input')[2].value = '';
}
// style main container
function styleContainer(node) {
    node.style.width = '50%';
    node.style.display = 'inline-block';
    node.style.textAlign = 'center';
    node.style.margin = '20px 0';
    node.style.position = 'relative';
}
// style Xmark container
function styleXmark(node) {
    node.style.background = "center no-repeat url('https://wiki.augmensys.com/images/1/12/IC_Cross_Mark.png')";
    node.style.backgroundSize = '20% auto';
    node.style.opacity = '0.6';
    node.style.position = 'absolute';
    node.style.top = '0';
    node.style.left = '0';
    node.style.width = '100%';
    node.style.height = '100%';
    node.style.visibility = 'hidden';
}
// style style topText container
function styleTopTextDiv(node) {
    node.style.width = '100%';
    node.style.textAlign = 'center';
    node.style.padding = '20px';
    node.style.position = 'absolute';
    node.style.top = '0px';
    node.style.fontFamily = "'Delius Unicase', cursive";
    node.style.fontSize = '40px';
    node.style.color = 'white';
    node.style.textShadow = '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black';
    node.style.left = '0px';
}
// style style bottomText container
function styleBottomTextDiv(node) {
    node.style.width = '100%';
    node.style.textAlign = 'center';
    node.style.padding = '20px';
    node.style.position = 'absolute';
    node.style.bottom = '0px';
    node.style.fontFamily = "'Delius Unicase', cursive";
    node.style.fontSize = '40px';
    node.style.color = 'white';
    node.style.textShadow = '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black';
    node.style.left = '0px';
}