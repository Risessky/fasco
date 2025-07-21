import { getShop } from "../_lib/data-service";
import NoResults from "./NoResults";
import ShopItem from "./ShopItem";

async function ShopList({ size, price }) {
  const shopList = await getShop();
  // console.log(shopList)

  if (!shopList?.length) return null;

  let displayedShopList = shopList;

  if (size && size.toLowerCase() !== "all") {
    displayedShopList = displayedShopList.filter(
      (shop) =>
        shop.size && shop.size.toLowerCase() === size.toLowerCase()
    );
  }

  if (price && price.toLowerCase() !== "all") {
    const getDiscountedPrice = (shop) =>
      (shop.price * (100 - shop.discount)) / 100;

    if (price === "0-50") {
      displayedShopList = displayedShopList.filter(
        (shop) => getDiscountedPrice(shop) <= 50
      );
    } else if (price === "51-100") {
      displayedShopList = displayedShopList.filter(
        (shop) =>
          getDiscountedPrice(shop) > 50 && getDiscountedPrice(shop) <= 100
      );
    } else if (price === "101-150") {
      displayedShopList = displayedShopList.filter(
        (shop) =>
          getDiscountedPrice(shop) > 100 && getDiscountedPrice(shop) <= 150
      );
    } else if (price === "151+") {
      displayedShopList = displayedShopList.filter(
        (shop) => getDiscountedPrice(shop) > 150
      );
    }
  }

  if (!displayedShopList.length) {
    return (
      <NoResults/>
    );
  }

  return (
    <section className="flex flex-wrap gap-y-6 mb-36 justify-between max-sm:justify-center">
      {displayedShopList.map((shopItem) => (
        <ShopItem key={shopItem.id} shopItem={shopItem} />
      ))}
    </section>
  );
}

export default ShopList;
