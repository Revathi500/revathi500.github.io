function addcharc(i)
{
    document.getelementById('inpchar').value +=i;
}
function cclear()
{
    document.getelementById('inpchar').value='';
}
function calciquals()
{
    var oper=document.getelementById('inpchar').value;
    document.getelementById('inpchar').value=eval(oper);
}