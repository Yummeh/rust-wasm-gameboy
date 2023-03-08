pub fn wow() {
    print!(" WWOOWW ");
}

const GAMEBOY_W: u8 = 160;
const GAMEBOY_H: u8 = 144;

struct CPU {
    wram: [u16; 16384], // GBC 32 KiB = 32768 bytes = 16384 u16 (2 * u8)
    vram: [u16; 8192], // GBC 16 KiB



}