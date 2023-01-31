console.log("Welcome to spotify");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let song =[
    {songName:"pyar da saboot", filepath: "1.mp3",coverpath: "cover1.jpeg"},
    {songName:"let me love you", filepath: "2.mp3",coverpath: "cover 5.jpeg"},
    {songName:"zindagii", filepath: "3.mp3",coverpath: "cover 7.jpeg"},
    {songName:"You", filepath: "4.mp3",coverpath: "cover 4.jpeg"},
    {songName:"Srivalli", filepath: "5.mp3",coverpath: "cover 6.jpeg"},
    {songName:"memories", filepath: "6.mp3",coverpath: "cover 2.jpeg"},

]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
    
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songItems>9){
        songIndex = 0
    }
    else{
        songIndex +=1;

    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
        
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songItems<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;

    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
        
})