const getLyrics=require("./getLyrics")
const getSong=require("./getSong")
const options={
    apiKey:'Co1fAveFWufOGFGWDduNUWWtfkeFmWAMeids04ONZe_fuRTkyjfkjZISim065H5-',
    title:'grinding halt',
    artist:'the cure',
    optimizeQuery:true
}
getLyrics(options).then((lyrics)=>console.log(lyrics));
getSong(options).then((song)=>
    console.log(`
    ${song.lyrics}`))