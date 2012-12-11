var panda = require("panda-docs");
  
var buildOptions = {
    skin : "./template/layout.jade",
    assets : "./template/assets/",
    title : "Tabula Lingua",
    output :  "./out"
}

panda.make(["./src/"], buildOptions, function(err) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
});