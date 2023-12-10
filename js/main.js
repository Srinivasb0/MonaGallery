import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();



const monaSpaces = {
  data: [
    {
      id: '08RpepbddNPL',
      type: 'Space',
      title: 'KGD - 4Play',
      description: 'In Karma the Game, 4 Play is the Dance club.  We stream different artists and the ambiance is a little different.  ',
      artist: 'Alquimist',
      creator: '0xba8c93f8cdb2c61ae1176112458040e1e7352aa9',
      slug: 'kgd-4play',
      url: [Object],
      views: 409,
      createdAt: '2022-12-06T01:16:43.991Z',
      updatedAt: '2023-12-07T16:57:43.932Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeiflkfw54cj3ckt7esvg7qpxnolhlclcahnpmixnkwgkklzctfotrq',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xba8c93f8cdb2c61ae1176112458040e1e7352aa9',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0CTZwR6CqeoZ',
      type: 'Space',
      title: 'JPEG.LAND V.069 - #000',
      description: 'Brought to you by TAYLOR.WTF and WTFINDUSTRIES',
      artist: 'Faraz Mobin',
      creator: '0x550e970e31a45b06df01a00b1c89a478d4d5e00a',
      slug: 'jpeg.land-v.069',
      url: [Object],
      views: 25465,
      createdAt: '2022-08-27T18:48:13.133Z',
      updatedAt: '2023-12-09T10:41:04.378Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeictvdimmdyvguna75rn2rxp4lgu423pzznqx4nxgndw6pdb4c3va4',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x550e970e31a45b06df01a00b1c89a478d4d5e00a',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0Kx2VD84bCxJ',
      type: 'Space',
      title: 'The Library of Galizur',
      description: 'A library and art gallery for practioners of mystery and magic. ',
      artist: 'I.B.E. Auslander',
      creator: '0x89b12f36b38dd7f5592b5a3cb2189a6471aa1600',
      slug: 'the-library-of-galizur',
      url: [Object],
      views: 343,
      createdAt: '2023-08-28T02:28:27.529Z',
      updatedAt: '2023-12-09T08:54:56.739Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeicvaks7csw22llk5bfvtj2xyo6f6ygouh6k4ehaisxpj7pcmqyudu',
      price: 0.35,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x89b12f36b38dd7f5592b5a3cb2189a6471aa1600',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0LFLdPtKJKBU',
      type: 'Space',
      title: 'Aftermath',
      description: 'Mona workshop 10/20/2022, test piece',
      artist: 'Peter Z',
      creator: '0xd2d39fbfc3f0205d3e5e16bd352f67426d08989c',
      slug: 'aftermath',
      url: [Object],
      views: 110,
      createdAt: '2022-10-20T20:43:05.500Z',
      updatedAt: '2023-11-10T15:23:10.359Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeibg3gymfs5arus6tygyxylm5uxuzevuhgvocx27dzo27kpcsxg4b4',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xd2d39fbfc3f0205d3e5e16bd352f67426d08989c',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0OQjPS6qI8IF',
      type: 'Avatar',
      title: 'Babydoll Blue',
      description: 'Babydolls come from other worlds to explore strange new landscapes and alternate realities. Based on the look of the iconic DCL Babydolls from Decentraland. ',
      artist: 'Tangpoko',
      creator: '0xd8cb7171cd5cdafda9533bcc1f2c8c6315a1b082',
      slug: 'babydoll-blue',
      url: [Object],
      views: 920,
      createdAt: '2022-12-12T04:07:01.701Z',
      updatedAt: '2023-12-08T15:05:58.795Z',
      image: 'https://ipfs.mona.gallery/ipfs/Qmchp9bzC12gVGzG1KZhz3c5C7qrji74rjacX1FBG7FiQp',
      price: null,
      lastSaleEventId: 'jY8ejGusfODR',
      lastSalePrice: 0.25,
      owner: '0x4bf99cd1ad81b11abea6c660194d71e1cabd5993',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0TuNqcGwfhpD',
      type: 'Avatar',
      title: 'Metadromon-V5-HT-0: Baros',
      description: 'Baros, the elder support metadromon, is a maestro of techne and a tinkerer of wonder. Forged with rough sensors and a trunk of intuition, he is equipped with a neural cyber power backpack, leaping through the aperion ready to fix and repair as a gruff demiurg of the metasphere.',
      artist: 'OgiWorlds',
      creator: '0x08e8d08f0e622da9434bae60a90055886465f2f8',
      slug: 'metadromon-v5-ht-0:-baros',
      url: [Object],
      views: 331,
      createdAt: '2023-03-29T21:42:36.831Z',
      updatedAt: '2023-12-06T19:24:33.291Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeigymcmqc6qa6a2phuqlnaoehes36kwimisnzrtwpwaf4v4gpvzfay',
      price: 0.33,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x08e8d08f0e622da9434bae60a90055886465f2f8',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0U7lrL9UQVRQ',
      type: 'Space',
      title: 'Hanoi Oceania Villa',
      description: 'Hanoi Oceania Villa',
      artist: 'MDL',
      creator: '0x29a112c34349bff934b494b64810675946b05ff6',
      slug: 'hanoi-oceania-villa',
      url: [Object],
      views: 219,
      createdAt: '2022-04-13T03:27:58.107Z',
      updatedAt: '2023-10-17T08:22:57.519Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeih4qxmtya5ggj7p6udouh5u76s35cfrjozmly5pilkq7hunq47etq',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x29a112c34349bff934b494b64810675946b05ff6',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0cmeADLaX0ZM',
      type: 'Space',
      title: 'Cozy Attic',
      description: 'Tinyverse of a cozy musical attic!',
      artist: 'Sai Kiran',
      creator: '0x3be35eb81e42339bcd44fce03cf4cb50f2613def',
      slug: 'cozy-attic',
      url: [Object],
      views: 744,
      createdAt: '2022-01-30T21:52:09.961Z',
      updatedAt: '2023-12-05T21:30:08.998Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeihjm5smoenukpwlgldprmsja7d4c6rqw5ju2usrfojcrstjesrscy',
      price: null,
      lastSaleEventId: '1wP2T1H3H48R',
      lastSalePrice: 1.205,
      owner: '0xab1a4140475581783f4013fcfcb948d457dca16b',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0fNawJk5yMVn',
      type: 'Avatar',
      title: 'Boy 6',
      description: 'First collection of 10 unique VRM avatars by PunkPink. Every detail has been meticulously chosen to create a visually striking character with a friendly personality. Their lightweight construction and polygonal design allow them to load fast in various virtual worlds.',
      artist: 'PunkPink',
      creator: '0x1b35f4d22b2c8bc706bcfcc383a1ca77fb4fc600',
      slug: 'boy-6',
      url: [Object],
      views: 17,
      createdAt: '2023-04-17T13:02:25.950Z',
      updatedAt: '2023-11-17T02:27:12.675Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeifrlyyxsww373ky2bguczoyopxmapillncan74wdlqtyvylnyvu6e',
      price: 45,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x1b35f4d22b2c8bc706bcfcc383a1ca77fb4fc600',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0g77DWcnFypW',
      type: 'Space',
      title: "Krown's Crypto Cave",
      description: "Krown's Crypto Cave Metaverse Spce",
      artist: 'Faraz Mobin',
      creator: '0xf7ac997fc1269c45469b9cb95a976a8b2d0cf6c3',
      slug: "krown's-crypto-cave",
      url: [Object],
      views: 2303,
      createdAt: '2022-09-02T05:02:22.160Z',
      updatedAt: '2023-12-09T10:24:52.497Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafkreiefr3iga7oe54w6fhtsopesiovnge43ldwkfm6dubgs3yb6qxvcp4',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x9ed23025aaab4331fd8157d4e23fd676dc447937',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0glo9lr3srFF',
      type: 'Space',
      title: 'ＡＮ🎙️ＥＮＴＲＹＰＯＩＮＴ',
      description: 'On top an 🌍🐢, the harmony between: \nｔｅｃｈｎｏｌｏｇｙ　| 　ｎａｔｕｒｅ',
      artist: 'weareone',
      creator: '0x091fcbb9186f392610740038ea5b8007fe7674e4',
      slug: '-7531',
      url: [Object],
      views: 1315,
      createdAt: '2021-11-14T17:10:29.249Z',
      updatedAt: '2023-12-07T18:20:22.860Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeigpml5nyuqv3ofk4jhto72wfyjj6ebbk7yb2bfsfopgwinlvjaebq',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xab1a4140475581783f4013fcfcb948d457dca16b',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0m1yfNknk4dN',
      type: 'Space',
      title: 'AMUZN Moonlight Pavilion',
      description: 'Immersive metaverse night gallery and performance space to discover, connect and experience original creative work and the amazing talent behind it.',
      artist: 'Mischa Scott | AMUZN ',
      creator: '0x3e54319f66c9b9a54d704a39e33e99af87aee505',
      slug: 'amuzn-moonlight-pavilion-334b',
      url: [Object],
      views: 1443,
      createdAt: '2022-09-01T04:26:36.210Z',
      updatedAt: '2023-12-09T10:44:57.491Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeid4is5t2cb436spd5gqmo6kyaspknrmcovpls2sax5hw54p5rlale',
      price: null,
      lastSaleEventId: 'iBKsqI13Gvla',
      lastSalePrice: 0.005,
      owner: '0x3c37c077873de795ee24dc22f02c7bf9dfc039c3',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '0xmnlzOCnDuU',
      type: 'Space',
      title: 'Garden of Eden',
      description: 'The beautiful garden containing the metaverse seeds of life.',
      artist: 'divinSHE',
      creator: '0x41e6b4bcc71f0eb5578d5405bbd4bb4376c82ef8',
      slug: 'garden-of-eden',
      url: [Object],
      views: 386,
      createdAt: '2021-11-01T02:22:37.137Z',
      updatedAt: '2023-12-09T11:24:46.378Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeiapdt3mlwljfnsl6otleh2ile3ncx6w7xxd6dd6a3r7ltorojyy6y',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x41e6b4bcc71f0eb5578d5405bbd4bb4376c82ef8',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '131Ux1iyEdbG',
      type: 'Space',
      title: 'MoNArch',
      description: 'it is a simulation for the future architecture in the metaverse world that makes it easy for avatars gathering and showing all MoNA spaces & other NFTs in one place as it represents a contemporary virtual gallery.',
      artist: 'Rizk Ghazaly',
      creator: '0xdccc7470597ea270bdb8800919726c8ceaa96577',
      slug: 'monarch',
      url: [Object],
      views: 885,
      createdAt: '2022-01-25T20:35:57.297Z',
      updatedAt: '2023-12-08T23:07:03.865Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeig5ohyzey7rt2amdfmjtwr4pbaeg2eivhhliyct4erki47lgv7via',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xdccc7470597ea270bdb8800919726c8ceaa96577',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1RGhggc7PiGu',
      type: 'Space',
      title: '"BIOSPHERE"',
      description: 'A metaverse space to reconnect with yourself, others, nature, and art.',
      artist: 'ARCRYPTECTURE',
      creator: '0xa4e58d6936954b2477c2853ac54431b746db0481',
      slug: '"biosphere"',
      url: [Object],
      views: 2524,
      createdAt: '2022-01-31T00:43:20.104Z',
      updatedAt: '2023-12-05T23:06:13.389Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeiabhb5xhw3gdsjqbktzlcryjzvvop4m26chuzeqh57k5o7q7zsvp4',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xa4e58d6936954b2477c2853ac54431b746db0481',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1T1TpCUMIicy',
      type: 'Space',
      title: 'BBC: Playboy Rabbitars Suite',
      description: 'Welcome to the Playboy Rabbitars premium suite at The Below Bored Comedy Club',
      artist: 'Faraz Mobin',
      creator: '0xf7ac997fc1269c45469b9cb95a976a8b2d0cf6c3',
      slug: 'playboy-rabbitars-whale-suite',
      url: [Object],
      views: 2205,
      createdAt: '2022-09-07T17:42:01.143Z',
      updatedAt: '2023-12-03T21:43:00.130Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafkreihbo5x74y67qhmxzyci67smpzoukwzn7m4ak6ywfv7tfbbhshw6ba',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x44228c8bac97ec150f7b6274823d1c34053aaaaa',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1T8NZsUC7Zdl',
      type: 'Space',
      title: 'Mystery amphitheater',
      description: 'Mystery amphitheater with stage and portals',
      artist: 'ME.EVS',
      creator: '0x0c9e596f2980a1c7e1159c1d6d0332bc0ac5ce21',
      slug: 'mystery-amphitheater',
      url: [Object],
      views: 129,
      createdAt: '2022-01-31T02:37:59.678Z',
      updatedAt: '2023-12-08T16:09:41.414Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeib7yy2h6p5mzcmr746iiofzlf5jg4z7ev2elpwp2qokzaxhstvncy',
      price: null,
      lastSaleEventId: 'r8DldS2OHL9r',
      lastSalePrice: 0.3,
      owner: '0xa0f939965e18e969ddabab056e81dae2e2e7df4d',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1Wmz0v0w31qw',
      type: 'Space',
      title: 'ESTE Flow Fields',
      description: 'ESTE Flow Fields ',
      artist: 'ESTE',
      creator: '0xf31beb36e95ec1cf5aae38faea75580574e300c7',
      slug: 'este-flow-fields',
      url: [Object],
      views: 842,
      createdAt: '2022-05-13T03:02:07.810Z',
      updatedAt: '2023-12-08T07:37:27.176Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeigltfnpwndkom6ql7x7nngr2n5hsnmh2q3jg3gsaprqvsmenroo7e',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x7f714f11cd633a83d5c9288e8cf9488d724d20c6',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1jVGl03Aao92',
      type: 'Space',
      title: 'Electra ZenV3',
      description: 'Electra ZenV3 is an exclusive metaverse art gallery space for special NFTs. Also, to create unique events, gatherings, meetings and exhibition as well. ',
      artist: 'Studio3D',
      creator: '0xbc8222a49c9c7eb7e14aff3e48740b0023378a77',
      slug: 'electra-zenv3',
      url: [Object],
      views: 91,
      createdAt: '2022-08-20T16:46:12.310Z',
      updatedAt: '2023-11-06T16:11:48.235Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeia6y27pwvl77xdhihelyni3iwzv7dkeutycspnwfvvi2vsjh24ure',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x47ba3fdd830d5946354dc3717b886f2189054d1e',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1qSzYV3fvg7H',
      type: 'Space',
      title: 'JPEG.LAND V.069 #543',
      description: 'Brought to you by TAYLOR.WTF and WTFINDUSTRIES',
      artist: 'taylor.wtf',
      creator: '0x550e970e31a45b06df01a00b1c89a478d4d5e00a',
      slug: 'jpeg.land-v.069-543',
      url: [Object],
      views: 40,
      createdAt: '2022-09-12T22:38:24.728Z',
      updatedAt: '2023-09-28T05:44:10.638Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeictvdimmdyvguna75rn2rxp4lgu423pzznqx4nxgndw6pdb4c3va4',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xff84b20cc3c1f81b645e18bc100eeeb6ecc4aaf3',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1qVT6wmBA0CH',
      type: 'Space',
      title: 'Unique',
      description: 'FREE YOUR MIND',
      artist: 'rewont',
      creator: '0xa0000555262334d4d6c43e13413beeadc22768e6',
      slug: 'unique',
      url: [Object],
      views: 541,
      createdAt: '2022-07-19T16:13:06.708Z',
      updatedAt: '2023-12-05T04:20:51.263Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeiclngtsyvgc2w7gxoc3dbybmizfrgn2drjauibidpbbok6224jeuq',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x808a129f8ca709f54f2aaadeda49ac846162f181',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '1tSN9PpkwJwB',
      type: 'Space',
      title: 'Rock Valley',
      description: 'Rock Valley - a meditation space.',
      artist: 'MoNA Collective',
      creator: '0x247c6efc48dccde4ed92bd11b6ae6c0ddf05b811',
      slug: 'rock-valley',
      url: [Object],
      views: 386,
      createdAt: '2021-10-25T16:41:44.860Z',
      updatedAt: '2023-12-08T01:15:00.968Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeihfklv7rulolvjs45tob7qw32vpwcgvr2b4jffs4vjhy6nwcs4q6y',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0x247c6efc48dccde4ed92bd11b6ae6c0ddf05b811',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '27ByFmbQfk0y',
      type: 'Avatar',
      title: 'Energy',
      description: 'Introduce yourself in the Metaverse like never before with the "Energy" avatar, designed by Fabeeo Breen. This avatar is playable in multiple metaverses such as Decentraland, Sansar and Monaverse: representing the energy under your skin. www.fabeeobreen.com',
      artist: 'Fabeeo Breen',
      creator: '0x1dec5f50cb1467f505bb3ddfd408805114406b10',
      slug: 'energy-fbrn-7819',
      url: [Object],
      views: 322,
      createdAt: '2023-01-25T13:18:10.008Z',
      updatedAt: '2023-12-07T19:09:35.163Z',
      image: 'https://ipfs.mona.gallery/ipfs/QmSo8TBaved4MkkjeTMKHrhVknH36qSf6tMDub2Wr5QJ2x',
      price: null,
      lastSaleEventId: 'TLMBk1C0KAZY',
      lastSalePrice: 0.15,
      owner: '0x4bf99cd1ad81b11abea6c660194d71e1cabd5993',
      properties: [Array],
      nft: [Object]
    },
    {
      id: '2CFCqby1lOFH',
      type: 'Space',
      title: 'The Forest',
      description: "This is a region of NGC-404 that evolved into a computation network the size of an entire landscape. This area was the heart of the alien AI's thinking infrastructure.",
      artist: '404',
      creator: '0xfb61eb0d2221f9ce2dafc4ba9b24b2d946af1b6c',
      slug: 'the-forest',
      url: [Object],
      views: 260,
      createdAt: '2023-06-28T10:03:54.520Z',
      updatedAt: '2023-12-01T09:15:13.033Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeiduueck4hsrnz327skzwg4mhvopddfdrwbz7pclmhncq5rkbj2b7q',
      price: null,
      lastSaleEventId: null,
      lastSalePrice: null,
      owner: '0xfb61eb0d2221f9ce2dafc4ba9b24b2d946af1b6c',
      properties: [],
      nft: [Object]
    },
    {
      id: '2EST3DUq0yUl',
      type: 'Space',
      title: 'Rainbow Galaxy Cluster',
      description: 'Experience tokenized worlds of color on a vast scale in Rainbow Galaxy Cluster!',
      artist: 'The Black Fractal',
      creator: '0x2fec5d8835b39f314187dc1da933b273f32f18c3',
      slug: 'rainbow-galaxy-cluster',
      url: [Object],
      views: 1969,
      createdAt: '2021-10-30T23:03:17.556Z',
      updatedAt: '2023-12-08T14:53:03.480Z',
      image: 'https://ipfs.mona.gallery/ipfs/bafybeieuxx4rudscaudoaojpvzrlvb3uudb3v4dj64qly3737kpkg6t5hm',
      price: null,
      lastSaleEventId: 'erbypQCJ1U8s',
      lastSalePrice: 1.5,
      owner: '0x2c54bef68b38c35a033f9c843276974e70ee7290',
      properties: [],
      nft: [Object]
    }
  ]
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 5, 15);

const ambient = new THREE.AmbientLight( 0x444444 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// create the floor plane
// Load the textures

let Texture = new THREE.TextureLoader();
let floorTexture = Texture.load("../img/floor.png");
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(20, 20);


let planeGeometry = new THREE.PlaneGeometry(50, 50);
let planeMaterial = new THREE.MeshBasicMaterial({
    map: floorTexture,
    side: THREE.DoubleSide,
});
const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

floorPlane.rotation.x = Math.PI / 2;
floorPlane.position.y = -Math.PI;

scene.add(floorPlane);

// Create the walls
const wallGroup = new THREE.Group();
scene.add(wallGroup);

const roughTexture = new THREE.TextureLoader().load("../img/rought-white-wall-texture.jpeg")
roughTexture.wrapS = roughTexture.wrapT = THREE.RepeatWrapping;


// Front wall
const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0x702963, side: THREE.DoubleSide})
);
frontWall.position.z = -20;

// Left Wall

const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001), 
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
leftWall.rotation.y = Math.PI / 2; 
leftWall.position.x = -20;


// Right Wall
const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001), 
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
rightWall.position.x = 25;
rightWall.rotation.y = Math.PI / 2; 

  // Back Wall
const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    new THREE.MeshBasicMaterial({map:roughTexture, color : 0xadadae, side: THREE.DoubleSide})
);
backWall.position.z = 20;

wallGroup.add(frontWall, backWall, leftWall, rightWall);

// Loop through each wall and create the bounding boxes
for (let i = 0; i < wallGroup.children.length; i++) {
    wallGroup.children[i].BBox = new THREE.Box3();
    wallGroup.children[i].BBox.setFromObject(wallGroup.children[i]);
}

// Ceiling
// const normalTexture = new THREE.TextureLoader().load("../img/ceiling.jpeg")
// normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;

const ceilingGeometry = new THREE.PlaneGeometry(50, 50);
const ceilingMaterial = new THREE.MeshBasicMaterial({map:roughTexture, color : 0xffff, side: THREE.DoubleSide});
const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

ceilingPlane.rotation.x = Math.PI / 2;
ceilingPlane.position.y = 10;
console.log(ceilingPlane);
scene.add(ceilingPlane);

function createPainting(imageURL, width, height, position) {
    const textureLoader = new THREE.TextureLoader();
    const paintingTexture = textureLoader.load(imageURL);
    const paintingMaterial = new THREE.MeshBasicMaterial({
        map: paintingTexture,
    });
    const paintingGeometry = new THREE.PlaneGeometry(width, height);
    const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting.position.set(position.x, position.y, position.z);
    return painting;
}

// Paintings

let paintings = [];

const painting1 = createPainting(monaSpaces['data'][0]['image'], 10, 5, new THREE.Vector3(-10, 5, -19.95));
painting1.userData = {
    id: monaSpaces['data'][0]['id'],
    type: monaSpaces['data'][0]['type'],
    title: monaSpaces['data'][0]['title'],
    artist: monaSpaces['data'][0]['artist'],
    creator: monaSpaces['data'][0]['creator'],
    url: 'https://monaverse.com/spaces/' + monaSpaces['data'][0]['slug']
}
painting1.castShadow = true;
painting1.receiveShadow = true;


const painting2 = createPainting(monaSpaces['data'][1]['image'], 10, 5, new THREE.Vector3(10, 5, -19.95));
painting2.userData = {
    id: monaSpaces['data'][1]['id'],
    type: monaSpaces['data'][1]['type'],
    title: monaSpaces['data'][1]['title'],
    artist: monaSpaces['data'][1]['artist'],
    creator: monaSpaces['data'][1]['creator'],
    url: 'https://monaverse.com/spaces/' + monaSpaces['data'][1]['slug']
}
painting2.castShadow = true;
painting2.receiveShadow = true;



// Left wall
const painting3 = createPainting(monaSpaces['data'][2]['image'], 10, 5, new THREE.Vector3(-19.5, 5, -10));
painting3.rotation.y = Math.PI/2;
painting3.userData = {
    id: monaSpaces['data'][2]['id'],
    type: monaSpaces['data'][2]['type'],
    title: monaSpaces['data'][2]['title'],
    artist: monaSpaces['data'][2]['artist'],
    creator: monaSpaces['data'][2]['creator'],
    url: 'https://monaverse.com/spaces/' + monaSpaces['data'][2]['slug']
}
console.log(monaSpaces['data'][2]['image'])
painting3.castShadow = true;
painting3.receiveShadow = true;

const painting4 = createPainting(monaSpaces['data'][3]['image'], 10, 5, new THREE.Vector3(-19.5, 5, 5));
painting4.rotation.y = Math.PI/2;
painting4.userData = {
    id: monaSpaces['data'][3]['id'],
    type: monaSpaces['data'][3]['type'],
    title: monaSpaces['data'][3]['title'],
    artist: monaSpaces['data'][3]['artist'],
    creator: monaSpaces['data'][3]['creator'],
    url: 'https://monaverse.com/spaces/' + monaSpaces['data'][3]['slug']
}
painting4.castShadow = true;
painting4.receiveShadow = true;


// Right wall
const painting5 = createPainting(monaSpaces['data'][4]['image'], 10, 5, new THREE.Vector3(25, 5, 10));
painting5.rotation.y = Math.PI/2;
painting5.userData = {
    id: monaSpaces['data'][4]['id'],
    type: monaSpaces['data'][4]['type'],
    title: monaSpaces['data'][4]['title'],
    artist: monaSpaces['data'][4]['artist'],
    creator: monaSpaces['data'][4]['creator'],
    url: 'https://monaverse.com/spaces/' + monaSpaces['data'][4]['slug']
}
painting5.castShadow = true;
painting5.receiveShadow = true;

const painting6 = createPainting(monaSpaces['data'][5]['image'], 10, 5, new THREE.Vector3(19.5, 5, 5));
painting6.rotation.y = Math.PI/2;
painting6.userData = {
    id: monaSpaces['data'][5]['id'],
    type: monaSpaces['data'][5]['type'],
    title: monaSpaces['data'][5]['title'],
    artist: monaSpaces['data'][5]['artist'],
    creator: monaSpaces['data'][5]['creator'],
    url: 'https://monaverse.com/spaces/' + monaSpaces['data'][5]['slug']
}
painting6.castShadow = true;
painting6.receiveShadow = true;

paintings.push(painting1, painting2, painting3, painting4, painting5, painting6);
scene.add(painting1, painting2, painting3, painting4, painting5, painting6);

// Handle mouse click events

function clickHandling(renderer, camera, paintings) {
    renderer.domElement.addEventListener(
        'click',
        (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            onClick(camera, paintings);
        },
        false
    );
}

function onClick(camera, paintings) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(paintings);
    console.log(intersects);
    if (intersects.length > 0) {
        const painting = intersects[0].object
        console.log(painting);
        console.log('Clicked Painting: ', painting.userData.type);
        // window.open(painting.userData.url, '_blank');
        document.getElementById("type").innerHTML = painting.userData.type;
        document.getElementById("title").innerHTML = painting.userData.title;
        document.getElementById("artist").innerHTML = painting.userData.artist;
        document.getElementById("creator").innerHTML = painting.userData.creator;
        document.getElementById("url").innerHTML = painting.userData.url;

    }
}
clickHandling(renderer, camera, paintings);


// Handle mouse hoover events
function hooverHandling(renderer, camera, paintings) {
    renderer.domElement.addEventListener(
        'mousemove',
        (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            onHoover(camera, paintings);
        },
        false
    );
}

function onHoover(camera, paintings) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(paintings);
    console.log(intersects);
    if (intersects.length > 0) {
        const painting = intersects[0].object
        document.getElementById("type").innerHTML = painting.userData.type;
        document.getElementById("type").innerHTML = painting.userData.artist;
        document.getElementById("type").innerHTML = painting.userData.creator;
    }
}

// hooverHandling(renderer, camera, paintings);



// Controls
document.addEventListener('keydown', onKeyDown, false);

// function when a key is pressed, execute this
function onKeyDown(event){
    let keycode = event.which;

    if (keycode === 39) {
        camera.translateX(-0.8);
    }
    else if (keycode === 37) {
        camera.translateX(0.8);
    }
    else if (keycode === 38) {
        camera.translateY(-0.8);
    }
    else if (keycode === 40) {
        camera.translateY(0.8);
    }
}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();