export interface ChannelModel {
   channelNumber: number;
   channelName: string;
   hasGain?: boolean;
   hasPan?: boolean;
   hasSolo?: boolean;
   hasMute?: boolean;
   soloDown?: boolean;
   soloActive?: boolean;
   muteDown?: boolean;
   muteActive?: boolean;
   gainMin?: number;
   gainMax?: number;
   gainValue?: number;
   panValue?: number;
   faderValue: number;
   faderStereo?: boolean;
   faderLevelLeft: number;
   faderLevelRight?: number;
}
