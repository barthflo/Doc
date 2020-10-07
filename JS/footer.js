document.getElementById("faqbtn").addEventListener("click", function(){
    const faq = document.querySelector("#faq");
    
    if (faq.style.display ==="block"){
        faq.style.display="none";
    }else{
        faq.style.display="block";
    }
});