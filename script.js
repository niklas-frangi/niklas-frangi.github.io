getData();

async function getData(){
    const response = await fetch("https://api.github.com/users/niklas-frangi/starred");
    const jsonfile = await response.json();

    console.log(jsonfile);


      for(i=0; i<jsonfile.length; i++){
          getUl = document.querySelector("#ulList");
          newList = document.createElement("a");
          newList.href = jsonfile[i].html_url;
          newList.target = "_blank";
          newList.classList.add("list-group-item")

          newList.textContent = jsonfile[i].name;
          getUl.appendChild(newList);
    }
}


