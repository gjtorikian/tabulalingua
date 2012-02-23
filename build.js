var panda = require("panda-docs/bin/panda-docs");

panda.make(["./src/manifest.json", "-t", "Tabula Lingua", "--template", "./template/layout.jade", "--assets", "./template/assets/"], function(err) {
    if (err) console.error(err);
});