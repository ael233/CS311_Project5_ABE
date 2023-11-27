document.getElementById('generateBtn').addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let adjective = document.getElementById('adjective').value;
    let noun = document.getElementById('noun').value;
    let verb = document.getElementById('verb').value;
    let name2 = document.getElementById('name2').value;
    let adjective2 = document.getElementById('adjective2').value;
    let noun2 = document.getElementById('noun2').value;
    let adverb = document.getElementById('adverb').value;
    let verb2 = document.getElementById('verb2').value;
    let adjective3 = document.getElementById('adjective3').value;
    let noun3 = document.getElementById('noun3').value;

    let madLibText = `Once upon a ${adjective} day, ${name} felt the urge to ${verb}. Only, ${name} had to take care of a ${noun} before ${name} could begin.  ${name} called ${name2}, and after some small talk about the ${adjective2} neighbor next door, the two loaded the ${noun2} into the car and ${adverb} made their way to their day's intent.  Upon arriving, the two ${verb2} with the ${adjective3} ${noun2} between them, as they realized they'd left the ${noun3} back at the house.`;
    document.getElementById('madLibText').textContent = madLibText;
    document.getElementById('entryForm').classList.add('hidden');
    document.getElementById('madLibOutput').classList.remove('hidden');
});

document.getElementById('resetBtn').addEventListener('click', function(){
    document.getElementById('entryForm').classList.remove('hidden');
    document.getElementById('madLibOutput').classList.add('hidden');

    //clear input
    document.getElementById('name').value='';
    document.getElementById('adjective').value='';
    document.getElementById('noun').value='';
    document.getElementById('verb').value='';
    document.getElementById('name2').value='';
    document.getElementById('adjective2').value='';
    document.getElementById('noun2').value='';
    document.getElementById('adverb').value='';
    document.getElementById('verb2').value='';
    document.getElementById('adjective3').value='';
    document.getElementById('noun3').value='';

})