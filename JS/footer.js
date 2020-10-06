document.getElementById("faqbtn").addEventListener("click", function(){
    var faq = document.getElementById("faq");
    if (faq.style.display=="none"){                     /* Need to doubleclick to trigger the loop (only the first time after a refresh) */
        faq.style.display="block";
    } else {
        faq.style.display="none";
    }
});