/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.sound');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['sound_sounds_menu'] = {
  /**
   * Sound effects drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "SOUND_MENU",
            "options": [
              ['1', '0'],
              ['2', '1'],
              ['3', '2'],
              ['4', '3'],
              ['5', '4'],
              ['6', '5'],
              ['7', '6'],
              ['8', '7'],
              ['9', '8'],
              ['10', '9']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_play'] = {
  /**
   * Block to play sound.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "播放声音 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_playuntildone'] = {
  /**
   * Block to play sound until done.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "播放声音 %1 直到播放完毕",
      "args0": [
        {
          "type": "input_value",
          "name": "SOUND_MENU"
        }
      ],
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_stopallsounds'] = {
  /**
   * Block to stop all sounds
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "停止所有声音",
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_drums_menu'] = {
  /**
   * Drums drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DRUM",
            "options": [
              ['(1) 小军鼓', '1'],
              ['(2) 低音鼓', '2'],
              ['(3) 鼓边敲击', '3'],
              ['(4) 击钹', '4'],
              ['(5) 开放双面钹', '5'],
              ['(6) 闭合双面钹', '6'],
              ['(7) 铃鼓', '7'],
              ['(8) 拍掌', '8'],
              ['(9) 古钢琴', '9'],
              ['(10) 木块', '10'],
              ['(11) 牛铃', '11'],
              ['(12) 三角形', '12'],
              ['(13) 小手鼓', '13'],
              ['(14) 康佳鼓', '14'],
              ['(15) 抓筒', '15'],
              ['(16) 锯琴', '16'],
              ['(17) 颤击', '17'],
              ['(18) 库加鼓 开音', '18']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_playdrumforbeats'] = {
  /**
   * Block to play a drum for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "弹奏鼓声 %1 %2 拍",
      "args0": [
        {
          "type": "input_value",
          "name": "DRUM"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_restforbeats'] = {
  /**
   * Block to rest for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "停止 %1 拍",
      "args0": [
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_playnoteforbeats'] = {
  /**
   * Block to play a certain note for some number of beats
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "弹奏音符 %1 %2 拍",
      "args0": [
        {
          "type": "input_value",
          "name": "NOTE"
        },
        {
          "type": "input_value",
          "name": "BEATS"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_effects_menu_options'] = [
  ['音高', 'PITCH'],
  ['声道环绕', 'PAN'],
  ['回音', 'ECHO'],
  ['混响', 'REVERB'],
  ['法兹', 'FUZZ'],
  ['机器人', 'ROBOT']
];

Blockly.Blocks['sound_seteffectto'] = {
  /**
   * Block to set the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "设定音效 %1 到 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": Blockly.Blocks['sound_effects_menu_options']
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};


Blockly.Blocks['sound_changeeffectby'] = {
  /**
   * Block to change the audio effect
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "改变音效 %1 为 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": Blockly.Blocks['sound_effects_menu_options']
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_cleareffects'] = {
  /**
   * Block to clear audio effects
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "清除音效",
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_instruments_menu'] = {
  /**
   * Instruments drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "INSTRUMENT",
            "options": [
              ['(1) 钢琴', '1'],
              ['(2) 电子琴', '2'],
              ['(3) 风琴', '3'],
              ['(4) 吉他', '4'],
              ['(5) 电吉他', '5'],
              ['(6) 低音', '6'],
              ['(7) 拨奏乐器', '7'],
              ['(8) 大提琴', '8'],
              ['(9) 长号', '9'],
              ['(10) 单簧管', '10'],
              ['(11) 萨克斯管', '11'],
              ['(12) 长笛', '12'],
              ['(13) 木笛', '13'],
              ['(14) 低音管', '14'],
              ['(15) 人声合唱', '15'],
              ['(16) 抖音琴', '16'],
              ['(17) 音乐盒', '17'],
              ['(18) 钢鼓', '18'],
              ['(19) 立奏木琴', '19'],
              ['(20) 合成领奏', '20'],
              ['(21) 合成长音', '21']
            ]
          }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": Blockly.Colours.sounds.secondary,
        "colourSecondary": Blockly.Colours.sounds.secondary,
        "colourTertiary": Blockly.Colours.sounds.tertiary,
        "outputShape": Blockly.OUTPUT_SHAPE_ROUND
      });
  }
};

Blockly.Blocks['sound_setinstrumentto'] = {
  /**
   * Block to set the sprite's instrument
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "设定乐器为 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INSTRUMENT"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_changevolumeby'] = {
  /**
   * Block to change the sprite's volume by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将音量增加 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_setvolumeto'] = {
  /**
   * Block to set the sprite's volume to a certain percent
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将音量设定为 %1%",
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_volume'] = {
  /**
   * Block to report volume
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "音量",
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds"],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};

Blockly.Blocks['sound_changetempoby'] = {
  /**
   * Block to change the sprite's tempo by a certain value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将节奏加快 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_settempotobpm'] = {
  /**
   * Block to set the sprite's volume to a certain bpm
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将节奏设定为 %1 bpm",
      "args0": [
        {
          "type": "input_value",
          "name": "TEMPO"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['sound_tempo'] = {
  /**
   * Block to report tempo
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "节奏",
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds"],
      "output": "Number",
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true
    });
  }
};