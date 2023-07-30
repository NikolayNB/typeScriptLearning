interface User {
    readonly dbID: number;
    name: string;
    id: number;
    googleId?: string;
    //startTrial: () => string;
    startTrial(): string; // same as above
    getCoupon(cuouponname: string, value: number): number;
};

//interfaces can be extended or re-opened with new values, types can't, for example:

interface User {
    githubToken: string;
};

//inheritance is also possible:

interface Admin extends User {
    role: "admin" | "superadmin" | "owner";
};


const niko: Admin = {dbID: 1, name: 'Niko', id: 0, githubToken: "github", role: "owner", 
    startTrial: () => {
        return 'Trial started';
    },
    getCoupon: (name: "Niko10", off: 10) => {
        return 10;
    }
};

niko.name = 'Nikolay';
//niko.dbID = 2; <- Error: Cannot assign to 'dbID' because it is a read-only property.