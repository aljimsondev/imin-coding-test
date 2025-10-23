import Badge from '@/components/badge';
import IconButton from '@/components/button/icon.button';
import Typography from '@/components/typography';
import { computeSalesPercentage } from '@/lib/utils/compute-sales-percentage';
import { constructProductColorsAvailable } from '@/lib/utils/construct-product-colors';
import { countProducStocks } from '@/lib/utils/countProductStocks';
import { currencyFormatter } from '@/lib/utils/currency-formatter';
import cn from 'classnames';
import Image from 'next/image';
import './product.card.css';

import { Product } from '@/types/product.type';
import { GoHeart } from 'react-icons/go';
import { RiStackLine } from 'react-icons/ri';

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  const stocks = countProducStocks(product.skus);

  const hasSales = Boolean(product.product_compare_at_price);
  const isNew = product.product_label.new;
  const isLimited = product.product_label.limited_edition;
  const isOutOfStocks = stocks <= 0;

  // calculate discount if theres a sales
  const discount = hasSales
    ? computeSalesPercentage(
        product.product_compare_at_price!,
        product.product_retail_price,
      )
    : 0;

  const hasDiscount = discount > 0;

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <Image src={`/assets/${product.product_img}`} fill alt="img" />
      </div>
      <div className="product-content">
        <Typography variant="h5">{product.product_name}</Typography>
        <Typography variant="small" className="text-muted">
          {constructProductColorsAvailable(product.skus)}
        </Typography>
        <div className="price-wrapper ">
          <div className="prices">
            <Typography
              className={cn(
                'font-bold',
                hasSales ? 'text-accent-red' : 'text-primary',
              )}
            >
              {currencyFormatter(product.product_retail_price)}
            </Typography>
            {product.product_compare_at_price && (
              <Typography className="text-muted compared-price">
                {currencyFormatter(product.product_compare_at_price)}
              </Typography>
            )}
          </div>
          <div className="icons">
            <IconButton
              icon={GoHeart}
              iconProps={{ size: 24 }}
              variant="accent-red"
            />
            <IconButton
              icon={RiStackLine}
              iconProps={{ size: 24 }}
              variant="accent-red"
            />
          </div>
        </div>
        <div className="card-footer">
          {isNew && <Badge title="New" theme="accent-rose" />}
          {hasDiscount && (
            <Badge title={`Sale ${discount}%`} theme="accent-red" />
          )}
          {isLimited && <Badge title="Limited Edition" theme="accent-blue" />}
          {isOutOfStocks && <Badge title="Out of stock" theme="secondary" />}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
