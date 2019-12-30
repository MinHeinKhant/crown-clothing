import { createSelector } from "reselect";

// Selector befor shop data normalization
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// collections -> Object , take keys from collections object, map those keys to value of those keys
export const selectShopCollectionsForPreview = createSelector(
  selectShopCollections,
  collections => Object.keys(collections).map(key => collections[key])
);

// selectShopCollection befor shop data normalization
// export const selectShopCollection = collectionUrlParam =>
//   createSelector(selectShopCollections, collections =>
//     collections.find(
//       collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );

export const selectShopCollection = collectionUrlParam =>
  createSelector(
    selectShopCollections,
    collections => collections[collectionUrlParam]
  );
