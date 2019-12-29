import React from "react";
// import { createStructuredSelector } from "reselect";

import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component.jsx";
import { selectShopCollection } from "../../redux/shop/shop.selector.js";
import { connect } from "react-redux";

const CollectionPage = ({ match, collection }) => {
  // console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>

    // Retrieving data from redux and doing the data here
    // <div className="collection-page">
    //   {collections
    //     .filter(
    //       collection =>
    //         collection.title.toLowerCase() === match.params.collectionId
    //     )
    //     .map(collection =>
    //       collection.items.map(item => <CollectionItem item={item} />)
    //     )}
    // </div>
  );
};

// Did the filtering from the selector
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectShopCollection(ownProps.match.params.collectionId)(state)
  };
};

// const myMapStateToProps = state => {
//   return {
//     collections: state.shop.collections
//   };
// };

export default connect(mapStateToProps)(CollectionPage);
