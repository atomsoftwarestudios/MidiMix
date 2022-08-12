import { MidiCommand } from "../../../lib/midi/MidiMessages";
import { MidiControllerProfile } from "../MidiControllerProfile";

const BehringerXTouchCompact: MidiControllerProfile = {

   name: "Behringer X-Touch Compact",
   hasFeedback: true,
   controls: [

      {
         type: "fader",
         id: "fader 1",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 1, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 1: "fader 1" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 1, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 2",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 2, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 2: "fader 2" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 2, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 3",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 3, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 3: "fader 3" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 3, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 4",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 4, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 4: "fader 4" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 4, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 5",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 5, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 5: "fader 5" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 5, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 6",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 6, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 6: "fader 6" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 6, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 7",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 7, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 7: "fader 7" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 7, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 8",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 8, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 8: "fader 8" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 8, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "fader",
         id: "fader 9",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 9, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 9: "fader 9" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 9, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 1",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 10, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 10: "knob 1" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 10, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 10, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 2",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 11, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 11: "knob 2" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 11, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 11, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 3",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 12, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 12: "knob 3" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 12, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 12, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 4",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 13, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 13: "knob 4" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 13, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 13, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 5",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 14, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 14: "knob 5" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 14, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 14, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 6",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 15, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 15: "knob 6" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 15, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 15, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 7",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 16, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 16: "knob 7" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 16, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 16, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 8",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 17, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 17: "knob 8" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 17, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 17, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 9",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 18, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 18: "knob 9" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 18, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 18, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 10",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 19, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 19: "knob 10" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 19, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 19, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 11",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 20, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 20: "knob 11" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 20, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 20, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 12",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 21, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 21: "knob 12" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 21, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 21, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 13",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 22, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 22: "knob 13" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 22, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 22, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 14",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 23, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 23: "knob 14" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 23, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 23, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 15",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 24, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 24: "knob 15" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 24, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 24, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "knob",
         id: "knob 16",
         mappings: {

            0: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 25, value: 0 } },
               messageMappings: [{ source: "controller", target: "id", transform: { 25: "knob 16" } }, { source: "value", target: "currentValue" }]
            },

            1: {
               message: { channel: 1, command: MidiCommand.Controller, args: { controller: 25, value: 0 } },
               messageMappings: [{ source: "currentMode", target: "value", transform: { "single": 1, "gain": 2, "pan": 3 } }]
            },

            2: {
               message: { channel: 0, command: MidiCommand.Controller, args: { controller: 25, value: 0 } },
               messageMappings: [{ source: "currentValue", target: "value" }]
            }

         }
      },

      {
         type: "button",
         id: "button 1",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 0: "button 1" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 0: "button 1" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 2",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 1: "button 2" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 1: "button 2" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 3",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 2: "button 3" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 2: "button 3" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 4",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 3: "button 4" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 3: "button 4" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 5",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 4: "button 5" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 4: "button 5" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 6",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 5: "button 6" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 5: "button 6" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 7",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 6: "button 7" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 6: "button 7" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 8",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 7: "button 8" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 7: "button 8" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 9",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 8: "button 9" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 8: "button 9" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 10",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 9: "button 10" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 9: "button 10" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]
         }

      },

      {
         type: "button",
         id: "button 11",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 10: "button 11" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 10, velocity: 0 } },

                  messageMappings: [{ source: "key", target: "id", transform: { 10: "button 11" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 12",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 11: "button 12" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 11: "button 12" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 13",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 12: "button 13" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 12: "button 13" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 14",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 13: "button 14" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 13: "button 14" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 15",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 14: "button 15" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 14: "button 15" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },

      {
         type: "button",
         id: "button 16",
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 15: "button 16" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 15: "button 16" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ]

         }

      },


      {
         type: "button",
         id: "button 17",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 16: "button 17" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 16: "button 17" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 18",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 17: "button 18" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 17: "button 18" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 1, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 1, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 19",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 18: "button 19" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 18: "button 19" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 2, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 2, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 20",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 19: "button 20" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 19: "button 20" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 3, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 3, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 21",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 20: "button 21" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 20: "button 21" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 4, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 4, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 22",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 21: "button 22" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 21: "button 22" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 5, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 5, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 23",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 22: "button 23" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 22: "button 23" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 6, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 6, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 24",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 23: "button 24" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 23: "button 24" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 7, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 7, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 25",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 24: "button 25" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 24: "button 25" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 8, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 8, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 26",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 25: "button 26" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 25: "button 26" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 9, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 9, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 27",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 26: "button 27" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 26: "button 27" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 10, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 10, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 28",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 27: "button 28" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 27: "button 28" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 11, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 11, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 29",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 28: "button 29" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 28: "button 29" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 12, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 12, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 30",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 29: "button 30" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 29: "button 30" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 13, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 13, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 31",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 30: "button 31" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 30: "button 31" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 14, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 14, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 32",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 31: "button 32" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 31: "button 32" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 15, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 15, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 33",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 32: "button 33" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 32: "button 33" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 16, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 16, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 34",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 33: "button 34" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 33: "button 34" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 17, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 17, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 35",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 34: "button 35" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 34: "button 35" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 18, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 18, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 36",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 35: "button 36" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 35: "button 36" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 19, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 19, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 37",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 36: "button 37" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 36: "button 37" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 20, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 20, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 38",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 37: "button 38" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 37: "button 38" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 21, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 21, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 39",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 38: "button 39" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 38: "button 39" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 22, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 22, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 40",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 39: "button 40" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 39: "button 40" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 23, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 23, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 41",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 40: "button 41" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 40: "button 41" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 24, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 24, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 42",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 41: "button 42" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 41: "button 42" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 25, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 25, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 43",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 42: "button 43" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 42: "button 43" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],
            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 26, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 26, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 44",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 43: "button 44" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 43: "button 44" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 27, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 27, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 45",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 44: "button 45" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 44: "button 45" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 28, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 28, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 46",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 45: "button 46" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 45: "button 46" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 29, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 29, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 47",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 46: "button 47" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 46: "button 47" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 30, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 30, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 48",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 47: "button 48" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 47: "button 48" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 31, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 31, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 49",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 48: "button 49" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 48: "button 49" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 32, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 32, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 50",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 49: "button 50" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 49: "button 50" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 33, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 33, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 51",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 50: "button 51" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 50: "button 51" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 34, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 34, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 52",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 51: "button 52" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 51: "button 52" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 35, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 35, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 53",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 52: "button 53" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 52: "button 53" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 36, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 36, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 54",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 53: "button 54" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 53: "button 54" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 37, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 37, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      },

      {
         type: "button",
         id: "button 55",
         options: {
            backlightOnValue: 2,
            backlightOffValue: 0
         },
         mappings: {

            0: [
               {
                  message: { channel: 0, command: MidiCommand.NoteOn, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 54: "button 55" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": true } }]
               },
               {
                  message: { channel: 0, command: MidiCommand.NoteOff, args: { key: 0, velocity: 0 } },
                  messageMappings: [{ source: "key", target: "id", transform: { 54: "button 55" } }, { source: "velocity", target: "currentPushState", transform: { "_any_": false } }]
               }
            ],

            1: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 38, velocity: 0 } },
               messageMappings: [{ source: "currentBacklightMode", target: "velocity", transform: { "blink": 3 } }]
            },

            2: {
               message: { channel: 1, command: MidiCommand.NoteOn, args: { key: 38, velocity: 0 } },
               messageMappings: [{ source: "backlightValue", target: "velocity" }]
            }

         }

      }

   ]

};

export default BehringerXTouchCompact;