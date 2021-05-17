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
    },

    articleContainer:{
        borderWidth: 0,
        width: '100%',
        padding: 5
    },
    articleImage: {
        height: 200  
    },
    articleTitle:{
        textAlign: "center",
        padding: 20,
        fontSize: 17,
        color: 'black',
        backgroundColor: 'white',
        
    },
    articleDescription:{
        fontSize: 17,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },
    articleBtns:{
        flexDirection: 'row',
        backgroundColor: 'white',
    },
});

export default styles;

