'use strict';

goog.provide('Blockly.Blocks.ai');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['ai_playAudio'] = {
    init: function() {
		this.jsonInit({
			"message0": "播放 %1 ",
			"args0": [
				{
					"type": "input_value",
					"name": "TEXT"
				}
			],
			"category": Blockly.Categories.ai,
			"extensions": ["colours_ai", "shape_statement"]
		});
	}
};

Blockly.Blocks['ai_speechRecognition'] = {
	init: function() {
	  this.jsonInit(
		{
			"message0": "识别 %1 的语音",
			"args0": [
				{
					"type": "field_dropdown",
					"name": "DELAY",
					"options": [
						['2秒', '2000'],
						['3秒', '3000'],
						['5秒', '5000']
					]
				}
			],
			"colour": Blockly.Colours.ai.secondary,
			"colourSecondary": Blockly.Colours.ai.secondary,
			"colourTertiary": Blockly.Colours.ai.tertiary,
			"extensions": ["colours_ai", "shape_statement"]
		});
	}
};

Blockly.Blocks['ai_speechResult'] = {
	init: function() {
		this.jsonInit({
			"message0": "语音识别结果",
			"category": Blockly.Categories.ai,
			"checkboxInFlyout": true,
			"extensions": ["colours_ai", "output_number"]
		});
	}
};

Blockly.Blocks['ai_picRecognition'] = {
    init: function() {
		this.jsonInit({
			"message0": "5秒后识别 %1 图片",
			"args0": [
				{
					"type": "field_dropdown",
					"name": "TAG",
					"options": [
						['菜品', 'menurecognition'],
						['人脸', 'facerecognition'],
						['主体', 'mainrecognition'],
						['植物', 'plantrecognition'],
						['动物', 'animalrecognition'],
						['文字', 'wordrecognition'],
						['logo', 'logorecognition']
					]
				}
			],
			"category": Blockly.Categories.ai,
			"colourSecondary": Blockly.Colours.ai.secondary,
			"colourTertiary": Blockly.Colours.ai.tertiary,
			"extensions": ["colours_ai", "shape_statement"]
		});
    }
};

Blockly.Blocks['ai_picResult'] = {
	init: function() {
		this.jsonInit({
			"message0": "图片识别结果",
			"category": Blockly.Categories.ai,
			"checkboxInFlyout": true,
			"extensions": ["colours_ai", "output_number"]
		});
	}
};
