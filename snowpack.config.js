/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: 'https://github.com/smartinezpelaez/ProjectJs-With-SnowPack.git',
  },
}
