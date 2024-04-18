// Pagination.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Footer from '../footer';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <View>
    <View style={styles.paginationContainer}>
      {[...Array(totalPages).keys()].map((number) => {
        const pageNumber = number + 1;
        return (
          <TouchableOpacity
            key={pageNumber}
            onPress={() => onPageChange(pageNumber)}
            style={[
              styles.pageItem,
              currentPage === pageNumber && styles.pageItemActive
            ]}
          >
            <Text style={styles.pageItemText}>{pageNumber}</Text>
          </TouchableOpacity>
        );
      })}
      
    </View>
    <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    zIndex: 100
  },
  pageItem: {
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#E4E4E4',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  pageItemActive: {
    backgroundColor: '#007AFF',
  },
  pageItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Pagination;
