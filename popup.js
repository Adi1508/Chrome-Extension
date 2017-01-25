
function byId(e){return document.getElementById(e);}

window.addEventListener('load', onDocLoaded, false);

function onDocLoaded()
{
    byId('mFileInput').addEventListener('change', onChosenFileChange, false);
}

function onChosenFileChange(evt)
{
    var fileType = this.files[0].type;

    if (fileType.indexOf('audio') != -1)
        loadFileObject(this.files[0], onSoundLoaded);
}

function loadFileObject(fileObj, loadedCallback)
{
    var reader = new FileReader();
    reader.onload = loadedCallback;
    reader.readAsDataURL( fileObj );
}

function onSoundLoaded(evt)
{
    byId('sound').src = evt.target.result;
    byId('sound').play();
}
