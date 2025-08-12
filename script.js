// document.getElementById('color_pannel').addEventListener('click',(e)=>{
//     if(e.target.id){
//         document.body.style.backgroundColor = e.target.id;
//     }
// })

const colors = document.querySelectorAll("#color_pannel div");
console.log(colors)
// const colors = document.getElementById();

colors.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.body.style.backgroundColor = btn.id;
        console.log(`${btn.id} div id clicked`)
    })
})