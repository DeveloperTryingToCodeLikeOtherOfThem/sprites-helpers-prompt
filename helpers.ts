//% blockNamespace=images
namespace helpers {
    //% blockId="prompt_for_text" block="prompt for text answer length %answerLength is numbers $numbers"
    export declare function _promptForText(answerLength: number, numbers: boolean): void;
      //% blockId="get_text_prompt_string" block="get text prompt string"
    export declare function _getTextPromptString(): string;
       //% blockId="get_text_prompt_selection_start" block="get text prompt selection start"
    export declare function _getTextPromptSelectionStart(): number;
      //% blockId="get_text_prompt_selection_end" block="get text prompt selection end"
    export declare function _getTextPromptSelectionEnd(): number;
     //% blockId="get_text_prompt_selection_end" block="is system keyboard supported"
    export declare function _isSystemKeyboardSupported(): boolean
}
