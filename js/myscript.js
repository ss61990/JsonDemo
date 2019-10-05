var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://raw.githubusercontent.com/ss61990/first_project/master/info.json');
ourRequest.onload = function()
{
    var ourData= ourRequest.responseText;
    console.log(ourData[0]);
};

ourRequest.send();