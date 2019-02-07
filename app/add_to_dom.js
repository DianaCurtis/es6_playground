


export default function (tagName,text){
    const newTag =document.createElement(tagName);

    newTag.innerText=text;
    document.getElementById('root').appendChild(newTag);
}


/* this gives us the ability to use this function anywhere in our applications, so now the index js file has acces to in*/





