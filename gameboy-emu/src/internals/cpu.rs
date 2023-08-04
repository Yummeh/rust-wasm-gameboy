pub fn wow() {
    print!(" WWOOWW ");
}

const GAMEBOY_W: u8 = 160;
const GAMEBOY_H: u8 = 144;

trait GBDisplayable {
    fn display(&mut self);
}

trait GBInput {
    fn get_input();
}

trait GBAudio {
    fn play_audio();
}

struct CPU {
    wram: [u16; 16384], // GBC 32 KiB = 32768 bytes = 16384 u16 (2 * u8)
    vram: [u16; 8192],  // GBC 16 KiB
}

impl CPU {
    pub fn cycle<T, S, U>(&self, renderer: &mut T, input: &mut S, audio: &mut U)
    where
        T: GBDisplayable,
        S: GBInput,
        U: GBAudio,
    {
        // read opcode from memory
        // increase pc
        // call function


        // renderer.display(self.vram);
    }
}
