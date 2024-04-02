"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ onPress, text }) => {
    return (<react_native_1.TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <react_native_1.Text style={styles.text}>{text}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.Button = Button;
const styles = react_native_1.StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'purple',
        borderRadius: 8,
    },
    text: { color: 'white' },
});
