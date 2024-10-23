const card_container = document.querySelector('.card-container');

const createCards = (i) => {
    let card = document.createElement('div');

    let image = document.createElement('img');

    let ul = document.createElement('ul');

    let li = document.createElement('li');

    let h4 = document.createElement('h4');

    for(let j in movies[i]){

        if(j == "Poster"){
            continue;
        }


        h4.appendChild(document.createTextNode(j+": "+movies[i][j]));
        li.appendChild(h4.cloneNode(true));
        ul.appendChild(li.cloneNode(true));

        
        li.removeChild(li.firstChild);
        h4.removeChild(h4.firstChild);
    }

    card.appendChild(image);
    card.appendChild(ul);

      // setting up image
      image.src = movies[i].Poster;

      card_container.appendChild(card);

    // setting elements classname
     card.className = "card";
     ul.className = 'card-body';
     image.className = 'img';
   
}

for(i=0;i<movies.length;i++){
    createCards(i);
}