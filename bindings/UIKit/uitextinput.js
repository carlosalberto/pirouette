// This file is part of Pirouette.  for licensing information, see the LICENSE file

import { optionalMethod, requiredMethod, requiredProperty } from '../objc';
import { Protocol } from '../foundation';

//console.log("UITextInput");
export let UITextInput = Protocol.extendClass("UITextInput", () => ({

    // Replacing and Returning Text
    textInRange:  requiredMethod("textInRange:"),
    replaceRange: requiredMethod("replaceRange:withText:"),

    // Working with Marked and Selected Text
    selectedTextRange:          requiredProperty("selectedTextRange"),
    markedTextRange:            requiredProperty("markedTextRange"),
    markedTextStyle:            requiredProperty("markedTextStyle"),
    setMarkedTextSelectedRange: requiredMethod("setMarkedText:selectedRange:"),
    unmarkText:                 requiredMethod("unmarkText"),
    selectionAffinity:          optionalMethod("selectionAffinity"),

    // Computing Text Ranges and Text Positions
    textRangeFromPosition:           requiredMethod("textRangeFromPosition:toPosition:"),
    positionFromPosition:            requiredMethod("positionFromPosition:offset:"),
    positionFromPositionInDirection: requiredMethod("positionFromPosition:inDirection:offset:"),
    beginningOfDocument:             requiredProperty("beginningOfDocument"),
    endOfDocument:                   requiredProperty("endOfDocument"),

    // Evaluating Text Positions
    comparePosition:    requiredMethod("comparePosition:toPosition:"),
    offsetFromPosition: requiredMethod("offsetFromPosition:toPosition:"),

    // Determining Layout and Writing Direction
    positionWithinRange:               optionalMethod("positionWithinRange:farthestInDirection:"),
    characterRangeByExtendingPosition: requiredMethod("characterRangeByExtendingPosition:inDirection:"),
    baseWritingDirectionForPosition:   requiredMethod("baseWritingDirectionForPosition:inDirection:"),
    setBaseWritingDirection:           requiredMethod("setBaseWritingDirection:forRange:"),

    // Geometry and Hit-Testing Methods
    firstRectForRange:                 requiredMethod("firstRectForRange:"),
    caretRectForPosition:              requiredMethod("caretRectForPosition:"),
    closestPositionToPoint:            requiredMethod("closestPositionToPoint:"),
    closestPositionToPointWithinRange: requiredMethod("closestPositionToPoint:withinRange:"),
    characterRangeAtPoint:             requiredMethod("characterRangeAtPoint:"),

    // Text Input Delegate and Text Input Tokenizer
    inputDelegate: requiredProperty("inputDelegate"),
    tokenizer:     requiredProperty("tokenizer"),

    // Returning Text Styling Information
    textStylingAtPosition: optionalMethod("textStylingAtPosition:inDirection:"),

    // Reconciling Text Position and Character Offset
    positionWithinRangeAtCharacterOffset: optionalMethod("positionWithinRange:atCharacterOffset:"),
    characterOffsetOfPosition: optionalMethod("characterOffsetOfPosition:withinRange:"),

    // Returning the Text Input View
    textInputView: optionalMethod("textInputView")

    // XXX ES6-port
    //@mixinProtocol UIKeyInput
}));
