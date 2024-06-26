let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >= 18 && bmi < 25){
            result.innerHTML = 'Normal : ' + bmi;
        }else if(bmi >= 25 && bmi <30){
            result.innerHTML = 'Over weight : ' + bmi;
        }
		else{
            result.innerHTML = 'Obese : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});