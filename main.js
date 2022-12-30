let button=document.getElementById("btn");
button.addEventListener("click",myFunction)
function myFunction(){
    let cashAmount1=parseInt(document.getElementById("CashAmount").value);
    let TipsPersentage1=parseInt(document.getElementById("TipsPersentage").value);
    let Total=(cashAmount1*TipsPersentage1)/100;
    let TipsAmount=document.getElementById("TipsAmount").value=Total;
    let Totalamount1=(cashAmount1+TipsAmount)
    
    let TotalAmount=document.getElementById("TotalAmount").value=Totalamount1;
    console.log("Totalamount"+Totalamount1);
    
}