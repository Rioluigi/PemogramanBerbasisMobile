/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text, TextInput, Image, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import wings from './assets/wings.jpg';
import icon from './assets/icon.png';
import star from './assets/star.png';
import waw from './assets/waw.png';


const products = [
    { id: '1', name: 'Paket Seuhah', description: 'with Mamasuka', image: require('./assets/lada.jpeg'), price: '$4.50', rating: 4.8 },
    { id: '2', name: 'Original', description: 'with Rio', image: require('./assets/Ori.jpeg'), price: '$3.80', rating: 4.9 },
    { id: '3', name: 'Wings Kechup', description: 'with Bango', image: require('./assets/Kechup.jpeg'), price: '$4.00', rating: 4.5 },
    { id: '4', name: 'Lada Hideung', description: 'with Ladahideungku', image: require('./assets/Ladahitam.jpeg'), price: '$3.00', rating: 4.8 },
];


const Wings = () =>{
    return(

        <View style = {{backgroundColor:'#800000'}}>
            <ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 63, marginLeft: 30, marginRight: 30}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.Lokasi}>
                            Location
                        </Text>
                        <Text style={{width:143, height:18, fontFamily:'sora', fontWeight:'600', fontSize:14, lineHeight:17.64, color:'#DDDDDD'}}>
                            Sukabumi, Indonesia, Cisaat
                        </Text>
                    </View>
                    <View>
                        <Image source={waw} style={styles.Avatar} />
                    </View>
                </View>

                <View style={{alignItems: 'center', marginTop: 20}}>
                    <TextInput placeholder="Search Wings"
                    style={styles.search} />
                </View>

                <View style={{ width: 435, height: 290, marginTop: 20, marginLeft: 40, borderRadius: 20 }}>
                    <Image source={wings} />
                </View>

                <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Original</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Paket Seuhah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Wings Kechup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Lada Hideung</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                <View style={styles.cardWrapper}>
                    {products.map(product => (
                        <View key={product.id} style={styles.cardContainer}>
                            <Image source={product.image} style={styles.cardImage}/>
                            <Image source={star} style={styles.iconStar} />
                            <Text style={styles.rating}>{product.rating}</Text>

                            <Text style={styles.cardTitle}>{product.name}</Text>
                            <Text style={styles.cardDescription}>{product.description}</Text>
                            <Text style={styles.cardPrice}>{product.price}
                            </Text>
                                <Image source={icon} style={styles.ikonplus} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Wings;


const styles = StyleSheet.create({
    Avatar: {
        width: 66,
        height: 66,
        borderRadius:10,
    },

    Lokasi: {
        width: 55,
        height:15,
        color:'#B7B7B7',
        fontWeight:'400',
        fontSize:12,
        lineHeight:15.12,
        letterSpacing:1,
        fontFamily:'sora',
    },

    search:{
        paddingLeft: 20,
        borderRadius: 16,
        width: 315,
        height: 52,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: 'white',
    },
    scrollView: {
        marginTop: -120,
        marginLeft:25,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },

    buttoncase: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    buttonText: {
        fontWeight: '600',
        fontFamily: 'sora',
        fontSize: 14,
        color: '#FFFFFF',
    },
    buttonTextcase: {
        fontWeight: '600',
        fontFamily: 'sora',
        fontSize: 14,
        color: '#2F4B4E',
    },

    cardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop:70,
    },
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 4,
        marginTop:-50,
        marginBottom:70,
        width: '45%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        marginTop:10,
        marginLeft:5,
    },

    cardImage: {
        width: '100%',
        height: 130,
        borderRadius:10,

    },

    cardDescription: {
        marginTop: 1,
        fontSize: 14,
        marginLeft:7,
        color: '#666',
    },

    cardPrice: {
        marginTop: 10,
        fontSize: 20,
        marginLeft:10,
        fontWeight: 'bold',
        color: '#333',
    },

    ikonplus:{
        marginHorizontal:120,
        marginTop: -30,
        width:35,
        height:35,
    },

    iconStar: {
        position:'absolute',
        width:20,
        height:20,
        marginLeft:9,
        marginTop:5,
    },

    rating:{
        position:'absolute',
        color:'#FFFFFF',
        fontWeight:'bold',
        marginTop:6,
        marginLeft:35,
    },
});
