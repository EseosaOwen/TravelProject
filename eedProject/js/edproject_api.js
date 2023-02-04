/* 
    Google API Images
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
		'X-RapidAPI-Host': 'google-images1.p.rapidapi.com'
	}
};

fetch('https://google-images1.p.rapidapi.com/search?q=maldives&safeSearch=false&region=us', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

Google search api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
		'X-RapidAPI-Host': 'google-web-search.p.rapidapi.com'
	}
};

fetch('https://google-web-search.p.rapidapi.com/?query=Maldives&max=10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
		'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
	}
};

fetch('https://google-image-search1.p.rapidapi.com/v2/?q=Paris&hl=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
*/


const getApidata1 = async (place) => {
    // const url = `https://google-images1.p.rapidapi.com/search?q=${place}&safeSearch=false&region=us`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
            'X-RapidAPI-Host': 'google-web-search.p.rapidapi.com'
        }
    };
    const response = await fetch(`https://google-web-search.p.rapidapi.com/?query=${place}&max=10`, options)
    const data = await response.json();
    try{
        return data;
        
    }
    catch(err){
        console.log(err);
    }
}

const getApidata2 = async (place) => {
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c9947d6d13msh9d388aa2742cc75p1c94d3jsn78de997b6166',
            'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
        }
    };
    
    const response2 = await fetch(`https://google-image-search1.p.rapidapi.com/v2/?q=${place}&hl=en`, options2)
    const data2 = await response2.json();
    try{
        // return data2;
        return data2
    }
    catch(err){
        console.log(err);
    }
}

const getValue = () => {
    const searchField = document.querySelector(".search").value;
    getApidata1(searchField).then(data => {
        showInfo1(data);
    })
    // getApidata1(searchField).then(data => {
    //     showinfo1(data);
    // })
}
 
const showInfo1 = (data) => {
    const displayInfo = document.querySelector(".search-descrip");
    const population = document.querySelector(".place-population");
    const placeName = document.querySelector(".place-name");
    placeName.innerText = `${data.knowledge_panel.name}`
    placeName.style.backgroundColor = "rgb(115, 189, 164)"
    displayInfo.innerHTML = `<div><h4>Description</h4>
    <p>${data.knowledge_panel.description.text}</p></div>`
    population.innerHTML = `<div><h4>${data.knowledge_panel.info[2].title}</h4>
    <p>${data.knowledge_panel.info[2].labels[0]}</p></div>`

    const displayInfo2 = document.querySelector(".showInfo2");
    const resorts = document.querySelector(".place-resort");
    displayInfo2.innerHTML = `<div><img src="${data.knowledge_panel.image.url}" height="300" width="500" class="search-image"></div>`
}

const showinfo2 = (data) => {
    const displayInfo2 = document.querySelector(".showInfo2");
    const resorts = document.querySelector(".place-resort");
    displayInfo2.innerHTML = `<div><img src="${data.knowledge_panel.image.url}" height="300" width="500" class="search-image"></div>`
    // resorts.innerHTML = `<div><h4>${data.response.suggestions[0].text}</h4>
    // <img src="${data.response.suggestions[0].thumbnail}" height="100" width="200"></div>`
}

const check = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb27973180msh77b212db136d47dp15554ejsn21bb7960712d',
            'X-RapidAPI-Host': 'google-web-search.p.rapidapi.com'
        }
    };
    const response = await fetch(`https://google-web-search.p.rapidapi.com/?query=$maldives&max=10`, options)
    const data = await response.json();
    try{
        console.log(data);
        
    }
    catch(err){
        console.log(err);
    }
}

check()
