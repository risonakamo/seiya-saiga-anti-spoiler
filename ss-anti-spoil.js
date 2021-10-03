(()=>{
    /** removeSpoiler(html:string):string
     *  perform spoiler removal action from block of html, returns the new html */
    function removeSpoiler(html)
    {
        var removeReg=/<input.*?<br>\n?\s*/g;

        return html.replace(removeReg,"");
    }

    var allTds=document.querySelectorAll("td");

    for (var i=0;i<allTds.length;i++)
    {
        var x=allTds[i];

        var newhtml=removeSpoiler(x.innerHTML);

        // optimise, dont do replacement if not differnt
        if (newhtml!=x.innerHTML)
        {
            x.innerHTML=newhtml;
        }
    }
})();