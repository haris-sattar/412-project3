function light_mode(): void {
  let links: HTMLCollectionOf<Element> =
    document.getElementsByClassName("page_style");

  let currentCSS: string | null = links[0].getAttribute("href");

  if (currentCSS == "./dark.css") {
    links[0].setAttribute("href", "./light.css");
    allCSS.push("./light.css");
    localStorage.setItem("css", "./light.css");
  } else if (currentCSS == "./style-dark.css") {
    links[0].setAttribute("href", "./style-light.css");
    allCSS.push("./style-light.css");
    localStorage.setItem("css", "./style-light.css");

  }
}

function dark_mode(): void {
  let links: HTMLCollectionOf<Element> =
    document.getElementsByClassName("page_style");

  let currentCSS: string | null = links[0].getAttribute("href");

  if (currentCSS == "./light.css") {
    links[0].setAttribute("href", "./dark.css");
    allCSS.push("./dark.css");
    localStorage.setItem("css", "./dark.css");
  } else if (currentCSS == "./style-light.css") {
    links[0].setAttribute("href", "./style-dark.css");
    allCSS.push("./style-dark.css");
    localStorage.setItem("css", "./style-dark.css");

  }
}

function style1(): void {
  let links: HTMLCollectionOf<Element> =
    document.getElementsByClassName("page_style");

  let previousCSS: string | null = allCSS[allCSS.length - 1];

  if (previousCSS == "./style-light.css") {
    links[0].setAttribute("href", "./light.css");
    allCSS.push("./light.css");
    localStorage.setItem("css", "./light.css");
  } else if (previousCSS == "./style-dark.css") {
    links[0].setAttribute("href", "./dark.css");
    allCSS.push("./dark.css");
    localStorage.setItem("css", "./dark.css");

  }
}

function style2(): void {
  let links: HTMLCollectionOf<Element> =
    document.getElementsByClassName("page_style");

  let previousCSS: string | null = allCSS[allCSS.length - 1];

  if (previousCSS == "./light.css") {
    links[0].setAttribute("href", "./style-light.css");
    allCSS.push("./style-light.css");
    localStorage.setItem("css", "./style-light.css");
  } else if(previousCSS == "./dark.css"){
    links[0].setAttribute("href", "./style-dark.css");
    allCSS.push("./style-dark.css");
    localStorage.setItem("css", "./style-dark.css");

  }
}

window.onload = function(){
  let links: HTMLCollectionOf<Element> = document.getElementsByClassName("page_style");
  

  var data: string | null = localStorage.getItem("css");

  if(data != null){
    links[0].setAttribute("href", data);
  }

}

var data: string | null = localStorage.getItem("css");

if(data != null){
    var allCSS: string[] = [data];
}else{
    var allCSS: string[] = [];
}