import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// const { width } = Dimensions.get('window');
const STANDARD_WIDTH = 375; const CURRENT_WIDTH = width;
const K = CURRENT_WIDTH / STANDARD_WIDTH;
const USE_FOR_BIGGER_SIZE = true;
export function dynamicSize(size) { return K * size; }
export function getFontSize(size) {
    if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) { const newSize = dynamicSize(size); return newSize; }
    return size;
}
export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
export const themeColor = '#56B24D';
// export const themeColor = '#4577c6';
export const orange = '#F49930';
export const large = height >= 812 ? true : false
export function dateConverterOfMilli(dateMilliSecond) {
    var date = new Date(dateMilliSecond)
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    date = (day < 10 ? '0' + day : day) + '/' + (month + 1 < 9 ? '0' + (month + 1) : (month + 1)) + '/' + year
    return date
}


export function fontFamily(param) {
    if (param == "bold") {
        return "Raleway-Bold"
    }
    if (param == "extraBold") {
        return "Raleway-ExtraBold"
    }
    if (param == "semibold") {
        return "Raleway-SemiBold"
    }
    return "Raleway-Regular"
}
export function dateConverterMMDDYYYY(date) {
    var arr = []

    var present = date.toString();
    present = present.split(" ");
    present = present[1] + ' ' + present[2] + "," + present[3]



    return present
}
export const deviceWidthLarge = height >= 812 ? true : false