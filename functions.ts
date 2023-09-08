function light_mode() {
    let links: HTMLCollectionOf<Element> = document.getElementsByClassName("page_style");

    for(let i = 0; i < links.length; ++i){
      links[i].setAttribute("href", "./light.css");
  } 
    
}

function dark_mode() {
  let links: HTMLCollectionOf<Element> = document.getElementsByClassName("page_style");

    for(let i = 0; i < links.length; ++i){
      links[i].setAttribute("href", "./dark.css");
  } 
}
