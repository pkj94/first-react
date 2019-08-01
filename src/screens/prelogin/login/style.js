
import { StyleSheet } from 'react-native';
import { dynamicSize, Width } from '../../../utility/responsive';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        width: dynamicSize(Width / 1.5)
    },
    bottomView: { position: 'absolute', bottom: 0, borderTopWidth: dynamicSize(1), flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }
});