import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, } from 'react-native';
import { supabase } from '../../supabaseClient';
import LinearGradient from 'react-native-linear-gradient';
import { useColorScheme } from 'nativewind'
import { styled } from 'nativewind';
import Pagination from '../pagination';


const StyledView = styled(View)
const StyledText = styled(Text)

const PAGE_SIZE = 10;
type Product = {
    id: number;
    product_name: string;
    product_image: string;
    product_description: string;
    poids: string;
    ingredient: string;
    product_price: number;
    is_sale: boolean;
    sale_percent: number;

}

function ProductShow() {
    const [products, setProducts] = useState<Product[] | null>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            let { data: products, error, count } = await supabase
                .from('Product') // Utilise le nom de votre table ici
                .select('*', { count: 'exact' })
                .range((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE - 1);
                console.log(products);
                

            if (error) {
                console.error('error', error);
            } else {
                setProducts(products);
                // Utilisez count pour calculer le nombre total de pages
                const totalPages = Math.ceil(count! / PAGE_SIZE);
                setTotalPages(totalPages);
            }
        };

        fetchProducts();
    }, [currentPage]);



    return (
        <ScrollView>
            <StyledView className='text-9xl'>
                {products && products.map((product, index) => (
                    <LinearGradient
                        key={index}
                        colors={['#FF5863', '#FD8F50', '#FFC53E']} // Définissez ici vos couleurs de dégradé
                        start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} // Direction du dégradé
                        style={styles.gradientContainer}

                    >
                        <View style={styles.container}>
                            <Image
                                source={{
                                    uri: product.product_image
                                }}
                                style={styles.image}
                            />
                            <Text style={styles.text}>{product.product_name}</Text>
                        </View>
                    </LinearGradient>

                ))}
            </StyledView>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        // Ajoutez des styles ici si nécessaire pour le conteneur de la liste
    },
    gradientContainer: {
        borderRadius: 20,
        margin: 10, // Ajoutez un peu d'espace entre chaque élément de produit
        overflow: 'hidden', // Assurez-vous que le dégradé est contenu dans les coins arrondis
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, // Espace autour du contenu à l'intérieur du dégradé
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    text: {
        marginTop: 10, // Espace entre l'image et le texte
        fontFamily: 'Luciole-Regular',
        fontSize: 20,
        color: '#000',
    },
});

export default ProductShow;