import {Image} from "react-native";

export default function Logo() {
    return <Image source={require('../assets/')} style={styles.image}/>;
}
const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        marginBottom: 8,
    },
});