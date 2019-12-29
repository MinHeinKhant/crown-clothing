import React from "react";
import { Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import SHOP_DATA from "./shop.data.js";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.jsx";
import CollectionPage from "../collection/collection.component.jsx";
// import { selectShopCollections } from "../../redux/shop/shop.selector.js";

const ShopPage = ({ match }) => {
  // console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopCollections
// });

export default ShopPage;
