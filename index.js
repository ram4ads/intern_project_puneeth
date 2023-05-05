let homeEl = document.getElementById('home')
let aboutEl = document.getElementById('about')
let contactEl = document.getElementById('contact')
let rootEl = document.getElementById('root')


homeEl.addEventListener("click", function(){
    rootEl.textContent="";
    let h1El = document.createElement("h1")
    h1El.textContent="Welcome to Home page content";
    let pEl = document.createElement("p")
    pEl.textContent="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
    h1El.id='homeEl'
    rootEl.appendChild(h1El)
    rootEl.appendChild(pEl)
})

aboutEl.addEventListener("click", function(){
    rootEl.textContent="";
    let h1El = document.createElement('h1')
    h1El.textContent="About the content"
    let pEl = document.createElement("p")
    pEl.textContent="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
    h1El.id='aboutEl'
    rootEl.appendChild(h1El)
    rootEl.appendChild(pEl)
    

})

contactEl.addEventListener("click", function(){
    rootEl.textContent="";
    let h1El = document.createElement('h1')
    h1El.textContent='Contact Form' 
    rootEl.append(h1El)
    let inputEl = document.createElement('input') 
    inputEl.type="text";
    inputEl.placeholder="Firstname";
    inputEl.style.margin="5px";
    let brEl = document.createElement('br')
    inputEl.appendChild(brEl)
    rootEl.appendChild(inputEl)

    let inputE2 = document.createElement('input') 
    inputE2.type="text";
    inputE2.placeholder="Lastname";
    inputE2.style.margin='5px';
    let brE2 = document.createElement('br')
    inputE2.appendChild(brE2)
    rootEl.appendChild(inputE2)

    let inputE3 = document.createElement('input') 
    inputE3.type="tel";
    inputE3.placeholder="number";
    inputE3.style.margin='5px';
    let brE3 = document.createElement('br')
    inputE3.appendChild(brE3)
    rootEl.appendChild(inputE3)

    let buttonEl = document.createElement('button')
    buttonEl.type='submit'
    buttonEl.textContent='Submit'
    rootEl.appendChild(buttonEl)
})