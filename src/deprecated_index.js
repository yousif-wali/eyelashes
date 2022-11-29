const getUniqueRandomNumber = (array, max = 13, min = 1)=>{
    temp = Math.floor(Math.random() * (max - min) + min);
    if(array.includes(temp)){
        getUniqueRandomNumber(array);
    }
    return temp;
}
const throwAway = (temp)=>{
    x = Math.floor(Math.random() * (10 - 1) +1);
    if(temp.id == x){
        throwAway(temp)
    }else{
        temp.id = x;
    }
    return x;
}
var availables = [1,2,3,4,5,6,7,8,9];
temp_api = {
    id: [],
    url: [],
};
let backgroundImage = document.getElementById('background-image');
fetch("./src/api/images.json").then(res=>res.json()).then((res)=>{
    res = res.images;
    tempo = {
        id: 0,
    };
    let index = 0;
    res.map((data, rej)=>{
        if(data.id < 10){
            temp_api.id[index] = data.id;
            temp_api.url[index] = data.url;
            let image = new Image();
            image.classList.add("grid-image");
            image.src = data.url;
            image.alt = data.alt || "EyeLashes";
            image.setAttribute("data-type", "image-grid"+data.id);
            image.setAttribute("draggable", "false");
            backgroundImage.appendChild(image);
            }
            index++;
        });
    });
    //      Note: assign a variable that will store information from api 'fetch' to solve res[newids].url issues
    setInterval(()=>{
        setTimeout(()=>{
            ids = throwAway(tempo);
            newids = getUniqueRandomNumber(availables);
            availables[availables.indexOf(ids)] = newids
            console.log(`ids: ${ids} newids: ${newids} list ${availables}`)
            temp = document.querySelector(`[data-type="image-grid${ids}"]`)
            //temp.classList.add("opacityAnimation");
            temp.src = temp_api.url[newids];
        }, 4900)
    }, Math.floor(Math.random() * (10000 - 5000) + 5000));
