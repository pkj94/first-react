
import { StyleSheet } from 'react-native';
import { dynamicSize, Width } from '../../../utility/responsive';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        width: dynamicSize(Width / 2)
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 2,
        borderTopColor: '#e9e9e9',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: dynamicSize(10),
        justifyContent: 'center'
    },
    bottomViewOuterText: {
        color: '#7a7a7a',
    },
    bottomViewInnerText: {
        fontWeight: '700'
    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: '#e9e9e9',
        borderWidth: 1,
        width: '80%',
        height: dynamicSize(40),
        marginBottom: dynamicSize(10),
        paddingStart: dynamicSize(10),
        paddingEnd: dynamicSize(10),
        alignItems: 'center'
    },
    input: {
        flex: 1,
        paddingStart: dynamicSize(10),
        paddingEnd: dynamicSize(10),
    },
    buttonView: {
        width: '80%',

    },
    buttonTouch: {
        width: '100%',
        backgroundColor: "#e69d48",
        textTransform: 'none',
        height: dynamicSize(40),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: dynamicSize(15)
    },
    forgotOuterText: {
        marginTop: dynamicSize(10),
        color: "#7a7a7a",
        lineHeight: dynamicSize(30),
        fontSize: dynamicSize(12)
    },
    forgotInnerText: {
        fontWeight: '700',

    },
    border: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 2,
        width: '80%',
        alignItems: 'center',
        marginTop: dynamicSize(20)
    },
    borderText: {
        position: 'absolute',
        color: '#7a7a7a',
        padding: dynamicSize(10),
        top: -17,
        backgroundColor: 'white',
        fontSize: dynamicSize(12),
        fontWeight: '700'
    },
    Social: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        maxHeight: dynamicSize(35),
        marginTop: dynamicSize(20)
    },
    facebookImage: {
        width: '100%',
        height: dynamicSize(35),
        marginEnd: dynamicSize(10)
    },
    googleImage: {
        width: '100%',
        height: dynamicSize(35)
    }
});