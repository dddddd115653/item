//function id(options){
//    document.getElementById(options).innerHTML
//}
//var biaoti1=id('biaoti1'),
//    About=id('About'),
//    banner1=id(banner1);
//document.write(About.fistChild.nodeValue);
document.getElementById('biaoti2').innerHTML=document.getElementById('biaoti3').innerHTML=document.getElementById('biaoti1').innerHTML
banner1Date=[
    {
        img :'../images/About/about_1.png',
        text:'Honest and amazing things that bring positive results'
    },
    {
        img :'../images/About/about_2.png',
        text:'Blanditiis praesentium voluptatum'
    }
];
function addDiv(option1,option2){
    var div=document.createElement('div');
    div.appendChild(document.createTextNode(option1));
    div.style.background=option2;
    return div
}
var arr=banner1Date.map(function(item){
    var banner=addDiv(item.text,item.img);
    //banner1.appen
})
console.log(id(About))