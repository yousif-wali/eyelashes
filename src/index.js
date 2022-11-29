const Random = (max, min, check=0)=>{
    x = Math.floor(Math.random() * (max - min) + min);
    if(temp_id.id == x){
        Random(max, min)
    }else{
        temp_id.id = x;
    }
    if(check == 1){
        if(imageInformation.id.includes(x)){
            Random(max, min, 1)
        }else{
            return x;
        }
    }
    return x;
}
const Random2 = (max, min)=>{
    return Math.floor(Math.random() * (max - min) + min);
}
let backgroundImage = document.getElementById('background-image');

let imageInformation = {
    id:[],
    url:[],
    desc: [],
    price: [],
    sold: [],

};
array_length = 0;
temp_id = {
    id : 0,
};
fetch("./src/api/images.json").then(res=>res.json()).then(res=>{
    while(array_length < res.images.length){
        array_length++;
    }
    res.images.map((value, index)=>{
        if(value.id < 10){
            let image = new Image();
            image.classList.add("grid-image");
            image.src = value.url;
            image.alt = value.alt || "EyeLashes";
            image.setAttribute("data-type", "image-grid"+ value.id);
            image.setAttribute("draggable", "false");
            backgroundImage.appendChild(image);
        }
        imageInformation.id[index] = value.id;
        imageInformation.url[index] = value.url;
        imageInformation.desc[index] = value.desc;
        imageInformation.price[index] = value.price;
        imageInformation.sold[index] = value.sold;
    })
    /*
    setInterval(()=>{
        let id = Random(10, 1, 0);  
        let target = document.querySelector(`[data-type="image-grid${id}"]`)
        let newid = Random(array_length+1, 1, 1)
        while(id == newid){
            newid = Random(array_length+1, 1, 1)
        }
        imageInformation.id[id] = newid;
        imageInformation.url[id] = res.images[newid].url;
        console.log(`imageUrl: ${imageInformation.url[id]} newImageUrl: ${res.images[newid].url}`);
        target.src = imageInformation.url[id];
        console.log(`id: ${id} newid: ${newid}`)
    }, Random2(20000, 15000))
    */
});
setTimeout(() => {
    let deployment = document.querySelector("[data-role='deploys']");
    let index = 0;
    while(index < array_length){
        data = imageInformation
        deployment.innerHTML +=`<section class='displays'>
        <img src='${data.url[index]}' class='deploy' alt='Deployment Image' draggable='false'/>
        <p data-type='displays-price'>$${data.price[index]}</p>
        <p data-type='displays-desc'>${data.desc[index]}</p>
        <span data-type='displays-sold'>Sold: ${data.sold[index]}</span>
        </section>`;
        index++;
    }
}, 250);