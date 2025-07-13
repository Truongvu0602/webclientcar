import { configureStore } from "@reduxjs/toolkit";
import sliceHeroImg from "../features/slice/sliceHeroImg";
import sliceCarModel from "../features/slice/sliceCarModel";
import sliceCarModelFeaturn from "../features/slice/sliceCarModelFeaturn";
import sliceNews from "../features/slice/sliceNews";
import sliceCommunity from "../features/slice/sliceCommunity";

export const store = configureStore({
  reducer: {
    heroImg: sliceHeroImg,
    carModel: sliceCarModel,
    carModelFeaturn: sliceCarModelFeaturn,
    newsData: sliceNews,
    communityPosts: sliceCommunity,
  },
});
