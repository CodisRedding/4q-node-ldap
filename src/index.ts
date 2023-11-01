const Bluebird = require("bluebird");
const ActiveDirectory = require("activedirectory");

// simple test function
export function add(a: number, b: number): number {
    return a + b;
}

export async function Connect(url: string, baseDN: string, username: string, password: string, ldapOptions: any, tlsOptions: any) {
  const config = Object.assign({
    url,
    baseDN,
    username,
    password,
    tlsOptions
  }, ldapOptions);

  const ad = Bluebird.promisifyAll(
    new ActiveDirectory(config)
  );

  return {
    rawActiveDirectory: ad,
    authenticate: async (username: string, password: string) => {
      return new Bluebird.Promise((resolve: any, reject: any) => {
        return ad.authenticate(username, password, async (err: any, auth: any) => {
          if (err) {
            return reject(new Error(err));
          }
    
          if (auth) {
            const user = await ad.user(username).get();
            return resolve(user);
          }
    
          return reject(new Error("Unknown auth error"));
        });
      });
    },
    groups: async (username: string) => {
      return ad.getGroupMembershipForUserAsync(username)
        .then((groups: any) => groups.map((group: any) => group.dn));
    }
  }
}