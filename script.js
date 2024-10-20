const display=document.getElementById("display");
function appendtodisplay(input)
{
    display.value=display.value+input;
}
function calcdisplay(input)
{
    try{
    display.value=eval(display.value);
    }
    catch(error)
    {
        display.value="Error!";
    }
}
function cleardisplay(input)
{
    display.value="";
}
function removefromdisplay()
{
    display.value=display.value.slice(0,-1);
}