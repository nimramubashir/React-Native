import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
    logoContainer:{
        alignItems: "center",
    },
    logoText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    },
    logoDescription:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
    }
});

export default styles;

