import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/ssr.js";
import "fabric";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-iehrkn{display:flex;background:#29629F;margin:20px 0px}.header-title.svelte-iehrkn{color:white;padding:20px;font-family:'Manrope', sans-serif}#my-canvas.svelte-iehrkn{border:1px solid #000}#navbar.svelte-iehrkn{display:flex;flex-direction:column;justify-content:space-around;font-weight:bold;color:black;width:20%;height:100%}#customize-bar.svelte-iehrkn{display:flex;align-items:stretch;background-color:#29629F;color:white;width:80vw;max-width:800px;min-width:600px;height:30vh;max-height:300px;min-height:150px;padding:20px;margin:20px}.nav-item.svelte-iehrkn{display:flex;flex-wrap:wrap;justify-content:center;flex-grow:1;flex-shrink:0;flex-basis:auto;border-radius:20px;background-color:#f8d447;margin:2px;align-content:center;height:auto;justify-content:center}.nav-item.svelte-iehrkn:active{background-color:aqua}.editbox.svelte-iehrkn{display:flex;flex-direction:column;justify-content:space-around;background-color:#FFE993;width:70%;height:80%}.canvas-container.svelte-iehrkn{display:flex;flex-direction:column;align-items:center;max-width:100%;height:auto}#color_picker.svelte-iehrkn{margin-top:10px}#brush_size_picker.svelte-iehrkn{margin-top:10px}button.svelte-iehrkn{padding:10px;background-color:#007bff;color:#fff;border:none;cursor:pointer;margin:0 auto;display:flex}h1.svelte-iehrkn{text-align:center}h2.svelte-iehrkn{text-align:center}.petr-options.svelte-iehrkn{width:80%;height:80%;display:flex;flex-direction:column;align-items:center;justify-content:center}.acc-content.svelte-iehrkn{display:inline-block;height:40px;widows:100px;padding:5px;margin:5px;overflow:scroll}@media(min-width: 360px) and (max-width: 374px){.header.svelte-iehrkn{width:100%}.canvas-container.svelte-iehrkn{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  const accMap = /* @__PURE__ */ new Map([
    [
      "dva",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173444895822860450/Untitled_Artwork.png?ex=65766fb8&is=6563fab8&hm=fe7a4766a787e5e992493218c7db8ff3dc01e52823e6286a186c55e18ce09cee&"
    ],
    [
      "beanie",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411645914087496/Untitled_Artwork.png?ex=657650c1&is=6563dbc1&hm=d5881bf9eece1cfecd263aa24cf479cb569a14e06a37d0b78ce01d90793225ce&"
    ],
    [
      "boba",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173434531475365888/0daf0032-28ce-4f5c-8ea6-c4065c76bc32.png?ex=65766611&is=6563f111&hm=8a762d1e357538483f88119b70616b6d354c0c30c1c6314ce718b4cad518ba99&"
    ],
    [
      "halloween basket",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173432918480257144/88c21aff-eb67-46f3-9af8-5b09599d3b61.png?ex=65766491&is=6563ef91&hm=327166b74392c5b6e72c0f8f634f69c05b2e82fd7941453f9ffa5b12a419de3d&"
    ],
    [
      "airpods",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173430838491365386/0e28b3a8-5ad5-45ec-bea1-be0e04635da2.png?ex=657662a1&is=6563eda1&hm=49ba67b7de2e7d7514f1c6db6ea08786879895538c833844cf55d6b6a6ee9617&"
    ],
    [
      "macbook",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173428576759074887/Untitled_Artwork.png?ex=65766085&is=6563eb85&hm=e0e7e7678a862642a2279983c7e766f90605eb7fe869958f707ce4cf23cced08&"
    ],
    [
      "stickered macbook",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173428266103754872/Untitled_Artwork.png?ex=6576603b&is=6563eb3b&hm=a875e3709d040fbfdb6efe03ba87eb3b8cb7204064f3837edaf182a3869bc36c&"
    ],
    [
      "kung fu robe",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173427676384604170/yin_yang.png?ex=65765faf&is=6563eaaf&hm=64f44053624eb3cb32a4a9583e1a16f7f3047e312999774817ca0d06715c6ca6&"
    ],
    [
      "gucci belt",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173413422155702282/Untitled_Artwork.png?ex=65765268&is=6563dd68&hm=ef625bad70175cbea0f1d7da33114981338a4d608ab2c98b9b43ef08a6c59e92&"
    ],
    [
      "hearts",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411577416912926/Untitled_Artwork.png?ex=657650b0&is=6563dbb0&hm=b6f132b0c3471ad4fa8131afac5066e3e3fe8449bea02f06f837807481c92f03&"
    ],
    [
      "jersey",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411518671495308/Untitled_Artwork.png?ex=657650a2&is=6563dba2&hm=49f8387036e347e14bcb805c6f3429885faadb472e6506c7044c044eb04ea418&"
    ],
    [
      "gold chain",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411352413487165/Untitled_Artwork.png?ex=6576507b&is=6563db7b&hm=fdcec3c8d271582d348b302266d2c8f7055d799b9f80cb3638e97e665c0473d2&"
    ],
    [
      "boots",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411280888016996/Untitled_Artwork.png?ex=6576506a&is=6563db6a&hm=781695d7b02458f02c413c54fcc41760ca010e267e8ec687f15246b41c584fb1&"
    ],
    [
      "gojo shades",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411221987393567/Untitled_Artwork.png?ex=6576505c&is=6563db5c&hm=9d2ab618dca7cb267d1730e26dc5913c7a5ba23d917193b2717029fbf7f5f1aa&"
    ],
    [
      "gojo hair",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1173411111685599293/Untitled_Artwork.png?ex=65765041&is=6563db41&hm=06d9bac99bd2abd5f18a2bffadebcc1f197793ff0b1292e038b50fbf916b4abf&"
    ],
    [
      "apple watch",
      "https://cdn.discordapp.com/attachments/1165802285448831086/1165802341807702096/appleWatch.png?ex=65765189&is=6563dc89&hm=5b4bb55720ab23f1bfa58e28da9a79108daa4e597e491f3aa5873d83cdb84f19&"
    ]
  ]);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1u14p9o_START --><link href="https://fonts.googleapis.com/css?family=Manrope" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- HEAD_svelte-1u14p9o_END -->`, ""}  <div class="header svelte-iehrkn" data-svelte-h="svelte-a1cd11"><h1 class="header-title svelte-iehrkn">Petr Maker</h1></div> <div class="canvas-container svelte-iehrkn"><canvas id="my-canvas" class="svelte-iehrkn"${add_attribute("this", canvas, 0)}></canvas> <div id="customize-bar" class="svelte-iehrkn"><div id="navbar" class="svelte-iehrkn"><div class="nav-item svelte-iehrkn" tabindex="0" role="button" data-svelte-h="svelte-jrm38t">Accessories</div> <div class="nav-item svelte-iehrkn" tabindex="0" role="button" data-svelte-h="svelte-1xis95">Drawing</div> <div class="nav-item svelte-iehrkn" tabindex="0" role="button" data-svelte-h="svelte-5miryl">Image</div> <div class="nav-item svelte-iehrkn" tabindex="0" role="button" data-svelte-h="svelte-4hr8mh">Delete</div></div> <div class="editbox svelte-iehrkn" id="editbox"> ${`<div class="button-grid">${each(Array.from(accMap), ([option, url]) => {
    return `<button class="acc-content svelte-iehrkn">${escape(option)} </button>`;
  })}</div>`} ${``} ${``} ${``}</div></div></div>  <div class="${["tab", "selected"].join(" ").trim()}"><h2 class="svelte-iehrkn" data-svelte-h="svelte-ms9nnf">Save your creations!</h2> <button class="svelte-iehrkn" data-svelte-h="svelte-9to5vp">save</button></div>`;
});
export {
  Page as default
};
