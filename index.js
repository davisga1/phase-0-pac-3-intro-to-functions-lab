function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(shout(string));
}
logShout("hello")
function logWhisper(string) {
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string) {
switch (string) {
    case (whisper(string)) :
    return "I can\'t hear you!"
    break;
    case (shout(string)) :
        return "YES INDEED!"
        break;
        case (string = "Let's have dinner together!") :
            return "I would love to!"

} 
}