const { getCuratorExport } = require("../helper/curators");

const configs = {
  methodology: 'Count all assets are depoisted in all vaults curated by Steakhouse Financial.',
  blockchains: {
    ethereum: {
      morpho: [
        '0xbEEF8DF2Ce4BaB5420123F9BF80dea4c65673257', // bbqCBBTC
        '0xbeeFfF68CC520D68f82641EFF84330C631E2490E', // bbqDAI
        '0xbEEF36A5C1372F8D7d211527FCE9f83FE02d8A73', // bbqETH
        '0xBEeFFF209270748ddd194831b3fa287a5386f5bC', // bbqUSDC
        '0xA0804346780b4c2e3bE118ac957D1DB82F9d7484', // bbqUSDT
        '0x833AdaeF212c5cD3f78906B44bBfb18258F238F0', // bbqWSTETH
        '0x7204B7Dbf9412567835633B6F00C3Edc3a8D6330', // csUSDC
        '0xbEeFc011e94f43b8B7b455eBaB290C7Ab4E216f1', // csUSDL
        '0xbEEFC01767ed5086f35deCb6C00e6C12bc7476C1', // csUSDL
        '0xBEEFF900ec6faB1465252D2fBe731db8d1Ad5FD9', // safe-bbqWBTC
        '0xbEEffF79FFA3EE2D1bfcC32dE9cFd8129528D0E4', // safe-bbqWSTETH
        '0xBeEFB45B6F9acB175e70acF16dC20D6120044c70', // safe-steakETH
        '0xbEeFCe6c76C7D7A8066562Fe9FF0e343a52dD92F', // safe-steakUSDC
        '0xBEeF47b9F76C9672B967A7b88d0afFf245Be13ad', // safe-steakUSDT
        '0xBEEf050ecd6a16c4e7bfFbB52Ebba7846C4b8cD4', // steakETH
        '0x75741A12B36D181f44F389E0c6B1E0210311e3Ff', // steakEURCV
        '0xa5aA40F27DAeDE9748822ef836170f202e196B5A', // steakM
        '0xBeeF7959aE71D4e45e1863dae0B94C35244AF816', // steakPAXG
        '0xbEEF02e5E13584ab96848af90261f0C8Ee04722a', // steakPYUSD
        '0xBeEf11eCb698f4B5378685C05A210bdF71093521', // steakRUSD
        '0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB', // steakUSDC
        '0xbEEf11C63d7173BdCC2037e7220eE9Bd0cCDA862', // steakUSDClevel
        '0x6D4e530B8431a52FFDA4516BA4Aadc0951897F8C', // steakUSDCrwa
        '0xbeef033b4520267C5acFcb45414117b633fCb3Dd', // steakUSDM
        '0xA1b60d96e5C50dA627095B9381dc5a46AF1a9a42', // steakUSDQ
        '0x30881Baa943777f92DC934d53D3bFdF33382cab3', // steakUSDR
        '0xbEef047a543E45807105E51A8BBEFCc5950fcfBa', // steakUSDT
        '0x097FFEDb80d4b2Ca6105a07a4D90eB739C45A666', // steakUSDTlite
        '0xbeEf094333AEdD535c130958c204E84f681FD9FA', // steakWBTC
        '0xBEefb9f61CC44895d8AEc381373555a64191A9c4', // vbshUSDC
      ]
    },
    base: {
      morpho: [
        '0xBeeFa74640a5f7c28966cbA82466EED5609444E0', // bbqUSDC
        '0xBeef2dc30633221Fa51A1C3e5299BFf8C69fc0A8', // safe-steakETH
        '0xbeEFe1372c0A384aCEcBe8a0Adf3c94c389F6704', // safe-steakUSDC
        '0xbEEf050a7485865A7a8d8Ca0CC5f7536b7a3443e', // steakETH
        '0xBEeFA28D5e56d41D35df760AB53B94D9FfD7051F', // steakEURA
        '0xBeEF086b8807Dc5E5A1740C5E3a7C4c366eA6ab5', // steakEURC
        '0xB17B070A56043e1a5a1AB7443AfAFDEbcc1168D7', // steakSUSDS
        '0xbEEfa1aBfEbE621DF50ceaEF9f54FdB73648c92C', // steakUSDA
        '0xbeeF010f9cb27031ad51e3333f9aF9C6B1228183', // steakUSDC
        '0xbEefc4aDBE58173FCa2C042097Fe33095E68C3D6', // steakUSDCrwa
        '0xBEef03f0BF3cb2e348393008a826538AaDD7d183', // steakUSDM
      ],
    },
    corn: {
      morpho: [
        '0xa7Ba08CFc37e7CC67404d4996FFBB3E977490115', // bbqBTCN
        '0x9b2fa89E23Ae84f7895A58f8ec7Cb0b267ED8a21', // bbqUSDT0
      ],
    },
  }
}

module.exports = getCuratorExport(configs)
