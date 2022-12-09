let gilgit = document.getElementById('gilgit');
let kpk = document.getElementById('kpk');
let jk = document.getElementById('jk');
let balochistan = document.getElementById('balochistan');
let punjab = document.getElementById('punjab');
let sindh = document.getElementById('sindh');

let yokun = document.getElementById('yokun');
let nwt = document.getElementById('nwt');
let british = document.getElementById('british');
let alberta = document.getElementById('alberta');
let brown = document.getElementById('brown');
let manitoba = document.getElementById('manitoba');
let ontario = document.getElementById('ontario');
let quebec = document.getElementById('quebec');
let nf = document.getElementById('nf');

let pak = document.getElementById('pak');
let can = document.getElementById('can');
let fillColor = document.getElementById('fillColor');

pak.addEventListener('click', function(){
    document.getElementById('canMap').style.display = 'none';
    let pakMap = document.getElementById('pakMap');
    let rgb = document.getElementById('rgb');

    if(pakMap.style.display == 'none'){
        pakMap.style.display = 'block';
        rgb.style.display = 'block';

        fillColor.addEventListener('click', function(){
            if(document.getElementById('red').checked == true && document.getElementById('green').checked  && document.getElementById('blue').checked){
                gilgit.className = 'btn btn-danger mb-2';
                kpk.className = 'btn btn-success mb-2';
                jk.className = 'btn btn-primary mb-2';
                punjab.className = 'btn btn-danger mb-2';
                balochistan.className = 'btn btn-primary mb-2';
                sindh.className = 'btn btn-success mb-2';
            }
        });
    }
    else{
        pakMap.style.display = 'none';
        rgb.style.display = 'none';
    }
});

can.addEventListener('click', function(){
    document.getElementById('pakMap').style.display = 'none';
    let canMap = document.getElementById('canMap');
    let rgb = document.getElementById('rgb');

    if(canMap.style.display = 'none'){
        canMap.style.display = 'block';
        rgb.style.display = 'block';

        fillColor.addEventListener('click', function(){
            if(document.getElementById('red').checked == true && document.getElementById('green').checked  && document.getElementById('blue').checked){
                yokun.className = 'btn btn-danger mb-2';
                nwt.className = 'btn btn-success mb-2';
                british.className = 'btn btn-primary mb-2';
                alberta.className = 'btn btn-danger mb-2';
                brown.className = 'btn btn-primary mb-2';
                manitoba.className = 'btn btn-danger mb-2';
                ontario.className = 'btn btn-success mb-2';
                quebec.className = 'btn btn-primary mb-2';
                nf.className = 'btn btn-danger mb-2';
            }
        });
    }
    else{
        canMap.style.display = 'none'
        rgb.style.display = 'none';
    }


});


