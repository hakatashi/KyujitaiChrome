// convert.js for KyujitaiChrome | (c) 2013 Hakatashi | licensed under CC0 1.0 Universal http://creativecommons.org/publicdomain/zero/1.0/

function replaceKyujitai( str ) {
    for (var i = 0 ; i < singlePattern.length ; i++ ) {
        //str.replace( singlePattern[i][0], singlePattern[i][1] );
        str.replace("の", "之");
    }
    return str;
}

$("body").each( function(){
    var replaced = $(this).html().replace(/>[^><]*</g, function(match){
        return replaceKyujitai( match );
    });
    $(this).html( replaced );
});