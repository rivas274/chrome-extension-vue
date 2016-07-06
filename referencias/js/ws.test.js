function validURL(str) {
  "use strict";
  var re = /^s?https?:\/\/[-_.!~*'()a-zA-Z0-9;\/?:\@&=+\$,%#]+$/,
    res = str.match(re);
  return res !== null && res.index === 0;
}
function updateJSFromRepository(description, change) {
  "use strict";
  description.jsCode = amrc_repository + description.jsFile;
  var isNew = false;
  if (change.type === "create") {
    console.log("insert " + description.mirrorName + " in database");
    amrcsql.webdb.storeWebsite(description, function () {
      change.loaded = true;
    });
    isNew = true;
  } else if (change.type === "update") {
    console.log("update " + description.mirrorName + " in database");
    amrcsql.webdb.updateWebsite(description, function () {
      change.loaded = true;
    });
  }
}