;
;
;
var niko = { dbID: 1, name: 'Niko', id: 0, githubToken: "github", role: "owner",
    startTrial: function () {
        return 'Trial started';
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
niko.name = 'Nikolay';
//niko.dbID = 2; <- Error: Cannot assign to 'dbID' because it is a read-only property.
