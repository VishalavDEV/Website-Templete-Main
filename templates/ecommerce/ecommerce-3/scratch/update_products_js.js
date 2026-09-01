import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const productsJsPath = path.join(__dirname, '..', 'src', 'data', 'products.js');

const imageMap = {
  "nova-x1": [
    "/images/nova_x1_front.webp",
    "/images/nova_x1_rear.webp",
    "/images/nova_x1_angle.webp",
    "/images/nova_x1_side.webp",
    "/images/nova_x1_camera.webp",
    "/images/nova_x1_lifestyle.webp",
    "/images/nova_x1_detail.webp",
    "/images/nova_x1_packaging.webp"
  ],
  "nova-x1-pro": [
    "/images/nova_x1_pro_front.webp",
    "/images/nova_x1_pro_rear.webp",
    "/images/nova_x1_pro_angle.webp",
    "/images/nova_x1_pro_camera.webp",
    "/images/nova_x1_pro_lifestyle.webp",
    "/images/nova_x1_pro_detail.webp"
  ],
  "nova-edge": [
    "/images/nova_edge_front.webp",
    "/images/nova_edge_rear.webp",
    "/images/nova_edge_angle.webp",
    "/images/nova_edge_detail.webp"
  ],
  "nova-book-air": [
    "/images/nova_book_air_open.webp",
    "/images/nova_book_air_closed.webp",
    "/images/nova_book_air_angle.webp",
    "/images/nova_book_air_keyboard.webp",
    "/images/nova_book_air_display.webp",
    "/images/nova_book_air_side.webp",
    "/images/nova_book_air_ports.webp",
    "/images/nova_book_air_lifestyle.webp"
  ],
  "nova-book-pro": [
    "/images/nova_book_pro_open.webp",
    "/images/nova_book_pro_closed.webp",
    "/images/nova_book_pro_angle.webp",
    "/images/nova_book_pro_detail.webp",
    "/images/nova_book_pro_lifestyle.webp"
  ],
  "nova-buds-pro": [
    "/images/nova_buds_pro_open.webp",
    "/images/nova_buds_pro_closed.webp",
    "/images/nova_buds_pro_earbuds.webp",
    "/images/nova_buds_pro_detail.webp",
    "/images/nova_buds_pro_lifestyle.webp"
  ],
  "nova-buds": [
    "/images/nova_buds_open.webp",
    "/images/nova_buds_closed.webp",
    "/images/nova_buds_earbuds.webp",
    "/images/nova_buds_angle.webp",
    "/images/nova_buds_detail.webp",
    "/images/nova_buds_lifestyle.webp"
  ],
  "nova-watch-x": [
    "/images/nova_watch_x_front.webp",
    "/images/nova_watch_x_side.webp",
    "/images/nova_watch_x_rear.webp",
    "/images/nova_watch_x_detail.webp",
    "/images/nova_watch_x_lifestyle.webp",
    "/images/nova_watch_x_charging.webp"
  ],
  "nova-watch-pro": [
    "/images/nova_watch_pro_front.webp",
    "/images/nova_watch_pro_side.webp",
    "/images/nova_watch_pro_angle.webp",
    "/images/nova_watch_pro_lifestyle.webp"
  ],
  "nova-tab-12": [
    "/images/nova_tab_12_front.webp",
    "/images/nova_tab_12_rear.webp",
    "/images/nova_tab_12_side.webp",
    "/images/nova_tab_12_angle.webp",
    "/images/nova_tab_12_detail.webp",
    "/images/nova_tab_12_lifestyle.webp"
  ],
  "nova-gamepad": [
    "/images/nova_gamepad_front.webp",
    "/images/nova_gamepad_rear.webp",
    "/images/nova_gamepad_side.webp",
    "/images/nova_gamepad_detail.webp",
    "/images/nova_gamepad_lifestyle.webp"
  ],
  "nova-core-pc": [
    "/images/nova_core_hero.webp",
    "/images/nova_core_front.webp",
    "/images/nova_core_back.webp",
    "/images/nova_core_ports.webp",
    "/images/nova_core_lifestyle.webp"
  ],
  "nova-sound": [
    "/images/nova_sound_front.webp",
    "/images/nova_sound_side.webp",
    "/images/nova_sound_angle.webp",
    "/images/nova_sound_detail.webp",
    "/images/nova_sound_lifestyle.webp"
  ],
  "nova-max": [
    "/images/nova_max_front.webp",
    "/images/nova_max_side.webp",
    "/images/nova_max_angle.webp",
    "/images/nova_max_detail.webp",
    "/images/nova_max_lifestyle.webp"
  ],
  "nova-hub": [
    "/images/nova_hub_hero.webp",
    "/images/nova_hub_front.webp",
    "/images/nova_hub_side.webp",
    "/images/nova_hub_ports.webp",
    "/images/nova_hub_lifestyle.webp"
  ],
  "nova-beam-projector": [
    "/images/nova_beam_hero.webp",
    "/images/nova_beam_angle.webp",
    "/images/nova_beam_lifestyle.webp"
  ],
  "nova-dock-10in1": [
    "/images/nova_dock_hero.webp",
    "/images/nova_dock_angle.webp",
    "/images/nova_dock_detail.webp"
  ],
  "nova-power-100w": [
    "/images/nova_power_hero.webp",
    "/images/nova_power_angle.webp",
    "/images/nova_power_detail.webp"
  ],
  "nova-vision-vr": [
    "/images/nova_vision_hero.webp",
    "/images/nova_vision_front.webp",
    "/images/nova_vision_detail.webp",
    "/images/nova_vision_lifestyle.webp"
  ],
  "nova-rig-pc": [
    "/images/nova_rig_hero.webp",
    "/images/nova_rig_side.webp",
    "/images/nova_rig_detail.webp"
  ],
  "nova-air-purifier": [
    "/images/nova_air_purifier_hero.webp",
    "/images/nova_air_purifier_detail.webp",
    "/images/nova_air_purifier_lifestyle.webp"
  ],
  "nova-ring": [
    "/images/nova_ring_hero.webp",
    "/images/nova_ring_angle.webp",
    "/images/nova_ring_detail.webp",
    "/images/nova_ring_lifestyle.webp"
  ],
  "nova-cam-4k": [
    "/images/nova_cam_hero.webp",
    "/images/nova_cam_angle.webp",
    "/images/nova_cam_detail.webp"
  ],
  "nova-light-strip": [
    "/images/nova_light_strip_hero.webp",
    "/images/nova_light_strip_detail.webp",
    "/images/nova_light_strip_lifestyle.webp"
  ],
  "nova-fit": [
    "/images/nova_fit_hero.webp",
    "/images/nova_fit_angle.webp",
    "/images/nova_fit_lifestyle.webp"
  ],
  "nova-book-go": [
    "/images/nova_book_go_open.webp",
    "/images/nova_book_go_angle.webp",
    "/images/nova_book_go_detail.webp"
  ],
  "nova-ultra-5g": [
    "/images/nova_ultra_front.webp",
    "/images/nova_ultra_rear.webp",
    "/images/nova_ultra_detail.webp"
  ],
  "nova-studio-headphones": [
    "/images/nova_studio_hero.webp",
    "/images/nova_studio_angle.webp",
    "/images/nova_studio_detail.webp"
  ],
  "nova-lite": [
    "/images/nova_lite_front.webp",
    "/images/nova_lite_rear.webp",
    "/images/nova_lite_angle.webp"
  ],
  "nova-book-studio": [
    "/images/nova_book_studio_open.webp",
    "/images/nova_book_studio_angle.webp",
    "/images/nova_book_studio_detail.webp"
  ]
};

let content = fs.readFileSync(productsJsPath, 'utf8');

// Regex replace images block for each id
for (const [id, imgs] of Object.entries(imageMap)) {
  const formattedImgs = JSON.stringify(imgs, null, 6).replace(/\n/g, '\n    ');
  // Match id: "id", ... images: [...]
  const pattern = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?images:\\s*\\[)[^\\]]*(\\])`, 'g');
  if (pattern.test(content)) {
    content = content.replace(pattern, (match, p1, p2) => {
      return `${p1}\n      ${imgs.map(img => `"${img}"`).join(',\n      ')}\n    ${p2}`;
    });
    console.log(`Updated images for product ${id}`);
  } else {
    console.warn(`Could not find match for product ${id}`);
  }
}

fs.writeFileSync(productsJsPath, content, 'utf8');
console.log('Successfully updated src/data/products.js!');
