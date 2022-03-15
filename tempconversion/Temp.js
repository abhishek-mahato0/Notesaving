const conversion =()=>{
    const inp=document.getElementById('inptem').value;
    const sel=document.getElementById('selection').value;

    const celtofar=(inp)=>{
        let resul=(((inp*9)/5)+32);
        document.getElementById('result').innerHTML= `= ${resul} Farhenheit`;        
    }
    const fartocel=(inp)=>{
        let farhen=(((inp-32)*5)/9);
        document.getElementById('result').innerHTML=`= ${farhen} celcius`;
    }
    if(sel=='cel'){
        celtofar(inp);
        
    }else if(sel=='far'){
        fartocel(inp);
    }
    
}
conversion();

const resetq=document.getElementById('resetq');
    resetq.addEventListener('click',()=>{
        document.getElementById('result').innerHTML=" ";
        document.getElementById('inptem').value="";
        document.getElementById('selection').value="";
    })
    