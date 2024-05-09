import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const offersData = [
  {
    id: 1,
    title: 'Veste habillé',
    price: '80€',
    originalPrice: '75€',
    time: '3 min',
    buyer: '@danique_14',
    rating: 4.2,
    numReviews: 13,
    status: 'En cours',
  },
  {
    id: 2,
    title: 'Baskets montantes',
    price: '80€',
    originalPrice: '75€',
    time: '23 min',
    buyer: '@colasmrd',
    rating: 4.1,
    numReviews: 21,
    status: 'En cours',
  },
  {
    id: 3,
    title: 'Chemise rayée',
    price: '50€',
    originalPrice: '55€',
    time: '1h',
    buyer: '@emilie_g',
    rating: 4.5,
    numReviews: 8,
    status: 'Délivré',
  },
];

const Offers = () => {
  const [selectedPart, setSelectedPart] = useState('tous');

  const filteredOffers = offersData.filter(offer => {
    if (selectedPart === 'tous') {
      return true;
    } else if (selectedPart === 'en_cours') {
      return offer.status === 'En cours';
    } else if (selectedPart === 'delivres') {
      return offer.status === 'Délivré';
    }
  });

  const renderOfferItem = ({ item }) => (
    <View style={styles.offerContainer}>
      <View style={styles.offerTitleContainer}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerTime}>{item.time}</Text>
      </View>
      <View style={styles.offerDetailsContainer}>
        <View style={styles.offerPriceContainer}>
          <Text style={styles.offerPrice}>{item.price}</Text>
          <Text style={styles.offerOriginalPrice}>{item.originalPrice}</Text>
        </View>
        <View style={styles.offerBuyerContainer}>
          <Icon name="user" type="font-awesome" color="gray" />
          <Text style={styles.offerBuyer}>{item.buyer}</Text>
        </View>
        <View style={styles.offerRatingContainer}>
          <Icon name="star" type="font-awesome" color="orange" />
          <Text style={styles.offerRating}>{item.rating}</Text>
          <Text style={styles.offerNumReviews}>({item.numReviews})</Text>
        </View>
      </View>
      <View style={styles.offerStatusContainer}>
        <Text style={styles.offerStatus}>{item.status}</Text>
      </View>
    </View>
  );

  const renderNoItemsMessage = () => (
    <View style={styles.noItemsContainer}>
      <Text style={styles.noItemsText}>Aucun article trouvé pour ce filtre</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setSelectedPart('tous')} style={[styles.filterButton, selectedPart === 'tous' && styles.selectedFilterButton]}>
          <Text style={styles.filterButtonText}>Tous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPart('en_cours')} style={[styles.filterButton, selectedPart === 'en_cours' && styles.selectedFilterButton]}>
          <Text style={styles.filterButtonText}>En cours</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedPart('delivres')} style={[styles.filterButton, selectedPart === 'delivres' && styles.selectedFilterButton]}>
          <Text style={styles.filterButtonText}>Délivrés</Text>
        </TouchableOpacity>
      </View>
      {filteredOffers.length === 0 && selectedPart === 'en_cours' && renderNoItemsMessage()}
      {filteredOffers.length === 0 && selectedPart === 'tous' && renderNoItemsMessage()}
      <FlatList
        data={filteredOffers}
        renderItem={renderOfferItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedFilterButton: {
    backgroundColor: 'gray',
  },
  filterButtonText: {
    fontSize: 14,
    color: 'black',
  },
  offerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  offerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerTime: {
    fontSize: 14,
    color: 'gray',
  },
  offerDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  offerPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  offerOriginalPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 4,
  },
  offerBuyerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerBuyer: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
  offerRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerRating: {
    fontSize: 14,
    color: 'orange',
    marginLeft: 4,
  },
  offerNumReviews: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
  offerStatusContainer: {
    backgroundColor: 'orange',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  offerStatus: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  noItemsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noItemsText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Offers;
  